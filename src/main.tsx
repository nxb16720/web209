
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from 'react-redux'
import persistor, { store } from './store/index.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}><App /></PersistGate>
  </Provider>
)
