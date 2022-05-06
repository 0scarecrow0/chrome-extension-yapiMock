<template>
  <div class="networkList_box">
    <div v-if="networkList.length">
      <p>Network List:</p>
      <listItem
        v-for="(item, index) in networkList"
        :key="index"
        :data="item"
      />
    </div>
    <el-empty
      v-else
      description="暂未捕获到数据请求，请刷新页面重新捕获..."
    />
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import { RequestConversion } from '../utils';
import type { INetworkType } from '../types/NetworkTypes';
import listItem from './list-item.vue';

const networkList:Ref<INetworkType[]> = ref([]);

const arr: chrome.devtools.network.Request[] = [
  {
    // @ts-ignore
    _initiator: { type: 'other' },
    _priority: 'VeryHigh',
    _resourceType: 'document',
    cache: {},
    connection: '114894',
    pageref: 'page_3',
    request: {
      method: 'GET',
      url: 'http://172.16.34.153:8080/organization/',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'Accept',
          value:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
        },
        { name: 'Accept-Encoding', value: 'gzip, deflate' },
        { name: 'Accept-Language', value: 'zh-CN,zh;q=0.9,en;q=0.8' },
        { name: 'Cache-Control', value: 'max-age=0' },
        { name: 'Connection', value: 'keep-alive' },
        {
          name: 'Cookie',
          value:
            'vue_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIyOTciLCJzY29wZSI6WyJ3ZWItYXBwIl0sImV4cCI6MTY1OTUyMTM5MSwiaWF0IjoxNjUxNzQ1MzkxLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwianRpIjoiZjlmZGQ5MzMtN2ZjOC00NTM0LThjMmYtZTcyNTk3MzlhMWExIiwiY2xpZW50X2lkIjoiMCJ9.eKDDxuZ4Up-4_clZSzrau5n5PAkRPboJhjWW0xBWKW5HC7FeNyF3D1SL5E3g8iQJZJx8bD68eBfP_wu9gZH2bRN9GYZ_kiMG9AjpBTrVJ8TdugX7WUOdcW5EVGD863D8dhPkQqtZzzy50tcqatI_WjuHotyg73VOap1NPwJeHhMoCkNfxwtdCL5mcQrIUkNetDrYIWZJAf584JntwhioUGiapljITPLsINuG8PPtfQ-gt4bI0J3Yc1EpKNsLsQbe1LYr47WPXyf_FZZ_vg9THyDu_TkrMpQOg_6dev6oVDlFzasicOF3i16FQdzEG_JNJJAmSNoHcDuiDoY67GcM7g; sidebarStatus=0'
        },
        { name: 'Host', value: '172.16.34.153:8080' },
        { name: 'If-None-Match', value: 'W/"58f-w9ltaoBfrZz5zKCjVONFTjpHHR4"' },
        { name: 'Referer', value: 'http://172.16.34.153:8080/' },
        { name: 'Upgrade-Insecure-Requests', value: '1' },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
        }
      ],
      queryString: [],
      cookies: [
        {
          name: 'vue_token',
          value:
            'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIyOTciLCJzY29wZSI6WyJ3ZWItYXBwIl0sImV4cCI6MTY1OTUyMTM5MSwiaWF0IjoxNjUxNzQ1MzkxLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwianRpIjoiZjlmZGQ5MzMtN2ZjOC00NTM0LThjMmYtZTcyNTk3MzlhMWExIiwiY2xpZW50X2lkIjoiMCJ9.eKDDxuZ4Up-4_clZSzrau5n5PAkRPboJhjWW0xBWKW5HC7FeNyF3D1SL5E3g8iQJZJx8bD68eBfP_wu9gZH2bRN9GYZ_kiMG9AjpBTrVJ8TdugX7WUOdcW5EVGD863D8dhPkQqtZzzy50tcqatI_WjuHotyg73VOap1NPwJeHhMoCkNfxwtdCL5mcQrIUkNetDrYIWZJAf584JntwhioUGiapljITPLsINuG8PPtfQ-gt4bI0J3Yc1EpKNsLsQbe1LYr47WPXyf_FZZ_vg9THyDu_TkrMpQOg_6dev6oVDlFzasicOF3i16FQdzEG_JNJJAmSNoHcDuiDoY67GcM7g',
          path: '/',
          domain: '172.16.34.153',
          expires: '1969-12-31T23:59:59.000Z',
          httpOnly: false,
          secure: false
        },
        {
          name: 'sidebarStatus',
          value: '0',
          path: '/',
          domain: '172.16.34.153',
          expires: '1969-12-31T23:59:59.000Z',
          httpOnly: false,
          secure: false
        }
      ],
      headersSize: 1211,
      bodySize: 0
    },
    response: {
      status: 304,
      statusText: 'OK',
      httpVersion: 'HTTP/1.1',
      headers: [
        { name: 'Accept-Ranges', value: 'bytes' },
        { name: 'Connection', value: 'keep-alive' },
        { name: 'Date', value: 'Thu, 05 May 2022 10:32:53 GMT' },
        { name: 'ETag', value: 'W/"58f-w9ltaoBfrZz5zKCjVONFTjpHHR4"' },
        { name: 'Server', value: 'nginx/1.21.4' },
        { name: 'X-Powered-By', value: 'Express' }
      ],
      cookies: [],
      content: { size: 1423, mimeType: 'text/html' },
      redirectURL: '',
      headersSize: 200,
      bodySize: 0,
      _transferSize: 200,
      // _error: null
    },
    serverIPAddress: '172.16.34.153',
    startedDateTime: '2022-05-05T10:32:53.769Z',
    time: 12.633999998797663,
    timings: {
      blocked: 4.206000001211418,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.052000000000000046,
      wait: 8.184000001708977,
      receive: 0.1919999958772678,
      // _blocked_queueing: 2.357000001211418
    }
  },
  {
    // @ts-ignore
    _initiator: {
      type: 'parser',
      url: 'http://172.16.34.153:8080/organization/',
      lineNumber: 17
    },
    _priority: 'VeryHigh',
    _resourceType: 'stylesheet',
    cache: {},
    pageref: 'page_3',
    request: {
      method: 'GET',
      url: 'http://cdn.jsdelivr.net/npm/medium-editor@5.23.2/dist/css/medium-editor.min.css',
      httpVersion: 'http/1.1',
      headers: [
        { name: 'Referer', value: 'http://172.16.34.153:8080/' },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
        }
      ],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0
    },
    response: {
      status: 307,
      statusText: 'Internal Redirect',
      httpVersion: 'http/1.1',
      headers: [
        {
          name: 'Location',
          value:
            'https://cdn.jsdelivr.net/npm/medium-editor@5.23.2/dist/css/medium-editor.min.css'
        },
        { name: 'Non-Authoritative-Reason', value: 'HSTS' },
        { name: 'Cross-Origin-Resource-Policy', value: 'Cross-Origin' }
      ],
      cookies: [],
      content: { size: 0, mimeType: 'x-unknown' },
      redirectURL:
        'https://cdn.jsdelivr.net/npm/medium-editor@5.23.2/dist/css/medium-editor.min.css',
      headersSize: -1,
      bodySize: -1,
      _transferSize: 0,
      // _error: null
    },
    serverIPAddress: '',
    startedDateTime: '2022-05-05T10:32:53.788Z',
    time: 7.371000000198837,
    timings: {
      blocked: 2.447999999781605,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: -5.052424971452307e-10,
      receive: 4.9230000004172325,
      // _blocked_queueing: 2.427999999781605
    }
  },
  {
    // @ts-ignore
    _initiator: {
      type: 'parser',
      url: 'http://172.16.34.153:8080/organization/',
      lineNumber: 18
    },
    _priority: 'VeryHigh',
    _resourceType: 'stylesheet',
    cache: {},
    pageref: 'page_3',
    request: {
      method: 'GET',
      url: 'http://cdn.jsdelivr.net/npm/medium-editor@5.23.2/dist/css/themes/beagle.min.css',
      httpVersion: 'HTTP/1.1',
      headers: [
        { name: 'Accept', value: 'text/css,*/*;q=0.1' },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
        }
      ],
      queryString: [],
      cookies: [],
      headersSize: 234,
      bodySize: 0
    },
    response: {
      status: 307,
      statusText: 'Internal Redirect',
      httpVersion: 'HTTP/1.1',
      headers: [
        { name: 'Cross-Origin-Resource-Policy', value: 'Cross-Origin' },
        {
          name: 'Location',
          value:
            'https://cdn.jsdelivr.net/npm/medium-editor@5.23.2/dist/css/themes/beagle.min.css'
        },
        { name: 'Non-Authoritative-Reason', value: 'HSTS' }
      ],
      cookies: [],
      content: { size: 0, mimeType: 'x-unknown', compression: 202 },
      redirectURL:
        'https://cdn.jsdelivr.net/npm/medium-editor@5.23.2/dist/css/themes/beagle.min.css',
      headersSize: 202,
      bodySize: -202,
      _transferSize: 0,
      // _error: null
    },
    serverIPAddress: '',
    startedDateTime: '2022-05-05T10:32:53.788Z',
    time: 7.332000002563465,
    timings: {
      blocked: 2.4420000024039763,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: -1.5208497655683217e-9,
      receive: 4.890000000159489,
      // _blocked_queueing: 2.4250000024039764
    }
  },
  {
    _fromCache: 'disk',
    // @ts-ignore
    _initiator: {
      type: 'parser',
      url: 'http://172.16.34.153:8080/organization/',
      lineNumber: 15
    },
    _priority: 'VeryHigh',
    _resourceType: 'stylesheet',
    cache: {},
    pageref: 'page_3',
    request: {
      method: 'GET',
      url: 'https://static.linkmcn.cn/public/css/element-ui.css',
      httpVersion: 'http/2.0',
      headers: [],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0
    },
    response: {
      status: 200,
      statusText: '',
      httpVersion: 'http/2.0',
      headers: [
        { name: 'accept-ranges', value: 'bytes' },
        { name: 'age', value: '29970' },
        { name: 'ali-swift-global-savetime', value: '1651715399' },
        { name: 'content-encoding', value: 'gzip' },
        { name: 'content-length', value: '35273' },
        { name: 'content-md5', value: 'PO/IoqSRsQGn1V/CRF+xJQ==' },
        { name: 'content-type', value: 'text/css' },
        { name: 'date', value: 'Thu, 05 May 2022 01:49:59 GMT' },
        { name: 'eagleid', value: '6e5084a816517453695496879e' },
        { name: 'etag', value: '"3CEFC8A2A491B101A7D55FC2445FB125"' },
        { name: 'last-modified', value: 'Wed, 04 Dec 2019 05:08:24 GMT' },
        { name: 'server', value: 'Tengine' },
        { name: 'timing-allow-origin', value: '*' },
        { name: 'vary', value: 'Accept-Encoding' },
        {
          name: 'via',
          value:
            'cache49.l2cn1813[0,0,304-0,H], cache48.l2cn1813[0,0], kunlun6.cn210[0,0,200-0,H], kunlun10.cn210[3,0]'
        },
        { name: 'x-cache', value: 'HIT TCP_MEM_HIT dirn:0:101206917' },
        { name: 'x-oss-cdn-auth', value: 'success' },
        { name: 'x-oss-hash-crc64ecma', value: '17124304939361919223' },
        { name: 'x-oss-object-type', value: 'Normal' },
        { name: 'x-oss-request-id', value: '62732D47482D3737362A323F' },
        { name: 'x-oss-server-time', value: '2' },
        { name: 'x-oss-storage-class', value: 'Standard' },
        { name: 'x-swift-cachetime', value: '83237' },
        { name: 'x-swift-savetime', value: 'Thu, 05 May 2022 02:42:42 GMT' }
      ],
      cookies: [],
      content: { size: 232234, mimeType: 'text/css' },
      redirectURL: '',
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      // _error: null
    },
    serverIPAddress: '127.0.0.1',
    startedDateTime: '2022-05-05T10:32:53.787Z',
    time: 4.367999998066807,
    timings: {
      blocked: 2.3759999996854457,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.6460000010975636,
      receive: 1.3459999972837977,
      // _blocked_queueing: 2.330999999685446
    }
  },
  {
    _fromCache: 'disk',
    // @ts-ignore
    _initiator: {
      type: 'parser',
      url: 'http://172.16.34.153:8080/organization/',
      lineNumber: 16
    },
    _priority: 'VeryHigh',
    _resourceType: 'stylesheet',
    cache: {},
    pageref: 'page_3',
    request: {
      method: 'GET',
      url: 'http://at.alicdn.com/t/font_1452588_es8qhmov3in.css',
      httpVersion: 'HTTP/1.1',
      headers: [],
      queryString: [],
      cookies: [],
      headersSize: 46,
      bodySize: 0
    },
    response: {
      status: 200,
      statusText: 'OK',
      httpVersion: 'HTTP/1.1',
      headers: [
        { name: 'Access-Control-Allow-Origin', value: '*' },
        { name: 'Age', value: '1391198' },
        { name: 'Ali-Swift-Global-Savetime', value: '1650354171' },
        { name: 'Cache-Control', value: 'max-age=63072000' },
        { name: 'Content-Encoding', value: 'gzip' },
        { name: 'Content-Length', value: '2865' },
        { name: 'Content-Md5', value: 'LYPN+fK0IC+2QXNqdoIPJA==' },
        { name: 'Content-Type', value: 'text/css' },
        { name: 'Date', value: 'Tue, 19 Apr 2022 07:42:51 GMT' },
        { name: 'Eagleid', value: 'dcb9a78416517453694943195e' },
        { name: 'Last-Modified', value: 'Tue, 29 Mar 2022 08:24:06 GMT' },
        { name: 'Server', value: 'Tengine' },
        { name: 'Timing-Allow-Origin', value: '*' },
        { name: 'Vary', value: 'Accept-Encoding' },
        {
          name: 'Via',
          value:
            'cache22.l2cn3008[97,97,200-0,M], cache12.l2cn3008[99,0], cache29.cn3945[0,0,200-0,H], cache2.cn3945[2,0]'
        },
        { name: 'X-Cache', value: 'HIT TCP_HIT dirn:11:661274846' },
        { name: 'X-Oss-Hash-Crc64ecma', value: '7898271544603051975' },
        { name: 'X-Oss-Object-Type', value: 'Normal' },
        { name: 'X-Oss-Request-Id', value: '625E67FBFC091B32354F518B' },
        { name: 'X-Oss-Server-Time', value: '62' },
        { name: 'X-Oss-Storage-Class', value: 'Standard' },
        { name: 'X-Swift-Cachetime', value: '63072000' },
        { name: 'X-Swift-Savetime', value: 'Tue, 19 Apr 2022 07:42:51 GMT' }
      ],
      cookies: [],
      content: { size: 15349, mimeType: 'text/css' },
      redirectURL: '',
      headersSize: 827,
      bodySize: 0,
      _transferSize: 0,
      // _error: null
    },
    serverIPAddress: '127.0.0.1',
    startedDateTime: '2022-05-05T10:32:53.788Z',
    time: 3.5539999989850912,
    timings: {
      blocked: 2.379999997148989,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.6929999990714714,
      receive: 0.48100000276463106,
      // _blocked_queueing: 2.3449999971489888
    }
  },
  {
    _fromCache: 'disk',
    // @ts-ignore
    _initiator: {
      type: 'parser',
      url: 'http://172.16.34.153:8080/organization/',
      lineNumber: 19
    },
    _priority: 'High',
    _resourceType: 'script',
    cache: {},
    pageref: 'page_3',
    request: {
      method: 'GET',
      url: 'http://at.alicdn.com/t/font_1452588_1h5o794lr2g.js',
      httpVersion: 'HTTP/1.1',
      headers: [],
      queryString: [],
      cookies: [],
      headersSize: 45,
      bodySize: 0
    },
    response: {
      status: 200,
      statusText: 'OK',
      httpVersion: 'HTTP/1.1',
      headers: [
        { name: 'Access-Control-Allow-Origin', value: '*' },
        { name: 'Age', value: '24097605' },
        { name: 'Ali-Swift-Global-Savetime', value: '1627647764' },
        { name: 'Cache-Control', value: 'max-age=63072000' },
        { name: 'Content-Encoding', value: 'gzip' },
        { name: 'Content-Length', value: '70773' },
        { name: 'Content-Md5', value: 'Yc1/F2D60REJEulI/wQoTw==' },
        { name: 'Content-Type', value: 'application/javascript' },
        { name: 'Date', value: 'Fri, 30 Jul 2021 12:22:44 GMT' },
        { name: 'Eagleid', value: 'dcb9a79416517453694957645e' },
        { name: 'Last-Modified', value: 'Fri, 25 Sep 2020 06:45:57 GMT' },
        { name: 'Server', value: 'Tengine' },
        { name: 'Timing-Allow-Origin', value: '*' },
        { name: 'Vary', value: 'Accept-Encoding' },
        {
          name: 'Via',
          value:
            'cache14.l2cn3008[0,0,200-0,H], cache1.l2cn3008[1,0], cache23.cn3945[0,0,200-0,H], cache18.cn3945[2,0]'
        },
        { name: 'X-Cache', value: 'HIT TCP_HIT dirn:0:888121177' },
        { name: 'X-Oss-Hash-Crc64ecma', value: '13928517383042032667' },
        { name: 'X-Oss-Object-Type', value: 'Normal' },
        { name: 'X-Oss-Request-Id', value: '6103EF14E3367F3935DCAD22' },
        { name: 'X-Oss-Server-Time', value: '81' },
        { name: 'X-Oss-Storage-Class', value: 'Standard' },
        { name: 'X-Swift-Cachetime', value: '40365593' },
        { name: 'X-Swift-Savetime', value: 'Tue, 19 Apr 2022 07:42:51 GMT' }
      ],
      cookies: [],
      content: { size: 208633, mimeType: 'application/javascript' },
      redirectURL: '',
      headersSize: 840,
      bodySize: 0,
      _transferSize: 0,
      // _error: null
    },
    serverIPAddress: '127.0.0.1',
    startedDateTime: '2022-05-05T10:32:53.788Z',
    time: 4.354000000603264,
    timings: {
      blocked: 2.5300000012267847,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.30999999978835696,
      receive: 1.5139999995881226,
      // _blocked_queueing: 2.4860000012267847
    }
  },
  {
    _fromCache: 'disk',
    // @ts-ignore
    _initiator: {
      type: 'parser',
      url: 'http://172.16.34.153:8080/organization/',
      lineNumber: 17
    },
    _priority: 'VeryHigh',
    _resourceType: 'stylesheet',
    cache: {},
    pageref: 'page_3',
    request: {
      method: 'GET',
      url: 'https://cdn.jsdelivr.net/npm/medium-editor@5.23.2/dist/css/medium-editor.min.css',
      httpVersion: 'http/2.0',
      headers: [
        { name: 'Referer', value: 'http://172.16.34.153:8080/' },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
        }
      ],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0
    },
    response: {
      status: 200,
      statusText: '',
      httpVersion: 'http/2.0',
      headers: [
        { name: 'date', value: 'Thu, 05 May 2022 10:09:29 GMT' },
        { name: 'content-encoding', value: 'gzip' },
        { name: 'x-content-type-options', value: 'nosniff' },
        { name: 'age', value: '609647' },
        { name: 'x-jsd-version', value: '5.23.2' },
        { name: 'x-cache', value: 'HIT, HIT' },
        { name: 'cross-origin-resource-policy', value: 'cross-origin' },
        {
          name: 'alt-svc',
          value:
            'h3=":443";ma=86400,h3-29=":443";ma=86400,h3-27=":443";ma=86400'
        },
        { name: 'content-length', value: '1200' },
        { name: 'x-served-by', value: 'cache-fra19165-FRA, cache-qpg1247-QPG' },
        { name: 'x-jsd-version-type', value: 'version' },
        { name: 'etag', value: 'W/"1237-F+mKyQpQ0p6pnA6dB7N7mPKJ9Tw"' },
        { name: 'vary', value: 'Accept-Encoding' },
        { name: 'content-type', value: 'text/css; charset=utf-8' },
        { name: 'access-control-allow-origin', value: '*' },
        { name: 'access-control-expose-headers', value: '*' },
        {
          name: 'cache-control',
          value: 'public, max-age=31536000, s-maxage=31536000, immutable'
        },
        { name: 'accept-ranges', value: 'bytes' },
        { name: 'timing-allow-origin', value: '*' }
      ],
      cookies: [],
      content: { size: 4663, mimeType: 'text/css' },
      redirectURL: '',
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      // _error: null
    },
    serverIPAddress: '127.0.0.1',
    startedDateTime: '2022-05-05T10:32:53.795Z',
    time: 2.8369999999995343,
    timings: {
      blocked: 2.144000000165077,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.44700000022817404,
      receive: 0.24599999960628338,
      // _blocked_queueing: 2.096000000165077
    }
  },
  {
    _fromCache: 'disk',
    // @ts-ignore
    _initiator: {
      type: 'parser',
      url: 'http://172.16.34.153:8080/organization/',
      lineNumber: 18
    },
    _priority: 'VeryHigh',
    _resourceType: 'stylesheet',
    cache: {},
    pageref: 'page_3',
    request: {
      method: 'GET',
      url: 'https://cdn.jsdelivr.net/npm/medium-editor@5.23.2/dist/css/themes/beagle.min.css',
      httpVersion: 'http/2.0',
      headers: [],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0
    },
    response: {
      status: 200,
      statusText: '',
      httpVersion: 'http/2.0',
      headers: [
        { name: 'accept-ranges', value: 'bytes' },
        { name: 'access-control-allow-origin', value: '*' },
        { name: 'access-control-expose-headers', value: '*' },
        { name: 'age', value: '0' },
        {
          name: 'alt-svc',
          value:
            'h3=":443";ma=86400,h3-29=":443";ma=86400,h3-27=":443";ma=86400'
        },
        {
          name: 'cache-control',
          value: 'public, max-age=31536000, s-maxage=31536000, immutable'
        },
        { name: 'content-encoding', value: 'gzip' },
        { name: 'content-length', value: '505' },
        { name: 'content-type', value: 'text/css; charset=utf-8' },
        { name: 'cross-origin-resource-policy', value: 'cross-origin' },
        { name: 'date', value: 'Thu, 05 May 2022 10:09:30 GMT' },
        { name: 'etag', value: 'W/"7b0-P2ZxSa6S8J2zWRwjWg1lm9sVjcY"' },
        { name: 'timing-allow-origin', value: '*' },
        { name: 'vary', value: 'Accept-Encoding' },
        { name: 'x-cache', value: 'MISS, MISS' },
        { name: 'x-content-type-options', value: 'nosniff' },
        { name: 'x-jsd-version', value: '5.23.2' },
        { name: 'x-jsd-version-type', value: 'version' },
        { name: 'x-served-by', value: 'cache-fra19147-FRA, cache-qpg1247-QPG' }
      ],
      cookies: [],
      content: { size: 1968, mimeType: 'text/css' },
      redirectURL: '',
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      // _error: null
    },
    serverIPAddress: '127.0.0.1',
    startedDateTime: '2022-05-05T10:32:53.795Z',
    time: 2.8400000010151416,
    timings: {
      blocked: 2.0919999996547123,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.528999999980675,
      receive: 0.2190000013797544,
      // _blocked_queueing: 2.072999999654712
    }
  },
  {
    // @ts-ignore
    _initiator: {
      type: 'script',
      stack: {
        callFrames: [
          {
            functionName: '',
            scriptId: '10032',
            url: '',
            lineNumber: 4,
            columnNumber: 31
          },
          {
            functionName: '',
            scriptId: '10032',
            url: '',
            lineNumber: 6,
            columnNumber: 6
          }
        ]
      }
    },
    _priority: 'Low',
    _resourceType: 'script',
    cache: {},
    pageref: 'page_3',
    request: {
      method: 'GET',
      url: 'chrome-extension://nhdogjmejiglipccpnnnanhbledajbpd/build/backend.js',
      httpVersion: 'chrome-extension',
      headers: [
        { name: 'Referer', value: 'http://172.16.34.153:8080/' },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
        }
      ],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0
    },
    response: {
      status: 200,
      statusText: 'OK',
      httpVersion: 'chrome-extension',
      headers: [
        { name: 'Access-Control-Allow-Origin', value: '*' },
        {
          name: 'Content-Security-Policy',
          value: "script-src 'self'; object-src 'self';"
        },
        { name: 'cache-control', value: 'no-cache' },
        { name: 'Last-Modified', value: 'Thu, 31 Mar 2022 09:18:04 GMT' },
        { name: 'ETag', value: '"GArVdTXjVIE4BZUL4Bij5v+JY/A="' },
        { name: 'Cross-Origin-Resource-Policy', value: 'cross-origin' },
        { name: 'Content-Type', value: 'text/javascript' }
      ],
      cookies: [],
      content: { size: 385021, mimeType: 'text/javascript' },
      redirectURL: '',
      headersSize: -1,
      bodySize: -1,
      _transferSize: 385021,
      // _error: null
    },
    serverIPAddress: '',
    startedDateTime: '2022-05-05T10:32:53.812Z',
    time: 2.0970000005036127,
    timings: {
      blocked: -1,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 1.9289999981992878,
      receive: 0.16800000230432488,
      // _blocked_queueing: -1
    }
  },
  {
    // @ts-ignore
    _initiator: {
      type: 'parser',
      url: 'http://172.16.34.153:8080/organization/',
      lineNumber: 20
    },
    _priority: 'High',
    _resourceType: 'script',
    cache: {},
    connection: '114894',
    pageref: 'page_3',
    request: {
      method: 'GET',
      url: 'http://172.16.34.153:8080/organization/app.js',
      httpVersion: 'HTTP/1.1',
      headers: [
        { name: 'Accept', value: '*/*' },
        { name: 'Accept-Encoding', value: 'gzip, deflate' },
        { name: 'Accept-Language', value: 'zh-CN,zh;q=0.9,en;q=0.8' },
        { name: 'Connection', value: 'keep-alive' },
        {
          name: 'Cookie',
          value:
            'vue_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIyOTciLCJzY29wZSI6WyJ3ZWItYXBwIl0sImV4cCI6MTY1OTUyMTM5MSwiaWF0IjoxNjUxNzQ1MzkxLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwianRpIjoiZjlmZGQ5MzMtN2ZjOC00NTM0LThjMmYtZTcyNTk3MzlhMWExIiwiY2xpZW50X2lkIjoiMCJ9.eKDDxuZ4Up-4_clZSzrau5n5PAkRPboJhjWW0xBWKW5HC7FeNyF3D1SL5E3g8iQJZJx8bD68eBfP_wu9gZH2bRN9GYZ_kiMG9AjpBTrVJ8TdugX7WUOdcW5EVGD863D8dhPkQqtZzzy50tcqatI_WjuHotyg73VOap1NPwJeHhMoCkNfxwtdCL5mcQrIUkNetDrYIWZJAf584JntwhioUGiapljITPLsINuG8PPtfQ-gt4bI0J3Yc1EpKNsLsQbe1LYr47WPXyf_FZZ_vg9THyDu_TkrMpQOg_6dev6oVDlFzasicOF3i16FQdzEG_JNJJAmSNoHcDuiDoY67GcM7g; sidebarStatus=0'
        },
        { name: 'Host', value: '172.16.34.153:8080' },
        {
          name: 'If-None-Match',
          value: 'W/"1d47250-GpT7MJcnQSOHLuz42iKRAP0ctAM"'
        },
        { name: 'Referer', value: 'http://172.16.34.153:8080/organization/' },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
        }
      ],
      queryString: [],
      cookies: [
        {
          name: 'vue_token',
          value:
            'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIyOTciLCJzY29wZSI6WyJ3ZWItYXBwIl0sImV4cCI6MTY1OTUyMTM5MSwiaWF0IjoxNjUxNzQ1MzkxLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwianRpIjoiZjlmZGQ5MzMtN2ZjOC00NTM0LThjMmYtZTcyNTk3MzlhMWExIiwiY2xpZW50X2lkIjoiMCJ9.eKDDxuZ4Up-4_clZSzrau5n5PAkRPboJhjWW0xBWKW5HC7FeNyF3D1SL5E3g8iQJZJx8bD68eBfP_wu9gZH2bRN9GYZ_kiMG9AjpBTrVJ8TdugX7WUOdcW5EVGD863D8dhPkQqtZzzy50tcqatI_WjuHotyg73VOap1NPwJeHhMoCkNfxwtdCL5mcQrIUkNetDrYIWZJAf584JntwhioUGiapljITPLsINuG8PPtfQ-gt4bI0J3Yc1EpKNsLsQbe1LYr47WPXyf_FZZ_vg9THyDu_TkrMpQOg_6dev6oVDlFzasicOF3i16FQdzEG_JNJJAmSNoHcDuiDoY67GcM7g',
          path: '/',
          domain: '172.16.34.153',
          expires: '1969-12-31T23:59:59.000Z',
          httpOnly: false,
          secure: false
        },
        {
          name: 'sidebarStatus',
          value: '0',
          path: '/',
          domain: '172.16.34.153',
          expires: '1969-12-31T23:59:59.000Z',
          httpOnly: false,
          secure: false
        }
      ],
      headersSize: 1046,
      bodySize: 0
    },
    response: {
      status: 304,
      statusText: 'OK',
      httpVersion: 'HTTP/1.1',
      headers: [
        { name: 'Accept-Ranges', value: 'bytes' },
        { name: 'Connection', value: 'keep-alive' },
        { name: 'Date', value: 'Thu, 05 May 2022 10:32:53 GMT' },
        { name: 'ETag', value: 'W/"1d47250-GpT7MJcnQSOHLuz42iKRAP0ctAM"' },
        { name: 'Server', value: 'nginx/1.21.4' },
        { name: 'X-Powered-By', value: 'Express' }
      ],
      cookies: [],
      content: { size: 30700112, mimeType: 'application/javascript' },
      redirectURL: '',
      headersSize: 204,
      bodySize: 0,
      _transferSize: 204,
      // _error: null
    },
    serverIPAddress: '172.16.34.153',
    startedDateTime: '2022-05-05T10:32:53.788Z',
    time: 177.70300000120187,
    timings: {
      blocked: 3.7190000014947726,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.04599999999999982,
      wait: 27.568000001137843,
      receive: 146.36999999856926,
      // _blocked_queueing: 2.6050000014947727
    }
  },
  {
    _fromCache: 'disk',
    // @ts-ignore
    _initiator: {
      type: 'parser',
      url: 'http://at.alicdn.com/t/font_1452588_es8qhmov3in.css'
    },
    _priority: 'VeryHigh',
    _resourceType: 'font',
    cache: {},
    pageref: 'page_3',
    request: {
      method: 'GET',
      url: 'http://at.alicdn.com/t/font_1452588_es8qhmov3in.woff2?t=1648542245211',
      httpVersion: 'HTTP/1.1',
      headers: [],
      queryString: [{ name: 't', value: '1648542245211' }],
      cookies: [],
      headersSize: 64,
      bodySize: 0
    },
    response: {
      status: 200,
      statusText: 'OK',
      httpVersion: 'HTTP/1.1',
      headers: [
        { name: 'Accept-Ranges', value: 'bytes' },
        { name: 'Access-Control-Allow-Origin', value: '*' },
        { name: 'Age', value: '3048838' },
        { name: 'Ali-Swift-Global-Savetime', value: '1648696533' },
        { name: 'Cache-Control', value: 'max-age=63072000' },
        { name: 'Content-Length', value: '31524' },
        { name: 'Content-Md5', value: 'GGCR9pKTkdtL/PeEPKyyRA==' },
        { name: 'Content-Type', value: 'font/woff2' },
        { name: 'Date', value: 'Thu, 31 Mar 2022 03:15:33 GMT' },
        { name: 'Eagleid', value: 'dcb9a79316517453714793902e' },
        { name: 'Etag', value: '"186091F6929391DB4BFCF7843CACB244"' },
        { name: 'Last-Modified', value: 'Tue, 29 Mar 2022 08:24:05 GMT' },
        { name: 'Server', value: 'Tengine' },
        { name: 'Timing-Allow-Origin', value: '*' },
        {
          name: 'Via',
          value:
            'cache8.l2cn3008[0,0,200-0,H], cache32.l2cn3008[1,0], cache28.cn3945[0,0,200-0,H], cache17.cn3945[2,0]'
        },
        { name: 'X-Cache', value: 'HIT TCP_HIT dirn:11:605819895' },
        { name: 'X-Oss-Hash-Crc64ecma', value: '7330451224206639473' },
        { name: 'X-Oss-Object-Type', value: 'Normal' },
        { name: 'X-Oss-Request-Id', value: '62451CD46AD0C430335E0444' },
        { name: 'X-Oss-Server-Time', value: '94' },
        { name: 'X-Oss-Storage-Class', value: 'Standard' },
        { name: 'X-Swift-Cachetime', value: '29519903' },
        { name: 'X-Swift-Savetime', value: 'Mon, 18 Apr 2022 11:17:10 GMT' }
      ],
      cookies: [],
      content: { size: 31524, mimeType: 'font/woff2' },
      redirectURL: '',
      headersSize: 844,
      bodySize: 0,
      _transferSize: 0,
      // _error: null
    },
    serverIPAddress: '127.0.0.1',
    startedDateTime: '2022-05-05T10:32:54.371Z',
    time: 1.2849999984609894,
    timings: {
      blocked: 0.47599999717623,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.3929999986970797,
      receive: 0.4160000025876798,
      // _blocked_queueing: 0.44299999717622995
    }
  },
  {
    _fromCache: 'disk',
    // @ts-ignore
    _initiator: {
      type: 'parser',
      url: 'https://static.linkmcn.cn/public/css/element-ui.css'
    },
    _priority: 'VeryHigh',
    _resourceType: 'font',
    cache: {},
    pageref: 'page_3',
    request: {
      method: 'GET',
      url: 'https://static.linkmcn.cn/public/fonts/element-icons.woff',
      httpVersion: 'http/2.0',
      headers: [],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0
    },
    response: {
      status: 200,
      statusText: '',
      httpVersion: 'http/2.0',
      headers: [
        { name: 'accept-ranges', value: 'bytes' },
        {
          name: 'access-control-allow-methods',
          value: 'GET, POST, PUT, DELETE, HEAD'
        },
        { name: 'access-control-allow-origin', value: '*' },
        {
          name: 'access-control-expose-headers',
          value: 'etag, x-oss-request-id'
        },
        { name: 'access-control-max-age', value: '0' },
        { name: 'age', value: '3596' },
        { name: 'ali-swift-global-savetime', value: '1651741775' },
        { name: 'content-length', value: '28200' },
        { name: 'content-md5', value: 'U1h39QA5wMtJphlqW3UXzQ==' },
        { name: 'content-type', value: 'application/font-woff' },
        { name: 'date', value: 'Thu, 05 May 2022 09:09:35 GMT' },
        { name: 'eagleid', value: '3ad8769516517453715123406e' },
        { name: 'etag', value: '"535877F50039C0CB49A6196A5B7517CD"' },
        { name: 'last-modified', value: 'Wed, 04 Dec 2019 05:08:42 GMT' },
        { name: 'server', value: 'Tengine' },
        { name: 'timing-allow-origin', value: '*' },
        {
          name: 'via',
          value:
            'cache74.l2cn3037[0,0,304-0,H], cache1.l2cn3037[1,0], kunlun7.cn1310[0,0,200-0,H], kunlun1.cn1310[2,0]'
        },
        { name: 'x-cache', value: 'HIT TCP_MEM_HIT dirn:0:175879958' },
        { name: 'x-oss-cdn-auth', value: 'success' },
        { name: 'x-oss-hash-crc64ecma', value: '16706094257553909805' },
        { name: 'x-oss-object-type', value: 'Normal' },
        { name: 'x-oss-request-id', value: '6273944FE3B51E37350830B3' },
        { name: 'x-oss-server-time', value: '4' },
        { name: 'x-oss-storage-class', value: 'Standard' },
        { name: 'x-swift-cachetime', value: '3600' },
        { name: 'x-swift-savetime', value: 'Thu, 05 May 2022 09:59:34 GMT' }
      ],
      cookies: [],
      content: { size: 28200, mimeType: 'application/font-woff' },
      redirectURL: '',
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      // _error: null
    },
    serverIPAddress: '127.0.0.1',
    startedDateTime: '2022-05-05T10:32:54.372Z',
    time: 0.9690000006230548,
    timings: {
      blocked: 0.2930000008796342,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.41200000131945125,
      receive: 0.2639999984239694,
      // _blocked_queueing: 0.28200000087963417
    }
  },
  {
    _fromCache: 'disk',
    // @ts-ignore
    _initiator: {
      type: 'script',
      stack: {
        callFrames: [],
        parent: {
          description: 'Image',
          callFrames: [
            {
              functionName: 'baseSetAttr',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 510671,
              columnNumber: 7
            },
            {
              functionName: 'setAttr',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 510646,
              columnNumber: 4
            },
            {
              functionName: 'updateAttrs',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 510601,
              columnNumber: 6
            },
            {
              functionName: 'invokeCreateHooks',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509955,
              columnNumber: 21
            },
            {
              functionName: 'createElm',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509842,
              columnNumber: 10
            },
            {
              functionName: 'createChildren',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509939,
              columnNumber: 8
            },
            {
              functionName: 'createElm',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509840,
              columnNumber: 8
            },
            {
              functionName: 'createChildren',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509939,
              columnNumber: 8
            },
            {
              functionName: 'createElm',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509840,
              columnNumber: 8
            },
            {
              functionName: 'patch',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 510363,
              columnNumber: 6
            },
            {
              functionName: 'Vue._update',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507833,
              columnNumber: 18
            },
            {
              functionName: 'updateComponent',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507954,
              columnNumber: 9
            },
            {
              functionName: 'get',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 508367,
              columnNumber: 24
            },
            {
              functionName: 'Watcher',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 508356,
              columnNumber: 11
            },
            {
              functionName: 'mountComponent',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507961,
              columnNumber: 2
            },
            {
              functionName:
                './node_modules/_vue@2.6.10@vue/dist/vue.esm.js.Vue.$mount',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 512938,
              columnNumber: 9
            },
            {
              functionName:
                './node_modules/_vue@2.6.10@vue/dist/vue.esm.js.Vue.$mount',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 515832,
              columnNumber: 15
            },
            {
              functionName: 'init',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507015,
              columnNumber: 12
            },
            {
              functionName: 'createComponent',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509864,
              columnNumber: 8
            },
            {
              functionName: 'createElm',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509811,
              columnNumber: 8
            },
            {
              functionName: 'createChildren',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509939,
              columnNumber: 8
            },
            {
              functionName: 'createElm',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509840,
              columnNumber: 8
            },
            {
              functionName: 'createChildren',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509939,
              columnNumber: 8
            },
            {
              functionName: 'createElm',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509840,
              columnNumber: 8
            },
            {
              functionName: 'patch',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 510363,
              columnNumber: 6
            },
            {
              functionName: 'Vue._update',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507833,
              columnNumber: 18
            },
            {
              functionName: 'updateComponent',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507954,
              columnNumber: 9
            },
            {
              functionName: 'get',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 508367,
              columnNumber: 24
            },
            {
              functionName: 'Watcher',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 508356,
              columnNumber: 11
            },
            {
              functionName: 'mountComponent',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507961,
              columnNumber: 2
            },
            {
              functionName:
                './node_modules/_vue@2.6.10@vue/dist/vue.esm.js.Vue.$mount',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 512938,
              columnNumber: 9
            },
            {
              functionName:
                './node_modules/_vue@2.6.10@vue/dist/vue.esm.js.Vue.$mount',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 515832,
              columnNumber: 15
            },
            {
              functionName: 'init',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507015,
              columnNumber: 12
            },
            {
              functionName: 'createComponent',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509864,
              columnNumber: 8
            },
            {
              functionName: 'createElm',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509811,
              columnNumber: 8
            },
            {
              functionName: 'createChildren',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509939,
              columnNumber: 8
            },
            {
              functionName: 'createElm',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509840,
              columnNumber: 8
            },
            {
              functionName: 'createChildren',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509939,
              columnNumber: 8
            },
            {
              functionName: 'createElm',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509840,
              columnNumber: 8
            },
            {
              functionName: 'createChildren',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509939,
              columnNumber: 8
            },
            {
              functionName: 'createElm',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509840,
              columnNumber: 8
            },
            {
              functionName: 'patch',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 510363,
              columnNumber: 6
            },
            {
              functionName: 'Vue._update',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507833,
              columnNumber: 18
            },
            {
              functionName: 'updateComponent',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507954,
              columnNumber: 9
            },
            {
              functionName: 'get',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 508367,
              columnNumber: 24
            },
            {
              functionName: 'Watcher',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 508356,
              columnNumber: 11
            },
            {
              functionName: 'mountComponent',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507961,
              columnNumber: 2
            },
            {
              functionName:
                './node_modules/_vue@2.6.10@vue/dist/vue.esm.js.Vue.$mount',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 512938,
              columnNumber: 9
            },
            {
              functionName:
                './node_modules/_vue@2.6.10@vue/dist/vue.esm.js.Vue.$mount',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 515832,
              columnNumber: 15
            },
            {
              functionName: 'init',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507015,
              columnNumber: 12
            },
            {
              functionName: 'merged',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507198,
              columnNumber: 4
            },
            {
              functionName: 'createComponent',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509864,
              columnNumber: 8
            },
            {
              functionName: 'createElm',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509811,
              columnNumber: 8
            },
            {
              functionName: 'updateChildren',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 510102,
              columnNumber: 10
            },
            {
              functionName: 'patchVnode',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 510205,
              columnNumber: 28
            },
            {
              functionName: 'patch',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 510368,
              columnNumber: 8
            },
            {
              functionName: 'Vue._update',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507836,
              columnNumber: 18
            },
            {
              functionName: 'updateComponent',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507954,
              columnNumber: 9
            },
            {
              functionName: 'get',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 508367,
              columnNumber: 24
            },
            {
              functionName: 'run',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 508442,
              columnNumber: 21
            },
            {
              functionName: 'flushSchedulerQueue',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 508198,
              columnNumber: 12
            },
            {
              functionName: '',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 505879,
              columnNumber: 11
            },
            {
              functionName: 'flushCallbacks',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 505805,
              columnNumber: 13
            }
          ],
          parent: {
            description: 'Promise.then',
            callFrames: [
              {
                functionName: 'timerFunc',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 505832,
                columnNumber: 6
              },
              {
                functionName: 'nextTick',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 505889,
                columnNumber: 4
              },
              {
                functionName: 'queueWatcher',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 508290,
                columnNumber: 6
              },
              {
                functionName: 'update',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 508432,
                columnNumber: 4
              },
              {
                functionName: 'notify',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 504631,
                columnNumber: 12
              },
              {
                functionName: 'reactiveSetter',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 504956,
                columnNumber: 10
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 495019,
                columnNumber: 17
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 495018,
                columnNumber: 16
              },
              {
                functionName: 'updateRoute',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494477,
                columnNumber: 18
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494355,
                columnNumber: 11
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494464,
                columnNumber: 6
              },
              {
                functionName: 'step',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494194,
                columnNumber: 6
              },
              {
                functionName: 'step',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494201,
                columnNumber: 8
              },
              {
                functionName: 'step',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494201,
                columnNumber: 8
              },
              {
                functionName: 'runQueue',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494205,
                columnNumber: 2
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494459,
                columnNumber: 4
              },
              {
                functionName: 'step',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494194,
                columnNumber: 6
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494198,
                columnNumber: 10
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494444,
                columnNumber: 10
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494237,
                columnNumber: 12
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494313,
                columnNumber: 14
              }
            ],
            parent: {
              description: 'Promise.then',
              callFrames: [
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494260,
                  columnNumber: 16
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494281,
                  columnNumber: 65
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494281,
                  columnNumber: 37
                },
                {
                  functionName: 'flatMapComponents',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494280,
                  columnNumber: 25
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494216,
                  columnNumber: 4
                },
                {
                  functionName: 'iterator',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494423,
                  columnNumber: 6
                },
                {
                  functionName: 'step',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494197,
                  columnNumber: 8
                },
                {
                  functionName: 'step',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494201,
                  columnNumber: 8
                },
                {
                  functionName: 'step',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494201,
                  columnNumber: 8
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494198,
                  columnNumber: 10
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494444,
                  columnNumber: 10
                },
                {
                  functionName: '_callee$',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 543625,
                  columnNumber: 12
                },
                {
                  functionName: 'tryCatch',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 479984,
                  columnNumber: 39
                },
                {
                  functionName: 'invoke',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 480215,
                  columnNumber: 21
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 480040,
                  columnNumber: 20
                },
                {
                  functionName: 'asyncGeneratorStep',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 61581,
                  columnNumber: 23
                },
                {
                  functionName: '_next',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 61603,
                  columnNumber: 8
                }
              ],
              parent: {
                description: 'Promise.then',
                callFrames: [
                  {
                    functionName: 'asyncGeneratorStep',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61591,
                    columnNumber: 28
                  },
                  {
                    functionName: '_next',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61603,
                    columnNumber: 8
                  },
                  {
                    functionName: '',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61610,
                    columnNumber: 6
                  },
                  {
                    functionName: 'F',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 332027,
                    columnNumber: 27
                  },
                  {
                    functionName: '',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61599,
                    columnNumber: 11
                  },
                  {
                    functionName: '',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 543668,
                    columnNumber: 16
                  },
                  {
                    functionName: 'iterator',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494423,
                    columnNumber: 6
                  },
                  {
                    functionName: 'step',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494197,
                    columnNumber: 8
                  },
                  {
                    functionName: 'runQueue',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494205,
                    columnNumber: 2
                  },
                  {
                    functionName: 'confirmTransition',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494452,
                    columnNumber: 2
                  },
                  {
                    functionName: 'transitionTo',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494354,
                    columnNumber: 7
                  },
                  {
                    functionName: 'replace',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494767,
                    columnNumber: 9
                  },
                  {
                    functionName: '',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494438,
                    columnNumber: 19
                  },
                  {
                    functionName: '_callee$',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 543646,
                    columnNumber: 12
                  },
                  {
                    functionName: 'tryCatch',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 479984,
                    columnNumber: 39
                  },
                  {
                    functionName: 'invoke',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 480215,
                    columnNumber: 21
                  },
                  {
                    functionName: '',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 480040,
                    columnNumber: 20
                  },
                  {
                    functionName: 'asyncGeneratorStep',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61581,
                    columnNumber: 23
                  },
                  {
                    functionName: '_next',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61603,
                    columnNumber: 8
                  }
                ],
                parent: {
                  description: 'Promise.then',
                  callFrames: [
                    {
                      functionName: 'asyncGeneratorStep',
                      scriptId: '10038',
                      url: 'http://172.16.34.153:8080/organization/app.js',
                      lineNumber: 61591,
                      columnNumber: 28
                    },
                    {
                      functionName: '_next',
                      scriptId: '10038',
                      url: 'http://172.16.34.153:8080/organization/app.js',
                      lineNumber: 61603,
                      columnNumber: 8
                    }
                  ],
                  parent: {
                    description: 'Promise.then',
                    callFrames: [
                      {
                        functionName: 'asyncGeneratorStep',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 61591,
                        columnNumber: 28
                      },
                      {
                        functionName: '_next',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 61603,
                        columnNumber: 8
                      },
                      {
                        functionName: '',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 61610,
                        columnNumber: 6
                      },
                      {
                        functionName: 'F',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 332027,
                        columnNumber: 27
                      },
                      {
                        functionName: '',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 61599,
                        columnNumber: 11
                      },
                      {
                        functionName: '',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 543668,
                        columnNumber: 16
                      },
                      {
                        functionName: 'iterator',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 494423,
                        columnNumber: 6
                      },
                      {
                        functionName: 'step',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 494197,
                        columnNumber: 8
                      },
                      {
                        functionName: 'runQueue',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 494205,
                        columnNumber: 2
                      },
                      {
                        functionName: 'confirmTransition',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 494452,
                        columnNumber: 2
                      },
                      {
                        functionName: 'transitionTo',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 494354,
                        columnNumber: 7
                      },
                      {
                        functionName: 'init',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 495010,
                        columnNumber: 12
                      },
                      {
                        functionName: 'beforeCreate',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 493017,
                        columnNumber: 21
                      },
                      {
                        functionName: 'invokeWithErrorHandling',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 505753,
                        columnNumber: 56
                      },
                      {
                        functionName: 'callHook',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 508107,
                        columnNumber: 6
                      },
                      {
                        functionName: 'Vue._init',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 508888,
                        columnNumber: 4
                      },
                      {
                        functionName: 'Vue',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 508969,
                        columnNumber: 7
                      },
                      {
                        functionName: './src/main.js',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 543531,
                        columnNumber: 0
                      },
                      {
                        functionName: '__webpack_require__',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 723,
                        columnNumber: 29
                      },
                      {
                        functionName: 'fn',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 100,
                        columnNumber: 19
                      },
                      {
                        functionName: '1',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 570697,
                        columnNumber: 17
                      },
                      {
                        functionName: '__webpack_require__',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 723,
                        columnNumber: 29
                      },
                      {
                        functionName: '',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 790,
                        columnNumber: 36
                      },
                      {
                        functionName: '',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 793,
                        columnNumber: 9
                      }
                    ]
                  }
                }
              }
            }
          }
        }
      }
    },
    _priority: 'Low',
    _resourceType: 'image',
    cache: {},
    pageref: 'page_3',
    request: {
      method: 'GET',
      url: 'https://link-oss.oss-cn-beijing.aliyuncs.com/default-head.jpeg',
      httpVersion: 'HTTP/1.1',
      headers: [],
      queryString: [],
      cookies: [],
      headersSize: 33,
      bodySize: 0
    },
    response: {
      status: 200,
      statusText: 'OK',
      httpVersion: 'HTTP/1.1',
      headers: [
        { name: 'Accept-Ranges', value: 'bytes' },
        { name: 'Content-Length', value: '10086' },
        { name: 'Content-MD5', value: 'PCKiowBz/MonaTqJOMjmuw==' },
        { name: 'Content-Type', value: 'image/jpeg' },
        { name: 'Date', value: 'Thu, 05 May 2022 10:09:31 GMT' },
        { name: 'ETag', value: '"3C22A2A30073FCCA27693A8938C8E6BB"' },
        { name: 'Last-Modified', value: 'Thu, 22 Aug 2019 03:22:07 GMT' },
        { name: 'Server', value: 'AliyunOSS' },
        { name: 'x-oss-hash-crc64ecma', value: '10178879434806100110' },
        { name: 'x-oss-object-type', value: 'Normal' },
        { name: 'x-oss-request-id', value: '6273A25BA645AE3034703125' },
        { name: 'x-oss-server-time', value: '9' },
        { name: 'x-oss-storage-class', value: 'Standard' }
      ],
      cookies: [],
      content: { size: 10086, mimeType: 'image/jpeg' },
      redirectURL: '',
      headersSize: 441,
      bodySize: 0,
      _transferSize: 0,
      // _error: null
    },
    serverIPAddress: '127.0.0.1',
    startedDateTime: '2022-05-05T10:32:54.393Z',
    time: 1.8450000025040936,
    timings: {
      blocked: 1.1219999998754355,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.5399999988842755,
      receive: 0.1830000037443824,
      // _blocked_queueing: 1.0849999998754356
    }
  },
  {
    // @ts-ignore
    _initiator: {
      type: 'script',
      stack: {
        callFrames: [
          {
            functionName: 'AbstractXHRObject._start',
            scriptId: '10038',
            url: 'http://172.16.34.153:8080/organization/app.js',
            lineNumber: 483231,
            columnNumber: 13
          },
          {
            functionName: '',
            scriptId: '10038',
            url: 'http://172.16.34.153:8080/organization/app.js',
            lineNumber: 483120,
            columnNumber: 9
          }
        ],
        parent: {
          description: 'setTimeout',
          callFrames: [
            {
              functionName: 'AbstractXHRObject',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 483119,
              columnNumber: 2
            },
            {
              functionName: 'XHRCorsObject',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 484496,
              columnNumber: 12
            },
            {
              functionName: 'InfoAjax',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 481981,
              columnNumber: 12
            },
            {
              functionName: 'InfoReceiver._getReceiver',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 482162,
              columnNumber: 11
            },
            {
              functionName: 'InfoReceiver.doXhr',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 482179,
              columnNumber: 25
            },
            {
              functionName: '',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 482148,
              columnNumber: 9
            }
          ],
          parent: {
            description: 'setTimeout',
            callFrames: [
              {
                functionName: 'InfoReceiver',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 482147,
                columnNumber: 2
              },
              {
                functionName: 'SockJS',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 482356,
                columnNumber: 13
              },
              {
                functionName: 'SockJSClient',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 524111,
                columnNumber: 17
              },
              {
                functionName: 'initSocket',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 524684,
                columnNumber: 11
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 524521,
                columnNumber: 0
              },
              {
                functionName:
                  './node_modules/_webpack-dev-server@3.11.3@webpack-dev-server/client/index.js?http://localhost:9567',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 524522,
                columnNumber: 29
              },
              {
                functionName: '__webpack_require__',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 723,
                columnNumber: 29
              },
              {
                functionName: 'fn',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 100,
                columnNumber: 19
              },
              {
                functionName: '1',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 570694,
                columnNumber: 0
              },
              {
                functionName: '__webpack_require__',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 723,
                columnNumber: 29
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 790,
                columnNumber: 36
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 793,
                columnNumber: 9
              }
            ]
          }
        }
      }
    },
    _priority: 'High',
    _resourceType: 'xhr',
    cache: {},
    connection: '114958',
    pageref: 'page_3',
    request: {
      method: 'GET',
      url: 'http://localhost:9567/sockjs-node/info?t=1651746774447',
      httpVersion: 'HTTP/1.1',
      headers: [
        { name: 'Accept', value: '*/*' },
        { name: 'Accept-Encoding', value: 'gzip, deflate, br' },
        { name: 'Accept-Language', value: 'zh-CN,zh;q=0.9,en;q=0.8' },
        { name: 'Connection', value: 'keep-alive' },
        { name: 'Host', value: 'localhost:9567' },
        { name: 'Origin', value: 'http://172.16.34.153:8080' },
        { name: 'Referer', value: 'http://172.16.34.153:8080/' },
        { name: 'Sec-Fetch-Dest', value: 'empty' },
        { name: 'Sec-Fetch-Mode', value: 'cors' },
        { name: 'Sec-Fetch-Site', value: 'cross-site' },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
        },
        {
          name: 'sec-ch-ua',
          value:
            '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"'
        },
        { name: 'sec-ch-ua-mobile', value: '?0' },
        { name: 'sec-ch-ua-platform', value: '"macOS"' }
      ],
      queryString: [{ name: 't', value: '1651746774447' }],
      cookies: [],
      headersSize: 595,
      bodySize: 0
    },
    response: {
      status: 200,
      statusText: 'OK',
      httpVersion: 'HTTP/1.1',
      headers: [
        { name: 'Access-Control-Allow-Credentials', value: 'true' },
        {
          name: 'Access-Control-Allow-Origin',
          value: 'http://172.16.34.153:8080'
        },
        {
          name: 'Cache-Control',
          value: 'no-store, no-cache, no-transform, must-revalidate, max-age=0'
        },
        { name: 'Connection', value: 'keep-alive' },
        { name: 'Content-Type', value: 'application/json; charset=UTF-8' },
        { name: 'Date', value: 'Thu, 05 May 2022 10:32:54 GMT' },
        { name: 'Keep-Alive', value: 'timeout=5' },
        { name: 'Transfer-Encoding', value: 'chunked' },
        { name: 'Vary', value: 'Origin' }
      ],
      cookies: [],
      content: { size: 78, mimeType: 'application/json', compression: -11 },
      redirectURL: '',
      headersSize: 365,
      bodySize: 89,
      _transferSize: 454,
      // _error: null
    },
    serverIPAddress: '127.0.0.1',
    startedDateTime: '2022-05-05T10:32:54.447Z',
    time: 3.3939999980349094,
    timings: {
      blocked: 1.7549999979967252,
      dns: 0.0040000000000000036,
      ssl: -1,
      connect: 0.48,
      send: 0.04700000000000004,
      wait: 0.8809999995881226,
      receive: 0.22700000045006163,
      // _blocked_queueing: 1.6489999979967251
    }
  },
  {
    // @ts-ignore
    _initiator: {
      type: 'script',
      stack: {
        callFrames: [
          {
            functionName: 'AbstractXHRObject._start',
            scriptId: '10038',
            url: 'http://172.16.34.153:8080/organization/app.js',
            lineNumber: 483231,
            columnNumber: 13
          },
          {
            functionName: '',
            scriptId: '10038',
            url: 'http://172.16.34.153:8080/organization/app.js',
            lineNumber: 483120,
            columnNumber: 9
          }
        ],
        parent: {
          description: 'setTimeout',
          callFrames: [
            {
              functionName: 'AbstractXHRObject',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 483119,
              columnNumber: 2
            },
            {
              functionName: 'XHRCorsObject',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 484496,
              columnNumber: 12
            },
            {
              functionName: 'InfoAjax',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 481981,
              columnNumber: 12
            },
            {
              functionName: 'InfoReceiver._getReceiver',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 482162,
              columnNumber: 11
            },
            {
              functionName: 'InfoReceiver.doXhr',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 482179,
              columnNumber: 25
            },
            {
              functionName: '',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 482148,
              columnNumber: 9
            }
          ],
          parent: {
            description: 'setTimeout',
            callFrames: [
              {
                functionName: 'InfoReceiver',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 482147,
                columnNumber: 2
              },
              {
                functionName: 'SockJS',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 482356,
                columnNumber: 13
              },
              {
                functionName: 'SockJSClient',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 524111,
                columnNumber: 17
              },
              {
                functionName: 'initSocket',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 524684,
                columnNumber: 11
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 524333,
                columnNumber: 0
              },
              {
                functionName:
                  './node_modules/_webpack-dev-server@3.11.3@webpack-dev-server/client/index.js?http://172.16.34.153:9567/sockjs-node',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 524334,
                columnNumber: 29
              },
              {
                functionName: '__webpack_require__',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 723,
                columnNumber: 29
              },
              {
                functionName: 'fn',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 100,
                columnNumber: 19
              },
              {
                functionName: '1',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 570696,
                columnNumber: 0
              },
              {
                functionName: '__webpack_require__',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 723,
                columnNumber: 29
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 790,
                columnNumber: 36
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 793,
                columnNumber: 9
              }
            ]
          }
        }
      }
    },
    _priority: 'High',
    _resourceType: 'xhr',
    cache: {},
    connection: '114964',
    pageref: 'page_3',
    request: {
      method: 'GET',
      url: 'http://172.16.34.153:9567/sockjs-node/info?t=1651746774447',
      httpVersion: 'HTTP/1.1',
      headers: [
        { name: 'Accept', value: '*/*' },
        { name: 'Accept-Encoding', value: 'gzip, deflate' },
        { name: 'Accept-Language', value: 'zh-CN,zh;q=0.9,en;q=0.8' },
        { name: 'Connection', value: 'keep-alive' },
        {
          name: 'Cookie',
          value:
            'vue_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIyOTciLCJzY29wZSI6WyJ3ZWItYXBwIl0sImV4cCI6MTY1OTUyMTM5MSwiaWF0IjoxNjUxNzQ1MzkxLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwianRpIjoiZjlmZGQ5MzMtN2ZjOC00NTM0LThjMmYtZTcyNTk3MzlhMWExIiwiY2xpZW50X2lkIjoiMCJ9.eKDDxuZ4Up-4_clZSzrau5n5PAkRPboJhjWW0xBWKW5HC7FeNyF3D1SL5E3g8iQJZJx8bD68eBfP_wu9gZH2bRN9GYZ_kiMG9AjpBTrVJ8TdugX7WUOdcW5EVGD863D8dhPkQqtZzzy50tcqatI_WjuHotyg73VOap1NPwJeHhMoCkNfxwtdCL5mcQrIUkNetDrYIWZJAf584JntwhioUGiapljITPLsINuG8PPtfQ-gt4bI0J3Yc1EpKNsLsQbe1LYr47WPXyf_FZZ_vg9THyDu_TkrMpQOg_6dev6oVDlFzasicOF3i16FQdzEG_JNJJAmSNoHcDuiDoY67GcM7g; sidebarStatus=0'
        },
        { name: 'Host', value: '172.16.34.153:9567' },
        { name: 'Origin', value: 'http://172.16.34.153:8080' },
        { name: 'Referer', value: 'http://172.16.34.153:8080/' },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
        }
      ],
      queryString: [{ name: 't', value: '1651746774447' }],
      cookies: [
        {
          name: 'vue_token',
          value:
            'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIyOTciLCJzY29wZSI6WyJ3ZWItYXBwIl0sImV4cCI6MTY1OTUyMTM5MSwiaWF0IjoxNjUxNzQ1MzkxLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwianRpIjoiZjlmZGQ5MzMtN2ZjOC00NTM0LThjMmYtZTcyNTk3MzlhMWExIiwiY2xpZW50X2lkIjoiMCJ9.eKDDxuZ4Up-4_clZSzrau5n5PAkRPboJhjWW0xBWKW5HC7FeNyF3D1SL5E3g8iQJZJx8bD68eBfP_wu9gZH2bRN9GYZ_kiMG9AjpBTrVJ8TdugX7WUOdcW5EVGD863D8dhPkQqtZzzy50tcqatI_WjuHotyg73VOap1NPwJeHhMoCkNfxwtdCL5mcQrIUkNetDrYIWZJAf584JntwhioUGiapljITPLsINuG8PPtfQ-gt4bI0J3Yc1EpKNsLsQbe1LYr47WPXyf_FZZ_vg9THyDu_TkrMpQOg_6dev6oVDlFzasicOF3i16FQdzEG_JNJJAmSNoHcDuiDoY67GcM7g',
          path: '/',
          domain: '172.16.34.153',
          expires: '1969-12-31T23:59:59.000Z',
          httpOnly: false,
          secure: false
        },
        {
          name: 'sidebarStatus',
          value: '0',
          path: '/',
          domain: '172.16.34.153',
          expires: '1969-12-31T23:59:59.000Z',
          httpOnly: false,
          secure: false
        }
      ],
      headersSize: 1025,
      bodySize: 0
    },
    response: {
      status: 200,
      statusText: 'OK',
      httpVersion: 'HTTP/1.1',
      headers: [
        { name: 'Access-Control-Allow-Credentials', value: 'true' },
        {
          name: 'Access-Control-Allow-Origin',
          value: 'http://172.16.34.153:8080'
        },
        {
          name: 'Cache-Control',
          value: 'no-store, no-cache, no-transform, must-revalidate, max-age=0'
        },
        { name: 'Connection', value: 'keep-alive' },
        { name: 'Content-Type', value: 'application/json; charset=UTF-8' },
        { name: 'Date', value: 'Thu, 05 May 2022 10:32:54 GMT' },
        { name: 'Keep-Alive', value: 'timeout=5' },
        { name: 'Transfer-Encoding', value: 'chunked' },
        { name: 'Vary', value: 'Origin' }
      ],
      cookies: [],
      content: { size: 79, mimeType: 'application/json', compression: -11 },
      redirectURL: '',
      headersSize: 365,
      bodySize: 90,
      _transferSize: 455,
      // _error: null
    },
    serverIPAddress: '172.16.34.153',
    startedDateTime: '2022-05-05T10:32:54.447Z',
    time: 3.331999999889173,
    timings: {
      blocked: 1.8170000018116552,
      dns: 0.0010000000000000009,
      ssl: -1,
      connect: 0.20500000000000002,
      send: 0.07100000000000001,
      wait: 1.15499999908288,
      receive: 0.08299999899463728,
      // _blocked_queueing: 1.7140000018116552
    }
  },
  {
    _fromCache: 'disk',
    // @ts-ignore
    _initiator: { type: 'other' },
    _priority: 'High',
    _resourceType: 'other',
    cache: {},
    pageref: 'page_3',
    request: {
      method: 'GET',
      url: 'https://static.linkmcn.cn/public/img/logo.ico',
      httpVersion: 'http/2.0',
      headers: [],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0
    },
    response: {
      status: 200,
      statusText: '',
      httpVersion: 'http/2.0',
      headers: [
        { name: 'accept-ranges', value: 'bytes' },
        { name: 'age', value: '32628' },
        { name: 'ali-swift-global-savetime', value: '1651712743' },
        { name: 'content-length', value: '1086' },
        { name: 'content-md5', value: 'wp8AnFLrS3a0GoEgUhnL+w==' },
        { name: 'content-type', value: 'image/vnd.microsoft.icon' },
        { name: 'date', value: 'Thu, 05 May 2022 01:05:43 GMT' },
        { name: 'eagleid', value: '6e5084a816517453716678059e' },
        { name: 'etag', value: '"C29F009C52EB4B76B41A81205219CBFB"' },
        { name: 'last-modified', value: 'Wed, 04 Dec 2019 05:11:43 GMT' },
        { name: 'server', value: 'Tengine' },
        { name: 'timing-allow-origin', value: '*' },
        {
          name: 'via',
          value:
            'cache19.l2cn1813[0,0,304-0,H], cache42.l2cn1813[1,0], kunlun9.cn210[0,0,200-0,H], kunlun10.cn210[2,0]'
        },
        { name: 'x-cache', value: 'HIT TCP_MEM_HIT dirn:10:296682311' },
        { name: 'x-oss-cdn-auth', value: 'success' },
        { name: 'x-oss-hash-crc64ecma', value: '14489098122683240589' },
        { name: 'x-oss-object-type', value: 'Normal' },
        { name: 'x-oss-request-id', value: '627322E7F908533535AE6D73' },
        { name: 'x-oss-server-time', value: '29' },
        { name: 'x-oss-storage-class', value: 'Standard' },
        { name: 'x-swift-cachetime', value: '84755' },
        { name: 'x-swift-savetime', value: 'Thu, 05 May 2022 01:33:08 GMT' }
      ],
      cookies: [],
      content: { size: 1086, mimeType: 'image/vnd.microsoft.icon' },
      redirectURL: '',
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      // _error: null
    },
    serverIPAddress: '127.0.0.1',
    startedDateTime: '2022-05-05T10:32:54.467Z',
    time: 1.8860000018321443,
    timings: {
      blocked: 1.354000002609333,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.3970000008142088,
      receive: 0.13499999840860255,
      // _blocked_queueing: 1.308000002609333
    }
  },
  {
    // @ts-ignore
    _initiator: {
      type: 'script',
      stack: {
        callFrames: [
          {
            functionName: 'dispatchXhrRequest',
            scriptId: '10038',
            url: 'http://172.16.34.153:8080/organization/app.js',
            lineNumber: 100330,
            columnNumber: 12
          },
          {
            functionName: 'xhrAdapter',
            scriptId: '10038',
            url: 'http://172.16.34.153:8080/organization/app.js',
            lineNumber: 100164,
            columnNumber: 9
          },
          {
            functionName: 'dispatchRequest',
            scriptId: '10038',
            url: 'http://172.16.34.153:8080/organization/app.js',
            lineNumber: 100810,
            columnNumber: 9
          }
        ],
        parent: {
          description: 'Promise.then',
          callFrames: [
            {
              functionName: 'request',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 100587,
              columnNumber: 22
            },
            {
              functionName: 'wrap',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 101176,
              columnNumber: 14
            },
            {
              functionName: '',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 548141,
              columnNumber: 4
            },
            {
              functionName: 'apiAxios',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 548128,
              columnNumber: 9
            },
            {
              functionName: 'getCount',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 528045,
              columnNumber: 30
            },
            {
              functionName: 'setMessageAsyn',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 546686,
              columnNumber: 26
            },
            {
              functionName: 'wrappedActionHandler',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 519058,
              columnNumber: 22
            },
            {
              functionName: 'dispatch',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 518765,
              columnNumber: 14
            },
            {
              functionName: 'boundDispatch',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 518659,
              columnNumber: 20
            },
            {
              functionName: 'mappedAction',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 519261,
              columnNumber: 19
            },
            {
              functionName: 'created',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 118371,
              columnNumber: 9
            },
            {
              functionName: 'invokeWithErrorHandling',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 505753,
              columnNumber: 56
            },
            {
              functionName: 'callHook',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 508107,
              columnNumber: 6
            },
            {
              functionName: 'Vue._init',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 508892,
              columnNumber: 4
            },
            {
              functionName: 'VueComponent',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509038,
              columnNumber: 11
            },
            {
              functionName: 'createComponentInstanceForVnode',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507180,
              columnNumber: 9
            },
            {
              functionName: 'init',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507011,
              columnNumber: 44
            },
            {
              functionName: 'createComponent',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509864,
              columnNumber: 8
            },
            {
              functionName: 'createElm',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509811,
              columnNumber: 8
            },
            {
              functionName: 'createChildren',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509939,
              columnNumber: 8
            },
            {
              functionName: 'createElm',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509840,
              columnNumber: 8
            },
            {
              functionName: 'createChildren',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509939,
              columnNumber: 8
            },
            {
              functionName: 'createElm',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509840,
              columnNumber: 8
            },
            {
              functionName: 'createChildren',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509939,
              columnNumber: 8
            },
            {
              functionName: 'createElm',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509840,
              columnNumber: 8
            },
            {
              functionName: 'patch',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 510363,
              columnNumber: 6
            },
            {
              functionName: 'Vue._update',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507833,
              columnNumber: 18
            },
            {
              functionName: 'updateComponent',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507954,
              columnNumber: 9
            },
            {
              functionName: 'get',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 508367,
              columnNumber: 24
            },
            {
              functionName: 'Watcher',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 508356,
              columnNumber: 11
            },
            {
              functionName: 'mountComponent',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507961,
              columnNumber: 2
            },
            {
              functionName:
                './node_modules/_vue@2.6.10@vue/dist/vue.esm.js.Vue.$mount',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 512938,
              columnNumber: 9
            },
            {
              functionName:
                './node_modules/_vue@2.6.10@vue/dist/vue.esm.js.Vue.$mount',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 515832,
              columnNumber: 15
            },
            {
              functionName: 'init',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507015,
              columnNumber: 12
            },
            {
              functionName: 'merged',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507198,
              columnNumber: 4
            },
            {
              functionName: 'createComponent',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509864,
              columnNumber: 8
            },
            {
              functionName: 'createElm',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 509811,
              columnNumber: 8
            },
            {
              functionName: 'updateChildren',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 510102,
              columnNumber: 10
            },
            {
              functionName: 'patchVnode',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 510205,
              columnNumber: 28
            },
            {
              functionName: 'patch',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 510368,
              columnNumber: 8
            },
            {
              functionName: 'Vue._update',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507836,
              columnNumber: 18
            },
            {
              functionName: 'updateComponent',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507954,
              columnNumber: 9
            },
            {
              functionName: 'get',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 508367,
              columnNumber: 24
            },
            {
              functionName: 'run',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 508442,
              columnNumber: 21
            },
            {
              functionName: 'flushSchedulerQueue',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 508198,
              columnNumber: 12
            },
            {
              functionName: '',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 505879,
              columnNumber: 11
            },
            {
              functionName: 'flushCallbacks',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 505805,
              columnNumber: 13
            }
          ],
          parent: {
            description: 'Promise.then',
            callFrames: [
              {
                functionName: 'timerFunc',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 505832,
                columnNumber: 6
              },
              {
                functionName: 'nextTick',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 505889,
                columnNumber: 4
              },
              {
                functionName: 'queueWatcher',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 508290,
                columnNumber: 6
              },
              {
                functionName: 'update',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 508432,
                columnNumber: 4
              },
              {
                functionName: 'notify',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 504631,
                columnNumber: 12
              },
              {
                functionName: 'reactiveSetter',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 504956,
                columnNumber: 10
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 495019,
                columnNumber: 17
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 495018,
                columnNumber: 16
              },
              {
                functionName: 'updateRoute',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494477,
                columnNumber: 18
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494355,
                columnNumber: 11
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494464,
                columnNumber: 6
              },
              {
                functionName: 'step',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494194,
                columnNumber: 6
              },
              {
                functionName: 'step',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494201,
                columnNumber: 8
              },
              {
                functionName: 'step',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494201,
                columnNumber: 8
              },
              {
                functionName: 'runQueue',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494205,
                columnNumber: 2
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494459,
                columnNumber: 4
              },
              {
                functionName: 'step',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494194,
                columnNumber: 6
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494198,
                columnNumber: 10
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494444,
                columnNumber: 10
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494237,
                columnNumber: 12
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494313,
                columnNumber: 14
              }
            ],
            parent: {
              description: 'Promise.then',
              callFrames: [
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494260,
                  columnNumber: 16
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494281,
                  columnNumber: 65
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494281,
                  columnNumber: 37
                },
                {
                  functionName: 'flatMapComponents',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494280,
                  columnNumber: 25
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494216,
                  columnNumber: 4
                },
                {
                  functionName: 'iterator',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494423,
                  columnNumber: 6
                },
                {
                  functionName: 'step',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494197,
                  columnNumber: 8
                },
                {
                  functionName: 'step',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494201,
                  columnNumber: 8
                },
                {
                  functionName: 'step',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494201,
                  columnNumber: 8
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494198,
                  columnNumber: 10
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494444,
                  columnNumber: 10
                },
                {
                  functionName: '_callee$',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 543625,
                  columnNumber: 12
                },
                {
                  functionName: 'tryCatch',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 479984,
                  columnNumber: 39
                },
                {
                  functionName: 'invoke',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 480215,
                  columnNumber: 21
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 480040,
                  columnNumber: 20
                },
                {
                  functionName: 'asyncGeneratorStep',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 61581,
                  columnNumber: 23
                },
                {
                  functionName: '_next',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 61603,
                  columnNumber: 8
                }
              ],
              parent: {
                description: 'Promise.then',
                callFrames: [
                  {
                    functionName: 'asyncGeneratorStep',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61591,
                    columnNumber: 28
                  },
                  {
                    functionName: '_next',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61603,
                    columnNumber: 8
                  },
                  {
                    functionName: '',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61610,
                    columnNumber: 6
                  },
                  {
                    functionName: 'F',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 332027,
                    columnNumber: 27
                  },
                  {
                    functionName: '',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61599,
                    columnNumber: 11
                  },
                  {
                    functionName: '',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 543668,
                    columnNumber: 16
                  },
                  {
                    functionName: 'iterator',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494423,
                    columnNumber: 6
                  },
                  {
                    functionName: 'step',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494197,
                    columnNumber: 8
                  },
                  {
                    functionName: 'runQueue',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494205,
                    columnNumber: 2
                  },
                  {
                    functionName: 'confirmTransition',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494452,
                    columnNumber: 2
                  },
                  {
                    functionName: 'transitionTo',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494354,
                    columnNumber: 7
                  },
                  {
                    functionName: 'replace',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494767,
                    columnNumber: 9
                  },
                  {
                    functionName: '',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494438,
                    columnNumber: 19
                  },
                  {
                    functionName: '_callee$',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 543646,
                    columnNumber: 12
                  },
                  {
                    functionName: 'tryCatch',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 479984,
                    columnNumber: 39
                  },
                  {
                    functionName: 'invoke',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 480215,
                    columnNumber: 21
                  },
                  {
                    functionName: '',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 480040,
                    columnNumber: 20
                  },
                  {
                    functionName: 'asyncGeneratorStep',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61581,
                    columnNumber: 23
                  },
                  {
                    functionName: '_next',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61603,
                    columnNumber: 8
                  }
                ],
                parent: {
                  description: 'Promise.then',
                  callFrames: [
                    {
                      functionName: 'asyncGeneratorStep',
                      scriptId: '10038',
                      url: 'http://172.16.34.153:8080/organization/app.js',
                      lineNumber: 61591,
                      columnNumber: 28
                    },
                    {
                      functionName: '_next',
                      scriptId: '10038',
                      url: 'http://172.16.34.153:8080/organization/app.js',
                      lineNumber: 61603,
                      columnNumber: 8
                    }
                  ],
                  parent: {
                    description: 'Promise.then',
                    callFrames: [
                      {
                        functionName: 'asyncGeneratorStep',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 61591,
                        columnNumber: 28
                      },
                      {
                        functionName: '_next',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 61603,
                        columnNumber: 8
                      },
                      {
                        functionName: '',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 61610,
                        columnNumber: 6
                      },
                      {
                        functionName: 'F',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 332027,
                        columnNumber: 27
                      },
                      {
                        functionName: '',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 61599,
                        columnNumber: 11
                      },
                      {
                        functionName: '',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 543668,
                        columnNumber: 16
                      },
                      {
                        functionName: 'iterator',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 494423,
                        columnNumber: 6
                      },
                      {
                        functionName: 'step',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 494197,
                        columnNumber: 8
                      },
                      {
                        functionName: 'runQueue',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 494205,
                        columnNumber: 2
                      },
                      {
                        functionName: 'confirmTransition',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 494452,
                        columnNumber: 2
                      },
                      {
                        functionName: 'transitionTo',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 494354,
                        columnNumber: 7
                      },
                      {
                        functionName: 'init',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 495010,
                        columnNumber: 12
                      },
                      {
                        functionName: 'beforeCreate',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 493017,
                        columnNumber: 21
                      },
                      {
                        functionName: 'invokeWithErrorHandling',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 505753,
                        columnNumber: 56
                      },
                      {
                        functionName: 'callHook',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 508107,
                        columnNumber: 6
                      },
                      {
                        functionName: 'Vue._init',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 508888,
                        columnNumber: 4
                      },
                      {
                        functionName: 'Vue',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 508969,
                        columnNumber: 7
                      },
                      {
                        functionName: './src/main.js',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 543531,
                        columnNumber: 0
                      },
                      {
                        functionName: '__webpack_require__',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 723,
                        columnNumber: 29
                      },
                      {
                        functionName: 'fn',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 100,
                        columnNumber: 19
                      },
                      {
                        functionName: '1',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 570697,
                        columnNumber: 17
                      },
                      {
                        functionName: '__webpack_require__',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 723,
                        columnNumber: 29
                      },
                      {
                        functionName: '',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 790,
                        columnNumber: 36
                      },
                      {
                        functionName: '',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 793,
                        columnNumber: 9
                      }
                    ]
                  }
                }
              }
            }
          }
        }
      }
    },
    _priority: 'High',
    _resourceType: 'xhr',
    cache: {},
    connection: '114937',
    pageref: 'page_3',
    request: {
      method: 'POST',
      url: 'http://testapi.linkmcn.cn/linkmcn-common/api/message/getCount',
      httpVersion: 'HTTP/1.1',
      headers: [
        { name: 'Accept', value: 'application/json, text/plain, */*' },
        { name: 'Accept-Encoding', value: 'gzip, deflate' },
        { name: 'Accept-Language', value: 'zh-CN,zh;q=0.9,en;q=0.8' },
        {
          name: 'Authorization',
          value:
            'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIyOTciLCJzY29wZSI6WyJ3ZWItYXBwIl0sImV4cCI6MTY1OTUyMTM5MSwiaWF0IjoxNjUxNzQ1MzkxLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwianRpIjoiZjlmZGQ5MzMtN2ZjOC00NTM0LThjMmYtZTcyNTk3MzlhMWExIiwiY2xpZW50X2lkIjoiMCJ9.eKDDxuZ4Up-4_clZSzrau5n5PAkRPboJhjWW0xBWKW5HC7FeNyF3D1SL5E3g8iQJZJx8bD68eBfP_wu9gZH2bRN9GYZ_kiMG9AjpBTrVJ8TdugX7WUOdcW5EVGD863D8dhPkQqtZzzy50tcqatI_WjuHotyg73VOap1NPwJeHhMoCkNfxwtdCL5mcQrIUkNetDrYIWZJAf584JntwhioUGiapljITPLsINuG8PPtfQ-gt4bI0J3Yc1EpKNsLsQbe1LYr47WPXyf_FZZ_vg9THyDu_TkrMpQOg_6dev6oVDlFzasicOF3i16FQdzEG_JNJJAmSNoHcDuiDoY67GcM7g'
        },
        { name: 'Content-Length', value: '30' },
        { name: 'Content-Type', value: 'application/json;charset=UTF-8' },
        { name: 'Host', value: 'testapi.linkmcn.cn' },
        { name: 'Origin', value: 'http://172.16.34.153:8080' },
        { name: 'Proxy-Connection', value: 'keep-alive' },
        { name: 'Referer', value: 'http://172.16.34.153:8080/' },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
        },
        { name: 'client-source', value: '2' },
        { name: 'loginDevice', value: '0' },
        { name: 'source', value: '0' },
        { name: 'traceId', value: 'd1fea925-b62f-4bb9-89d7-d8ae15de65a9' }
      ],
      queryString: [],
      cookies: [],
      headersSize: 1210,
      bodySize: 30,
      postData: {
        mimeType: 'application/json;charset=UTF-8',
        text: '{"state":0,"messageKind":null}'
      }
    },
    response: {
      status: 200,
      statusText: 'OK',
      httpVersion: 'HTTP/1.1',
      headers: [
        { name: 'Access-Control-Allow-Credentials', value: 'true' },
        {
          name: 'Access-Control-Allow-Origin',
          value: 'http://172.16.34.153:8080'
        },
        { name: 'Access-Control-Expose-Headers', value: 'traceid' },
        { name: 'Access-Control-Max-Age', value: '3600' },
        {
          name: 'Cache-Control',
          value: 'no-cache, no-store, max-age=0, must-revalidate'
        },
        { name: 'Connection', value: 'keep-alive' },
        { name: 'Content-Encoding', value: 'gzip' },
        { name: 'Content-Type', value: 'application/json;charset=UTF-8' },
        { name: 'Date', value: 'Thu, 05 May 2022 10:32:54 GMT' },
        { name: 'Expires', value: '0' },
        { name: 'Keep-Alive', value: 'timeout=4' },
        { name: 'Pragma', value: 'no-cache' },
        { name: 'Proxy-Connection', value: 'keep-alive' },
        { name: 'Traceid', value: 'd1fea925-b62f-4bb9-89d7-d8ae15de65a9' },
        { name: 'Transfer-Encoding', value: 'chunked' },
        {
          name: 'Userupdatestatus',
          value: '"{\\"auditStatus\\":0,\\"messageInfo\\":0}"'
        },
        { name: 'Vary', value: 'Origin' },
        { name: 'Vary', value: 'Access-Control-Request-Method' },
        { name: 'Vary', value: 'Access-Control-Request-Headers' },
        { name: 'X-Content-Type-Options', value: 'nosniff' },
        { name: 'X-Xss-Protection', value: '1; mode=block' }
      ],
      cookies: [],
      content: { size: 57, mimeType: 'application/json', compression: -35 },
      redirectURL: '',
      headersSize: 751,
      bodySize: 92,
      _transferSize: 843,
      // _error: null
    },
    serverIPAddress: '127.0.0.1',
    startedDateTime: '2022-05-05T10:32:54.394Z',
    time: 103.48200000225916,
    timings: {
      blocked: 0.44500000224402175,
      dns: -1,
      ssl: -1,
      connect: 0.292,
      send: 0.05499999999999999,
      wait: 102.4560000008333,
      receive: 0.23399999918183312,
      // _blocked_queueing: 0.37200000224402174
    }
  },
  {
    // @ts-ignore
    _initiator: {
      type: 'script',
      stack: {
        callFrames: [
          {
            functionName: 'dispatchXhrRequest',
            scriptId: '10038',
            url: 'http://172.16.34.153:8080/organization/app.js',
            lineNumber: 100330,
            columnNumber: 12
          },
          {
            functionName: 'xhrAdapter',
            scriptId: '10038',
            url: 'http://172.16.34.153:8080/organization/app.js',
            lineNumber: 100164,
            columnNumber: 9
          },
          {
            functionName: 'dispatchRequest',
            scriptId: '10038',
            url: 'http://172.16.34.153:8080/organization/app.js',
            lineNumber: 100810,
            columnNumber: 9
          }
        ],
        parent: {
          description: 'Promise.then',
          callFrames: [
            {
              functionName: 'request',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 100587,
              columnNumber: 22
            },
            {
              functionName: 'wrap',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 101176,
              columnNumber: 14
            },
            {
              functionName: '',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 548141,
              columnNumber: 4
            },
            {
              functionName: 'apiAxios',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 548128,
              columnNumber: 9
            },
            {
              functionName: 'kpiSearch',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 530207,
              columnNumber: 30
            },
            {
              functionName: 'getKPIInfo',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 143914,
              columnNumber: 30
            },
            {
              functionName: 'scheduleTime',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 143756,
              columnNumber: 11
            },
            {
              functionName: 'run',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 508456,
              columnNumber: 18
            },
            {
              functionName: 'flushSchedulerQueue',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 508198,
              columnNumber: 12
            },
            {
              functionName: '',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 505879,
              columnNumber: 11
            },
            {
              functionName: 'flushCallbacks',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 505805,
              columnNumber: 13
            }
          ],
          parent: {
            description: 'Promise.then',
            callFrames: [
              {
                functionName: 'timerFunc',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 505832,
                columnNumber: 6
              },
              {
                functionName: 'nextTick',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 505889,
                columnNumber: 4
              },
              {
                functionName: 'queueWatcher',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 508290,
                columnNumber: 6
              },
              {
                functionName: 'update',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 508432,
                columnNumber: 4
              },
              {
                functionName: 'notify',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 504631,
                columnNumber: 12
              },
              {
                functionName: 'reactiveSetter',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 504956,
                columnNumber: 10
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 495019,
                columnNumber: 17
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 495018,
                columnNumber: 16
              },
              {
                functionName: 'updateRoute',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494477,
                columnNumber: 18
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494355,
                columnNumber: 11
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494464,
                columnNumber: 6
              },
              {
                functionName: 'step',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494194,
                columnNumber: 6
              },
              {
                functionName: 'step',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494201,
                columnNumber: 8
              },
              {
                functionName: 'step',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494201,
                columnNumber: 8
              },
              {
                functionName: 'runQueue',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494205,
                columnNumber: 2
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494459,
                columnNumber: 4
              },
              {
                functionName: 'step',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494194,
                columnNumber: 6
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494198,
                columnNumber: 10
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494444,
                columnNumber: 10
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494237,
                columnNumber: 12
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494313,
                columnNumber: 14
              }
            ],
            parent: {
              description: 'Promise.then',
              callFrames: [
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494260,
                  columnNumber: 16
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494281,
                  columnNumber: 65
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494281,
                  columnNumber: 37
                },
                {
                  functionName: 'flatMapComponents',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494280,
                  columnNumber: 25
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494216,
                  columnNumber: 4
                },
                {
                  functionName: 'iterator',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494423,
                  columnNumber: 6
                },
                {
                  functionName: 'step',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494197,
                  columnNumber: 8
                },
                {
                  functionName: 'step',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494201,
                  columnNumber: 8
                },
                {
                  functionName: 'step',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494201,
                  columnNumber: 8
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494198,
                  columnNumber: 10
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494444,
                  columnNumber: 10
                },
                {
                  functionName: '_callee$',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 543625,
                  columnNumber: 12
                },
                {
                  functionName: 'tryCatch',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 479984,
                  columnNumber: 39
                },
                {
                  functionName: 'invoke',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 480215,
                  columnNumber: 21
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 480040,
                  columnNumber: 20
                },
                {
                  functionName: 'asyncGeneratorStep',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 61581,
                  columnNumber: 23
                },
                {
                  functionName: '_next',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 61603,
                  columnNumber: 8
                }
              ],
              parent: {
                description: 'Promise.then',
                callFrames: [
                  {
                    functionName: 'asyncGeneratorStep',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61591,
                    columnNumber: 28
                  },
                  {
                    functionName: '_next',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61603,
                    columnNumber: 8
                  },
                  {
                    functionName: '',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61610,
                    columnNumber: 6
                  },
                  {
                    functionName: 'F',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 332027,
                    columnNumber: 27
                  },
                  {
                    functionName: '',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61599,
                    columnNumber: 11
                  },
                  {
                    functionName: '',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 543668,
                    columnNumber: 16
                  },
                  {
                    functionName: 'iterator',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494423,
                    columnNumber: 6
                  },
                  {
                    functionName: 'step',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494197,
                    columnNumber: 8
                  },
                  {
                    functionName: 'runQueue',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494205,
                    columnNumber: 2
                  },
                  {
                    functionName: 'confirmTransition',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494452,
                    columnNumber: 2
                  },
                  {
                    functionName: 'transitionTo',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494354,
                    columnNumber: 7
                  },
                  {
                    functionName: 'replace',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494767,
                    columnNumber: 9
                  },
                  {
                    functionName: '',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494438,
                    columnNumber: 19
                  },
                  {
                    functionName: '_callee$',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 543646,
                    columnNumber: 12
                  },
                  {
                    functionName: 'tryCatch',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 479984,
                    columnNumber: 39
                  },
                  {
                    functionName: 'invoke',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 480215,
                    columnNumber: 21
                  },
                  {
                    functionName: '',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 480040,
                    columnNumber: 20
                  },
                  {
                    functionName: 'asyncGeneratorStep',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61581,
                    columnNumber: 23
                  },
                  {
                    functionName: '_next',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61603,
                    columnNumber: 8
                  }
                ],
                parent: {
                  description: 'Promise.then',
                  callFrames: [
                    {
                      functionName: 'asyncGeneratorStep',
                      scriptId: '10038',
                      url: 'http://172.16.34.153:8080/organization/app.js',
                      lineNumber: 61591,
                      columnNumber: 28
                    },
                    {
                      functionName: '_next',
                      scriptId: '10038',
                      url: 'http://172.16.34.153:8080/organization/app.js',
                      lineNumber: 61603,
                      columnNumber: 8
                    }
                  ],
                  parent: {
                    description: 'Promise.then',
                    callFrames: [
                      {
                        functionName: 'asyncGeneratorStep',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 61591,
                        columnNumber: 28
                      },
                      {
                        functionName: '_next',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 61603,
                        columnNumber: 8
                      },
                      {
                        functionName: '',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 61610,
                        columnNumber: 6
                      },
                      {
                        functionName: 'F',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 332027,
                        columnNumber: 27
                      },
                      {
                        functionName: '',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 61599,
                        columnNumber: 11
                      },
                      {
                        functionName: '',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 543668,
                        columnNumber: 16
                      },
                      {
                        functionName: 'iterator',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 494423,
                        columnNumber: 6
                      },
                      {
                        functionName: 'step',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 494197,
                        columnNumber: 8
                      },
                      {
                        functionName: 'runQueue',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 494205,
                        columnNumber: 2
                      },
                      {
                        functionName: 'confirmTransition',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 494452,
                        columnNumber: 2
                      },
                      {
                        functionName: 'transitionTo',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 494354,
                        columnNumber: 7
                      },
                      {
                        functionName: 'init',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 495010,
                        columnNumber: 12
                      },
                      {
                        functionName: 'beforeCreate',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 493017,
                        columnNumber: 21
                      },
                      {
                        functionName: 'invokeWithErrorHandling',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 505753,
                        columnNumber: 56
                      },
                      {
                        functionName: 'callHook',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 508107,
                        columnNumber: 6
                      },
                      {
                        functionName: 'Vue._init',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 508888,
                        columnNumber: 4
                      },
                      {
                        functionName: 'Vue',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 508969,
                        columnNumber: 7
                      },
                      {
                        functionName: './src/main.js',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 543531,
                        columnNumber: 0
                      },
                      {
                        functionName: '__webpack_require__',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 723,
                        columnNumber: 29
                      },
                      {
                        functionName: 'fn',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 100,
                        columnNumber: 19
                      },
                      {
                        functionName: '1',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 570697,
                        columnNumber: 17
                      },
                      {
                        functionName: '__webpack_require__',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 723,
                        columnNumber: 29
                      },
                      {
                        functionName: '',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 790,
                        columnNumber: 36
                      },
                      {
                        functionName: '',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 793,
                        columnNumber: 9
                      }
                    ]
                  }
                }
              }
            }
          }
        }
      }
    },
    _priority: 'High',
    _resourceType: 'xhr',
    cache: {},
    connection: '114952',
    pageref: 'page_3',
    request: {
      method: 'POST',
      url: 'http://testapi.linkmcn.cn/linkmcn-task/api/schedule/live/kpi/search',
      httpVersion: 'HTTP/1.1',
      headers: [
        { name: 'Accept', value: 'application/json, text/plain, */*' },
        { name: 'Accept-Encoding', value: 'gzip, deflate' },
        { name: 'Accept-Language', value: 'zh-CN,zh;q=0.9,en;q=0.8' },
        {
          name: 'Authorization',
          value:
            'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIyOTciLCJzY29wZSI6WyJ3ZWItYXBwIl0sImV4cCI6MTY1OTUyMTM5MSwiaWF0IjoxNjUxNzQ1MzkxLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwianRpIjoiZjlmZGQ5MzMtN2ZjOC00NTM0LThjMmYtZTcyNTk3MzlhMWExIiwiY2xpZW50X2lkIjoiMCJ9.eKDDxuZ4Up-4_clZSzrau5n5PAkRPboJhjWW0xBWKW5HC7FeNyF3D1SL5E3g8iQJZJx8bD68eBfP_wu9gZH2bRN9GYZ_kiMG9AjpBTrVJ8TdugX7WUOdcW5EVGD863D8dhPkQqtZzzy50tcqatI_WjuHotyg73VOap1NPwJeHhMoCkNfxwtdCL5mcQrIUkNetDrYIWZJAf584JntwhioUGiapljITPLsINuG8PPtfQ-gt4bI0J3Yc1EpKNsLsQbe1LYr47WPXyf_FZZ_vg9THyDu_TkrMpQOg_6dev6oVDlFzasicOF3i16FQdzEG_JNJJAmSNoHcDuiDoY67GcM7g'
        },
        { name: 'Content-Length', value: '38' },
        { name: 'Content-Type', value: 'application/json;charset=UTF-8' },
        { name: 'Host', value: 'testapi.linkmcn.cn' },
        { name: 'Origin', value: 'http://172.16.34.153:8080' },
        { name: 'Proxy-Connection', value: 'keep-alive' },
        { name: 'Referer', value: 'http://172.16.34.153:8080/' },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
        },
        { name: 'client-source', value: '2' },
        { name: 'loginDevice', value: '0' },
        { name: 'source', value: '0' },
        { name: 'traceId', value: '4b688317-1a00-4739-85e7-fba2df7b7402' }
      ],
      queryString: [],
      cookies: [],
      headersSize: 1216,
      bodySize: 38,
      postData: {
        mimeType: 'application/json;charset=UTF-8',
        text: '{"month":5,"year":2022,"streamerId":2}'
      }
    },
    response: {
      status: 200,
      statusText: 'OK',
      httpVersion: 'HTTP/1.1',
      headers: [
        { name: 'Access-Control-Allow-Credentials', value: 'true' },
        {
          name: 'Access-Control-Allow-Origin',
          value: 'http://172.16.34.153:8080'
        },
        { name: 'Access-Control-Expose-Headers', value: 'traceid' },
        { name: 'Access-Control-Max-Age', value: '3600' },
        {
          name: 'Cache-Control',
          value: 'no-cache, no-store, max-age=0, must-revalidate'
        },
        { name: 'Connection', value: 'keep-alive' },
        { name: 'Content-Encoding', value: 'gzip' },
        { name: 'Content-Type', value: 'application/json;charset=UTF-8' },
        { name: 'Date', value: 'Thu, 05 May 2022 10:32:54 GMT' },
        { name: 'Expires', value: '0' },
        { name: 'Keep-Alive', value: 'timeout=4' },
        { name: 'Pragma', value: 'no-cache' },
        { name: 'Proxy-Connection', value: 'keep-alive' },
        { name: 'Traceid', value: '4b688317-1a00-4739-85e7-fba2df7b7402' },
        { name: 'Transfer-Encoding', value: 'chunked' },
        {
          name: 'Userupdatestatus',
          value: '"{\\"auditStatus\\":0,\\"messageInfo\\":0}"'
        },
        { name: 'Vary', value: 'Origin' },
        { name: 'Vary', value: 'Access-Control-Request-Method' },
        { name: 'Vary', value: 'Access-Control-Request-Headers' },
        { name: 'X-Content-Type-Options', value: 'nosniff' },
        { name: 'X-Xss-Protection', value: '1; mode=block' }
      ],
      cookies: [],
      content: { size: 809, mimeType: 'application/json', compression: 502 },
      redirectURL: '',
      headersSize: 751,
      bodySize: 307,
      _transferSize: 1058,
      // _error: null
    },
    serverIPAddress: '127.0.0.1',
    startedDateTime: '2022-05-05T10:32:54.396Z',
    time: 123.19399999978486,
    timings: {
      blocked: 0.4199999986060429,
      dns: -1,
      ssl: -1,
      connect: 0.179,
      send: 0.05400000000000002,
      wait: 121.64800000081863,
      receive: 0.893000000360189,
      // _blocked_queueing: 0.37199999860604294
    }
  },
  {
    // @ts-ignore
    _initiator: {
      type: 'script',
      stack: {
        callFrames: [
          {
            functionName: 'dispatchXhrRequest',
            scriptId: '10038',
            url: 'http://172.16.34.153:8080/organization/app.js',
            lineNumber: 100330,
            columnNumber: 12
          },
          {
            functionName: 'xhrAdapter',
            scriptId: '10038',
            url: 'http://172.16.34.153:8080/organization/app.js',
            lineNumber: 100164,
            columnNumber: 9
          },
          {
            functionName: 'dispatchRequest',
            scriptId: '10038',
            url: 'http://172.16.34.153:8080/organization/app.js',
            lineNumber: 100810,
            columnNumber: 9
          }
        ],
        parent: {
          description: 'Promise.then',
          callFrames: [
            {
              functionName: 'request',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 100587,
              columnNumber: 22
            },
            {
              functionName: 'wrap',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 101176,
              columnNumber: 14
            },
            {
              functionName: '',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 548141,
              columnNumber: 4
            },
            {
              functionName: 'apiAxios',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 548128,
              columnNumber: 9
            },
            {
              functionName: 'getMonthLive',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 530000,
              columnNumber: 30
            },
            {
              functionName: 'getListCurrMonth',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 143838,
              columnNumber: 33
            },
            {
              functionName: 'scheduleTime',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 143754,
              columnNumber: 11
            },
            {
              functionName: 'run',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 508456,
              columnNumber: 18
            },
            {
              functionName: 'flushSchedulerQueue',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 508198,
              columnNumber: 12
            },
            {
              functionName: '',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 505879,
              columnNumber: 11
            },
            {
              functionName: 'flushCallbacks',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 505805,
              columnNumber: 13
            }
          ],
          parent: {
            description: 'Promise.then',
            callFrames: [
              {
                functionName: 'timerFunc',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 505832,
                columnNumber: 6
              },
              {
                functionName: 'nextTick',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 505889,
                columnNumber: 4
              },
              {
                functionName: 'queueWatcher',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 508290,
                columnNumber: 6
              },
              {
                functionName: 'update',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 508432,
                columnNumber: 4
              },
              {
                functionName: 'notify',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 504631,
                columnNumber: 12
              },
              {
                functionName: 'reactiveSetter',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 504956,
                columnNumber: 10
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 495019,
                columnNumber: 17
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 495018,
                columnNumber: 16
              },
              {
                functionName: 'updateRoute',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494477,
                columnNumber: 18
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494355,
                columnNumber: 11
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494464,
                columnNumber: 6
              },
              {
                functionName: 'step',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494194,
                columnNumber: 6
              },
              {
                functionName: 'step',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494201,
                columnNumber: 8
              },
              {
                functionName: 'step',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494201,
                columnNumber: 8
              },
              {
                functionName: 'runQueue',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494205,
                columnNumber: 2
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494459,
                columnNumber: 4
              },
              {
                functionName: 'step',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494194,
                columnNumber: 6
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494198,
                columnNumber: 10
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494444,
                columnNumber: 10
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494237,
                columnNumber: 12
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494313,
                columnNumber: 14
              }
            ],
            parent: {
              description: 'Promise.then',
              callFrames: [
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494260,
                  columnNumber: 16
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494281,
                  columnNumber: 65
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494281,
                  columnNumber: 37
                },
                {
                  functionName: 'flatMapComponents',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494280,
                  columnNumber: 25
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494216,
                  columnNumber: 4
                },
                {
                  functionName: 'iterator',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494423,
                  columnNumber: 6
                },
                {
                  functionName: 'step',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494197,
                  columnNumber: 8
                },
                {
                  functionName: 'step',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494201,
                  columnNumber: 8
                },
                {
                  functionName: 'step',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494201,
                  columnNumber: 8
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494198,
                  columnNumber: 10
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494444,
                  columnNumber: 10
                },
                {
                  functionName: '_callee$',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 543625,
                  columnNumber: 12
                },
                {
                  functionName: 'tryCatch',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 479984,
                  columnNumber: 39
                },
                {
                  functionName: 'invoke',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 480215,
                  columnNumber: 21
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 480040,
                  columnNumber: 20
                },
                {
                  functionName: 'asyncGeneratorStep',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 61581,
                  columnNumber: 23
                },
                {
                  functionName: '_next',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 61603,
                  columnNumber: 8
                }
              ],
              parent: {
                description: 'Promise.then',
                callFrames: [
                  {
                    functionName: 'asyncGeneratorStep',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61591,
                    columnNumber: 28
                  },
                  {
                    functionName: '_next',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61603,
                    columnNumber: 8
                  },
                  {
                    functionName: '',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61610,
                    columnNumber: 6
                  },
                  {
                    functionName: 'F',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 332027,
                    columnNumber: 27
                  },
                  {
                    functionName: '',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61599,
                    columnNumber: 11
                  },
                  {
                    functionName: '',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 543668,
                    columnNumber: 16
                  },
                  {
                    functionName: 'iterator',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494423,
                    columnNumber: 6
                  },
                  {
                    functionName: 'step',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494197,
                    columnNumber: 8
                  },
                  {
                    functionName: 'runQueue',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494205,
                    columnNumber: 2
                  },
                  {
                    functionName: 'confirmTransition',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494452,
                    columnNumber: 2
                  },
                  {
                    functionName: 'transitionTo',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494354,
                    columnNumber: 7
                  },
                  {
                    functionName: 'replace',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494767,
                    columnNumber: 9
                  },
                  {
                    functionName: '',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494438,
                    columnNumber: 19
                  },
                  {
                    functionName: '_callee$',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 543646,
                    columnNumber: 12
                  },
                  {
                    functionName: 'tryCatch',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 479984,
                    columnNumber: 39
                  },
                  {
                    functionName: 'invoke',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 480215,
                    columnNumber: 21
                  },
                  {
                    functionName: '',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 480040,
                    columnNumber: 20
                  },
                  {
                    functionName: 'asyncGeneratorStep',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61581,
                    columnNumber: 23
                  },
                  {
                    functionName: '_next',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61603,
                    columnNumber: 8
                  }
                ],
                parent: {
                  description: 'Promise.then',
                  callFrames: [
                    {
                      functionName: 'asyncGeneratorStep',
                      scriptId: '10038',
                      url: 'http://172.16.34.153:8080/organization/app.js',
                      lineNumber: 61591,
                      columnNumber: 28
                    },
                    {
                      functionName: '_next',
                      scriptId: '10038',
                      url: 'http://172.16.34.153:8080/organization/app.js',
                      lineNumber: 61603,
                      columnNumber: 8
                    }
                  ],
                  parent: {
                    description: 'Promise.then',
                    callFrames: [
                      {
                        functionName: 'asyncGeneratorStep',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 61591,
                        columnNumber: 28
                      },
                      {
                        functionName: '_next',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 61603,
                        columnNumber: 8
                      },
                      {
                        functionName: '',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 61610,
                        columnNumber: 6
                      },
                      {
                        functionName: 'F',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 332027,
                        columnNumber: 27
                      },
                      {
                        functionName: '',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 61599,
                        columnNumber: 11
                      },
                      {
                        functionName: '',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 543668,
                        columnNumber: 16
                      },
                      {
                        functionName: 'iterator',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 494423,
                        columnNumber: 6
                      },
                      {
                        functionName: 'step',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 494197,
                        columnNumber: 8
                      },
                      {
                        functionName: 'runQueue',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 494205,
                        columnNumber: 2
                      },
                      {
                        functionName: 'confirmTransition',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 494452,
                        columnNumber: 2
                      },
                      {
                        functionName: 'transitionTo',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 494354,
                        columnNumber: 7
                      },
                      {
                        functionName: 'init',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 495010,
                        columnNumber: 12
                      },
                      {
                        functionName: 'beforeCreate',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 493017,
                        columnNumber: 21
                      },
                      {
                        functionName: 'invokeWithErrorHandling',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 505753,
                        columnNumber: 56
                      },
                      {
                        functionName: 'callHook',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 508107,
                        columnNumber: 6
                      },
                      {
                        functionName: 'Vue._init',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 508888,
                        columnNumber: 4
                      },
                      {
                        functionName: 'Vue',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 508969,
                        columnNumber: 7
                      },
                      {
                        functionName: './src/main.js',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 543531,
                        columnNumber: 0
                      },
                      {
                        functionName: '__webpack_require__',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 723,
                        columnNumber: 29
                      },
                      {
                        functionName: 'fn',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 100,
                        columnNumber: 19
                      },
                      {
                        functionName: '1',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 570697,
                        columnNumber: 17
                      },
                      {
                        functionName: '__webpack_require__',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 723,
                        columnNumber: 29
                      },
                      {
                        functionName: '',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 790,
                        columnNumber: 36
                      },
                      {
                        functionName: '',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 793,
                        columnNumber: 9
                      }
                    ]
                  }
                }
              }
            }
          }
        }
      }
    },
    _priority: 'High',
    _resourceType: 'xhr',
    cache: {},
    connection: '114947',
    pageref: 'page_3',
    request: {
      method: 'POST',
      url: 'http://testapi.linkmcn.cn/linkmcn-task/api/schedule/live/session/month/table',
      httpVersion: 'HTTP/1.1',
      headers: [
        { name: 'Accept', value: 'application/json, text/plain, */*' },
        { name: 'Accept-Encoding', value: 'gzip, deflate' },
        { name: 'Accept-Language', value: 'zh-CN,zh;q=0.9,en;q=0.8' },
        {
          name: 'Authorization',
          value:
            'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIyOTciLCJzY29wZSI6WyJ3ZWItYXBwIl0sImV4cCI6MTY1OTUyMTM5MSwiaWF0IjoxNjUxNzQ1MzkxLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwianRpIjoiZjlmZGQ5MzMtN2ZjOC00NTM0LThjMmYtZTcyNTk3MzlhMWExIiwiY2xpZW50X2lkIjoiMCJ9.eKDDxuZ4Up-4_clZSzrau5n5PAkRPboJhjWW0xBWKW5HC7FeNyF3D1SL5E3g8iQJZJx8bD68eBfP_wu9gZH2bRN9GYZ_kiMG9AjpBTrVJ8TdugX7WUOdcW5EVGD863D8dhPkQqtZzzy50tcqatI_WjuHotyg73VOap1NPwJeHhMoCkNfxwtdCL5mcQrIUkNetDrYIWZJAf584JntwhioUGiapljITPLsINuG8PPtfQ-gt4bI0J3Yc1EpKNsLsQbe1LYr47WPXyf_FZZ_vg9THyDu_TkrMpQOg_6dev6oVDlFzasicOF3i16FQdzEG_JNJJAmSNoHcDuiDoY67GcM7g'
        },
        { name: 'Content-Length', value: '45' },
        { name: 'Content-Type', value: 'application/json;charset=UTF-8' },
        { name: 'Host', value: 'testapi.linkmcn.cn' },
        { name: 'Origin', value: 'http://172.16.34.153:8080' },
        { name: 'Proxy-Connection', value: 'keep-alive' },
        { name: 'Referer', value: 'http://172.16.34.153:8080/' },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
        },
        { name: 'client-source', value: '2' },
        { name: 'loginDevice', value: '0' },
        { name: 'source', value: '0' },
        { name: 'traceId', value: 'bc98c4f1-f81c-448d-8c6e-3767c134e90c' }
      ],
      queryString: [],
      cookies: [],
      headersSize: 1225,
      bodySize: 45,
      postData: {
        mimeType: 'application/json;charset=UTF-8',
        text: '{"scheduleTime":1651746774351,"streamerId":2}'
      }
    },
    response: {
      status: 200,
      statusText: 'OK',
      httpVersion: 'HTTP/1.1',
      headers: [
        { name: 'Access-Control-Allow-Credentials', value: 'true' },
        {
          name: 'Access-Control-Allow-Origin',
          value: 'http://172.16.34.153:8080'
        },
        { name: 'Access-Control-Expose-Headers', value: 'traceid' },
        { name: 'Access-Control-Max-Age', value: '3600' },
        {
          name: 'Cache-Control',
          value: 'no-cache, no-store, max-age=0, must-revalidate'
        },
        { name: 'Connection', value: 'keep-alive' },
        { name: 'Content-Encoding', value: 'gzip' },
        { name: 'Content-Type', value: 'application/json;charset=UTF-8' },
        { name: 'Date', value: 'Thu, 05 May 2022 10:32:54 GMT' },
        { name: 'Expires', value: '0' },
        { name: 'Keep-Alive', value: 'timeout=4' },
        { name: 'Pragma', value: 'no-cache' },
        { name: 'Proxy-Connection', value: 'keep-alive' },
        { name: 'Traceid', value: 'bc98c4f1-f81c-448d-8c6e-3767c134e90c' },
        { name: 'Transfer-Encoding', value: 'chunked' },
        {
          name: 'Userupdatestatus',
          value: '"{\\"auditStatus\\":0,\\"messageInfo\\":0}"'
        },
        { name: 'Vary', value: 'Origin' },
        { name: 'Vary', value: 'Access-Control-Request-Method' },
        { name: 'Vary', value: 'Access-Control-Request-Headers' },
        { name: 'X-Content-Type-Options', value: 'nosniff' },
        { name: 'X-Xss-Protection', value: '1; mode=block' }
      ],
      cookies: [],
      content: { size: 11499, mimeType: 'application/json', compression: 9465 },
      redirectURL: '',
      headersSize: 751,
      bodySize: 2034,
      _transferSize: 2785,
      // _error: null
    },
    serverIPAddress: '127.0.0.1',
    startedDateTime: '2022-05-05T10:32:54.395Z',
    time: 395.3540000002249,
    timings: {
      blocked: 0.42800000004610045,
      dns: -1,
      ssl: -1,
      connect: 0.10199999999999998,
      send: 0.028999999999999998,
      wait: 394.4799999990414,
      receive: 0.3150000011373777,
      // _blocked_queueing: 0.38700000004610047
    }
  },
  {
    // @ts-ignore
    _initiator: {
      type: 'script',
      stack: {
        callFrames: [
          {
            functionName: 'dispatchXhrRequest',
            scriptId: '10038',
            url: 'http://172.16.34.153:8080/organization/app.js',
            lineNumber: 100330,
            columnNumber: 12
          },
          {
            functionName: 'xhrAdapter',
            scriptId: '10038',
            url: 'http://172.16.34.153:8080/organization/app.js',
            lineNumber: 100164,
            columnNumber: 9
          },
          {
            functionName: 'dispatchRequest',
            scriptId: '10038',
            url: 'http://172.16.34.153:8080/organization/app.js',
            lineNumber: 100810,
            columnNumber: 9
          }
        ],
        parent: {
          description: 'Promise.then',
          callFrames: [
            {
              functionName: 'request',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 100587,
              columnNumber: 22
            },
            {
              functionName: 'wrap',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 101176,
              columnNumber: 14
            },
            {
              functionName: '',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 548141,
              columnNumber: 4
            },
            {
              functionName: 'apiAxios',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 548128,
              columnNumber: 9
            },
            {
              functionName: 'employeeBindStreamerList',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 532912,
              columnNumber: 30
            },
            {
              functionName: 'getStream',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 143859,
              columnNumber: 41
            },
            {
              functionName: 'mounted',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 143780,
              columnNumber: 9
            },
            {
              functionName: 'invokeWithErrorHandling',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 505753,
              columnNumber: 56
            },
            {
              functionName: 'callHook',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 508107,
              columnNumber: 6
            },
            {
              functionName: 'insert',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507036,
              columnNumber: 6
            },
            {
              functionName: 'invokeInsertHook',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 510232,
              columnNumber: 27
            },
            {
              functionName: 'patch',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 510451,
              columnNumber: 4
            },
            {
              functionName: 'Vue._update',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507836,
              columnNumber: 18
            },
            {
              functionName: 'updateComponent',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 507954,
              columnNumber: 9
            },
            {
              functionName: 'get',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 508367,
              columnNumber: 24
            },
            {
              functionName: 'run',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 508442,
              columnNumber: 21
            },
            {
              functionName: 'flushSchedulerQueue',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 508198,
              columnNumber: 12
            },
            {
              functionName: '',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 505879,
              columnNumber: 11
            },
            {
              functionName: 'flushCallbacks',
              scriptId: '10038',
              url: 'http://172.16.34.153:8080/organization/app.js',
              lineNumber: 505805,
              columnNumber: 13
            }
          ],
          parent: {
            description: 'Promise.then',
            callFrames: [
              {
                functionName: 'timerFunc',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 505832,
                columnNumber: 6
              },
              {
                functionName: 'nextTick',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 505889,
                columnNumber: 4
              },
              {
                functionName: 'queueWatcher',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 508290,
                columnNumber: 6
              },
              {
                functionName: 'update',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 508432,
                columnNumber: 4
              },
              {
                functionName: 'notify',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 504631,
                columnNumber: 12
              },
              {
                functionName: 'reactiveSetter',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 504956,
                columnNumber: 10
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 495019,
                columnNumber: 17
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 495018,
                columnNumber: 16
              },
              {
                functionName: 'updateRoute',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494477,
                columnNumber: 18
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494355,
                columnNumber: 11
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494464,
                columnNumber: 6
              },
              {
                functionName: 'step',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494194,
                columnNumber: 6
              },
              {
                functionName: 'step',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494201,
                columnNumber: 8
              },
              {
                functionName: 'step',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494201,
                columnNumber: 8
              },
              {
                functionName: 'runQueue',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494205,
                columnNumber: 2
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494459,
                columnNumber: 4
              },
              {
                functionName: 'step',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494194,
                columnNumber: 6
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494198,
                columnNumber: 10
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494444,
                columnNumber: 10
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494237,
                columnNumber: 12
              },
              {
                functionName: '',
                scriptId: '10038',
                url: 'http://172.16.34.153:8080/organization/app.js',
                lineNumber: 494313,
                columnNumber: 14
              }
            ],
            parent: {
              description: 'Promise.then',
              callFrames: [
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494260,
                  columnNumber: 16
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494281,
                  columnNumber: 65
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494281,
                  columnNumber: 37
                },
                {
                  functionName: 'flatMapComponents',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494280,
                  columnNumber: 25
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494216,
                  columnNumber: 4
                },
                {
                  functionName: 'iterator',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494423,
                  columnNumber: 6
                },
                {
                  functionName: 'step',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494197,
                  columnNumber: 8
                },
                {
                  functionName: 'step',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494201,
                  columnNumber: 8
                },
                {
                  functionName: 'step',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494201,
                  columnNumber: 8
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494198,
                  columnNumber: 10
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 494444,
                  columnNumber: 10
                },
                {
                  functionName: '_callee$',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 543625,
                  columnNumber: 12
                },
                {
                  functionName: 'tryCatch',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 479984,
                  columnNumber: 39
                },
                {
                  functionName: 'invoke',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 480215,
                  columnNumber: 21
                },
                {
                  functionName: '',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 480040,
                  columnNumber: 20
                },
                {
                  functionName: 'asyncGeneratorStep',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 61581,
                  columnNumber: 23
                },
                {
                  functionName: '_next',
                  scriptId: '10038',
                  url: 'http://172.16.34.153:8080/organization/app.js',
                  lineNumber: 61603,
                  columnNumber: 8
                }
              ],
              parent: {
                description: 'Promise.then',
                callFrames: [
                  {
                    functionName: 'asyncGeneratorStep',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61591,
                    columnNumber: 28
                  },
                  {
                    functionName: '_next',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61603,
                    columnNumber: 8
                  },
                  {
                    functionName: '',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61610,
                    columnNumber: 6
                  },
                  {
                    functionName: 'F',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 332027,
                    columnNumber: 27
                  },
                  {
                    functionName: '',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61599,
                    columnNumber: 11
                  },
                  {
                    functionName: '',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 543668,
                    columnNumber: 16
                  },
                  {
                    functionName: 'iterator',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494423,
                    columnNumber: 6
                  },
                  {
                    functionName: 'step',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494197,
                    columnNumber: 8
                  },
                  {
                    functionName: 'runQueue',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494205,
                    columnNumber: 2
                  },
                  {
                    functionName: 'confirmTransition',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494452,
                    columnNumber: 2
                  },
                  {
                    functionName: 'transitionTo',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494354,
                    columnNumber: 7
                  },
                  {
                    functionName: 'replace',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494767,
                    columnNumber: 9
                  },
                  {
                    functionName: '',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 494438,
                    columnNumber: 19
                  },
                  {
                    functionName: '_callee$',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 543646,
                    columnNumber: 12
                  },
                  {
                    functionName: 'tryCatch',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 479984,
                    columnNumber: 39
                  },
                  {
                    functionName: 'invoke',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 480215,
                    columnNumber: 21
                  },
                  {
                    functionName: '',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 480040,
                    columnNumber: 20
                  },
                  {
                    functionName: 'asyncGeneratorStep',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61581,
                    columnNumber: 23
                  },
                  {
                    functionName: '_next',
                    scriptId: '10038',
                    url: 'http://172.16.34.153:8080/organization/app.js',
                    lineNumber: 61603,
                    columnNumber: 8
                  }
                ],
                parent: {
                  description: 'Promise.then',
                  callFrames: [
                    {
                      functionName: 'asyncGeneratorStep',
                      scriptId: '10038',
                      url: 'http://172.16.34.153:8080/organization/app.js',
                      lineNumber: 61591,
                      columnNumber: 28
                    },
                    {
                      functionName: '_next',
                      scriptId: '10038',
                      url: 'http://172.16.34.153:8080/organization/app.js',
                      lineNumber: 61603,
                      columnNumber: 8
                    }
                  ],
                  parent: {
                    description: 'Promise.then',
                    callFrames: [
                      {
                        functionName: 'asyncGeneratorStep',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 61591,
                        columnNumber: 28
                      },
                      {
                        functionName: '_next',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 61603,
                        columnNumber: 8
                      },
                      {
                        functionName: '',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 61610,
                        columnNumber: 6
                      },
                      {
                        functionName: 'F',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 332027,
                        columnNumber: 27
                      },
                      {
                        functionName: '',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 61599,
                        columnNumber: 11
                      },
                      {
                        functionName: '',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 543668,
                        columnNumber: 16
                      },
                      {
                        functionName: 'iterator',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 494423,
                        columnNumber: 6
                      },
                      {
                        functionName: 'step',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 494197,
                        columnNumber: 8
                      },
                      {
                        functionName: 'runQueue',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 494205,
                        columnNumber: 2
                      },
                      {
                        functionName: 'confirmTransition',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 494452,
                        columnNumber: 2
                      },
                      {
                        functionName: 'transitionTo',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 494354,
                        columnNumber: 7
                      },
                      {
                        functionName: 'init',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 495010,
                        columnNumber: 12
                      },
                      {
                        functionName: 'beforeCreate',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 493017,
                        columnNumber: 21
                      },
                      {
                        functionName: 'invokeWithErrorHandling',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 505753,
                        columnNumber: 56
                      },
                      {
                        functionName: 'callHook',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 508107,
                        columnNumber: 6
                      },
                      {
                        functionName: 'Vue._init',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 508888,
                        columnNumber: 4
                      },
                      {
                        functionName: 'Vue',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 508969,
                        columnNumber: 7
                      },
                      {
                        functionName: './src/main.js',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 543531,
                        columnNumber: 0
                      },
                      {
                        functionName: '__webpack_require__',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 723,
                        columnNumber: 29
                      },
                      {
                        functionName: 'fn',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 100,
                        columnNumber: 19
                      },
                      {
                        functionName: '1',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 570697,
                        columnNumber: 17
                      },
                      {
                        functionName: '__webpack_require__',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 723,
                        columnNumber: 29
                      },
                      {
                        functionName: '',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 790,
                        columnNumber: 36
                      },
                      {
                        functionName: '',
                        scriptId: '10038',
                        url: 'http://172.16.34.153:8080/organization/app.js',
                        lineNumber: 793,
                        columnNumber: 9
                      }
                    ]
                  }
                }
              }
            }
          }
        }
      }
    },
    _priority: 'High',
    _resourceType: 'xhr',
    cache: {},
    connection: '114942',
    pageref: 'page_3',
    request: {
      method: 'POST',
      url: 'http://testapi.linkmcn.cn/linkmcn-user/api/employeegroup/group/inner/employee/bind/streamer/list',
      httpVersion: 'HTTP/1.1',
      headers: [
        { name: 'Accept', value: 'application/json, text/plain, */*' },
        { name: 'Accept-Encoding', value: 'gzip, deflate' },
        { name: 'Accept-Language', value: 'zh-CN,zh;q=0.9,en;q=0.8' },
        {
          name: 'Authorization',
          value:
            'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIyOTciLCJzY29wZSI6WyJ3ZWItYXBwIl0sImV4cCI6MTY1OTUyMTM5MSwiaWF0IjoxNjUxNzQ1MzkxLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwianRpIjoiZjlmZGQ5MzMtN2ZjOC00NTM0LThjMmYtZTcyNTk3MzlhMWExIiwiY2xpZW50X2lkIjoiMCJ9.eKDDxuZ4Up-4_clZSzrau5n5PAkRPboJhjWW0xBWKW5HC7FeNyF3D1SL5E3g8iQJZJx8bD68eBfP_wu9gZH2bRN9GYZ_kiMG9AjpBTrVJ8TdugX7WUOdcW5EVGD863D8dhPkQqtZzzy50tcqatI_WjuHotyg73VOap1NPwJeHhMoCkNfxwtdCL5mcQrIUkNetDrYIWZJAf584JntwhioUGiapljITPLsINuG8PPtfQ-gt4bI0J3Yc1EpKNsLsQbe1LYr47WPXyf_FZZ_vg9THyDu_TkrMpQOg_6dev6oVDlFzasicOF3i16FQdzEG_JNJJAmSNoHcDuiDoY67GcM7g'
        },
        { name: 'Content-Length', value: '31' },
        { name: 'Content-Type', value: 'application/json;charset=UTF-8' },
        { name: 'Host', value: 'testapi.linkmcn.cn' },
        { name: 'Origin', value: 'http://172.16.34.153:8080' },
        { name: 'Proxy-Connection', value: 'keep-alive' },
        { name: 'Referer', value: 'http://172.16.34.153:8080/' },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
        },
        { name: 'client-source', value: '2' },
        { name: 'loginDevice', value: '0' },
        { name: 'source', value: '0' },
        { name: 'traceId', value: 'cc0c0ce8-179f-4c65-88e3-dd1c45759e21' }
      ],
      queryString: [],
      cookies: [],
      headersSize: 1245,
      bodySize: 31,
      postData: {
        mimeType: 'application/json;charset=UTF-8',
        text: '{"employeeGroupMemberId":"297"}'
      }
    },
    response: {
      status: 200,
      statusText: 'OK',
      httpVersion: 'HTTP/1.1',
      headers: [
        { name: 'Access-Control-Allow-Credentials', value: 'true' },
        {
          name: 'Access-Control-Allow-Origin',
          value: 'http://172.16.34.153:8080'
        },
        { name: 'Access-Control-Expose-Headers', value: 'traceid' },
        { name: 'Access-Control-Max-Age', value: '3600' },
        {
          name: 'Cache-Control',
          value: 'no-cache, no-store, max-age=0, must-revalidate'
        },
        { name: 'Connection', value: 'keep-alive' },
        { name: 'Content-Encoding', value: 'gzip' },
        { name: 'Content-Type', value: 'application/json;charset=UTF-8' },
        { name: 'Date', value: 'Thu, 05 May 2022 10:32:55 GMT' },
        { name: 'Expires', value: '0' },
        { name: 'Keep-Alive', value: 'timeout=4' },
        { name: 'Pragma', value: 'no-cache' },
        { name: 'Proxy-Connection', value: 'keep-alive' },
        { name: 'Traceid', value: 'cc0c0ce8-179f-4c65-88e3-dd1c45759e21' },
        { name: 'Transfer-Encoding', value: 'chunked' },
        {
          name: 'Userupdatestatus',
          value: '"{\\"auditStatus\\":0,\\"messageInfo\\":0}"'
        },
        { name: 'Vary', value: 'Origin' },
        { name: 'Vary', value: 'Access-Control-Request-Method' },
        { name: 'Vary', value: 'Access-Control-Request-Headers' },
        { name: 'X-Content-Type-Options', value: 'nosniff' },
        { name: 'X-Xss-Protection', value: '1; mode=block' }
      ],
      cookies: [],
      content: { size: 5714, mimeType: 'application/json', compression: 4167 },
      redirectURL: '',
      headersSize: 751,
      bodySize: 1547,
      _transferSize: 2298,
      // _error: null
    },
    serverIPAddress: '127.0.0.1',
    startedDateTime: '2022-05-05T10:32:54.395Z',
    time: 824.7030000020459,
    timings: {
      blocked: 0.4370000009757932,
      dns: -1,
      ssl: -1,
      connect: 0.308,
      send: 0.038000000000000034,
      wait: 823.610999998326,
      receive: 0.30900000274414197,
      // _blocked_queueing: 0.3790000009757932
    }
  }
];

networkList.value = arr.map(RequestConversion);
console.log(networkList.value);

const tableData: Ref<chrome.devtools.network.Request['request'][]> = ref([]);

// chrome.devtools.network.onRequestFinished.addListener((request) => {
//   console.log(request);
//   arr = arr.concat(request);
//   console.log(JSON.stringify(arr), 8888);
//   tableData.value = tableData.value.concat(request.request);
//   chrome.devtools.inspectedWindow.eval(
//     `console.log("Large image: " + unescape("${escape(request.request.url)}"))`
//   );
// });
</script>

<style lang="scss" scoped>
  .networkList_box{
    padding: 20px 40px;
  }
</style>
