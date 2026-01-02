import React from 'react';
import { useNavigate } from 'react-router-dom';
import './designideas.css';
import NavBar from "../Components/NavBar";

const DesignIdeas = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div>
      <NavBar />
      <div className="banner">
        <img className='img' src="/Images/Designs/banner.png" alt="Design Ideas Banner" />
      </div>
      <h1 className="design-title">DESIGN IDEAS</h1>
      <h2 className="design-title">
        ඇදුම් සදහා මෝස්තර සැකසීම පිළිබදව සාකච්ඡාකරන විට එය අධ්‍යනයෙහි පහසුව පිණිස පහත ආකාරයට බෙදා විමසා බලමු
      </h2>
      <div className="design-grid">

        {/* Sleeve Designs Card */}
        <div className="design-card">
          <div className="images-row">
            <img src="/Images/Designs/sleeves/s1.jpg" alt="Sleeve Design 1" />
          </div>
          <h3>SLEEVE DESIGNS</h3>
          <p>ඇඳුමක මෝස්තර ගොඩනැංවීමේදී අත ප්‍රධාන ස්ථානයක් ගනු ලබයි. මූලික වශයෙන් ඇඳුමක් නිර්මාණය කිරීමේදී අත් සහිතව හෝ අත් රහිතව සකසාගත හැකිය.
            අත් සහිත ඇඳුමක් නිර්මාණය කිරීමේදී එහි පෙනුම සම්පූර්ණ වශයෙන් වෙනස් කිරිමට අත බලපායි.
            අත් මෝස්තර විශාල ප්‍රමාණයක් තිබෙන අතර ඒවායෙහි පතොරම් සකසාගැනීම සහ එම මෝස්තර පිළිබඳව පුළුල් ලෙස අපගේ පොතෙහි සාකච්ඡා කර තිබේ.
          </p>
          <button className="design-btn" onClick={() => handleNavigate('/sleeve')}>View Designs</button>
        </div>

        {/* Collar Designs Card */}
        <div className="design-card">
          <div className="images-row">
            <img src="/Images/Designs/collar/c1.jpg" alt="Collar Design 1" />
          </div>
          <h3>COLLAR</h3>
          <p>ඇඳුමක පෙනුම සහ වටිනාකම එකතු කිරීමට කොලරයට පුලු‍වනි. මෙය නිර්මාණය කිරීමේදී බොහෝවිට පිරිමි ඇදුම් සදහා බහුලව භාවිතා වේ. කාන්තා ඇදුම් සදහා භාවිතයන් පිළිබඳව මෙහිදී අප සලකා බලමු.</p>
          <button className="design-btn" onClick={() => handleNavigate('/collar')}>View Designs</button>
        </div>

        {/* Neck Designs Card */}
        <div className="design-card">
          <div className="images-row">
            <img src="/Images/Designs/neck/n1.jpg" alt="Neck Design 1" />
          </div>
          <h3>NECK DESIGNS</h3>
          <p>ඇඳුම් නිර්මාණය කිරීමේදී කරේ හැඩය ඉතා වැදගත් වේ. මෙම කර විවිධාකාර හැඩවලින් සකසාගැනීම තුළින් ඇඳුමෙහි පෙනුම වෙනස් කරගත හැකි ය.</p>
          <button className="design-btn" onClick={() => handleNavigate('/neck')}>View Designs</button>
        </div>

        {/* Front Designs Card */}
        <div className="design-card">
          <div className="images-row">
            <img src="/Images/Designs/front/f1.jpeg" alt="Front Design 1" />
          </div>
          <h3>FRONT DESIGNS</h3>
          <p>ඉදිරිපස පලු‍ව සඳහා විවිධ මෝස්තර ගොඩනැංවිය හැකි ය. විශේෂයෙන්ම අගය එකතුකිරීම ලෙස Embroidery, Lace සහ විවිධ Accessories
            එකතුකර මෝස්තර ගොඩනැංවිය හැකි ය. එසේම Pocket, Flap, Tab, Cut and Seam සහ භාවිතාවන රෙදි වර්ගය අනුව ද, බයර්ස් සහ
            Grain line එක වෙනස්කිරීම තුළින් ද විවිධ මෝස්තර සැකසිය හැකි ය.
          </p>
          <button className="design-btn" onClick={() => handleNavigate('/front')}>View Designs</button>
        </div>

        {/* Back Designs Card */}
        <div className="design-card">
          <div className="images-row">
            <img src="/Images/Designs/back/b1.png" alt="Back Design 1" />
          </div>
          <h3>Back DESIGNS</h3>
          <p>පිටුපස පලු‍ව විවිධ මෝස්තර ගොඩනැංවීම සඳහා භාවිතා කළ හැකි ය.</p>
          <button className="design-btn" onClick={() => handleNavigate('/back')}>View Designs</button>
        </div>

        {/* Accessories Card */}
        <div className="design-card">
          <div className="images-row">
            <img src="/Images/Designs/front/f1.png" alt="Accessories Design 1" />
          </div>
          <h3>ACCESSORIES</h3>
          <p>ඇඳුම්වල අගය වැඩි කරගැනීම සඳහා එකතු කරගත හැකි දේවල් සහ භාවිතයන් බොහොමයක් තිබේ.</p>
          <button className="design-btn" onClick={() => handleNavigate('/accessories')}>View Designs</button>
        </div>

      </div>
    </div>
  );
};

export default DesignIdeas;
