import { ICar } from "@/interfaces/Car"
import { Button, ButtonLoading } from ".."
import { GoTrash } from "react-icons/go";
import React, { useContext } from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

type Props = {
    car: ICar,
    onRemove: (car: ICar) => void,
    loading?: boolean
}
const MyContext = React.createContext<string>('default value');

const ChildComponent: React.FC = () => {
    // Truy cập giá trị của Context
    const value = useContext(MyContext);

    return <p>Value from context: {value}</p>;
};

const ParentComponent: React.FC = () => {
    return (
        <MyContext.Provider value="test context">
            <ChildComponent />
        </MyContext.Provider>
    );
};

const Item = ({ car, onRemove, loading }: Props) => {

    return (
        <><li className="flex justify-between items-center p-2 border-b border-red-200">
            {car.name}-  <ParentComponent />
            <div>{loading ? (<ButtonLoading />
            ) : (
                <Button onClick={() => onRemove(car)}><GoTrash /></Button>
            )} </div></li>
        </>

    )
}

export default Item