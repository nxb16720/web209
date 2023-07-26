import { createContext, useReducer, useState } from "react";
import { produce } from 'immer'
import { countReducer } from "@/reducer/count";
export const contextTest = createContext({} as any)

type Props = {
    children: React.ReactNode
}
const innitialState = {
    count: 0,
    isLoading: false,
    error: ""
}



const ContextApp = ({ children }: Props) => {
    // const [count, setCount] = useState<number>(55);

    // const increment = () => setCount(count + 1);
    // const decrement = () => setCount(count - 1);
    const [state, dispatch] = useReducer(produce(countReducer), innitialState)
    return (
        <contextTest.Provider value={{ state, dispatch }}>
            {children}
        </contextTest.Provider>
    )
}

export default ContextApp