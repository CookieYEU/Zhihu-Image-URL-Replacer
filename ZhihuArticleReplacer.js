// 获取响应体
let body = $response.body;

// 定义要查找的文字 (正则匹配 [惊喜])
// 注意：如果还有其他表情想换，可以继续加
const targetText = /\[惊喜\]/g;

// 定义要替换成的图片 HTML 代码
// 这里用了你之前指定的那张图，设置宽度为 20px 以匹配文字大小
const newImage = '<img src="https://pic2.zhimg.com/v2-3846906ea3ded1fabbf1a98c891527fb.png" style="width: 22px; vertical-align: middle; display: inline-block;">';

// 开始替换
// 只有当正文里真的包含“[惊喜]”时才执行替换，节省性能
if (body.indexOf("[惊喜]") !== -1) {
    // 替换文字为图片标签
    body = body.replace(targetText, newImage);
    // 结束并返回修改后的数据
    $done({ body });
} else {
    // 没找到就原样返回，不修改
    $done({});
}
