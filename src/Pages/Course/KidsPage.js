import React, { useEffect, useState } from "react";
import NavBar from '../../Components/NavBar';
import Banner from '../../Components/Banner';
import Footer from '../../Components/Footer';
import ImageCarousel from '../../Components/ImgCarousel';
import { auth } from '../../firebase'; 
import './CoursePage.css';


export default function CoursePage() {

  const kids1 = ["/Images/kids/kids1.jpeg"];
  const kids2 = ["/Images/kids/kids2.jpeg",
    "/Images/kids/kids3.jpg"
  ];
  const kids3 = ["/Images/kids/kids4.jpg"];
  const kids4 = ["/Images/kids/kids5.png"];
  const kids5 = ["/Images/kids/kids6.jpeg",
    "/Images/kids/kids7.jpeg"
  ];
  const kids6 = ["/Images/kids/kids8.png",
    "/Images/kids/kids9.jpeg",
    "/Images/kids/kids10.jpeg"
  ];
  const kids7 = ["/Images/kids/kids11.png"];
  const kids8 = ["/Images/kids/kids12.jpg",
    "/Images/kids/kids13.jpg"
  ];

  const [accepted, setAccepted] = useState(null);

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
          <h2>01. අලුත උපන් දරුවෙකු සදහා පළමුව මසන ගවුම</h2>
          <ImageCarousel images={kids1} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/POFrPF1eN00" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>02. මාස හයක දරුවෙකු සදහා ඇදුම් නිර්මාණය කිරීම හා අලුත උපන් දරුවෙකු සදහා මසන තවත් ගවුමක්</h2>
          <ImageCarousel images={kids2} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/s8RMMTsFvtY" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          <br></br>
          <p>01 කොටස</p>
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/yi0eLAQfefU" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          <br></br>
          <p>02 කොටස</p>
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/5XCcJMaDnXw" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>03. මාස 6 සිට අවුරුදු 1 දක්වා දරුවෙකුට සුදුසු ඇදුම් මෝස්තරයක් සදහා  එක සකසා ගන්නා ආකාරය</h2>
          <ImageCarousel images={kids3} />
          
            <p>පළමු කොටස</p>
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/LMHv5cSkLb4" 
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
              src="https://www.youtube.com/embed/1E_EFIG4T8U" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>04. අවුරුදු 6 සිට අවුරුදු 8 දක්වා දියණියකට ගැළපෙන පරිදි ගවුමක Pattern එකක් සකස් කරගන්නා ආකාරය</h2>
          <ImageCarousel images={kids4} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/MdsAo18QMRU" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>


        <div className="course-details">
          <h2>05. අවුරුදු 6 සිට අවුරුදු 8 දක්වා දියණියකට ගැළපෙන පරිදි ගවුමක Pattern එකක් සකස් කරගන්නා ආකාරය සහ Size Grading සහ වයස අවුරුදු 4ත් 5ත් අතර දරුවෙකු සදහා ගවුමක් සකස් කරගන්නා ආකාරය</h2>
          <ImageCarousel images={kids5} />

          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/WJlgidpVDEU" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          <ImageCarousel images={kids6} />
          <br></br>
          <p>පළමු කොටස</p>
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/RiWGCVE69gw" 
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
              src="https://www.youtube.com/embed/x8BrnRc3W38" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>06. WAITING TO UPLOAD</h2>
          <ImageCarousel images={kids7} />

          <p>පළමු කොටස</p>
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/TrnLCFsN5i8" 
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
              src="https://www.youtube.com/embed/TrnLCFsN5i8" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="course-details">
          <h2>07. WAITING TO UPLOAD</h2>
          <ImageCarousel images={kids8} />

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

      </div>
      </div> {/* course-section */}
      <Footer />
    </div>
  )
}
