import React, { useState } from "react";
import NavBar from '../Components/NavBar'
import Footer from "../Components/Footer";

import { useNavigate } from "react-router-dom";
import './homepage.css'

export default function HomePage() {
   const navigate = useNavigate();
   const [isOpen, setIsOpen] = useState(false);

  // ✅ Define function here
  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
  };
  return (
    <>
      <NavBar />
      <div className="home-content">
        <div className="home-image">
            <img src="/Images/home1.jpeg" alt="Landscape 1"  />
            <img src="/Images/home2.jpeg" alt="Landscape 2"  />
            <img src="/Images/home3.jpeg" alt="Landscape 3"  />
            <img src="/Images/home4.jpeg" alt="Landscape 4"  />
        </div>
        <h1>AROMI FASHION ACADEMY</h1>
        <h2>මැහුම් කලාවේ මහගෙදර</h2>
      </div>
      <hr/>
      <div className="aromi-about">
  <h1>PATTERN MAKING AND FAHION DESIGNING</h1>
  <div className="image-wrapper">
    <img src="/Images/home5.jpeg" alt="Background Landscape" className="about-img" />
    <img src="/Images/home6.jpeg" alt="Overlay Logo" className="overlay-img" />
    <div className="inner-box">
        <h1>Pattern Making</h1>
        <p>ඇදුම් මෝස්තර නිර්මාණය පිළිබදව මුල සිට සරලව ඉෙගනීමට ඔබට අවශ්‍ය සියළුම දැනුම ලපා දෙන මෙම වෙබ් අඩවිය, ඇගලුම් පිළිබද විශ්ව විද්‍යාලය</p>
        <h3 className="read-more">
          Read More
        </h3>
      </div>
  </div>
  <div className="right-corner-box">
        <p>ඇඳුම් මැසීමට පෙර, ඇඳුමට අවශ්‍ය කොටස් නිවැරදිව ඇඳීම සහ සැකසීමේ ක‍්‍රියාවලිය ඡු්එඑැරබ ඵ්නසබට ලෙස හැඳින්වේ.
    ​​​මෙම ක‍්‍රමවේදය විද්‍යාත්මකව සහ සරලව මෙම වෙබ් අඩවිය තුළ ඔබට පහසුවෙන් හැදෑරීම පිණිස සියලූ‍ කරුණු අන්තර්ගත කර තිබේ.
    මූලික ඇඟලූ‍ම් පාඨමාලාවන් සහ පතොරම් සැකසීමේ පොත පරිශීලනය තුළින් අවශ්‍ය මූලික දැනුම ලබාගත හැකිවන අතර  මාසික සගරාව සහ වීඩියෝ මගින් පහසුවෙන් මැසීම සහ භාවිතයන් ඉගෙනීමට හැකි යග
    පහත ලින්ක්ස් භාවිතයෙන් අධ්‍යයනය කරන්න​.
    මැසීම පිළිබ`දව සහ පතොරම් සැකසීම පිළිබ`දව  
    අවශ්‍ය මෙවලම් පහත ීයදච එකෙන් ඔබට
    මිලදීගත හැකි යග
    මෙම වෙබ් අඩවිය ඔබ වෙත විශාල දැනුමක් සහ හැකියාවන් වර්ධනය වන පරිදි සකසා ඇති අතර​ සෑම මසකම ඔබ වෙත ..මැහුම් පොත.. ස`ගරාව සහ නව මෝස්තර ඡුෘත්‍ ලෙස බාගත කරගැනීමේ පහසුකම ද ලබාදී ඇත.
    එසේම සෑම මසකම ඔබගේ ගැටලූ‍ සාකච්ඡුා කිරීම සදහා ඛසඩැ අවස්ථාව ද සකසා තිබේ.
    වැඩි විස්තර ස`දහා හඳුන්වාදීමේ වීඩියෝව නරඹන්න​..</p>
  </div>
  <div className="course-content">
    <h1>PATTERN MAKING COURSE</h1>
    <h3>WELCOME TO OUR CLASS</h3>
    
    <div className="course-list-wrapper">
  {/* Left image */}
  <img src="/Images/home8.png" alt="Left decoration" className="side-image" />

  <div className="course-list-container">
  <ul className="content">
    <li className="title" onClick={() => setIsOpen(!isOpen)}>BUY COURSE AND BOOKS
      {isOpen && (
        <ul className="dropdown">
          <li onClick={() => handleNavigate("/course/blouse")}>Blouse Course</li>
          <li onClick={() => handleNavigate("/course/skirt")}>Skirt Course</li>
          <li onClick={() => handleNavigate("/course/frock")}>Frocks Course</li>
          <li onClick={() => handleNavigate("/course/shirt")}>Shirt and Tshirt Course</li>
          <li onClick={() => handleNavigate("/course/pant")}>Pant Course</li>
          <li onClick={() => handleNavigate("/course/kids")}>Kids Course</li>
        </ul>
      )}
    </li>
    <li className="title" onClick={() => handleNavigate("/course/pattern-grading")}>PATTERN MAKING & SIZE GRADING COURSE</li>
    <li className="title" onClick={() => handleNavigate("/course/kids-pattern")}>KIDS PATTERN MAKING COURSE</li>
    <li className="title" onClick={() => handleNavigate("/course/computer-pattern")}>COMPUTER PATTERN MAKING</li>
    <li className="title" onClick={() => window.open("https://drive.google.com/file/d/11JbVsIbLlqNxc__wCp4ek_yT2_rzthU0/view?usp=drive_link", "_blank")}>PATTERN MAKING BOOK</li>
    <li className="title" onClick={() => handleNavigate("/course/sewing-tools")}>SEWING TOOLS</li>
    <li className="title" onClick={() => handleNavigate("/course/magazine")}>PATTERN MAGAZINE</li>
  </ul>

  <h3>ඔබට පතොරම් සැකසීම සඳහා අවශ්‍යකරන දැනුම​ ත්‍රුැ දැනගැනීමට පහත පිටුව වෙත පිවිසෙන්න</h3>

  <ul className="content">
    <li className="title" onClick={() => navigate("/ideas/sewing")}>SEWING IDEAS FREE</li>
    <li className="title" onClick={() => navigate("/ideas/design")}>DESIGN IDEAS FREE</li>
    <li className="title" onClick={() => navigate("/tutorials/sewing")}>SEWING TUTORIALS FREE</li>
    <li className="title" onClick={() => navigate("/tools/pattern")}>PATTERN MAKING TOOLS</li>
    <li className="title" onClick={() => navigate("/fabric")}>FABRIC</li>
    <li className="title" onClick={() => navigate("/designs/more")}>SEARCH MORE DESIGNS</li>
    <li className="title" onClick={() => navigate("/costing")}>COSTING</li>
  </ul>
</div>

    {/* Right image */}
    <img src="/Images/home9.png" alt="Right decoration" className="side-image-right" />
  </div>
   

  </div>
    <Footer />
  </div>

    </>
  )
}

