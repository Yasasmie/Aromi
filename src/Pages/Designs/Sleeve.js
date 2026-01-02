import React, { useRef } from 'react';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import './design.css';

const Sleeve = () => {
  const sections = {
    puff: useRef(null),
    bishop: useRef(null),
    bell: useRef(null),
    raglan: useRef(null),
    bishop: useRef(null),
    offshoulder: useRef(null),
    butterfly: useRef(null),
    frill: useRef(null),
    balloon: useRef(null),
    cuff: useRef(null),
    petal: useRef(null),
    slit: useRef(null),
    cape: useRef(null),
    juliet: useRef(null),
    sleeveless: useRef(null),
  };

  const handleScroll = (event) => {
    const selected = event.target.value;
    if (sections[selected]) {
      sections[selected].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Images for each sleeve variety
  const sleeveImages = {
    puff: [
      "/Images/Designs/sleeves/puff sleeve (2).jpg",
      "/Images/Designs/sleeves/puff sleeve 4.jpg",
      "/Images/Designs/sleeves/puff sleeve 5.jpg",
      "/Images/Designs/sleeves/puff sleeve 6.jpg",
      "/Images/Designs/sleeves/puff sleeve 7.jpg",
      "/Images/Designs/sleeves/puff sleeve 8.jpg",
      "/Images/Designs/sleeves/puff sleeve 10.jpg",
    ],
    bell: [
      "/Images/Designs/sleeves/bell sleeve 7.jpg",
      "/Images/Designs/sleeves/bell sleeve 8.jpg",
      "/Images/Designs/sleeves/bell sleeve 9.jpg"
    ],
    raglan: [
      "/Images/Designs/sleeves/raglan sleeve 7.jpg",
      "/Images/Designs/sleeves/raglan sleeve 8.jpg",
      "/Images/Designs/sleeves/raglan sleeve 9.jpg",
      "/Images/Designs/sleeves/raglan sleeve 10.jpg",
      "/Images/Designs/sleeves/raglan sleeve 12.jpg",
      "/Images/Designs/sleeves/raglan sleeve 14.jpg"
    ],
    bishop: [
      "/Images/Designs/sleeves/bishop sleeve 1.jpg",
      "/Images/Designs/sleeves/bishop sleeve 3.jpg",
      "/Images/Designs/sleeves/bishop sleeve 4.jpg",
      "/Images/Designs/sleeves/bishop sleeve 5.jpg",
      "/Images/Designs/sleeves/bishop sleeve 7.jpg",
      "/Images/Designs/sleeves/bishop sleeve 10.jpg"
    ],
    offshoulder: [
      "/Images/Designs/sleeves/cold shoulder 1.jpg",
      "/Images/Designs/sleeves/cold shoulder 2.jpg",
      "/Images/Designs/sleeves/cold shoulder 5.jpg",
      "/Images/Designs/sleeves/cold shoulder 6.jpg",
      "/Images/Designs/sleeves/cold shoulder 7.jpg",
      "/Images/Designs/sleeves/cold shoulder 9.jpg",
      "/Images/Designs/sleeves/cold shoulder 10.jpg"
    ],
    butterfly: [
      "/Images/Designs/sleeves/butterfly sleeve 1.jpg",
      "/Images/Designs/sleeves/butterfly sleeve 2.jpg",
      "/Images/Designs/sleeves/butterfly sleeve 3.jpg",
      "/Images/Designs/sleeves/butterfly sleeve 5.jpg",
      "/Images/Designs/sleeves/butterfly sleeve 6.jpg",
      "/Images/Designs/sleeves/butterfly sleeve 7.jpg",
      "/Images/Designs/sleeves/butterfly sleeve 10.jpg"
    ],
    frill: [
      "/Images/Designs/sleeves/frill sleeve 3.jpg",
      "/Images/Designs/sleeves/frill sleeve 4.jpg",
      "/Images/Designs/sleeves/frill sleeve 6.jpg",
      "/Images/Designs/sleeves/frill sleeve 7.jpg",
      "/Images/Designs/sleeves/frill sleeve 8.jpg",
      "/Images/Designs/sleeves/frill sleeve 9.jpg",
      "/Images/Designs/sleeves/frill sleeve10.jpg"
    ],
    balloon: [
      "/Images/Designs/sleeves/ballon sleeve 1.jpg",
      "/Images/Designs/sleeves/ballon sleeve 3.jpg",
      "/Images/Designs/sleeves/ballon sleeve 6.jpg",
      "/Images/Designs/sleeves/ballon sleeve 7.jpg",
      "/Images/Designs/sleeves/ballon sleeve 9.jpg",
      "/Images/Designs/sleeves/ballon sleeve 10.jpg"
    ],
    cuff: [
      "/Images/Designs/sleeves/cup sleeve 2.jpg",
      "/Images/Designs/sleeves/cup sleeve 3.jpg",
      "/Images/Designs/sleeves/cup sleeve 4.jpg",
      "/Images/Designs/sleeves/cup sleeve 5.jpg",
      "/Images/Designs/sleeves/cup sleeve 6.jpg",
      "/Images/Designs/sleeves/cup sleeve 7.jpg",
      "/Images/Designs/sleeves/cup sleeve 8.jpg",
      "/Images/Designs/sleeves/cup sleeve 10.jpg"
    ],
    petal: [
      "/Images/Designs/sleeves/petal sleeve 1.jpg",
      "/Images/Designs/sleeves/petal sleeve 2.jpg",
      "/Images/Designs/sleeves/petal sleeve 3.jpg",
      "/Images/Designs/sleeves/petal sleeve 5.jpg",
      "/Images/Designs/sleeves/petal sleeve 6.jpg",
      "/Images/Designs/sleeves/petal sleeve 8.jpg",
    ],
    slit: [
      "/Images/Designs/sleeves/slit sleeve 1.jpg",
      "/Images/Designs/sleeves/slit sleeve 2.jpg",
      "/Images/Designs/sleeves/slit sleeve 3.jpg",
      "/Images/Designs/sleeves/slit sleeve 5.jpg",
      "/Images/Designs/sleeves/slit sleeve 6.jpg",
      "/Images/Designs/sleeves/slit sleeve 8.jpg",
      "/Images/Designs/sleeves/slit sleeve 10.jpg",
    ],
    cape: [
      "/Images/Designs/sleeves/cape sleeve 1.jpg",
      "/Images/Designs/sleeves/cape sleeve 2.jpg",
      "/Images/Designs/sleeves/cape sleeve 5.jpg",
      "/Images/Designs/sleeves/cape sleeve 6.jpg",
      "/Images/Designs/sleeves/cape sleeve 8.jpg",
      "/Images/Designs/sleeves/cape sleeve 9.jpg",
      "/Images/Designs/sleeves/cape sleeve 10.jpg",
    ],
    juliet: [
      "/Images/Designs/sleeves/juliet sleeve 1.jpg",
      "/Images/Designs/sleeves/juliet sleeve 2.jpg",
      "/Images/Designs/sleeves/juliet sleeve 9.jpg",
      "/Images/Designs/sleeves/juliet sleeve 10.jpg",
      "/Images/Designs/sleeves/juliet sleeve 5.jpg"
    ],
    sleeveless: [
      "/Images/Designs/sleeves/sleeveless 2.jpg",
      "/Images/Designs/sleeves/sleeveless 4.jpg",
      "/Images/Designs/sleeves/sleeveless 5.jpg",
      "/Images/Designs/sleeves/sleeveless 6.jpg",
      "/Images/Designs/sleeves/sleeveless 10.jpg",
      "/Images/Designs/sleeves/sleeveless 11.jpg"
    ],
  };

  // Longer paragraphs for each sleeve variety
  const sleeveDescriptions = {
    puff: `මෙම අත සකස් කිරීමේදී ප්‍රමාණයෙන් විශාලවන ලෙස අත සකස්කිරිම සිදු වේ. එම වැඩිපුර එකතුකරන ලද ප්‍රමාණය රැලිකිරීම තුළින් අදාළ මිනුම ලැබෙන ලෙස රැලිකර ඇඳුමට අත ඇල්ලීම සිදු කරයි. 
    මෙම රැලිකිරීම 1x1, 1x1/2, 1x2 ආදි වශයෙන් වැඩිකිරිම සිදුකරයි. ඔබ භාවිතාකරන රෙදි වර්ගය අනුව මෙම එකතුකිරීම සිදුකළ යුතු ය. මේ සම්බන්ධව පතොරම් සැකසීම අපගේ පොතෙහි සහ පාඩම් 
    මාලාවන්වල ඉතාම ගැඹුරින් සාකච්ඡා කර තිබේ. එම දැනුම භාවිතයෙන් පහත මෝස්තර සකසා ගැනීමට උත්සහ ගන්න. ගවුම්, උත්සව ඇඳුම්, ක්‍රොප් ටොප්, මනමාලියන්ගේ ඇදුම් සඳහා මෙය වඩාත් යෝග්‍ය වේ.`,
    
    bell: `මෙම අත් සහිත ඇඳුම් නිර්මාණය කිරීමේදී ත්‍රී ක්වාටා, දිග සහ කෙටි යන ආකාරවලට සකසාගත හැකි ය. ඉහළින් මදක් තදව තිබෙන පරිදි ද, 
    පහළට යන විට ප්‍රමාණයෙන් විශාලවන පරිදි ද සීනුවක හැඩයට මෙම මෝස්තර නිර්මාණය වේ. පහත මෝස්තර අධ්‍යයනය කර පතොරම් සකසා ගැනීමට උත්සහ ගන්න.`,
    
    raglan: `මෙම අත් බොහෝ දුරට ටී - ෂර්ට්ස් සඳහා භාවිතා වේ. විවිධ Top සහ Crop Top සඳහා ද මෙය භාවිතාකර මෝස්තර ගොඩනංවාගත හැකි ය.`,
    
    bishop: `මෙම අත සාමාන්‍ය Cap Sleeve එකක් ලෙස ඉහළින් නිර්මාණය කර ඉන් පහළට රැලි සහිත කොටසක් නිර්මාණය කර සකසාගත හැකි ය. බොහෝවිට මෙය දිගු අත් සහිත ඇඳුම් සඳහා යෝග්‍ය වේ.`,

    offshoulder: `මෙම අත සාමාන්‍ය Cap Sleeve එකක් ලෙස ඉහළින් නිර්මාණය කර ඉන් පහළට රැලි සහිත කොටසක් නිර්මාණය කර සකසාගත හැකි ය. බොහෝවිට මෙය දිගු අත් සහිත ඇඳුම් සඳහා යෝග්‍ය වේ.`,

    butterfly: `මෙම අත් මෝස්තරය බෙල් අත සාදාගත් ආකාරයට සමානවන අතර වඩාත් කෙටි අත් හෝ ත්‍රී ක්වාටා අත් සඳහා මෙය සුදුසු වේ. මෙවැනි මෝස්තර නිර්මාණය කිරීමේදී ඔබ භාවිතාකරන රෙදි වර්ගය අනුව එහි පෙනුම වෙනස් වේ.
    වඩාත් යෝග්‍ය වන්නේ කඩාහැලෙන ස්වභාවයෙන් යුතු සිල්ක් මිශ්‍ර රෙදි වර්ග ය. ක්‍යසදෛබ, ඨැදරටැඑඑැ, 4 අ්හ, ඍැහදබ වැනි රෙදි වර්ග මේ සඳහා සුදුසු වේ.`,

    frill: `මෙම අත බොහෝ දුරට Butterfly අතට සමානවන අතර ඉහළින් රැලිකර මෙහි අලංකාරවත් බව තව දුරටත් වැඩි කරගත හැකි ය. එසේම මෙය මැනීමේදී ී Super code කිරීම තුළින් මෙහි වාටිය මසාගත හැකි ය.
    Super code එක තුළින් තන්ගුස් නූලක් යවා මසා ගැනීමෙන් අතෙහි හැඩය ඉහළට එසවී තිබෙන ආකාරයට සකසාගත හැකි ය.පහත රූප අධ්‍යයනය කර මෙවැනි මෝස්තර සකසා ගැනීමට උත්සහ ගන්න.`,

    balloon: `ඉහළින් එන අතෙහි ප්‍රමාණය පහළින් Sleeve Band එකක් යොදාගැනීම තුළින් බැලු‍නයක ස්වභාවයට නිර්මාණය කරගන්නා අත මෙම මෝස්තරයට අයත් වේ. 
    මෙය බොහෝවිට බෝරිච්චි Puff sleeve ගණයටම අයත්වන මෝස්තරයකි. අප මෙම අත සකසාගන්නා ආකාරය අපගේ පොතෙහි සාකච්ඡා කර ඇත.
    පහත මෝස්තර අධ්‍යයනය කරන්න`,

    cuff: `මෙම අත් සහිත මෝස්තර ප්‍රධාන වශයෙන් කෙටි අත, ත්‍රී ක්වාටා සහ දිගු අත යනුවෙන් කොටස් 3කි. මෙය බහුල වශයෙන් භාවිතා වන්නේ දිගු අත් සහිත ඇඳුම් සඳහා ය. 
    මෙය විවිධ හැඩ සහ විවිධ ප්‍රමාණයන්ගෙන් නිර්මාණය කරගන්නා අතර එය ඔබ සාදාගන්නා ඇඳුම මත තීරණය වේ. පහත රූප අධ්‍යයනය කර විවිධ මෝස්තර ගොඩනැංවීමට උත්සහ ගන්න.`,

    petal: `මල් පෙත්තක ස්වභාවයෙන් නිර්මාණය වන මෙම අත වඩාත් යෝග්‍ය වන්නේ කෙටි අත් සහිත ඇඳුම් සඳහා ය. මෙය ඔබට අවශ්‍ය නම් දිගු අත් සඳහා ද භාවිතා කළ හැකි ය. 
    මෙම අත සාදා ගැනීමේදී අපගේ පොතෙහි සාකච්ඡා කර ඇති ආකාරයට නිවැරදිව Cut mark දමා ගැනීමෙන් ඇඳුම මැසීමට වඩාත් පහසු වේ. මෙම අත, තනි අතක් මෙන්ම අත් දෙකක් වන ලෙස ද සකසාගත හැකි ය.`,

    slit: `මෙම මෝස්තර සහිත අත් නිර්මාණයේදී අතෙහි කැපුමක් සහිතව සාදාගන්නා පතොරම භාවිතයෙන් මසාගැනීම සිදු වේ. මෙය වඩාත් යෝග්‍ය වන්නේ ත්‍රී ක්වාටා හෝ දිගු අත් සඳහා ය. රෙදි
    වර්ගයේ ස්වභාවය අනුව එහි පෙනුම වෙනස් වේ. මෙම විවරය වැසෙන පරිදි ලූප් භාවිතාකර අවශ්‍යවන විටදී පමණක් විවරවන පරිදි ද නිර්මාණය කරගත හැකි ය. ඔබ මෙම මෝස්තරය සැකසීමේදී අවශ්‍යතාවය සහ රෙදි
    වර්ගය අනුව මෝස්තරයෙහි ස්වභාවය සකසාගන්න. පහත මෝස්තර අධ්‍යයනය කර, අපගේ පන්තියෙහි සාකච්ඡා කළ දැනුම ද භාවිතාකර මෙම මෝස්තර ගොඩනැංවීමට උත්සහ ගන්න.`,

    cape: `මෙම අත් මෝස්තරය බොහෝවිට ගැළපෙන්නේ උත්සව සඳහා නිර්මාණය වන ඇඳුම් සඳහා ය. මෙහිදී අත ඉහළින් රැලි වී පහළට කඩාහැලෙන ස්වභාවයකින් යුතු වේ. 
    මෙය ප්‍රමාණයෙන් විශාලවන පරිදි සකසා ගැනීමෙන් මංගල ඇඳුම් සඳහා ද සුදුසු ය. පහත මෝස්තර අධ්‍යයනය කර, පතොරම් සකසා ඇඳුම් මැසීමට උත්සහ ගන්න.`,

    juliet: `මෙම අත් මෝස්තරය බොහෝවිට භාවිතා වන්නේ මෝස්තර නිර්මාණ තරඟ සඳහා ය. මංගල ඇඳුම් සහ පාටි ඇඳුම් සඳහා ද සුදුසු වන අතර මෙය ආකාර කිහිපයකට සකසාගත හැකි ය. 
    පහත මෝස්තර අධ්‍යයනය කරන්න.`,

    sleeveless: `මදක් ප්‍රමාණයෙන් අඩුවන පරිදි සාදන ලද අතකිග මෙය බොහෝවිට ගැළපෙන්නේ ප්‍රමාණයෙන් විශාල ඇඳුම් සඳහා යග බොහෝවිට සාරි බ්ලවුස් සහ කොට ගවුම් සඳහා මෙය වඩාත් යෝග්‍ය වේ.
     මෙම අත භාවිතාකර ඇඳුම් මැසීමේදී ඇදෙනසුළු රෙදි භාවිතයෙන් වඩාත් හොඳ නිමාවක් ලබාගත හැකි ය. පහත මෝස්තර අධ්‍යයනය කරන්නග එහි පතොරම් සකසා එම ආකාරයේ ඇඳුම් සකසා ගැනීමට උත්සහ කරන්න.`
  };

  return (
    <>
      <NavBar />
      <div className='sleeve-selection'>
        <h1>Sleeve Varieties</h1>
        <select onChange={handleScroll} defaultValue="" className='selection'>
            <option value="" disabled>Select Sleeve Variety</option>
            <option value="puff">Puff Sleeve</option>
            <option value="bell">Bell Sleeve</option>
            <option value="raglan">Raglan Sleeve</option>
            <option value="bishop">Bishop Sleeve</option>
            <option value="offShoulder">Off Shoulder Sleeve</option>
            <option value="butterfly">Butterfly Sleeve</option>
            <option value="frill">Frill Sleeve</option>
            <option value="balloon">Balloon Sleeve</option>
            <option value="cuff">Cuff Sleeve</option>
            <option value="petal">Petal Sleeve</option>
            <option value="slit">Slit Sleeve</option>
            <option value="cape">Cape Sleeve</option>
            <option value="juliet">Juliet Sleeve</option>
            <option value="sleeveless">Skeeveless Sleeve</option>
        </select>
      </div>

      <div style={{ padding: '20px' }}>
        {Object.entries(sleeveImages).map(([key, images]) => (
          <section key={key} ref={sections[key]} id={key} style={{ marginBottom: '50px' }}>
            <h2>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} Sleeve</h2>
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
