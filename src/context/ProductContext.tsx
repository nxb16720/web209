import { productReducer } from "@/reducer/productReducer";
import { produce } from "immer";
import { createContext, useReducer } from "react";

export const productContext = createContext({} as any)

type Props = {
    children: React.ReactNode
}
const initialState = {
    products: [],
    isLoading: false,
    error: "",
};
const ProductContext = ({ children }: Props) => {
    const [state, dispatch] = useReducer(produce(productReducer), initialState);

    return (
        <productContext.Provider value={{
            state,
            dispatch,
        }}>
            {children}
        </productContext.Provider>
    )
}

export default ProductContext