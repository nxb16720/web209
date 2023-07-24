import { useContext, useEffect} from "react"
import { ProductContext } from "../contexts/ProductContext"
import { intance } from "../axios/intance"

const ProductsList = () => {
  const {state,dispatch} = useContext(ProductContext)
  useEffect(()=>{
    (async()=>{
      try {
        const { data } = await intance.get('/products')
        dispatch({type:'fetch',payload:data})
      } catch (error) {   
      }
    })()
  },[])

  const addProducts =async (product:any)=>{
    try {
      const { data } = await intance.post('/products',product)
      dispatch({type:'add',payload:data})
    } catch (error) {
    }
  }
  const updateProducts =async (product:any)=>{
    try {
      const { data } = await intance.put('/products/'+product.id,product)
      dispatch({type:'update',payload:data})
    } catch (error) {
    }
  }
  const deleteProducts =async (product:any)=>{
    try {
      await intance.delete('/products/'+product.id)
      dispatch({type:'delete',payload:product.id})
    } catch (error) {
    }
  }
  return (
    <div>
      <h1>ProductsList</h1>
      {state?.products?.map((item:any)=>{
        return <div key={item.id}>{item.name}</div>
      })}
      <button onClick={()=>{addProducts({name:"san pham C"})}}>add</button>
      <button onClick={()=>{updateProducts({name:"san pham C update",id:3})}}>update</button>
      <button onClick={()=>{deleteProducts({id:3})}}>delete</button>
    </div>
  )
}

export default ProductsList