// 声明panel.html
chrome.devtools.panels.create(
  'Yapi Mock',
  'images/LOGO.png',
  'devtools_panel/index.html'
);

// chrome.devtools.panels.elements.createSidebarPane('Images', (sidebar) => {
//   // sidebar.setPage('../sidebar.html'); // 指定加载某个页面
//   sidebar.setExpression('document.querySelectorAll("img")', 'All Images'); // 通过表达式来指定
//   //sidebar.setObject({aaa: 111, bbb: 'Hello World!'}); // 直接设置显示某个对象
// });
