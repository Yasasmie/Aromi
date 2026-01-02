import React, { useRef } from 'react';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import './design.css';

const Sleeve = () => {
  const sections = {
    front: useRef(null),
  };

  const handleScroll = (event) => {
    const selected = event.target.value;
    if (sections[selected]) {
      sections[selected].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Images for each sleeve variety
  const sleeveImages = {
    front: [
      "/Images/Designs/front/front.jpeg",
      "/Images/Designs/front/front2.jpeg",
      "/Images/Designs/front/front3.jpeg",
      "/Images/Designs/front/front4.jpeg",
      "/Images/Designs/front/front5.jpeg",
      "/Images/Designs/front/front6.jpeg",
      "/Images/Designs/front/front7.jpeg",
    ],
  };

  // Longer paragraphs for each sleeve variety
  const sleeveDescriptions = {
    front: `ඉදිරිපස පලු‍ව සඳහා විවිධ මෝස්තර ගොඩනැංවිය හැකි ය. විශේෂයෙන්ම අගය එකතුකිරීම ලෙස Embroider, Lace සහ විවිධ Accessories එකතුකර මෝස්තර ගොඩනැංවිය හැකි ය. 
    එසේම Pocket, Flap, Tab, Cut and seam සහ භාවිතාවන රෙදි වර්ගය අනුව ද, බයර්ස් සහ Grain line එක වෙනස්කිරීම තුළින් ද විවිධ මෝස්තර සැකසිය හැකි ය. අප අපගේ පොතෙහි 
    මේ සම්බන්ධව තවදුරටත් සාකච්ඡා කර ඇත. එම දැනුම ද භාවිතයෙන් පහත රුප අධ්‍යයනය කර, පහත මෝස්තර නිර්මාණය කිරීමට උත්සහ ගන්න.`,

  };

  return (
    <>
      <NavBar />
      <div className='sleeve-selection'>
        <h1>Front Design Varieties</h1>
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
