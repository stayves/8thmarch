import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DariyaPage from './pages/DariyaPage';
import AkkuPage from './pages/AkkuPage';
import CursorPixels from './components/CursorPixels';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <CursorPixels />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dariya" element={<DariyaPage />} />
        <Route path="/akku" element={<AkkuPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
