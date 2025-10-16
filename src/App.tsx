import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import KidsPage from './pages/KidsPage';
import ProfessionalsPage from './pages/ProfessionalsPage';
import EnterprisePage from './pages/EnterprisePage';
export function App() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/professionals" element={<ProfessionalsPage />} />
        <Route path="/enterprise" element={<EnterprisePage />} />
      </Routes>
    </BrowserRouter>;
}