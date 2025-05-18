import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import LanguageSelection from '../components/LanguageSelection';

const Home = lazy(() => import('../pages/Home'));
const Products = lazy(() => import('../pages/Products'));
const History = lazy(() => import('../pages/History'));
const Legal = lazy(() => import('../pages/Legal'));

function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<LanguageSelection />} />
          <Route path="/:lang/" element={<Home />} />
          <Route path="/:lang/products" element={<Products />} />
          <Route path="/:lang/history" element={<History />} />
          <Route path="/:lang/legal-notice" element={<Legal />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRoutes;