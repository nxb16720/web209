import { ICar } from "@/interfaces/Car"
import intance from "./intance"

export const getAllCar = async () => {
    return await intance.get('/car')
}
export const getOneCar = async (id: number) => {
    return await intance.get('/car/' + id)
}
export const removeCar = async (id: number) => {
    return await intance.delete('/car/' + id)
}
export const addCar = async (car: ICar) => {
    return await intance.post('/car', car)
}
export const updateCar = async (car: ICar) => {
    return await intance.put('/car/' + car.id, car)
}