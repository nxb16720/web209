import { produce } from "immer";
const initialState = {
    items: [],

} as { items: any[] }
export const cartReducer = (state = initialState, action: any) => {
    return produce(state, draftState => {
        switch (action.type) {
            case "cart/add":
                const exsitProductIndex = draftState.items.findIndex((item: any) => item.id === action.payload.id)
                if (exsitProductIndex === -1) {
                    draftState.items.push(action.payload)
                } else {
                    draftState.items[exsitProductIndex].quantity++
                }
                break;

            case "cart/increase":
                draftState.items.find((item) => item.id == action.payload).quantity++
                break;
            case "cart/decrease":
                const product = draftState.items.find((item) => item.id == action.payload)
                product.quantity--
                if (product.quantity < 1) {
                    const confirm = window.confirm('ban co chac muon xoa?')
                    if (confirm) draftState.items = draftState.items.filter((item: any) => item.id !== product.id)
                    product.quantity = 1
                }
                break;
            default:
                return state;
        }
    })

}