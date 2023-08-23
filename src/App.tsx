import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Guests from './routes/Guests';
import NotFound from './routes/NotFound';
import Orders from './routes/Orders';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guests/:guestRef" element={<Guests />} />
        <Route path="/orders/:orderRef" element={<Orders />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
