var fs = require("fs");
var path = require("path");

var src = "./src/";
var pagePrefix = "https://demo.luckyw.cn/";
var sourcePrefix = "https://github.com/leoyaojy/demo/tree/master/";

var html = fs.readFileSync("./index.html").toString();
var md = fs.readFileSync("./README.md").toString();
var md_value = "| 标题 |  |\n|:---:|:---:|\n";
var ul_html = "\n<div class='view'>\n\t<h2>Demo导航</h2>\n\t<ul class='main'>";

var files = fs.readdirSync(src);
files.forEach(function (f) {
    if (/^libs$/.test(f)) return;
    var fPath = path.join(src, f);
    var file = fs.readFileSync(fPath + "/index.html").toString();
    var title = /<title>(.*?)<\/title>/.test(file) ? RegExp.$1 : "Demo";
    var pageDir = pagePrefix +"code.html?path="+f;
    var sourceDir = sourcePrefix + fPath;
    ul_html += `
          <li>
              <a href='${pageDir}' target='_blank' class='demo-name' title='效果预览'>${title}</a>
              <a href='${sourceDir}' target='_blank' class='demo-source' title='点击查看源码'>源码</a>
          </li>
      `;
    md_value += `|[${title}](${pageDir})|[查看代码](${sourceDir})|\n`;
});
ul_html += "</ul>\n</div>\n";
html = html.replace(/(<body>)[\s\S]*?(<\/body>)/, '$1' + ul_html + '$2');
md = md.replace(/(\[placeholder]:p)[\s\S]*?(\[\/placeholder]:p)/, '$1\n' + md_value + '$2');
fs.writeFileSync('./index.html', html);
fs.writeFileSync('./README.md', md);
