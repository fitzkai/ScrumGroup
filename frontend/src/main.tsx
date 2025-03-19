import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReligionPage from './ReligionPage.tsx';
import DiscussionBoard from './components/DiscussionBoard.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DiscussionBoard/>
    <ReligionPage/>
  </StrictMode>
);
