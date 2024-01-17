import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';
import Footer from './components/Footer';

function ExternalRedirect({ to }) {
  React.useEffect(() => {
    window.open(to, '_blank');
  }, [to]);

  return null;
}

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/wiki" element={<ExternalRedirect to="https://www.wiki.example.com" />} />
        <Route path="/Support" element={<ExternalRedirect to="https://www.support.example.com" />} />
        <Route path="/discord" element={<ExternalRedirect to="https://discord.gg/eVXwYURt" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;