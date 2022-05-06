interface INetworkType{
  /** 请求资源类型 */
  resourceType:string
  /** 开始时间 */
  startedDateTime:Date,
  /** url */
  url:chrome.devtools.network.Request['request']['url']
  /** method */
  method:chrome.devtools.network.Request['request']['method']
  /** Cookies */
  cookies:chrome.devtools.network.Request['request']['cookies']
  /** headers */
  headers:chrome.devtools.network.Request['request']['headers']
  /** 请求数据 */
  reqData:{[key:string]:any}
  /** 响应状态 */
  resStatus:chrome.devtools.network.Request['response']['status']
}

export type {
  INetworkType
};
