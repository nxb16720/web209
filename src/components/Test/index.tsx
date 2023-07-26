
import { useEffect } from 'react'
import { Button } from '..'

import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { addProduct, fetchProducts, removeProduct, updateProduct } from '@/action/product'



const Test = () => {
    // const { count, increment, decrement } = useContext(contextTest)
    // const { state, dispatch } = useContext(productContext)

    const dispatch: Dispatch<any> = useDispatch()

    const { count } = useSelector((state: any) => state.count)
    const { products, isLoading, error } = useSelector((state: any) => state.products)
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])
    return (
        <div>
            <div>Counter: {count}
                <Button type="primary" onClick={() => dispatch({ type: "INCREMENT" })}>
                    Increment
                </Button>
                <Button type="primary" onClick={() => dispatch({ type: "DECREMENT" })}>
                    Decrement
                </Button>
                <Button type="primary" onClick={() => dispatch({ type: "INCREASE", payload: 10 })}>
                    Decrement
                </Button>
            </div>

            {products?.map((item: any) => {
                return <div key={item.id}>{item.name}
                    <Button type='primary' onClick={() => dispatch({ type: 'cart/add', payload: { ...item, quantity: 1 } })}>Add to cart</Button>
                </div>;
            })}
            <Button type="primary" onClick={() => dispatch(addProduct({ name: "Product C" }))}>
                Add Product
            </Button>

            <Button
                type="primary"
                onClick={() => dispatch(updateProduct({ name: "Product C updated ", id: 3 }))}
            >
                Update Product
            </Button>
            <Button type="primary" onClick={() => dispatch(removeProduct({ id: 3 }))}>
                Delete Product
            </Button>

        </div>
    )
}

export default Test