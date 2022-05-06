// 判断网址
export const isLink = (val:string) => {
  const reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~/])+/;
  return reg.test(val);
};

// 截取url最后一个 '/' 部分
export const urlLasterStr = (str:string) => {
  if (!isLink(str)) return str;
  return str.match('[^/]+(?!.*/)')?.[0];
};
