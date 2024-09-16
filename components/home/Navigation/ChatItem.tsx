import { Chat } from "@/types/chat";
import { PiChatBold,PiTrashBold } from "react-icons/pi"
import { AiOutlineEdit } from "react-icons/ai"
import { MdDeleteOutline, MdCheck, MdClose } from "react-icons/md"
import { useEffect, useState } from "react";


type Props = {
    item: Chat
    selected: boolean
    onSelected: (chat: Chat) => void
}

export default function ChatItem({ item, onSelected, selected }: Props) {

    const [editing, setEditing] = useState(false) // 编辑状态
    const [deleteding,setDeleteding] = useState(false) // 删除状态

    useEffect(() => {
        setEditing(false) // 当选中状态改变时，重置编辑状态
        setDeleteding(false) // 当选中状态改变时，重置删除状态
    },[selected]) // 当选中状态改变时，重置编辑状态
    return (
        <li
            onClick={() => {
                onSelected(item) // 使用回调让父组件处理选中事件
            }}
            key={item.id}
            className={`relative group flex items-center p-2 space-x-3 cursor-pointer rounded-md haver:bg-gray-800 
                ${
                selected ? 'bg-gray-800 pr-[3.5em]' : ''
                }`}
        >
            {/* 切换兑换头部投标 */}
            <div>
                {deleteding ? <PiTrashBold /> :<PiChatBold /> }
            </div>
            { 
            editing ? (
                // 编辑框
                <input
                    autoFocus ={true} 
                    className="flex-1 min-w-0 bg-transparent outline-none" 
                    defaultValue={item.title}
                />
            ) :(
                <div className="relative flex-1 whitespace-nowrap overflow-hidden">
                    {item.title}
                    <span 
                        className={`group-hover:from-gray-800 absolute right-0 inset-y-0 w-8 from-gray-900 bg-gradient-to-l ${
                        selected ? 'from-gray-800' : 'from-gray-900'
                        }`}
                    ></span>
                </div>
            )}

            {
                selected && (
                    <div className="absolute right-1 flex">
                        {
                            //编辑或者删除状态
                            editing || deleteding ? (
                                <>
                                    {/*   打钩图标 */}
                                    <button 
                                        className="p-1 hover:text-white"
                                        onClick={(e) => {
                                            if(deleteding){
                                                console.log("delete");
                                            }else{
                                                console.log("edit");
                                            }
                                            setDeleteding(false)
                                            setEditing(false)
                                            e.stopPropagation()  // li元素也会响应点击事件.阻止事件冒泡，避免触发的点击事件
                                        }}
                                    >
                                        <MdCheck />
                                    </button>
                                    {/* 打叉图标 */}
                                    <button 
                                        className="p-1 hover:text-white"
                                        onClick={(e) => {
                                            if(deleteding){
                                                console.log("delete");
                                            }else{
                                                console.log("edit");
                                            }
                                            setDeleteding(false)
                                            setEditing(false)
                                            e.stopPropagation()  
                                        }}
                                    >
                                        <MdClose />
                                    </button>
                                </>
                            ) : (
                                <>
                                    {/* 编辑按钮 */}
                                    <button 
                                        className="p-1 hover:text-white"
                                        onClick={(e) => {
                                            setEditing(true)
                                            e.stopPropagation() 
                                        }}
                                    >
                                        <AiOutlineEdit />
                                    </button>
                                    {/* 删除按钮 */}
                                    <button 
                                        className="p-1 hover:text-white"
                                        onClick={(e) => {
                                            setDeleteding(true)
                                            e.stopPropagation()  
                                        }}
                                    >
                                        <MdDeleteOutline />
                                    </button>
                                </>
                            ) 
                        }
                    
                </div>
                )
            }
        </li>
    )
}