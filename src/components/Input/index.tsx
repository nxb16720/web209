import React from "react";
type Props = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ onChange }: Props) => {
    return <input onChange={onChange} className="border border-red-500 w-full p-2 mr-2" />
}

export default Input