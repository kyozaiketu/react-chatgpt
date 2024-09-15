
import { groupByDate } from "@/common/util"
import { Chat } from "@/types/chat"
import { useMemo, useState } from "react"
// import { AiOutlineEdit } from "react-icons/ai"
// import { MdDeleteOutline, MdCheck, MdClose } from "react-icons/md"
import { PiChatBold } from "react-icons/pi"
// import { BsThreeDots } from "react-icons/bs"
// import { BiMessageDetail } from "react-icons/bi"


export default function ChatList() {
    const [chatList, setChatList] = useState<Chat[]>([

        {
            id: "1",
            title: "React入门实战教程",
            updateTime: Date.now()
        },
        {
            id: "2",
            title: "如何使用Next.js创建React项目",
            updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2
        },
        {
            id: "3",
            title: "如何使用Next.js创建React项目",
            updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2
        },
        {
            id: "4",
            title: "如何使用Next.js创建React项目",
            updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2
        },
        {
            id: "5",
            title: "如何使用Next.js创建React项目",
            updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2
        },
        {
            id: "6",
            title: "如何使用Next.js创建React项目",
            updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2
        },
        {
            id: "7",
            title: "如何使用Next.js创建React项目",
            updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2
        },
        {
            id: "8",
            title: "如何使用Next.js创建React项目",
            updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2
        },
        {
            id: "9",
            title: "如何使用Next.js创建React项目",
            updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2
        },
        {
            id: "10",
            title: "如何使用Next.js创建React项目",
            updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2
        },
        {
            id: "11",
            title: "如何使用Next.js创建React项目",
            updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2
        },
        {
            id: "12",
            title: "如何使用Next.js创建React项目",
            updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2
        },
        {
            id: "13",
            title: "如何使用Next.js创建React项目",
            updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2
        },
        {
            id: "14",
            title: "如何使用Next.js创建React项目",
            updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2
        },
        {
            id: "15",
            title: "知行小课",
            updateTime: Date.now() + 2
        }
    ])
    const [selectedChat, setSelectedChat] = useState<Chat | null>(null)
    // 把原始对话列表转化成按日期分组后的分组列表
    const groupList = useMemo(() => {
        return groupByDate(chatList)
    }, [chatList]) //原始对话列表有变化时重新计算

    return (
        <div className="flex-1 mb-[48px] mt-2 flex flex-col overflow-y-auto">
            {
                groupList.map(([data, list]) => {
                    return (
                        <div key={data}>
                            <div className="sticky to-0 z-10 p-3 text-sm bg-gray-900 text-gray-500">
                                {data}
                            </div>
                            <ul>
                                {list.map((item) => {
                                    const selected = selectedChat?.id === item.id
                                    return (
                                        <li
                                            onClick={() => {
                                                setSelectedChat(item)
                                            }}
                                            key={item.id}
                                            className={`group flex items-center p-2 space-x-3 cursor-pointer rounded-md haver:bg-gray-800 ${selected ? 'bg-gray-800' : ''
                                                }`}
                                        >
                                            <div>
                                                <PiChatBold />
                                            </div>
                                            <div className="relative flex-1 whitespace-nowrap overflow-hidden">
                                                {item.title}
                                                <span className={`group-hover:from-gray-800 absolute right-0 inset-y-0 w-8 from-gray-900 bg-gradient-to-l ${selected ? 'from-gray-800' : 'from-gray-900'
                                                    }`} ></span>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })
            }

        </div>
    )
}
