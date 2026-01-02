import React, { useEffect, useState } from "react";
import NavBar from '../../Components/NavBar';
import Banner from '../../Components/Banner';
import Footer from '../../Components/Footer';
import ImageCarousel from '../../Components/ImgCarousel';
import { auth } from '../../firebase'; 
import './CoursePage.css';

export default function CoursePage() {

  const s1 = ["/Images/shirts/s1.jpg" , "/Images/shirts/s2.jpg" , "/Images/shirts/s3.jpg"];
  const s2 = ["/Images/shirts/s4.jpg"];
  const s3 = ["/Images/shirts/s5.jpg", "/Images/shirts/s6.jpg"];
  const s4 = ["/Images/shirts/s7.jpg", "/Images/shirts/s8.jpg"];
  const s5 = ["/Images/shirts/s9.jpg", "/Images/shirts/s10.jpg"];
  const s6 = ["/Images/shirts/s11.jpg", "/Images/shirts/s12.jpg", "/Images/shirts/s13.jpg"];
  const s7 = ["/Images/shirts/s14.jpg", "/Images/shirts/s15.jpg"];

    const [accepted, setAccepted] = useState(null); // null = loading, false = no access, true = access
  
    useEffect(() => {
      const checkAcceptance = async () => {
        const user = auth.currentUser;
        if (!user) {
          setAccepted(false);
          return;
        }
        try {
          // Refresh token to get latest claims
          const idTokenResult = await user.getIdTokenResult(true);
          const isAccepted = idTokenResult.claims.accepted || false;
          setAccepted(isAccepted);
        } catch (err) {
          setAccepted(false);
        }
      };
      checkAcceptance();
    }, []);
  
    if (accepted === null) {
      return (
        <div>
          <NavBar />
          <p>Checking access...</p>
        </div>
      );
    }
  
    if (!accepted) {
      return (
        <div>
          <NavBar />
          <p style={{ padding: "20px", fontSize: "18px" }}>
            Wait until aromi accepts you.
          </p>
        </div>
      );
    }

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
          <h2>01. BASIC PATTERN FOR SHIRT</h2>
          <ImageCarousel images={s1} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/Wg-JRLBpWIk" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>02. PATTERN MAKING FOR T - SHIRT</h2>
          <ImageCarousel images={s2} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/LqIpus66jTE" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>03. T - SHIRT</h2>
          <ImageCarousel images={s3} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/US0z2mBPI58" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>04. SHIRT BASIC PATTERN MAKING 01</h2>
          <ImageCarousel images={s4} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/pqicfYxzVeI" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>


        <div className="course-details">
          <h2>05. SHIRT BASIC PATTERN MAKING 02</h2>
          <ImageCarousel images={s5} />
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/GSAxPdxx2tc" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>06. SHIRT BASIC PATTERN MAKING 03</h2>
          <ImageCarousel images={s5} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/5UfDSHjqfOA" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>07. SHIRT PATTERN MAKING USED SAMPLE</h2>
          <ImageCarousel images={s1} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/apQCd0C_XKU" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>


        <div className="course-details">
          <h2>08. SHIRT POCKET AND PLACKET</h2>
          <ImageCarousel images={s6} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/gE-i7vovH3U" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>09. SHIRTS DESIGN PATTERN MAKING</h2>
          <ImageCarousel images={s7} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/dbJH7Ia9aUo" 
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
