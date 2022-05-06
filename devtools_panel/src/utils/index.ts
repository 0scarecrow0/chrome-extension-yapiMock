import type { INetworkType } from '../types/NetworkTypes';

export function isJSON(str:string) {
  if (typeof str === 'string') {
    try {
      const obj = JSON.parse(str);
      if (typeof obj === 'object' && obj) {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }
  return false;
}

export const RequestConversion = (Request:chrome.devtools.network.Request):INetworkType => {
  const reqData:{[key:string]:any} = {};
  if (Request.request.queryString?.length) {
    Request.request.queryString.forEach((el) => { reqData[el.name] = el.value; });
  }
  if (Request.request.postData?.text) {
    if (isJSON(Request.request.postData?.text)) {
      const postData = JSON.parse(Request.request.postData?.text);
      Object.keys(postData).forEach((el) => { reqData[el] = postData[el]; });
    }else{
      reqData.other_data = Request.request.postData.text;
    }
  }
  return {
    /** 请求资源类型 */
    // eslint-disable-next-line no-underscore-dangle
    resourceType: Request._resourceType as string,
    /** 开始时间 */
    startedDateTime: new Date(Request.startedDateTime),
    /** url */
    url: Request.request.url,
    /** method */
    method: Request.request.method,
    /** Cookies */
    cookies: Request.request.cookies,
    /** headers */
    headers: Request.request.headers,
    /** 请求数据 */
    reqData,
    /** 响应状态 */
    resStatus: Request.response.status
  };
};
