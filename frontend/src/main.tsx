import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReligionPage from './ReligionPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReligionPage/>
  </StrictMode>
);
