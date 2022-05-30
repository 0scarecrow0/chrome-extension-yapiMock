/*
 * @Author: scarecrow scarecrow.wilderness@gmail.com
 * @Date: 2022-05-28 21:27:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-30 23:10:30
 * @FilePath: /chrome-extension-yapiMock/utils/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import dayjs from 'dayjs';
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
  const { hostname, origin, pathname } = new URL(Request.request.url);
  const yapi = Request.request.headers.find(({ name }) => name === 'yapi');
  return {
    hostname,
    origin,
    pathname,
    // eslint-disable-next-line no-underscore-dangle
    resourceType: Request._resourceType as string,
    startedDateTime: dayjs(Request.startedDateTime).format('YYYY-MM-DD HH:mm:ss'),
    url: Request.request.url,
    method: Request.request.method,
    cookies: Request.request.cookies,
    headers: Request.request.headers,
    reqData,
    yapi: yapi?.value ? Number(yapi) : 0,
    resStatus: Request.response.status,
    isMock: !!yapi?.value,
    mockStatus: false
  };
};
