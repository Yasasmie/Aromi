import React from 'react';
import './tools.css';
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const tools = [
  {
    name: 'Measuring Tape',
    image: '/Images/Tools/tape.jpg',
    description: `ටේප් (මිනුම් පටිය) යනු Pattern Design අත්‍යාවශ්‍ය දෙයකි. මෙය කවාකාර ආකාරයට හැඩකර ගැනීමට හැකි බැවින් මෙමගින් ශරීරයේ සහ රෙදි කොටස් වටා පහසුවෙන් 
    මිනුම් ලබාගැනීමට හැකි වේ. සාමාන්‍යයෙන් මෙම ටේප් රෙදි හෝ ප්ලාස්ටික් භාවිතයෙන් සකසා ඇති අතර 150cm දිගින් යුතු ටේප් බොහෝ විට භාවිතා කෙරේ. මෙමගින් නිවැරදි ආකාරයෙන් 
    මිනුම් ලබාගැනීමට හැකි බැවින් ශරීරයට ගැළපෙන ආකාරයට Pattern එක සකස් කරගැනීමට හැකි ය.`,
  },
  {
    name: 'French Curve',
    image: '/Images/Tools/french curve.png',
    description: `තFrench Curve යනු PAttern නිර්මාණයේදී වක්‍ර රේඛා නිවැරදිව ඇඳීමට සහ සැලසුම්වල සමාන්තරතාවය සහ නිරවද්‍යතාවය රැකගැනීමට අත්‍යාවශ්‍ය මෙවලමකි.
    අත් කට, කර වටය, ඇඳුම්වල අත වැනි වක්‍ර රේඛා නිවැරදිව සකස් කරගැනීමට උපකාරි වේ.`,
  },
  {
    name: 'L-Square Ruler',
    image: '/Images/Tools/L square.jpg',
    description: `L-Square රූලරය යනු Pattern නිර්මාණය සහ සටහන් කිරීම සඳහා භාවිතාවන සෘජු රේඛා ඇඳීමේ මෙවලමකි. මෙය “L” හැඩයෙන් යුතු අතර, 
    අංශක 90 කෝණයක් හමුවෙන ආකාරයෙන් නිර්මාණය වී ඇත. Pattern නිර්මාණකරුවන් L-square භාවිතාකරනු ලබන්නේ Pattern මත සෘජු රේඛා, සෘජු කෝණ ඇඳීමට යි.
    එමගින් නිවැරදි perpendicular රේඛා ලබාගැනීමට හැකි වේ.`
  },
  {
    name: 'Curve Ruler',
    image: '/Images/Tools/Curve Ruler.jpg',
    description: `Curve Ruler යනු Pattern නිර්මාණ සහ ඇඳුම් නිර්මාණ ක්ෂේත්‍රවල භාවිතාවන වක්‍ර හැඩැති මිනුම් උපකරණයකි. මෙය විවිධ හැඩ සහ ප්‍රමාණවලින් ලබාගත හැකි අතර, 
    මෘදු වක්‍ර කෙලවරයන් සහිත බැවින් Pattern වල වක්‍ර රේඛා ඇඳීමට සහ සටහන් කිරීමට උපකාරී වේ. අත් කට, කර වටය, ඇඳුම් අත වැනි වක්‍ර රේඛා නිවැරදිව ඇඳීමට​​ උපකාරී වේ.`,
  },
 {
    name: 'Pattern Master',
    image: '/Images/Tools/pattern master.jpg',
    description: `Pattern Master යනු pattern නිර්මාණ සහ ඇඳුම් නිර්මාණ ක්ෂේත්‍රවල භාවිතාවන වක්‍ර හැඩැති මිනුම් උපකරණයකි. මෙය විවිධ හැඩ සහ ප්‍රමාණවලින් ලබාගත හැකි අතර, 
    මෘදු වක්‍ර කෙලවරයන් සහිත බැවින් patern වල වක්‍ර රේඛා ඇඳීමට සහ සටහන් කිරීමට උපකාරී වේ. අත් කට, කර වටය, ඇඳුම් අත වැනි වක්‍ර රේඛා නිවැරදිව ඇඳීමට​​ උපකාරී වේ.`,
  },
 {
    name: 'Pattern Notcher',
    image: '/Images/Tools/notcher.jpg',
    description: `Pattern නිර්මාණයේදී pattern කඩදාසි මත කුඩා කැපුමක් තැබීම සඳහා pattern notcher භාවිතා කරයි. මෙම නොච් සලකුණු seam allowance(මැහුම් වාසි පෙන්වීමට), dart ස්ථාන, 
    හෝ pattern කොටස් සමාන්තරව සම්බන්ධ කිරීම සඳහා මාර්ගෝපදේශ ලෙස ක්‍රියා කරයි.`,
  },
 {
    name: 'Tracing Wheel',
    image: '/Images/Tools/tracing wheel.jpg',
    description: `පතොරම රෙදි මතට පිටපත් කරගැනීමට හෝ වෙනත් කඩදාසියකට පිටපත් කරගැනීම සඳහා Tracing Wheel භාවිතා කෙරේ.`,
  },
 {
    name: 'Awl',
    image: '/Images/Tools/awl.jpg',
    description: `Pattern නිර්මාණයේදී Awl භාවිතා කරනු ලබන්නේ Pattern කොටස් මත dart ස්ථාන, pocket ස්ථාන, බොත්තම් ස්ථාන වැනි ස්ථාන සලකුණු කිරීමට යි.'`,
  },
 {
    name: 'Papper Scissors',
    image: '/Images/Tools/scissor.jpg',
    description: `කඩදාසි සහ කාඩ්බෝඩ් කපාගැනීම සඳහා උපකාරී වේ.`,
  },
 {
    name: 'Rotary Cutter',
    image: '/Images/Tools/rotary cutter.jpg',
    description: `රෙදි හෝ pattern කඩදාසි කපා ගැනීමට සුදුසු වේ. සෘජු රේඛා, වක්‍ර රේඛා, සංකීර්ණ රටා නිවැරදිව සහ වේගවත්ව කපාගත හැකි ය.`,
  },
];

const PatternTool = () => {
  return (
    <>
    <NavBar/>
    <div className="pattern-tool-container">
      <h1 className="pattern-tool-title">Pattern Tools</h1>
    {tools.map((tool, index) => (
    <div
        key={index}
        className={`tool-card ${index % 2 === 1 ? 'reverse' : ''}`}
    >
        <img src={tool.image} alt={`${tool.name} logo`} className="tool-image" />
        <div className="tool-text">
        <h2 className="tool-name">{tool.name}</h2>
        <p className="tool-description">{tool.description}</p>
        </div>
    </div>
    ))}
    </div>
    <Footer/>
    </>
  );
};


export default PatternTool;
