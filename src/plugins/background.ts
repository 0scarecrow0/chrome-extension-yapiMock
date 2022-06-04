import {
  IChangeRules, IMockRules, INetworkType, IPage
} from '../../types/NetworkTypes';

// chrome.declarativeNetRequest.getEnabledRulesets((rules) => {
//   console.log(rules, '静态规则集合');
// });

// chrome.declarativeNetRequest.getSessionRules((rules) => {
//   console.log(rules, '当前会话范围规则集');
// });

// chrome.storage.sync.get(['mock_rules'], (result) => {
//   MockRules = result as IMockRules;
// });

// chrome.declarativeNetRequest.getDynamicRules((rules) => {
//   console.log(rules, '动态规则集合');
// });

/**
 * @description: 更新规则
 * @param {*} rulesList 规则list
 * @param {*} dynamicRules 生效的规则
 * @return {*} addRules 添加的规则
 * @return {*} removeRuleIds 删除的规则
 */
function rulesChange(rulesList:IMockRules, dynamicRules:chrome.declarativeNetRequest.Rule[]) {
  const addRules:chrome.declarativeNetRequest.UpdateRuleOptions['addRules'] = [];
  const removeRuleIds:chrome.declarativeNetRequest.UpdateRuleOptions['removeRuleIds'] = [];
  /** 将不存在 rulesList 中的已生效规则删除 */
  removeRuleIds.push(...dynamicRules.filter((k) => !Object.values(rulesList).find((el) => el.id === k.id)).map((v) => v.id));
  Object.keys(rulesList).forEach((key) => {
    /** 当前规则是否生效 */
    const isDynamic = dynamicRules.find((el) => el.id === rulesList[key].id);
    // 如果存储的规则中 mock 功能开启，且已生效规则中不存在，则添加至 addRules
    if (rulesList[key].mockStatus && !isDynamic) {
      addRules.push({
        /** 规则唯一Id，必须为数字 */
        id: rulesList[key].id,
        /** 规则优先。默认为 1 */
        priority: 1,
        /** 触发此规则的条件 */
        condition: {
          urlFilter: key,
          resourceTypes: ['xmlhttprequest' as chrome.declarativeNetRequest.ResourceType]
        },
        /** 满足触发条件执行的操作 */
        action: {
          type: 'redirect' as chrome.declarativeNetRequest.RuleActionType,
          redirect: {
            transform: {
              scheme: 'http',
              host: '10.10.0.121',
              port: '3000',
              path: `mock/${rulesList[key].yapiProjectId}${key}`
            }
          }
        }
      });
    }
    // 如果存储的规则中 mock 功能关闭，且生效规则中存在，表示删除规则
    if (!rulesList[key].mockStatus && isDynamic) {
      removeRuleIds.push(isDynamic.id);
    }
  });
  return { addRules, removeRuleIds };
}
let MockRules:IMockRules = {};
async function rulesUpdate() {
  /** 获取已经存储的规则 */
  const store = await chrome.storage.sync.get(['mock_rules']);
  MockRules = store?.mock_rules as unknown as IMockRules || {};
  console.log(MockRules, 'MockRules');
  /** 获取动态规则集合 */
  const rules = await chrome.declarativeNetRequest.getDynamicRules();
  console.log(rules, '动态规则集合');
  chrome.declarativeNetRequest.updateDynamicRules(rulesChange(MockRules, rules));
  const rules2 = await chrome.declarativeNetRequest.getDynamicRules();
  console.log(rules2, '动态规则集合2');
}

rulesUpdate();

/** chrome 长连接 接收 */
export class ChromeReceiveConnect {
  /** 此页面 code */
  private local: IPage;

  receiveName: string;

  receivePort: chrome.runtime.Port | null = null;

  constructor(receiveName: string, local: IPage) {
    this.receiveName = receiveName;
    this.local = local;
  }

  /** 建立连接 */
  createReceive(cb:(response:any, port: chrome.runtime.Port)=>void) {
    chrome.runtime.onConnect.addListener((port) => {
      if (port.name !== this.receiveName) return;
      this.receivePort = port;
      port.onMessage.addListener((response) => {
        if (response.to !== this.local) return;
        cb(response, port);
      });
    });
  }

  /** 发送现有规则 */
  rulesPostMsg(port: chrome.runtime.Port, to:IPage) {
    port.postMessage({
      action: 'RULES',
      to,
      from: this.local,
      data: MockRules
    });
  }

  /** 代理开关改变触发 */
  static async changeRules(val:IChangeRules) {
    /** 如果已经 存在该规则 */
    if (val.pathname in MockRules) {
      MockRules[val.pathname] = {
        ...MockRules[val.pathname],
        mockStatus: val.mockStatus,
        yapiProjectId: val.yapi
      };
    }else{
      MockRules[val.pathname] = {
        id: Object.keys(MockRules).length + 50,
        mockStatus: val.mockStatus,
        yapiProjectId: val.yapi
      };
    }
    /** 规则改变时，更新存储中的数据 */
    await chrome.storage.sync.set({ mock_rules: MockRules });
    /** 更新规则 */
    rulesUpdate();
  }

  /** 删除代理规则 */
  static async deleteRules(key:string) {
    if (MockRules[key]) {
      delete MockRules[key];
      /** 规则改变时，更新存储中的数据 */
      await chrome.storage.sync.set({ mock_rules: MockRules });
      /** 更新规则 */
      rulesUpdate();
    }
  }
}

/** 接收DEVTOOLS发送的消息 */
const devtoolsConnect = new ChromeReceiveConnect('DEVTOOLS_CONNECT_BACKGROUND', 'background_page');
/** 接收POPUP发送的消息 */
const popupConnect = new ChromeReceiveConnect('POPUP_CONNECT_BACKGROUND', 'background_page');

devtoolsConnect.createReceive((response, port) => {
  switch (response.action) {
    case 'GET_RULES':
      devtoolsConnect.rulesPostMsg(port, 'devtools_page');
      break;
    case 'CHANGE_RULES':
      ChromeReceiveConnect.changeRules(response.data as IChangeRules);
      devtoolsConnect.rulesPostMsg(port, 'devtools_page');
      /** 如果popup页面已连接，通知popup页面更新规则 */
      popupConnect.receivePort && popupConnect.rulesPostMsg(popupConnect.receivePort, 'popup_page');
      break;
    default:
      break;
  }
});

popupConnect.createReceive((response, port) => {
  switch (response.action) {
    case 'GET_RULES':
      popupConnect.rulesPostMsg(port, 'popup_page');
      break;
    case 'CHANGE_RULES':
      ChromeReceiveConnect.changeRules(response.data as IChangeRules);
      popupConnect.rulesPostMsg(port, 'popup_page');
      /** 如果devtools页面已连接，通知popup页面更新规则 */
      devtoolsConnect.receivePort && devtoolsConnect.rulesPostMsg(devtoolsConnect.receivePort, 'devtools_page');
      break;
    case 'DELETE_RULES':
      ChromeReceiveConnect.deleteRules(response.data as string);
      popupConnect.rulesPostMsg(port, 'popup_page');
      /** 如果devtools页面已连接，通知popup页面更新规则 */
      devtoolsConnect.receivePort && devtoolsConnect.rulesPostMsg(devtoolsConnect.receivePort, 'devtools_page');
      break;
    default:
      break;
  }
});
