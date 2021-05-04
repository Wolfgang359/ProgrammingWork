import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './layouts/Main';
import { About } from './pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<About />} />
          <Route path="/discover" element={<h1>Discover</h1>} />
          <Route path="/search" element={<h1>Search</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

