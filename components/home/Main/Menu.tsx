'use clien'

import { useAppContext } from "@/components/AppContext"
import Button from "@/components/common/Button"
import { LuPanelLeft } from "react-icons/lu"

export default function Menu() {
    const {
        state:{displayNavigation},
        setState
    } = useAppContext()
    return (
        <Button
                icon={LuPanelLeft}
                variant="outline"
                className={`${displayNavigation ? 'hidden' : ''} fixed left-2 top-2`}
                onClick={() =>
                    // setState 支持接收一个回调函数，回调函数的参数是当前状态（contextValue）。这个回调函数的返回值就是新的状态。
                    setState(
                        // { displayNavigation: false }
                        //  React 中的状态是不可变的，意思是你不能直接修改状态对象
                        (contextValue) => {
                            return { 
                                //  React 中的状态是不可变的，意思是你不能直接修改状态对象
                                ...contextValue, 
                                displayNavigation: contextValue.displayNavigation = true
                            }
                        }
                    )}
            />
    )
}
