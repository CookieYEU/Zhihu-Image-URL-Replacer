// 获取原始的响应体（JSON字符串）
let body = $response.body;

// 定义我们要替换的目标和新图片
// 注意：知乎正文通常是 HTML 格式，所以我们直接插入 img 标签
const oldText = /\[惊喜\]/g;
const newImage = '<img src="https://pic2.zhimg.com/v2-3846906ea3ded1fabbf1a98c891527fb.png" style="width: 20px; vertical-align: middle;">';

// 执行替换
// 只有当 body 里真的有这个词时才替换，节省性能
if (body.indexOf("[惊喜]") !== -1) {
    body = body.replace(oldText, newImage);
    $done({ body });
} else {
    $done({});
}
