import { Chat } from "@/types/chat";
import { PiChatBold } from "react-icons/pi"
import { AiOutlineEdit } from "react-icons/ai"
import { MdDeleteOutline, MdCheck, MdClose } from "react-icons/md"


type Props = {
    item: Chat
    selected: boolean
    onSelected: (chat: Chat) => void
}

export default function ChatItem({ item, onSelected, selected }: Props) {
    
    return (
        <li
            onClick={() => {
                onSelected(item) // 使用回调让父组件处理选中事件
            }}
            key={item.id}
            className={`relative group flex items-center p-2 space-x-3 cursor-pointer rounded-md haver:bg-gray-800 ${
                selected ? 'bg-gray-800 pr-[3.5em]' : ''
                }`}
        >
            <div>
                <PiChatBold />
            </div>
            <div className="relative flex-1 whitespace-nowrap overflow-hidden">
                {item.title}
                <span className={`group-hover:from-gray-800 absolute right-0 inset-y-0 w-8 from-gray-900 bg-gradient-to-l ${
                    selected ? 'from-gray-800' : 'from-gray-900'
                    }`}
                >
                </span>
            </div>
            {
                selected && (
                    <div className="absolute right-1 flex">
                    <button className="p-1 hover:text-white">
                        <AiOutlineEdit />
                    </button>
                    <button className="p-1 hover:text-white">
                        <MdDeleteOutline />
                    </button>
                </div>
                )
            }
        </li>
    )
}