
import './App.css'
import { ProductList } from './components'

import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";

function App() {

  return (
    <div>
      <div>
        <RouterProvider router={routers} />

        <ProductList />
        <h2 className="font-bold text-2xl">Cart</h2>

      </div>
    </div>
  )
}

export default App
