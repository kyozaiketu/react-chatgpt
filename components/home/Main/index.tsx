// type Props = {
//     counter: number
// }
/* 
    3种. 写法
*/
// export default function Main(props : Props) {

import ChatInput from "./ChatInput";
import Menu from "./Menu";
import MessageList from "./MessageList";
import Welcome from "./Welcome";

// export default function Main({counter} : Props) { // 使用解构赋值
export default function Main() { // 使用解构赋值 并指定类型参数类型比较明确
    return (
        <div className="relative flex-1">
            <main className="overflow-y-auto w-full h-full bg-wihte text-gray-900 dark:bg-gray-800 dark:text-gray-100">
                <Menu />
                {/* <Welcome /> */}
                <MessageList />
                <ChatInput />
            </main>
        </div>

    )
}
