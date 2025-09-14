import React, { useState } from 'react'; // Only once
import './CoursePage.css';
import NavBar from '../Components/NavBar';
import Banner from '../Components/Banner';
import Footer from "../Components/Footer";
import ImageCarousel from "../Components/ImgCarousel";

export default function CoursePage() {

  const skirtimg1 = ["/Images/Skirts/skirt1.jpg", 
    "/Images/Skirts/skirt2.jpg", 
    "/Images/Skirts/skirt3.png", 
    "/Images/Skirts/skirt4.png"];

  const skirtimg2 = ["/Images/Skirts/skirt5.jpg", 
    "/Images/Skirts/skirt6.jpg", 
    "/Images/Skirts/skirt7.png"];

  const skirtimg3 = ["/Images/Skirts/skirt8.webp", 
    "/Images/Skirts/skirt9.webp", 
    "/Images/Skirts/skirt10.webp", 
    "/Images/Skirts/skirt11.jpg"];

  const skirtimg4 = ["/Images/Skirts/skirt12.jpg", 
    "/Images/Skirts/skirt13.webp", 
    "/Images/Skirts/skirt14.webp", 
    "/Images/Skirts/skirt15.jpg", 
    "/Images/Skirts/skirt16.jpg", 
    "/Images/Skirts/skirt17.jpg"];

  const skirtimg5 = ["/Images/Skirts/skirt18.jpeg", 
    "/Images/Skirts/skirt19.jpeg", 
    "/Images/Skirts/skirt20.jpg", 
    "/Images/Skirts/skirt21.jpg", 
    "/Images/Skirts/skirt22.jpg", 
    "/Images/Skirts/skirt23.jpg"];

  const skirtimg6 = ["/Images/Skirts/skirt24.jpg", 
    "/Images/Skirts/skirt25.jpg", 
    "/Images/Skirts/skirt26.jpg", 
    "/Images/Skirts/skirt27.jpg", 
    "/Images/Skirts/skirt28.jpg", 
    "/Images/Skirts/skirt29.jpg",
    "/Images/Skirts/skirt30.jpg",
    "/Images/Skirts/skirt31.jpg",
    "/Images/Skirts/skirt32.jpg",
    "/Images/Skirts/skirt33.jpg",
    "/Images/Skirts/skirt34.jpg",
    "/Images/Skirts/skirt35.jpg",
    "/Images/Skirts/skirt36.jpg"];

  const skirtimg7 = [ "/Images/Skirts/skirt37.jpg", 
    "/Images/Skirts/skirt38.jpeg"];

  const skirtimg8 = ["/Images/Skirts/skirt39.jpeg", 
    "/Images/Skirts/skirt40.webp", 
    "/Images/Skirts/skirt41.jpg", 
    "/Images/Skirts/skirt42.webp", 
    "/Images/Skirts/skirt43.webp", 
    "/Images/Skirts/skirt44.jpeg"];

  const skirtimg9 = ["/Images/Skirts/skirt45.jpg", 
    "/Images/Skirts/skirt46.jpg", 
    "/Images/Skirts/skirt47 .jpg", 
    "/Images/Skirts/skirt48.jpg", 
    "/Images/Skirts/skirt49.jpg", 
    "/Images/Skirts/skirt50.jpg"];

  const skirtimg10 = ["/Images/Skirts/skirt51.gif", 
    "/Images/Skirts/skirt52.png",];

  const skirtimg11 = [ "/Images/Skirts/skirt53.jpg",];

  const skirtimg12 = ["/Images/Skirts/skirt54.jpg", 
    "/Images/Skirts/skirt55.png"];

  const skirtimg13 = ["/Images/Skirts/skirt56.jpg", 
    "/Images/Skirts/skirt57.png"];

  const skirtimg14 = ["/Images/Skirts/skirt58.jpg", 
    "/Images/Skirts/skirt59.jpg",
    "/Images/Skirts/skirt60.jpg"];

  const skirtimg15 = ["/Images/Skirts/skirt61.jpg", 
    "/Images/Skirts/skirt62.png"];

  const skirtimg16 = ["/Images/Skirts/skirt63.jpg", 
    "/Images/Skirts/skirt64.png"];

  const skirtimg17 = ["/Images/Skirts/skirt65.png", 
    "/Images/Skirts/skirt66.jpeg", 
    "/Images/Skirts/skirt67.jpeg", 
    "/Images/Skirts/skirt68.jpeg", 
    "/Images/Skirts/skirt69.jpeg", 
    "/Images/Skirts/skirt70.jpeg"];
  

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
          <h2>01. SKIRT BASIC පතොරම සකසාගන්නා ආකාරය</h2>

          {/* Bullet Points */}
          <ul className="course-bullets">
            <li>මිමි හඳුනාගැනීම</li>
            <li>මිමි සටහන් කිරීම</li>
            <li>මිමි භාවිතාකර පතොරම් සැකසීම</li>
            <li>සාය කොටස් හඳුනාගැනීම</li>
          </ul>
          <ImageCarousel images={skirtimg1} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/9z5Ybyore3Y" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        {/* Course Details Section */}
        <div className="course-details">
          <h2>02. BASIC SKIRT WITH DART</h2>
          <p>සාය සදහා මූලික පතොරම සැකසීම පිළිබඳ වීඩියෝව මෙම වීඩියෝ එක මගින් සම්පූර්ණයෙන්ම</p>

          {/* Bullet Points */}
          <ul className="course-bullets">
            <li>Dart දමා පතොරම සැකසීම</li>
            <li>Waist Band</li>
            <li>Shipper Guard and Facing</li>
            <li>මැහුම් වාසි තැබීම යන කොටස් සියල්ල ආවරණය කර ඇත. වීඩියෝ පිළිවෙලට නරඹා අදාළ සටහන් සම්පූර්ණ කරගන්න</li>
          </ul>
          <ImageCarousel images={skirtimg2} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/JeMJBBCNk-8" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        {/* Course Details Section */}
        <div className="course-details">
          <h2>03. PLEATE SKIRT - පතොරම සැකසීම</h2>

          {/* Bullet Points */}
          <ul className="course-bullets">
            <li>Knife Pleated</li>
            <li>Box Pleated</li>
            <li>Invented Pleated</li>
            <p>සාදාගන්නා ආකාරය පැහැදිලි කරයි</p>
          </ul>
          <ImageCarousel images={skirtimg3} />


          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/Uj0N1dJYbyc" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>04. FLEARD SKIRT</h2>

          {/* Bullet Points */}
          <ul className="course-bullets">
            <li>A Line Skirt</li>
            <li>Full Fleard Skirt</li>
            <li>Half Fleard Skirt</li>
            <p>සාදාගන්නා ආකාරය පැහැදිලි කරයි</p>
          </ul>
          <ImageCarousel images={skirtimg4} />


          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/WfzyUnzpGcc" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>05. PANEL SKIRT සඳහා පතොරම සකස් කරගන්නා ආකාරය </h2>
          <h2>පිළිබඳ සිද්ධාන්ත කොටස</h2>
          <ul className="course-bullets">
            <p>කෑලි 06/08/10 සාය සඳහා පතොරම සකසාගන්නා අන්දම</p>
          </ul>
          <ImageCarousel images={skirtimg5} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/DOWAG4kFbgE" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>06. SKIRT සාක්කු සකසාගැනීම</h2>

          {/* Bullet Points */}
          <ul className="course-bullets">
            <li>Slant Pocket</li>
            <li>Cross Pocket</li>
            <li>Straight Pocket </li>
          </ul>
          <ImageCarousel images={skirtimg6} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/DQlHWMaXFtM" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>07. FRILL SKIRT </h2>
          <h2>(Style 01)</h2>
          <ImageCarousel images={skirtimg7} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/ChcVw2hQQd8" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

       <div className="course-details">
          <h2>08. FRILL SKIRT </h2>
          <h2>(Style 02)</h2>
          <button onClick={() => window.open("/Images/pdf/Cross Over - No 03.pdf", '_blank')} className='download-button'>Notes</button>
          <ImageCarousel images={skirtimg8} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/QBszsaS9nQU" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

       <div className="course-details">
          <h2>09. CROSS OVER SKIRT පතොරම සැකසීම</h2>
          <h2>Facing එකක් සහිතව CROSS OVER SKIRT එකක් නිර්මාණය කිරීම</h2>
          <p>Dart එක යොදා CROSSOVER SKIRT එකක් සාදාගන්නා අන්දම මෙහිදී සාකච්ඡා කර ඇත.මෙම මෝස්තර සකසා ගැනීමේදී පිටුපස පලු‍ව සඳහා මැහුම් වාසි ලෙස අඟල් 1 1/2"ක  ප්‍රමාණයක්
            නොගෙන 1CM එකක් හෝ 3/8" අඟල් ප්‍රමාණයක් මැහුම් වාසි ලෙස තබාගන්න.එයට හේතුව වන්නේ මෙහි තිබෙන ඛ්ජැ ඇල්ලීමට නොහැකි නිසා ය.
            එසේම පිටුපස රවුමට සෑදූ විට ද අඟල් 1 1/2" ප්‍රමාණයක වාටියක් මැසීමට නොහැකි ය. තවද මෙහි තිබෙන පේශීන් දෙකෙහි ඉහළ WAIST එක සහ
            SIDE SEAM වලට හසුවෙන ස්ථාන දෙකට ද මැහුම් වාසි තබන්න.</p>
          <ImageCarousel images={skirtimg9} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/4QQobXtUntk" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

       <div className="course-details">
          <h2>10.</h2>
          <p>අපි මෙම PATTERN එක සාදා තිබෙන්නේ LARGE SIZE ගවුමක මිමිවලට වශයෙන් නිවැරැදි විය යුතු ය. එසේම අපි වීඩියෝ එකෙන් කියාදෙනු ලබන්නේ
            SIDE DART එකක් දමාගන්නා ආකාරය සම්බන්ධව ඔබව දැනුවත් කිරීමට සහ FRONT DESIGNS යටතේ 
            DESIGN එකක් සාදාගන්නා ආකාරය පිළිබඳව ඔබව දැනුවත් කිරීමට ය.</p>
          <ImageCarousel images={skirtimg10} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/BL21NJOHb_c" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

       <div className="course-details">
          <h2>11. CONTRAST SKIRT</h2>
          <ImageCarousel images={skirtimg11} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/kEhYMqUY5bk" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>12. NEW STYLE</h2>
          <ul className="course-bullets">
            <li>Pleat Design</li>
            <li>Pront Design</li>
          </ul>
          <ImageCarousel images={skirtimg12} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/tzEybxJaUZ0" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>13. FRILL SKIRT (STYLE 02)</h2>
          <ImageCarousel images={skirtimg13} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/oCpJjopu2Mk" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>14. FRONT PLEAT</h2>
          <ImageCarousel images={skirtimg14} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/hQat36N5FVE" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>15. KNOT SKIRT</h2>
          <ImageCarousel images={skirtimg15} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/ql0emXhgacI" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>16. LONG SKIRT</h2>
          <ImageCarousel images={skirtimg16} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/KM9qRgpwtko" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>17. HOW TO MEASURE SKIRT</h2>
          <ImageCarousel images={skirtimg17} />

          {/* YouTube Video */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/LjPhlnZCYY8" 
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
