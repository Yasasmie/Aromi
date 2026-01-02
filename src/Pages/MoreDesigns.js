import React, { useEffect } from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const pinterestLinks = [
  "https://www.pinterest.com/asankagarments/maxi-dress/",
  "https://www.pinterest.com/asankagarments/fashion-dresses/",
  "https://www.pinterest.com/asankagarments/ruffle-hem-dress/",
  "https://www.pinterest.com/asankagarments/sewing-tutorials/",
  "https://www.pinterest.com/asankagarments/machine/",
  "https://www.pinterest.com/asankagarments/sowings-tools/",
  "https://www.pinterest.com/asankagarments/skirts-designs/",
  "https://www.pinterest.com/asankagarments/tops-designs/",
  "https://www.pinterest.com/asankagarments/crop-tops/",
  "https://www.pinterest.com/asankagarments/t-shirts/",
  "https://www.pinterest.com/asankagarments/office-wear/",
  "https://www.pinterest.com/asankagarments/office-skirts/",
  "https://www.pinterest.com/asankagarments/casual-dress/",
  "https://www.pinterest.com/asankagarments/pants/",
  "https://www.pinterest.com/asankagarments/kids-wear/",
  "https://www.pinterest.com/asankagarments/sleeve-designs/",
  "https://www.pinterest.com/asankagarments/fronts-designs/",
  "https://www.pinterest.com/asankagarments/neck-fronts-designs/"
];

const MoreDesigns = () => {
  useEffect(() => {
    // Load Pinterest widget script only once
    const scriptId = 'pinterest-wjs';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.defer = true;
      script.src = 'https://assets.pinterest.com/js/pinit.js';
      document.body.appendChild(script);
    } else {
      // If script already loaded, attempt to reparse widgets
      window.pintrk && window.pintrk.widgets && window.pintrk.widgets.load();
    }
  }, []);

  return (
    <>
      <NavBar />
      <h1 style={{ textAlign: 'center', margin: '40px 0', fontSize: '2.5rem', color: '#3c2c2b' }}>
        Pattern Ideas
      </h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', padding: '0 20px' }}>
        {pinterestLinks.map((link, idx) => (
          <div
            key={idx}
            style={{
              width: '800px',
              height: '600px',
              overflow: 'auto',
              borderRadius: '12px',
              boxShadow: '0 4px 16px rgba(44,44,44,0.15)'
            }}
            dangerouslySetInnerHTML={{
              __html: `<a data-pin-do="embedBoard" data-pin-board-width="800" data-pin-scale-height="600" data-pin-scale-width="200" href="${link}"></a>`
            }}
          />
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default MoreDesigns;
