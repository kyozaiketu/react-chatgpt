'use client'

import { createContext, ReactNode, useContext, useMemo, useState } from "react"

type state = {
    displayNavigation: boolean
    themeMode: 'dark' | 'light'
}

type AppContextType = {
    state: state
    setState: React.Dispatch<React.SetStateAction<state>>
}

const AppContext = createContext<AppContextType>(null!)

export function useAppContext() {
    return useContext(AppContext)
}

// AppContextProvider 是一个 React 组件，它提供了一个上下文对象，该对象包含了 state 和 setState 两个属性。这个组件接受一个 children 属性，这个属性是一个 ReactNode，表示这个组件的子元素。
export default function AppContextProvider({
    children
}: {
    // children 是一个 ReactNode，表示这个组件的子元素
    children: ReactNode
}) {
    // useState 用来定义 state，setState 用来更新 state
    const [state, setState] = useState<state>({ 
        displayNavigation: true, 
        themeMode: 'light'
    })
    // useMemo 用来缓存函数，避免每次渲染都重新创建函数,渲染
    const contextValue = useMemo(() => {
        return { state, setState }
    }, [state, setState])

    return (
        // Provider 是一个 React 组件，它接受一个 value 属性，这个属性是一个对象，包含了 state 和 setState 两个属性。这个组件会把这个对象传递给它的子组件。
        <AppContext.Provider value={contextValue}>
            
            {children}
        </AppContext.Provider>
    )
}
