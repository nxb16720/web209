
import './App.css'
import { Cart, ProductList } from './components'
import Count from './components/Count'
import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";

function App() {

  return (
    <div>
      <div>
        <RouterProvider router={routers} />
        <Count />
        <ProductList />
        <h2 className="font-bold text-2xl">Cart</h2>
        <Cart />
      </div>
    </div>
  )
}

export default App
