import { ICar } from "@/interfaces/Car";
import { Button, ButtonLoading, Input } from ".."
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
type Props = {
    onAdd: (car: ICar) => void
    loading?: boolean
}

const Form = ({ onAdd, loading }: Props) => {
    const [valueInput, setValueInput] = useState<string>("");
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (valueInput !== "") {
            onAdd({
                id: Math.floor(Math.random() * 1000),
                name: valueInput,
            });
            e.target.reset();
            setValueInput("");
        }
    };
    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.target.value);

    };
    return (
        <form onSubmit={onSubmit} className="border-b mb-3 p-3 flex justify-between items-center ">
            <Input onChange={onHandleChange} />
            {loading ? (<ButtonLoading />
            ) : (
                <Button ><AiOutlinePlus /></Button>
            )}

        </form>
    )
}

export default Form