import { ICar } from "@/interfaces/Car"
import { Item } from ".."
import React, { useContext } from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
type Props = {
    cars: ICar[];
    onRemove: (car: ICar) => void;
    loading?: boolean
}


const List = ({ cars, onRemove, loading }: Props) => {


    return (
        <>
            {loading ? (<SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton count={5} height={35} />
            </SkeletonTheme>
            ) : (<ul>
                {cars?.map((car: ICar) => (
                    <Item key={car.id} car={car} loading={loading} onRemove={onRemove} />

                ))}
            </ul>)}
            <ul>
                {cars?.map((car: ICar) => (
                    <Item key={car.id} car={car} loading={loading} onRemove={onRemove} />

                ))}
            </ul>

        </>

    )
}

export default List