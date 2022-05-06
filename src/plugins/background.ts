chrome.declarativeNetRequest.getDynamicRules((rules) => {
  console.log(rules, '动态规则集合');
});

chrome.declarativeNetRequest.getEnabledRulesets((rules) => {
  console.log(rules, '静态规则集合');
});

chrome.declarativeNetRequest.getSessionRules((rules) => {
  console.log(rules, '当前会话范围规则集');
});

const proxyList = new Map([
  ['/linkmcn-common/api/public/helpCenter/footerSearch.do', { id: 11, yapiProjectId: 46 }],
  ['/linkmcn-common/api/public/website/searchCarousel.do', { id: 22, yapiProjectId: 46 }],
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

// chrome.declarativeNetRequest.updateSessionRules({
//   addRules: rulesArr,
// }, () => {
//   console.log('添加规则成功');
// });

/**
 * 统一代理规则
 *
 * 线上网站代理：点击路由前面的锁，网站设置 ——> 允许不安全内容
*/
// {
//   "id": 1,
//   "priority": 1,
//   "action": {
//     "type": "redirect",
//     "redirect": {
//       "regexSubstitution": "http://10.10.0.121:3000/mock/46/\\1"
//     }
//   },
//   "condition": { "regexFilter": "https://api.linkmcn.cn/(.*)", "resourceTypes": ["xmlhttprequest"] }
// }

// chrome.devtools.network.onRequestFinished.addListener(
//   (request) => {
//     console.log(request, '网页请求');
//     // if (request.response.bodySize > 40 * 1024) {
//     //   chrome.devtools.inspectedWindow.eval(
//     //     `console.log("Large image: " + unescape("${escape(request.request.url)}"))`
//     //   );
//     // }
//   }
// );
