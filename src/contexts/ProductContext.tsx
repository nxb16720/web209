import { createContext, useReducer } from "react";
import {produce} from 'immer'
import ProductReducer from "../reducers/ProductReducer";
export const ProductContext = createContext({} as any)
type Props = {
    children:React.ReactNode
}
const initialState = {
    products:[]
}
const ProductProvider = ({children}: Props) => {
    const [state,dispatch] = useReducer(produce(ProductReducer),initialState)
  return (
    <ProductContext.Provider value={{state,dispatch}}>{children}</ProductContext.Provider>
  )
}

export default ProductProvider