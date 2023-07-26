import { useEffect, useState } from 'react'
import './App.css'
import { ICar } from './interfaces/Car'
import { Button, Input, List, Form, Table, ButtonLoading, Test, Cart } from './components'
import { addCar, getAllCar, removeCar, updateCar } from './api/car'
import React from 'react'
import { instance } from './axios/config'

import { pause, pauseButton } from './utils/pause'

function App() {
  const [cars, setCars] = useState<ICar[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<null>(null)

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
        await pause(1000)
        setCars(await instance.get("/cars"))
        setIsLoading(false)
      } catch (error: any) {
        setError(error.message)
        setIsLoading(false)
      }
    })()
  }, [])

  const addCar = async (car: ICar) => {
    try {
      setIsLoading(true)
      await pause(1000)
      await instance.post('/cars', car).then(() => setCars([...cars, car]))
      setIsLoading(false)
    } catch (error: any) {
      setError(error.message)
      setIsLoading(false)
    }
  };
  const removeCar = async (car: ICar) => {
    try {
      setIsLoading(true)
      await pauseButton(3000)
      setCars(await instance.delete("/cars/" + car.id).then(() => cars.filter((item) => item.id !== car.id)));
      setIsLoading(false)
    } catch (error: any) {
      setError(error.message)
      setIsLoading(false)
    }
  };

  return (
    <div>
      <div>
        <Test />
        <h1>cart</h1>
        <Cart />
        <div className="w-96 mx-auto border">
          <Form onAdd={addCar} loading={isLoading} />
          <List cars={cars} onRemove={removeCar} loading={isLoading} />
        </div>
      </div>

      {/* <hr />
      <h2>Table</h2>
      <Table data={testTable} cofig={cofigTable} /> */}
    </div>
  )
}

export default App
