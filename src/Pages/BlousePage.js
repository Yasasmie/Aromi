import React, { useState } from 'react'; // Only once
import './CoursePage.css';
import NavBar from '../Components/NavBar';
import Banner from '../Components/Banner';
import Footer from "../Components/Footer"; 
import ImageCarousel from "../Components/ImgCarousel";  

export default function CoursePage() {

  const  b1 = ["/Images/blouses/b1.png"];
  const  b2 = ["/Images/blouses/b3.png", 
    "/Images/blouses/b2.jpeg"];
  const  b3 = ["/Images/blouses/b4.png"];
  const  b4 = ["/Images/blouses/b5.png"];
  const  b5 = ["/Images/blouses/b6.png"];
  const  b6 = ["/Images/blouses/b7.png"];
  const  b7 = ["/Images/blouses/b8.webp"];
  const  b8 = ["/Images/blouses/b9.webp"];
  const  b9 = ["/Images/blouses/b10.png"];
  const  b10 = ["/Images/blouses/b11.jpg"];
  const  b11 = ["/Images/blouses/b12.jpg", 
    "/Images/blouses/b13.webp"];
  const  b12 = ["/Images/blouses/b14.jpg", 
    "/Images/blouses/b15.jpg"];
  const  b13 = ["/Images/blouses/b16.jpg", 
    "/Images/blouses/b17.jpg", 
    "/Images/blouses/b18.webp"];
  const  b14 = ["/Images/blouses/b19.jpg"];
  const  b15 = ["/Images/blouses/b20.jpg"];
  const  b16 = ["/Images/blouses/b21.jpg"];
  const  b17 = ["/Images/blouses/b23.jpg", 
    "/Images/blouses/b24.jpg", 
    "/Images/blouses/b25.jpg"];
  const  b18 = ["/Images/blouses/b26.jpg", 
    "/Images/blouses/b27.jpg"];
  const  b19 = ["/Images/blouses/b28.jpg"];

  return (
    <div className='course-page'>
      <NavBar />
      <Banner/>
      <div className='course-section'>
        {/* Rules Box */}
        <div className="rules-box">
          <h2>ඇවශ්‍ය දැනුම් දීම</h2>
          <ul>
            <li>මෙම ලබාදෙන link එක හෝ අප ලබාදෙන notes වෙනත් කිසිවකු අතට පත් නොකිරීමට ඔබ කටයුතු කළ යුතුයි.</li>
            <li>එසේ ලබා දුන්නහොත් බුද්ධිමය දේපොල පනත යටතේ නඩු පැවරීමට අයිතිය AROMI FASHION ACADEMY සතුව පවතී.</li>
            <li>එමෙන්ම ඔබට මෙම පාඨමාලාව හැදෑරීමට ලබාදී තිබෙන ගිණුම ද අක්‍රිය වනු ඇත.</li>
            <li>එබැවින් ඔබ පමණක් මෙය භාවිතා කරන්න.</li>
            <li>කිසිම මොහොතක ඔබගේ Email ලිපිනය වෙනස් නොකර, ලියාපදිංචි වූ ලිපිනය පමණක් භාවිතා කරන්න.</li>
            <li>
              ඔබට මොනයම් හෝ තාක්ෂණික ගැටලුවක් ඇතිවුවහොත් පහත අංකවලට දැනුම් දෙන්න:<br/>
              📞 077 375 5312 / 070 375 5312
            </li>
          </ul>
        </div>

        <div className='poster-details'>
        <div className="poster-box">
          <h2>01. PATTERN MAKING AND SIZE GRADING ONLINE 6 MONTH COURSE</h2>
          <div className="poster-content">
            <img src="/Images/poster.png" alt="Course Poster" className="poster-img" />

            <div className="poster-text">
              <p>
                අපගේ Vedio එක නරඹා ඔබට නොතේරෙන යම් දෙයක් තිබේනම් හෝ වීඩියෝවල ගුණාත්මකභාවය පිළිබඳව හෝ කියාදුන් ආකාරය පිළිබඳව යම් ගැටලූ‍වක් තිබේනම් අපව දැනුවත් කරන්න. ස්තුතියි.
              </p>

              <div className="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/btU6XHIkvmE" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>

              <button onClick={() => window.open("/Images/pdf/Scale - No 02.pdf", '_blank')} className="download-button">Download Scale</button>
            </div>
          </div>
        </div>

        {/* Course Details Section */}
        <div className="course-details">
          <h2>01. BLOUSE PATTERN MAKING</h2>

          {/* Bullet Points */}
          <ul className="course-bullets">
            <li>Casual Blouse Without Dart</li>
          </ul>
          <button onClick={() => window.open("/Images/pdf/Blouse Measurement Chart - No 04.pdf", '_blank')} className='download-button'>Notes</button>
          <ImageCarousel images={b1} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/YhpnFgkW4S4" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>02. BLOUSE BASIC PATTERN MAKING WITHOUT DART</h2>
          <ImageCarousel images={b2} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/waeyAbIPMz0" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>03. SLEEVE PATTERN MAKING</h2>
          <ImageCarousel images={b3} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/XFSE6-TcFFI" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>04. BASIC PATTERN MAKING WITH DART</h2>
          <ImageCarousel images={b4} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/RiKrLrJPzbY" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>05. DART MANIPULATION, FACING, CROSS OVER AND YOKE WITH GATHERS</h2>
          <ImageCarousel images={b5} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/AWqlV1higm4" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>06. SIZE GRADING</h2>
          <ImageCarousel images={b6} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/Dl54cx-VetE" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <ul className="course-bullets">
            <li>Casual Blouse Without Dart</li>
          </ul>
          <button className='download-button'>Notes</button>
          <ImageCarousel images={b1} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/9elOREb6ruw" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>08. BASIC PATTERN MAKING FOR TOP</h2>
          <ImageCarousel images={b2} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/zknULshhu48" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div> 

        <div className="course-details">
          <h2>09. BASIC PATTERN MAKING FOR FROCK</h2>
          <ImageCarousel images={b3} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/6DRch9Gzylc" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>           

        <div className="course-details">
          <h2>10. COLLAR PATTERN MAKING</h2>
          <ImageCarousel images={b4} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/6PjjIltraVU" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div> 

        <div className="course-details">
          <h2>12. HOW TO MAKE RAGLAN SLEEVE</h2>
          <ImageCarousel images={b6} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/707c_odqeDc" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div> 

        <div className="course-details">
          <h2>13. MAGYAR SLEEVE DRESS</h2>
          <ImageCarousel images={b1} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/9IIP9Su9DBo" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>   

        <div className="course-details">
          <h2>14. MEASUREMENTS AND COSTING </h2>
          <ImageCarousel images={b2} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/BbDEq2c7zw" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div> 

        <div className="course-details">
          <h2>15. BLOUSE STYLE 01 & 02 </h2>
          <ImageCarousel images={b3} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/mP_dN4KeEHc" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>   

        <div className="course-details">
          <h2>16. HOW TO CORRECTLY SIZE GRADE A PIECED PATTERN </h2>
          <ImageCarousel images={b4} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/MSmam76GhD4" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>    

        <div className="course-details">
          <h2>17. PREPARTION OF AMMUNITION FOR FRILL SLEEVE </h2>
          <h2>DART MANIPULATION, FACING, CROSS OVER AND YOKE WITH GATHERS</h2>
          <ImageCarousel images={b5} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/fq2qLg-FZbU" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>       
      
        <div className="course-details">
          <h2>18. TYPES OF COLLARS</h2>
          <ImageCarousel images={b4} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/Jb-b5RUEPCY" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div> 

        <div className="course-details">
          <h2>19. VALUE ADDED</h2>
          <h2>DART MANIPULATION, FACING, CROSS OVER AND YOKE WITH GATHERS</h2>
          <ImageCarousel images={b5} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/KsmtxlO8Ecg" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div> 

        <div className="course-details">
          <h2>20. STYLE 03 & 04 </h2>
          <ImageCarousel images={b4} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/E6YxX0yFUIg" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div> 

        <div className="course-details">
          <h2>21. MORE STYLES </h2>
          <p>Dart Manipulation, Facing, Cross Overand Yoke with Gathe </p>
          <ImageCarousel images={b5} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/tSlWOZPLjYo?si=HznMCjboxiEyO2Az" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div> 

        <div className="course-details">
          <h2>22. TOPS PATTERN MAKING </h2>
          <ImageCarousel images={b7} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/zknULshhu48" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div> 

        <div className="course-details">
          <h2>23. DRESS MAKING</h2>
          <p>Dart Manipulation, Facing, Cross Overand Yoke with Gathe </p>
          <ImageCarousel images={b8} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/6DRch9Gzylc" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>24. DRESS MAKING PART 2</h2>
          <ImageCarousel images={b9} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/Ec26iVcKYtg" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>25. COLLARS PATTERN MAKING</h2>
          <ImageCarousel images={b10} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/6PjjIltraVU" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>26. FRILL SLEEVE සදහා පතරොම සැකසීම</h2>
          <ImageCarousel images={b11} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/fq2qLg-FZbU" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>27. RAGLAN SLEEVE සාදා ගන්නා ආකාරය</h2>
          <ImageCarousel images={b12} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/707c_odqeDc" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>28. MAGYAR SLEEVE DRESS 18</h2>
          <ImageCarousel images={b13} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/9IIP9Su9DBo" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>29. HOW TO GET MEASUREMENTS</h2>
          <ImageCarousel images={b14} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/cXlVwMmczQo" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>30. FRONT FRILL DESIGN DEVELOPMENTS</h2>
          <ImageCarousel images={b15} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/mP_dN4KeEHc?si=Uf2R_6Aog6GmndrY" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>31. FRONT DESIGN DEVELOPMENTS - 3</h2>
          <ImageCarousel images={b16} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/E6YxX0yFUIg" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>32. FRONT DESIGN DEVELOPMENTS - 4</h2>
          <ImageCarousel images={b17} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/tSlWOZPLjYo" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>33. SIZE GRADING</h2>
          <ImageCarousel images={b18} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/MSmam76GhD4" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>34. FRONT DESIGN DEVELOPMENTS</h2>
          <ImageCarousel images={b19} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/GasUInXhG8o" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

      </div>
      </div> {/* course-section */}
      <Footer />
    </div>
  )
}
