import { produce } from 'immer'
const initialState = {
    count: 0,
};
export const countReducer = (state = initialState, action: any) => {

    return produce(state, draftState => {
        switch (action.type) {
            case "INCREMENT":
                draftState.count++
                break

            case "DECREMENT":
                draftState.count--
                break
            case "INCREASE":
                draftState.count += action.payload
                break
            default:
                return state
        }
    })

}