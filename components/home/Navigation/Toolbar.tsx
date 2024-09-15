import { useAppContext } from "@/components/AppContext";
import Button from "@/components/common/Button";
import { HiPlus } from "react-icons/hi";
import { LuPanelLeft } from "react-icons/lu";
import { MdLightMode, MdDarkMode, MdInfo } from 'react-icons/md'

// 导出函数组件Menubar
export default function Toolbar() {
    // 使用useAppContext获取setState函数
    const {
        state: { themeMode },
        setState } = useAppContext()
    return (
        <div className="absolute bottom-0 left-0 right-0 bg-gray-800 flex p-2 justify-between">
            {/* 按钮，icon为HiPlus，variant为outline，className为flex-1 */}
            <Button
                icon={themeMode === 'dark' ? MdDarkMode : MdLightMode}
                variant="text"
                onClick={() =>
                    // setState 支持接收一个回调函数，回调函数的参数是当前状态（contextValue）。这个回调函数的返回值就是新的状态。
                    setState(
                        // { displayNavigation: false }
                        //  React 中的状态是不可变的，意思是你不能直接修改状态对象
                        (contextValue) => {
                            return {
                                //  React 中的状态是不可变的，意思是你不能直接修改状态对象
                                ...contextValue,
                                themeMode: contextValue.themeMode === 'dark' ? 'light' : 'dark'
                            }
                        }
                    )}
            />

            {/* 按钮，icon为LuPanelLeft，variant为outline，onClick为setState函数，将displayNavigation设置为false */}
            <Button
                icon={MdInfo}
                variant="text"

            />
        </div>
    )
}