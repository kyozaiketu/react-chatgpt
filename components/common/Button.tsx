import { ComponentPropsWithoutRef } from "react"
import { IconType } from "react-icons"

type ButtonProps = {
    icon?: IconType
    variant?: 'default' | 'outline' | 'text' | 'primary'
} & ComponentPropsWithoutRef<'button'>
// 导出一个默认的Button组件
export default function Button({
    // 子元素 <Button>...</Button>这个里面包裹的元素
    children,
    // 类名
    className,
    icon: Icon,
    variant = 'default',
    ...props
}: ButtonProps) {
    // 返回一个button元素
    return (
        <button
            /* border border-gray-600 rounded px-3 py-1.5 hover:bg-gray-800 active:bg-gray-700设置Botton的默认样式,
            
            后面通过使用Button组件时，可以传入自定义的样式就是上面解构出来的classname === ${className} */
            className={`inline-flex items-center mix-w-[38px] min-h-[38px] rounded px-3 py-1.5  
                ${className}
                ${variant === 'default'
                    ? 'text-black dark:text-gray-300  bg-gray-50 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-900'
                    : variant === 'outline'
                        ? 'border border-gray-300 dark:border-gray-600 text-black dark:text-gray-300 bg-gray-50 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
                        : variant === 'primary'
                            ? 'bg-primary-500 text-white hover:bg-primary-600 hover:text-white shadow-sm'
                            : 'text-black dark:text-gray-300 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            // 其余属性 事件处理等
            {...props}
        >
            {/* 如果有icon就显示icon */}
            {Icon && <Icon className={`text-lg ${children ? 'mr-1' : ''}`} />}
            {children}
        </button>
    )
}
