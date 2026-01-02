import React, { useRef } from 'react';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import './design.css';

const Sleeve = () => {
  const sections = {
    back: useRef(null),
  };

  const handleScroll = (event) => {
    const selected = event.target.value;
    if (sections[selected]) {
      sections[selected].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Images for each sleeve variety
  const sleeveImages = {
    back: [
      "/Images/Designs/back/back1.jpeg",
      "/Images/Designs/back/back2.jpeg",
      "/Images/Designs/back/back3.jpeg",
      "/Images/Designs/back/back4.jpeg",
      "/Images/Designs/back/back5.jpeg",
    ],
  };

  // Longer paragraphs for each sleeve variety
  const sleeveDescriptions = {
    front: `පිටුපස පලු‍ව විවිධ මෝස්තර ගොඩනැංවීමට භාවිතා කළ හැකි අතර මෙහිදී භාවිතාකළ හැකි මෝස්තර සම්බන්ධව පහත පෙන්වා දී ඇත. ඔබ විවිධ මෝස්තර ගොඩනැංවීමේදී 
    මෙම දැනුම භාවිතයෙන් මෝස්තර ගොඩනැංවීමට උත්සහ ගන්න.`,

  };

  return (
    <>
      <NavBar />
      <div className='sleeve-selection'>
        <h1>Back Design Varieties</h1>
      </div>

      <div style={{ padding: '20px' }}>
        {Object.entries(sleeveImages).map(([key, images]) => (
          <section key={key} ref={sections[key]} id={key} style={{ marginBottom: '50px' }}>
            <h2>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} Design</h2>
            <p style={{ maxWidth: '700px', lineHeight: 1.6, color: '#444' }}>{sleeveDescriptions[key]}</p>
            <div style={{ display: 'flex', gap: '10px', overflowX: 'auto' }}>
              {images.map((src, i) => (
                <img key={i} src={src} alt={`${key} sleeve design ${i+1}`} style={{ width: '400px', height: '500px', borderRadius: '8px'}} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Sleeve;
