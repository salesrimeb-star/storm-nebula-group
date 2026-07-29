import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ScrollToTopButton from './components/ScrollToTopButton';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ScrollToTopButton />
    </ErrorBoundary>
  );
}
