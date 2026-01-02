import React, { useRef } from 'react';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import './design.css';

const Sleeve = () => {
  const sections = {
    u: useRef(null),
    boat: useRef(null),
    square: useRef(null),
    sweetheart: useRef(null),
    v: useRef(null),
    keyhole: useRef(null),
    halter: useRef(null),
    asymmetric: useRef(null),
    offshoulder: useRef(null),
    oneshoulder: useRef(null),
    cowl: useRef(null),
    notch: useRef(null),
    high: useRef(null),
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
    u: [
      "/Images/Designs/neck/u1.jpg",
      "/Images/Designs/neck/u2.jpg",
      "/Images/Designs/neck/u3.jpg",
      "/Images/Designs/neck/u4.jpg"
    ],
    boat: [
      "/Images/Designs/neck/boat1.jpg",
      "/Images/Designs/neck/boat2.jpg",
      "/Images/Designs/neck/boat3.jpg",
      "/Images/Designs/neck/boat4.jpg"
    ],
    square: [
      "/Images/Designs/neck/square1.jpg",
      "/Images/Designs/neck/square2.jpg",
      "/Images/Designs/neck/square3.jpg",
      "/Images/Designs/neck/square4.jpg",
    ],
    sweetheart: [
      "/Images/Designs/neck/sweetheart1.jpg",
      "/Images/Designs/neck/sweetheart2.jpg",
      "/Images/Designs/neck/sweetheart3.jpg",
      "/Images/Designs/neck/sweetheart4.jpg",
    ],
    v: [
      "/Images/Designs/neck/v1.jpg",
      "/Images/Designs/neck/v2.jpg",
      "/Images/Designs/neck/v3.jpg",
      "/Images/Designs/neck/v4.jpg",
    ],
    keyhole: [
      "/Images/Designs/neck/keyhole1.jpg",
      "/Images/Designs/neck/keyhole2.jpg",
      "/Images/Designs/neck/keyhole3.jpg",
      "/Images/Designs/neck/keyhole4.jpg",
    ],
    halter: [
      "/Images/Designs/neck/halter1.jpg",
      "/Images/Designs/neck/halter2.jpg",
      "/Images/Designs/neck/halter3.jpg",
      "/Images/Designs/neck/halter4.jpg",
    ],
    asymmetric: [
      "/Images/Designs/neck/asymmetric1.jpg",
      "/Images/Designs/neck/asymmetric2.jpg",
      "/Images/Designs/neck/asymmetric3.jpg",
      "/Images/Designs/neck/asymmetric4.jpg",
    ],
    offshoulder: [
      "/Images/Designs/neck/offshoulder1.jpg",
      "/Images/Designs/neck/offshoulder2.jpg",
      "/Images/Designs/neck/offshoulder3.jpg",
      "/Images/Designs/neck/offshoulder4.jpg",
    ],
    oneshoulder: [
      "/Images/Designs/neck/oneshoulder1.jpg",
      "/Images/Designs/neck/oneshoulder2.jpg",
      "/Images/Designs/neck/oneshoulder3.jpg",
      "/Images/Designs/neck/oneshoulder4.jpg",
    ],
    cowl: [
      "/Images/Designs/neck/cowl1.jpg",
      "/Images/Designs/neck/cowl2.jpg",
      "/Images/Designs/neck/cowl3.jpg",
      "/Images/Designs/neck/cowl4.jpg",
    ],
    notch: [
      "/Images/Designs/neck/notch1.jpg",
      "/Images/Designs/neck/notch2.jpg",
      "/Images/Designs/neck/notch3.jpg",
      "/Images/Designs/neck/notch4.jpg",
    ],
    high: [
      "/Images/Designs/neck/high1.jpg",
      "/Images/Designs/neck/high2.jpg",
      "/Images/Designs/neck/high3.jpg",
      "/Images/Designs/neck/high4.jpg",
    ],
    cape: [
      "/Images/Designs/neck/cape1.jpg",
      "/Images/Designs/neck/cape2.jpg",
      "/Images/Designs/neck/cape3.jpg",
      "/Images/Designs/neck/cape4.jpg",
    ],
  };

  // Longer paragraphs for each sleeve variety
  const sleeveDescriptions = {
    u: `මෙම කර මෝස්තර බොහෝවිට සාරි බ්ලවුස් සඳහා භාවිතා වේ.`,
    
    boat: `උරහිස් දෙපසට ඈත්වන පරිදි කවාකාර හැඩයකින් යුතුව නිර්මාණය වන කර මෝස්තරයකි. මෙම කර සහිත මෝස්තර සැකසීමේදී කරෙහි ගැඹුර අඩුවන පරිදි සකසන්න. 
    මෙය බොහෝවිට කඩාහැලෙන රෙදි සඳහා යෝග්‍ය වේ. උත්සව සඳහා ඇඳුම් නිර්මාණය කිරීමේදී මෙම මෝස්තරය බහුලව භාවිතා වේ. උරහිස එතරම් විවර නොවන පරිදි සකසා මෙම මෝස්තරය
    සාරි බ්ලවුස්, ගවුම් මෝස්තර සඳහා ද භාවිතාකර බලන්නග පහත රූප අධ්‍යයනය කරන්න.`,
    
    square: `හතරැස් චතුරස්‍රාකාර කර හැඩති මෝස්තර සහිත ඇඳුම් සැකසීමේදී මෙය භාවිතා වේ. බොහෝවිට ගවුම්ල බ්ලවුස් සඳහා මෙම හැඩති කර සකසා මෝස්තර නිර්මාණය කිරීම සිදුකරනු ලබයි.
    මෙය පිටුපස කර සඳහා සුදුසු මෝස්තරයකි.`,
    
    sweetheart: `මෙම කර සහිත මෝස්තර බොහෝවිට සාරි බ්ලවුස් සඳහා භාවිතා වේ. ටොප් සඳහා ද මෙම හැඩයන් භාවිතාකර මෝස්තර සකසාගත හැකි ය.`,

    v: `V හැඩති කරක් සහිත ඇඳුම් සැකසීමේදී මෙම මෝස්තරය භාවිතා කරනු ලැබේ. බොහෝවිට ටී-ෂර්ට්ස් සඳහා මෙම මෝස්තරය භාවිතාවන අතර ගවුම් සහ ටොප් සඳහා මෙම මෝස්තරය භාවිතා කිරීමේදී V
    හැඩය වෙනස්වන ආකාරයට ද යොදා මෝස්තර සකසාගනු ලැබේ. මෙහි භාවිතයන් පිළිබඳව පහතින් ඡායාරූප එක්කර ඇත.`,

    keyhole: `මෙය බහුල වශයෙන් භාවිතාවන මෝස්තරයකි. පිටුපස කර සඳහා විවරයක් සැකසීමට අවශ්‍ය වන විට මෙම මෝස්තරය යොදා ගැනේ. ඉදිරිපස පලුව සඳහා ප්‍රමාණයෙන් මදක් විශාලකර පහත 
    ආකාරයට මෝස්තර සඳහා යොදාගත හැකි ය. මෙවැනි මෝස්තර සැකසීමේදී මෙම Keyhole නිමා කරගැනීම සඳහා පයිපින් පටි හෝ ෆේසීන් භාවිතාකිරීම සිදුකරනු ලබයි.`,

    halter: 'සම්පූර්ණ ඇඳුමෙහි පෙනුම heart එකක ස්වභාවයකින් නිමාවන පරිදි මෙම මෝස්තරය කර සැකසීම සඳහා යොදාගනු ලබයි. බොහෝවිට මෙම මෝස්තරය ක්‍රීඩා ඇඳුම් සඳහා යොදාගනු ලබයි.',

    asymmetric: `මෙම මෝස්තරය භාවිතාවන ඇඳුම්වල දෙපස අසාමාන්‍ය ආකාරයට නිර්මාණය කරයි. මෙම මෝස්තර ගොඩනැංවීමේදී ඉදිරිපස full පලුව යොදාගෙන create කරනු ලබයි. මෙහි භාවිතයන් පහත ආකාරයට වේ.`,

    offshoulder: `Shoulder එකක් නොමැතිව නිර්මාණය වන මෝස්තර මෙම ගණයට අයත් වේ. මෙහිදී shoulder එක ඉවත්කර මෝස්තරය ගොඩනංවනු ලබයි. පහත රූප අධ්‍යයනය කරන්න.`,

    oneshoulder: `තනි ශෝල්ඩර් එකක් සහිත ඇඳුම්ය. මෙම ඇඳුම් බොහෝවිට උත්සව ඇඳුම් සහ වෙනත් විශේෂිත ඇඳුම් සඳහා භාවිතා වේ. මෙහිදී මෝස්තරය ගොඩනැංවීමේදී සම්පූර්ණ පතොරම භාවිතාකර 
    ගොඩනංවාගත යුතු ය. පහත මෝස්තර අධ්‍යයනය කරන්න.`,

    cowl: `මෙම මෝස්තර සැකසීමේදී කඩාහැලෙන රෙදි භාවිතා කරන්න. අපගේ මෝස්තර නිර්මාණය කිරීම පිළිබඳ පොත අධ්‍යයනය කිරීම තුළින් මෙම මෝස්තරයෙහි විවිධ කර සකසාගැනීම පිළිබඳව ඔබට දැනුම 
    ලබාගත හැකි ය. පහත මෝස්තර අධ්‍යයනය කර එම මෝස්තර වලට අදාළ පතොරම් සකසා ඇඳුම් මැසීමට උත්සහ ගන්න.`,

    notch: `මෙම මෝස්තරය බොහෝවිට top සඳහා භාවිතාවන අතර කෙටි කවාකාර කරක පහළට කැපුමක් යොදා V හැඩති හෝ මදක් රවුම්කර සැකසූ කරක් සහිතව නිර්මාණය වන මෝස්තර මෙම මෝස්තර 
    ගණයට අයත් වේ. මෙහි විවිධ භාවිතයන් සම්බන්ධව අප පුළුල් ලෙස අපගේ පොතෙහි සාකච්ඡාකර තිබේ. එම දැනුම භාවිතයෙන් පහත මෝස්තර සකසා ගැනීමට උත්සහ ගන්න.`,

    high: `බෙල්ලටම සිරවන පරිදි නිර්මාණය වන කරක් සහිත ඇඳුම් මෙම මෝස්තරයට අයත් වේ.`,

    cape: `මෙම කර භාවිතයෙන් ඇඳුම් නිර්මාණය කිරීමේදී ක්‍රම දෙකකට නිර්මාණය කරගත හැකි ය. එනම් ඇතුළත ඇඳුම සම්පූර්ණයෙන් වැසෙන පරිදි පහළට කඩාහැලෙන ආකාරයට design කිරීම තුළින් 
    ගොඩනැංවෙන මෝස්තර සහ කර කොටස මදක් අඩුවන පරිදි නිර්මාණය වන මෝස්තර වේ.`,
  };

  return (
    <>
      <NavBar />
      <div className='sleeve-selection'>
        <h1>Neck Design Varieties</h1>
        <select onChange={handleScroll} defaultValue="" className='selection'>
            <option value="" disabled>Select Sleeve Variety</option>
            <option value="u">U Neck</option>
            <option value="boat">Boat Neck</option>
            <option value="square">Square Neck</option>
            <option value="sweetheart"> Sweetheart Neck </option>
            <option value="neck">V Neck</option>
            <option value="keyhole">Keyhole Neck</option>
            <option value="halter">Halter Neck</option>
            <option value="asymmetric">Asymmetric Neck </option>
            <option value="offshoulder">Offshoulder Neck</option>
            <option value="oneshoulder">Oneshoulder Neck</option>
            <option value="cowl">Cowl Neck</option>
            <option value="notch">Notch Neck</option>
            <option value="high">high Neck</option>
            <option value="cape">Cape Neck</option>
        </select>
      </div>

      <div style={{ padding: '20px' }}>
        {Object.entries(sleeveImages).map(([key, images]) => (
          <section key={key} ref={sections[key]} id={key} style={{ marginBottom: '50px' }}>
            <h2>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} Neck</h2>
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
