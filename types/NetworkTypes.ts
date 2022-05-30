interface INetworkType {
  hostname: string,
  origin: string,
  pathname: string,
  /** 请求资源类型 */
  resourceType: string
  /** 开始时间 */
  startedDateTime: string,
  /** url */
  url: chrome.devtools.network.Request['request']['url']
  /** method */
  method: chrome.devtools.network.Request['request']['method']
  /** Cookies */
  cookies: chrome.devtools.network.Request['request']['cookies']
  /** headers */
  headers: chrome.devtools.network.Request['request']['headers']
  /** 请求数据 */
  reqData: { [key: string]: any }
  /** 响应状态 */
  resStatus: chrome.devtools.network.Request['response']['status']
  /** 是否可使用 Mock 数据 */
  isMock: boolean,
  /** 是否已开启mock */
  mockStatus: boolean,
  yapi:number
}

type IMockRulesList = Map<string, {id: number, yapiProjectId: number, mockStatus:boolean}>

export type {
  INetworkType,
  IMockRulesList
};
