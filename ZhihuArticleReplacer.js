// 获取响应体
let body = $response.body;

console.log("🎯 命中知乎文章！准备执行替换...");

// 定义目标：那个该死的“[惊喜]”
// (为了防止误伤，我们先把之前的“❌”测试代码删掉)
const targetText = /\[惊喜\]/g;

// 定义新图片代码 (高仿版)
// 1. class="content_image" -> 告诉App这是正文图片
// 2. style -> 调整大小，让它看起来像个表情
const newImage = '<img src="https://pic2.zhimg.com/v2-3846906ea3ded1fabbf1a98c891527fb.png" class="content_image" style="display:inline-block; width:24px; height:24px; vertical-align:text-bottom; margin:0 2px;">';

// 执行替换
if (body && body.indexOf("[惊喜]") !== -1) {
    body = body.replace(targetText, newImage);
    console.log("✅ [惊喜] 已替换为高仿图片代码");
    $done({ body });
} else {
    console.log("⚠️ 正文里没找到 [惊喜] 两个字");
    $done({}); // 必须返回对象，否则可能导致请求中断
}
