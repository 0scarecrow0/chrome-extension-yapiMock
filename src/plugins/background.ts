import { IMockRulesList } from '../../types/NetworkTypes';

/** chrome 长连接 接收 */
export class ChromeReceiveConnect {
  /** 此页面 code */
  private local: string;

  receiveName: string;

  receivePort: chrome.runtime.Port | null = null;

  onMessageList:((response:any)=>void)[] = [];

  sendMessageList:((postMessage:chrome.runtime.Port['postMessage'])=>void)[] = [];

  constructor(receiveName: string, local: string) {
    this.receiveName = receiveName;
    this.local = local;
    this.createReceive();
  }

  /** 建立连接 */
  createReceive() {
    chrome.runtime.onConnect.addListener((port) => {
      console.log(port, 'background');
      if (port.name !== this.receiveName) return;

      this.receivePort = port;

      if (this.sendMessageList.length) {
        this.sendMessageList.forEach((fn) => fn(postMessage));
      }

      port.onMessage.addListener((response) => {
        if (response.to !== this.local) return;
        if (this.onMessageList.length) {
          this.onMessageList.forEach((fn) => fn(response));
        }
      });
    });
  }

  // /**  发送消息 */
  sendMessage(action: string, to: string, data = {}) {
    /** 当未连接时，将事件添加至队列中，连接后触发 */
    if (!this.receivePort) {
      this.sendMessageList.push((postMessage) => {
        postMessage({
          action, to, data, from: this.local
        });
      });
      return;
    }
    /** 已连接时直接发送 */
    this.receivePort?.postMessage({
      action, to, data, from: this.local
    });
  }

  // /** 接收消息 */
  onMessage(callback: (response: any) => void) {
    if (!this.receivePort) {
      this.onMessageList.push((res) => callback(res));
      return;
    }
    this.receivePort?.onMessage.addListener((response) => {
      if (response.to === this.local) callback(response);
    });
  }
}

chrome.declarativeNetRequest.getDynamicRules((rules) => {
  console.log(rules, '动态规则集合');
});

chrome.declarativeNetRequest.getEnabledRulesets((rules) => {
  console.log(rules, '静态规则集合');
});

chrome.declarativeNetRequest.getSessionRules((rules) => {
  console.log(rules, '当前会话范围规则集');
});

const proxyList:IMockRulesList = new Map([
  ['/linkmcn-common/api/public/helpCenter/footerSearch.do', { id: 11, yapiProjectId: 46, mockStatus: false }],
  ['/linkmcn-common/api/public/website/searchCarousel.do', { id: 22, yapiProjectId: 46, mockStatus: false }],
]);

const rulesArr:chrome.declarativeNetRequest.Rule[] = [];
for (const [key, { id, yapiProjectId }] of proxyList) {
  const strReg = `.*${key}.*`;
  chrome.declarativeNetRequest.isRegexSupported({
    regex: new RegExp(strReg).toString()
  }, (result) => {
    console.log(result, '是否满足');
  });
  console.log(new RegExp(strReg).toString());
  const obj:chrome.declarativeNetRequest.Rule = {
    /** 规则唯一Id，必须为数字 */
    id,
    priority: 1,
    /** 触发此规则的条件 */
    condition: {
      urlFilter: key,
      resourceTypes: ['xmlhttprequest'] as chrome.declarativeNetRequest.ResourceType[]
    },
    /** 满足触发条件执行的操作 */
    action: {
      type: 'redirect' as chrome.declarativeNetRequest.RuleActionType,
      redirect: {
        transform: {
          scheme: 'http',
          host: '10.10.0.121',
          port: '3000',
          path: `mock/${yapiProjectId}${key}`
        }
      }
    },
  };
  rulesArr.push(obj);
}

/** 获取已经存储的规则 */
chrome.storage.sync.get(['proxy_list'], (result) => {
  console.log(`Value currently is ${result.proxy_list}`);
});

/** 来自于devtools的通信 */
const devtoolsConnect = new ChromeReceiveConnect('DEVTOOLS_CONNECT_BACKGROUND', 'background_page');
devtoolsConnect.onMessage((response) => {
  console.log(response, 'DEVTOOLS_CONNECT_BACKGROUND');
});
