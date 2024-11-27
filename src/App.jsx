import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Layout from './Home/Layout';
import { KanjiProvider } from './Context/KanjiProvider';
import { FavoritesProvider } from './Context/FavoritesProvider';

// Lazy load components
const Home = lazy(() => import('./Home/Home'));
const Favorites = lazy(() => import('./Favorites/Favorites'));
const Info = lazy(() => import('./Info/Info'));

function App() {
  return (
    <FavoritesProvider>
      <KanjiProvider>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="favorites" element={<Favorites />} />
                <Route path="info" element={<Info />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </KanjiProvider>
    </FavoritesProvider>
  );
}

export default App;