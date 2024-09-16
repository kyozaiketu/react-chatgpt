
import { useAppContext } from "@/components/AppContext"
import { ActionType } from "@/reducers/AppReducer"
import { PiLightningAFill,PiShootingStarFill } from "react-icons/pi"

export default function ModelSelect() {
    const models = [
        {
            id:'gpt-3.5-turbo',
            name:'GPT-3.5-Turbo',
            icon: PiLightningAFill
        },
        {
            id:'gpt-4.0',
            name:'GPT-4.0',
            icon: PiShootingStarFill
        }
    ]
    const {
            state:{currentModel},
            dispatch
        } = useAppContext()
    return (
        <div className="flex bg-gray-100 dark:bg-gray-900 p-1 rounded-xl ">
            {models.map((item) => {
                const selected = item.id === currentModel
                return (
                    <button 
                        key={item.id}
                        className={`group hover:text-gray-900 hover:dark:text-gray-100 flex justify-center items-center space-x-2 py-2.5 min-w-[148px] text-5m font-meium border rounded-lg ${
                            selected
                                ? 'border-gray-200 bg-white text:bg-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100'
                                : 'border-transparent text-gray-500'
                        }`}
                        onClick={() => {
                            dispatch({
                                type:ActionType.UPDATE,
                                filed:"currentModel",
                                value:item.id
                            })
                        }}
                    >
                        <span 
                            className={`group-hover:text-[#26cf8e] transition-colors duration-100 ${
                                selected ? 'text-[#26cf8e]' :''
                            }`}
                        >
                            <item.icon />
                        </span>
                        <span className='transition-colors duration-100'>
                            {item.name}
                        </span>
                    </button>
                )
            })}
        </div>
    )
}
