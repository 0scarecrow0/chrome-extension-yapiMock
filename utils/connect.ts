/** chrome 长连接 接收 */
export class ChromeReceiveConnect {
  /** 此页面 code */
  private local: string;

  receiveName: string;

  receivePort: chrome.runtime.Port | null = null;

  constructor(receiveName: string, local: string) {
    this.receiveName = receiveName;
    this.local = local;
    this.createReceive();
  }

  /** 建立连接 */
  createReceive() {
    chrome.runtime.onConnect.addListener((port) => {
      port.name === this.receiveName && (this.receivePort = port);
    });
  }

  /**  发送消息 */
  sendMessage(action: string, to: string, data = {}) {
    this.receivePort?.postMessage({
      action, to, data, from: this.local
    });
  }

  /** 接收消息 */
  onMessage(callback: (response: any) => void) {
    this.receivePort?.onMessage.addListener((response) => {
      if (response.to === this.local) callback(response);
    });
  }
}

/** chrome 长连接 请求 */
export class ChromeSendConnect {
  /** 此页面 code */
  local:string;

  sendName: string;

  sendPort: chrome.runtime.Port | null = null;

  constructor(sendName: string, local:string) {
    this.sendName = sendName;
    this.local = local;
    this.createConnect();
  }

  /** 建立连接 */
  createConnect() {
    this.sendPort = chrome.runtime.connect({ name: this.sendName });
  }

  /**  发送消息 */
  sendMessage(action:string, to:string, data = {}) {
    console.log(JSON.stringify(this.sendPort));
    this.sendPort?.postMessage({
      data, action, to, from: this.local
    });
  }

  /** 接收消息 */
  onMessage(callback: (response: any) => void) {
    this.sendPort?.onMessage.addListener((response) => {
      if (response.to === this.local) callback(response);
    });
  }
}
