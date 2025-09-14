import React, { useState } from 'react'; // Only once
import './CoursePage.css';
import NavBar from '../Components/NavBar';
import Banner from '../Components/Banner';
import Footer from "../Components/Footer"; 
import ImageCarousel from "../Components/ImgCarousel";  

export default function CoursePage() {

  const p1 = ["/Images/pants/p1.jpg", "/Images/pants/p2.jpg"];
  const p2 = ["/Images/pants/p3.jpg", "/Images/pants/p4.jpg"];
  const p3 = ["/Images/pants/p5.jpg"];
  const p4 = ["/Images/pants/p6.jpg"];
  const p5 = ["/Images/pants/p7.jpg"];
  const p6 = ["/Images/pants/p8.jpg"];
  const p7 = ["/Images/pants/p9.jpg"];
  const p8 = ["/Images/pants/p10.jpg", "/Images/pants/p11.jpg", "/Images/pants/p12.jpg", "/Images/pants/p13.jpg"];
  const p9 = ["/Images/pants/p14.jpg"];
  const p10 = ["/Images/pants/p15.jpg"];
  const p11 = ["/Images/pants/p16.jpg"];

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
          <h2>01. PANT INTRODUCTION</h2>
          <h2>PANTS BASIC PATTERN MAKING</h2>
          <ImageCarousel images={p1} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/TlrGuKU_h9c" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>02. BASIC PATTERN FOR PANT</h2>
          <ul className="course-bullets">
            <li>Measurements</li>
            <li>Waist 32</li>
            <li>Seat 38</li>
            <li>Inseam 30.5</li>
            <li>Out seam 41</li>
            <li>Leg open 16</li>
          </ul>
          <button className='download-button'>Notes</button>
          <ImageCarousel images={p2} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/G929zyhqkD4" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>03. PANT SIZE GRADING</h2>
          <ImageCarousel images={p3} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/hJR1Jq2UbEw" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>04. SAMPLE PATTERN MAKING</h2>
          <ImageCarousel images={p4} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/3Eu74QjZ_d0" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>05. SAMPLE PANT 01</h2>
          <ImageCarousel images={p5} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/1WyWLUwZG1w" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>06. PANT DESIGNS PATTERN MAKING (PART 1)</h2>
          <ImageCarousel images={p6} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/kCjLYaZg6eg" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>



        <div className="course-details">
          <h2>07. PANT DESIGNS PATTERN MAKING (PART 2)</h2>
          <ImageCarousel images={p7} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/ryh9dD2L6XU" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>08. PANT PATTERN MAKING (PART 1)</h2>
          <ImageCarousel images={p7} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/-dPjgjmmHAc" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>


        <div className="course-details">
          <h2>9. PANT PATTERN MAKING (PART 2)</h2>
          <ImageCarousel images={p8} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/MtL9RCeZ1ag" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>10. PANT PATTERN MAKING (PART 3)</h2>
          <ImageCarousel images={p2} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/kVDtm_TtQoM" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>11. PANT PATTERN MAKING - 1</h2>
          <ImageCarousel images={p9} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/Jpyd58vkaxQ" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>12. PANT PATTERN MAKING - 2</h2>
          <ImageCarousel images={p10} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/X6nBH3R2G2Q" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>13. PANT PATTERN MAKING - 3</h2>
          <ImageCarousel images={p2} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/JnE-tsyMe5c" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>14. JUMPSUIT</h2>
          <ImageCarousel images={p11} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/CUSMScnuswo" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>


        <div className="course-details">
          <h2>15. END</h2>

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/8C4-_dXuFmQ" 
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
