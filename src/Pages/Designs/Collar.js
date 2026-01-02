import React, { useRef } from 'react';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import './design.css';

const Sleeve = () => {
  const sections = {
    peterpan: useRef(null),
    mandarin: useRef(null),
    shirt: useRef(null),
    boatneck: useRef(null),
    stand: useRef(null),
    ruffle: useRef(null),
    notched: useRef(null),
    highneck: useRef(null),
    cape: useRef(null)
  };

  const handleScroll = (event) => {
    const selected = event.target.value;
    if (sections[selected]) {
      sections[selected].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Images for each sleeve variety
  const sleeveImages = {
    peterpan: [
      "/Images/Designs/collar/peterpan1.jpg",
      "/Images/Designs/collar/peterpan2.jpeg",
      "/Images/Designs/collar/peterpan3.webp",
      "/Images/Designs/collar/peterpan4.jpeg",
    ],
    mandarin: [
      "/Images/Designs/collar/mandarin1.jpeg",
      "/Images/Designs/collar/mandarin2.jpeg",
      "/Images/Designs/collar/mandarin3.webp",
      "/Images/Designs/collar/mandarin4.jpg"
    ],
    shirt: [
      "/Images/Designs/collar/shirt1.webp",
      "/Images/Designs/collar/shirt2.jpeg",
      "/Images/Designs/collar/shirt3.jpeg",
      "/Images/Designs/collar/shirt4.jpg"
    ],
    boatneck: [
      "/Images/Designs/collar/boat1.jpg",
      "/Images/Designs/collar/boat2.jpg",
      "/Images/Designs/collar/boat3.jpg",
      "/Images/Designs/collar/boat4.jpeg"
    ],
    stand: [
      "/Images/Designs/collar/stand1.jpg",
      "/Images/Designs/collar/stand2.jpg",
      "/Images/Designs/collar/stand3.jpg",
      "/Images/Designs/collar/stand4.jpg"
    ],
    ruffle: [
      "/Images/Designs/collar/ruffle1.jpg",
      "/Images/Designs/collar/ruffle2.jpg",
      "/Images/Designs/collar/ruffle3.jpg",
      "/Images/Designs/collar/ruffle4.jpg"
    ],
    notched: [
      "/Images/Designs/collar/notched1.jpg",
      "/Images/Designs/collar/notched2.jpg"
    ],
    highneck: [
      "/Images/Designs/collar/highneck1.jpg",
      "/Images/Designs/collar/highneck2.jpg",
      "/Images/Designs/collar/highneck3.jpg",
      "/Images/Designs/collar/highneck4.jpg"
    ],
    cape: [
      "/Images/Designs/collar/cape1.jpg",
      "/Images/Designs/collar/cape2.jpg",
      "/Images/Designs/collar/cape3.jpg",
      "/Images/Designs/collar/cape4.jpg"
    ],
  };

  // Longer paragraphs for each sleeve variety
  const sleeveDescriptions = {
    peterpan: `වටකුරු ආකාරයෙන් යුතුව නිමාවන කොලරයන් මෙම මෝස්තරයට අයත් වේ. කුඩා දරුවන්ගේ ඇඳුම් සඳහා මෙම මෝස්තරය භාවිතා වේ. මෙම කොලරය විවිධ ආකාරයට මැසීමේදී විවිධ ක්‍රම භාවිතයෙන් අලංකාර කරගත හැකි ය.
     මේ සඳහා විවිධ රිබන් වර්ගල ලේස් වරග භාවිතයෙන් එම්බ්‍රොයිඩර් කිරිම ලේසර් කිරීම මගින් විවිධාකාර වෙනත් රෙදි වර්ග භාවිතයෙන් මෙම කොලරය යොදා ඇඳුම් හැඩගන්වාගත හැකි ය.`,
    
    mandarin: `Chineese Collar and National Collar යනු මෙම කොලරයට පවසන තවත් නම් වේ. මෙය අපගේ ජාතික ඇඳුම සඳහා ද භාවිතා වේ. මෙම කොලරය නිර්මාණය කිරීමේදී එහි කෙලවර 
    වටකුරු සහ හතරැස් ආකාරයට නිර්මාණය කරනු ලබයි. මෙය ද මෝස්තරයන් සඳහා Contrast (වෙනත් වර්ණ සහිත හෝ වෙනත් රෙදි වර්ගයකින්) සහ එම රෙදි වර්ග භාවිතයෙන්ම ඇඳුම සකසාගත හැකි ය.
    මේ සඳහා ඝනකම ෆියුසින් (40-80gsm)හෝ (40-60gsm) සහ ස්ටිප් භාවිතාකළ හැකි යග මෙහි භාවිතයන් පිළිබඳව පහත රූපවල පෙන්වා දී ඇත.`,
    
    shirt: `සාමාන්‍යයෙන් කාර්යාල ඇඳුම් සඳහා මෙය බහුලව භාවිතාවන අතර පිරිමි ඇඳුම් සඳහා මෙය යොදා ගැනේ. එහි භාවිතයන් පිළිබඳව පිරිමි ඇඳුම් පිළිබඳ මාතෘකාව යටතේ සාකච්ඡා කරනු ලැබේ.`,
    
    boatneck: `මෙය බෝට්ටුවක හැඩයට කවාකාරව නිර්මාණය වන කරක් සඳහා කොලරයක් යොදා ගොඩනැංවෙන මෝස්තරයකි. මෙහි භාවිතයන් පිළිබඳව පහතින් ඡායාරූප එක්කර ඇත.`,

    stand: `මෙය බොහෝ දුරට මැන්ඩරින් කොලරයට සමානවන අතර මෙහිදී වෙනස වන්නේ මෙය ගෙලෙන් පහළට වන පරිදි නිර්මාණය වීම ය.මෙහිදී භාවිතාවන මෝස්තර පිළිබඳව ඡායාරූප එකතුවක් පහත දක්වා ඇත.`,

    ruffle: `මෙම මෝස්තරය සහිත ඇඳුමෙහි කොලරය පහළට රැලි සහිතව කඩාහැලෙන ස්වභාවයකින් යුතු වේ. මෙම කොලරය නිර්මාණය කිරීමේදී කඩාහැලෙන වර්ගයේ රෙදි භාවිතාකිරීම සුදුසු වේ.
    උදාහරණයක් ලෙස සෙටින්, ෂිෆෝන්(chiffon), ජෝජට්(goergett) වැනි සිල්ක් ෆැබ්රික් භාවිතයෙන් මෙම කොලරය සහිත ඇඳුම සකසාගත හැකි ය. පහත මෝස්තර සලකා බලන්න.`,

    notched: 'බ්ලේසර් ජැකට්වල බහුල වශයෙන් භාවිතාවන මෙම මෝස්තරය කාන්තා ඇඳුම් අලංකාර කිරීම සඳහා භාවිතා කෙරේ. මෙම මෝස්තරයෙහි භාවිතයන් පහත පෙන්වා දී ඇත.',

    highneck: `මෙය බොහෝවිට ටී-ෂර්ට්ස්, ජර්සිවල භාවිතාවන මෝස්තරයක් වේ.`,

    cape: `කර වටා යන පරිදි ප්‍රමාණයෙන් විශාල පහළට කඩාහැලෙන ආකාරයේ කොලරයක් මෙම මෝස්තරයට යොදාගනු ලබයි. මෙය බොහෝවිට ළමා ඇඳුම් සඳහා භාවිතා වේ.`
  };

  return (
    <>
      <NavBar />
      <div className='sleeve-selection'>
        <h1>Collar Design Varieties</h1>
        <select onChange={handleScroll} defaultValue="" className='selection'>
            <option value="" disabled>Select Sleeve Variety</option>
            <option value="peterpan">Peter Pan Collar</option>
            <option value="mandarin">Mandarin Collar</option>
            <option value="shirt">Shirt Collar</option>
            <option value="boatneck"> Boat Neck collar</option>
            <option value="stand">Stand Collar</option>
            <option value="ruffle">Ruffle Collar</option>
            <option value="notched">Notched Collar</option>
            <option value="highneck">High Neck Collar</option>
            <option value="cape">Cape Collar</option>
        </select>
      </div>

      <div style={{ padding: '20px' }}>
        {Object.entries(sleeveImages).map(([key, images]) => (
          <section key={key} ref={sections[key]} id={key} style={{ marginBottom: '50px' }}>
            <h2>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} Collar</h2>
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
