import React, { useEffect, useState } from "react";
import NavBar from '../../Components/NavBar';
import Banner from '../../Components/Banner';
import Footer from '../../Components/Footer';
import ImageCarousel from '../../Components/ImgCarousel';
import { auth } from '../../firebase'; 
import './CoursePage.css';

export default function CoursePage() {
  const f1 = ["/Images/frocks/f1.jpg", "/Images/frocks/f2.jpg", "/Images/frocks/f3.jpeg"];
  const f2 = ["/Images/frocks/f4.jpeg"];
  const f3 = ["/Images/frocks/f5.jpg", "/Images/frocks/f6.jpg"];
  const f4 = ["/Images/frocks/f7.jpg", "/Images/frocks/f8.jpg", "/Images/frocks/f9.jpg", "/Images/frocks/f10.jpg"];
  const f5 = ["/Images/frocks/f11.jpg"];
  const f6 = ["/Images/frocks/f12.jpg"];
  const f7 = ["/Images/frocks/f13.png"];
  const f8 = ["/Images/frocks/f14.jpg"];
  const f9 = ["/Images/frocks/f15.jpg"];
  const f10 = ["/Images/frocks/f16.jpg"];
  const f11 = ["/Images/frocks/f17.jpg"];
  const f12 = ["/Images/frocks/f18.jpg", "/Images/frocks/f19.jpg"];
  const f13 = ["/Images/frocks/f20.jpeg"];

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
          <h2>01. ටොප් එකක් සදහා PATTERN සැකසීම </h2>
          <ImageCarousel images={f1} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/NW41b49pnyA" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>02. ගවුමක පතරොම සකසා ගන්නා ආකාරය </h2>
          <p>මෙම පාඩම සදහා කොටස් දෙකක් අන්තර්ගත වන අතර පළවෙනි කොටස සදහන් වීඩියෝව මුලින් නරඹා දෙවන කොටස ලෙස සදහන් වීඩියෝව ඉන්පසු නරඹන්න</p>
          <ImageCarousel images={f2} />

          <p>පළමු කොටස</p>
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/6sV5jfJJedA" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          <br></br>

          <p>දෙවන කොටස</p>
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/a4Bs4k6TPYY" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>

        </div>

        <div className="course-details">
          <h2>03. LARGE SIZE ගවුමක පතරොම සැකසීම</h2>
          <p>අපි මේ පැටන් එක හදලා තියෙන්නෙ LARGE SIZE ගවුමක මිමි වශයෙන් නිවැරදි විය යුතුය. එවගේම අපි වීඩියෝ එකෙන් කියාදෙන්නේ SIDE DART එකක් දාගන්න විදිහ පිළිබද ඔබව දැනුවත් කිරීම හා FRONT DESIGN යටතේ DESIGN එකක් සාදාගන්නා පිළිබද ඔබව දැනුවත් කිරීමටයි</p>
          <ImageCarousel images={f13} />

          <p>පළමු කොටස</p>
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/ijajdn7uNJo" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          <br></br>

          <p>දෙවන කොටස</p>
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/R2SV1MkKDpg" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>

        </div>



        <div className="course-details">
          <h2>04. CROSS OVER DESIGN 01</h2>
          <ImageCarousel images={f3} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/SMztYR2c6ss" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>05. FRONT DESIGN DEVELOPMENTS</h2>
          <ImageCarousel images={f4} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/1qEiC_SlMm0" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>06. CROSS OVER DESIGN 02</h2>
          <ImageCarousel images={f5} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/jJnuArb1Vnw" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>07. FRONT DESIGN DEVELOPMENTS 08</h2>
          <ImageCarousel images={f6} />

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
          <h2>08. DART MANIPULATION 01</h2>
          <ImageCarousel images={f7} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/q_ZGwa8GHwE" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>09. DART MANIPULATION 02</h2>
          <ImageCarousel images={f8} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/jTQGeXKOZ9Q" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>10. DART MANIPULATION 03</h2>
          <ImageCarousel images={f9} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/QD5hNDDIRoE" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>



        <div className="course-details">
          <h2>11. DART MANIPULATION 04</h2>
          <ImageCarousel images={f10} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/kmIyZgZhr9g" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>12. DART MANIPULATION 05</h2>
          <ImageCarousel images={f11} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/3Y5BuQyCJf4" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>


        <div className="course-details">
          <h2>13. PRODUCT VALUE ADDITION</h2>
          <ImageCarousel images={f12} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/kmIyZgZhr9g" 
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
