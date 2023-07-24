
const ProductReducer = (state:any,action:any) => {
  switch (action.type) {
    case 'fetch':
        state.products = action.payload
        break;
    case 'add':
        state.products.push(action.payload)
        break;
    case 'update':
        state.products = state.products.map((item:any)=>item.id ===action.payload.id ? action.payload : item) 
        break;
    case 'delete':
        state.products = state.products.filter((item:any)=>item.id !== action.payload)
        break;
    default:
        return state
  }
}

export default ProductReducer