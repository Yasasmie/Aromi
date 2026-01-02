import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const FabricPage = () => {
  return (
    <div>
    <NavBar/>
    <div style={{
      display: 'flex',
      height: '100vh',
      width: '100vw',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <h1 style={{ fontSize: '3rem', color: '#3c2c2b', marginBottom: '16px' }}>
        Coming Soon
      </h1>
      <p style={{ fontSize: '1.8rem', color: '#707070' }}>
        Stay Tuned
      </p>
    </div>
    <Footer/>
    </div>
  );
};

export default FabricPage;
