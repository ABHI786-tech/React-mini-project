import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import FormSubmission from './components/formSubmission.jsx'
import JokeGenerator from './components/JokeGenerator.jsx'
import IpAddressFinder from './components/IpAddressFinder.jsx'
import DiceRolling from './components/DiceRolling.jsx'
import RockPaperScissor from './components/RockPaperScissor.jsx'
import ToDooList from './components/ToDooList.jsx'
// import FormSubmission from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      {/* <FormSubmission /> */}
      {/* <JokeGenerator /> */}
      {/* <IpAddressFinder /> */}
      {/* <DiceRolling /> */}
      {/* <RockPaperScissor /> */}
      <ToDooList />

    </BrowserRouter>
   </StrictMode>,
)
