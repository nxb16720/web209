import React from 'react'
import Skeleton from 'react-loading-skeleton';
import { AiOutlineLoading } from 'react-icons/ai'
type Props = {}

const ButtonLoading = (props: Props) => {
    return (
        <button className="p-2 border border-green-400 rounded text-white bg-slate-500">
            <AiOutlineLoading />
        </button>
    );
}

export default ButtonLoading