// 调试模式脚本
let body = $response.body;

console.log("🚫 知乎脚本触发！正在检查内容...");

// 1. 暴力测试：把所有“的”字改成“❌”
// 如果这步生效了，说明脚本没问题，是知乎不认 HTML 图片代码。
// 如果这步没生效，说明脚本根本没跑，或者数据是加密的。
if (body) {
    let newBody = body.replace(/的/g, "❌");
    
    if (newBody !== body) {
        console.log("✅ 替换成功！修改了正文内容。");
        $done({ body: newBody });
    } else {
        console.log("⚠️ 没找到目标文字，可能是数据加密或格式不对。");
        $done({});
    }
} else {
    console.log("❌ 响应体为空！");
    $done({});
}
