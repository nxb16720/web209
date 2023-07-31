
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { Button } from '..'
import { decrement, increase, increment } from '@/slices/Counter';

const Count = () => {
    const dispatch = useAppDispatch();
    const { count } = useAppSelector((state: any) => state.counter);
    return (
        <div>
            Counter: {count}
            <Button type="primary" onClick={() => dispatch(increment())}>
                Increment
            </Button>
            <Button type="primary" onClick={() => dispatch(decrement())}>
                Decrement
            </Button>
            <Button type="primary" onClick={() => dispatch(increase(10))}>
                Increase
            </Button>
        </div>
    )
}

export default Count