import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FaqAccordion from './components/FaqAccordion'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FaqAccordion/>
  </StrictMode>,
)
