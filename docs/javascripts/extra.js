function loadHTMLFile (targetName) {
  // 创建一个 XMLHttpRequest 对象
  var xhr = new XMLHttpRequest();

  // 发送 GET 请求以获取 HTML 文件
  xhr.open('GET', `/html/${targetName}.html`, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // 获取 HTML 文件的内容
      var htmlContent = xhr.responseText;

      // 将 HTML 内容插入到指定的 DOM 节点中
      var targetElement = document.getElementById(targetName);
      targetElement.innerHTML = htmlContent;
    }
  };
  xhr.send();
}

switch(window.location.pathname) {
  case '/layout/css-flex-layout/':
    loadHTMLFile('css-flex-flex-direction-row');
    break;
};

