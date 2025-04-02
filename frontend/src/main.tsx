import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import App from './App'; // Import your App component

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App /> {/* Render only App.tsx */}
  </StrictMode>
);
