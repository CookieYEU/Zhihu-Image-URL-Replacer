// 获取响应体字符串
let body = $response.body;

// 1. 定义要查找的目标文字 (正则全局匹配)
// 如果以后还有其他表情想换，可以在这里加，比如 /\[惊喜\]|\[大笑\]/g
const targetText = /\[惊喜\]/g;

// 2. 定义替换后的图片 HTML
// 宽度设为 22px 比较接近原生表情大小，vertical-align 保证和文字对齐
const newImage = '<img src="https://pic2.zhimg.com/v2-3846906ea3ded1fabbf1a98c891527fb.png" style="width: 22px; vertical-align: middle; display: inline-block;">';

// 3. 执行替换
// 只有当响应体里确实包含“[惊喜]”时才运行替换逻辑，减少性能消耗
if (body && body.indexOf("[惊喜]") !== -1) {
    body = body.replace(targetText, newImage);
    $done({ body });
} else {
    // 如果没找到，直接结束，不修改任何数据
    $done({});
}
