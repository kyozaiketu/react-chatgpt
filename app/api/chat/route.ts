import { NextRequest } from "next/server";

// 导出异步函数POST，接收NextRequest类型的参数
export async function POST(request: NextRequest) {
    // 从请求中获取messageText
    const {messageText} = await request.json()

    // 创建TextEncoder实例
    const encoder = new TextEncoder()
    // 创建可读流
    const stream = new ReadableStream({
        // 开始流
        async start(contrroller){
            // 遍历messageText
            for(let i=0; i<messageText.length; i++){
                // 将messageText[i]编码后放入流中
                contrroller.enqueue(encoder.encode(messageText[i]))
            }
            // 关闭流
            contrroller.close()
        }
    })
    // 返回流
    return new Response(stream)
}