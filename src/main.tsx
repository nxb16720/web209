import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ContextApp from './context/context.tsx'
import ProductContext from './context/ProductContext.tsx'
import { Provider } from 'react-redux'
import store from './store/index.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <ProductContext>
  //   <ContextApp>
  //     <App />
  //   </ContextApp>
  // </ProductContext>
  <Provider store={store}><App /></Provider>
)
