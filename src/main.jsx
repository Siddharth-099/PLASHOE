import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseContext from './useContext/UseContext.jsx'

createRoot(document.getElementById('root')).render(
  <UseContext>
    <App />
  </UseContext>

)
