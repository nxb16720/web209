
import { Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '..'

const Cart = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const { items } = useSelector((state: any) => state.carts)

    return (
        <div>
            {items?.map((item: any) => {
                return <div key={item.id}>{item?.name}-{item?.quantity}-{item?.price * item?.quantity}
                    <Button type='primary' onClick={() => dispatch({ type: 'cart/increase', payload: item.id })}>Increse</Button>
                    <Button type='primary' onClick={() => dispatch({ type: 'cart/decrease', payload: item.id })}>Decrase</Button>
                </div>;
            })}
            Total:
            {items.reduce(function (sum: any, item: any) {
                return sum + item.price * item.quantity;
            }, 0)}
        </div>
    )
}

export default Cart