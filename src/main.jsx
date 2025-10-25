import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Example from './components/Example.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <StrictMode>
    <App />
    {/* <Example a={11} b={22} /> */}
    {/* <ContactForm/> */}
    {/* <Index/> */}
  </StrictMode>
  </>
)
