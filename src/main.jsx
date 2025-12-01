import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import FormSubmission from './components/formSubmission'
// import FormSubmission from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <FormSubmission />
    </BrowserRouter>
   </StrictMode>,
)
