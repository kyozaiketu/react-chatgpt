//  状态类型定义
export type State = {
    displayNavigation: boolean
    themeMode: 'dark' | 'light'
}

// 更新属性的操作类型
export enum ActionType {
    UPDATE = 'UPDATE'
}
// 更新操作的参数类型dispatch参数类型
type UpdateAction = { 
    type:ActionType.UPDATE,
    filed:string,
    value:any
}

export type Action = UpdateAction;

// 初始化状态
export const initialState:State = {
    displayNavigation:true,
    themeMode:'light'
}

// 创建一个reducer函数，接收当前状态和操作，返回新的状态
export function reducer(
    state:State,
    action:Action
){
    switch(action.type){
        case ActionType.UPDATE:
            // 根据操作类型，更新状态
            return {
                ...state, // 1. 展开 state 中的所有属性 返回的是新的对象
                // js计算属性的写法，[action.filed]表示属性名，action.value表示属性值
                [action.filed]:action.value  // 2. 更新/添加 filed 对应的属性，赋值为 action.value
            }
        default: throw new Error('Unknow action type')
    }
}