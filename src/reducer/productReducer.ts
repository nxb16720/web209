import { produce } from "immer";
const initialState = {
    products: [],
    isLoading: false,
    error: ""
} as { products: any[], isLoading: boolean, error: string }
export const productReducer = (state = initialState, action: any) => {
    return produce(state, draftState => {
        switch (action.type) {
            case "product/fetching":
                draftState.isLoading = true
                break;
            case "product/fetchingSuccess":
                draftState.products = action.payload
                break;
            case "product/fetchingFailed":
                draftState.error = action.payload
                break;
            case "product/fetchingFinally":
                draftState.isLoading = false
                break;
            //add
            case "ADD_PRODUCT":
                draftState.products.push(action.payload);
                return;
            //update
            case "UPDATE_PRODUCT":
                const product = action.payload
                draftState.products = draftState.products.map((item: any) => item.id === product.id ? product : item)
                return;
            //delete
            case "DELETE_PRODUCT":
                const id = action.payload;
                draftState.products = draftState.products.filter((item: any) => item.id !== id)
                return;
            default:
                return state;
        }
    })

}