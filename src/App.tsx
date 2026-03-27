import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ErrorBoundary } from './components/layout/ErrorBoundary';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="work" element={<Work />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
