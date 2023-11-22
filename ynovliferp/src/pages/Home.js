import React from 'react';
import Footer from '../components/Footer';

function Home() {
  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <img src="./images/background.png" alt="background" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }} />
      <div style={{ backgroundColor: 'rgba(255, 105, 180, 0.5)', width: '100%', height: '100%', position: 'absolute' }}></div>
      <div style={{ position: 'relative', color: '#a381ff', fontSize: '2em', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        Bienvenue sur le site de Ynov Life RP
      </div>
      <Footer />
    </div>
  );
}

export default Home;