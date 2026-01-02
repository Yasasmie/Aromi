import React, { useState, useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import './advertisements.css'

// IMPORTANT: Ensure these files exist in your public/Images folder:
// /Images/t-shirt-course.jpeg
// /Images/home2.jpeg

const posters = [
  {
    id: 1,
    title: 'T-Shirt Course - 7 Day Online Course',
    images: [
      '/Images/t-shirt-course.jpeg',
      '/Images/t-shirt-course-1.jpeg',
      '/Images/t-shirt-course-2.jpeg',
      '/Images/t-shirt-course-3.jpeg',
      '/Images/t-shirt-course-4.jpeg',
      '/Images/t-shirt-course-5.jpeg',
      '/Images/t-shirt-course-6.jpeg',
    ],
    description: `
      • ටී ෂර්ට් නිෂ්පාදනය කර අලෙවි කරන online ව්‍යාපාරයක් ආරම්භ කර  මසකට ලක්ෂ තුනකට වඩා උපයමු.
      • ඔබට නිවසේ සිටම නිදහස් වේලාවන්වල  සමාජ මාධ්‍ය හරහා ටී ෂර්ට් අලෙවි කරන ව්‍යාපාරයක් ආරම්භ කරන ආකාරය මුල සිට සරලව පහසුවෙන් තේරුම් ගත හැකි වන පරිදි කියා දෙන වැඩමුළුව සඳහා ලියාපදිංචි වන්න.
      • ටී ෂර්ට් නිෂ්පාදනය කරන්නේ නම් අවශ්‍ය කරන පතොරම් මිලදී ගැනීම.
      • පතොරම් සකසා ගන්නා ආකාරය ඉගෙනීම.
      `.trim(),
  },
  {
    id: 2,
    title: 'Digital Marketing',
    images: [
      '/Images/bathic-1.jpeg',
      '/Images/bathic-2.jpeg',
      '/Images/bathic-3.jpeg',
      '/Images/bathic-4.jpeg',
      '/Images/bathic-5.jpeg',
      '/Images/bathic-6.jpeg',
    ],
    description: `
          • facebook ඇඩ් කැම්පේන් එකක් සහ බෝස්ට් කරන ආකාරය. 
          • හොඳ ෆේස්බුක් පේජ් එකක් සකස් කරගන්නා ආකාරය. 
          • කන්ටෙන් සැකසීම.
          • tiktok you tube භාවිතයෙන් අලෙවි වැඩි කර ගැනීම. 
          • වෙබ් අඩවිය භාවිතයෙන් ම අලෙවිය වැඩි කරගන්න ආකාරය. 
          • ඇසුරුම්කරණය සහ නිවැරදිව පෝස්ට් සැකසීම. 
        `.trim(),
  },
  {
    id: 3,
    title: 'DTF printing පාඨමාලාව - 1 Day',
    images: [
      '/Images/sp-1.jpeg',
      '/Images/sp-2.jpeg',
      '/Images/sp-3.jpeg',
      '/Images/sp-4.jpeg',
      '/Images/sp-5.jpeg',
      '/Images/sp-6.jpeg',
    ],
    description: `
      • මුද්‍රණය සඳහා අවශ්‍ය කරන DTF stickers සැකසීම.
      • ස්ටිකර් සඳහා අවශ්‍ය කරන ග්‍රැෆික් ලබාගත හැකි ආකාරය.
      • ඇදුම මතට ඇලවීම. 
    `.trim(),
  },
]

const courseOptions = [
  { name: 'T-Shirt Course - 7 Day Online Course', price: 3900, key: 'courseTshirt' },
  { name: 'Digital Marketing Course', price: 1500, key: 'courseBatik' },
  { name: 'DTF Printing Course - 1 Day', price: 1500, key: 'courseDTF' },
  { name: 'Pattern Making Course - 5 Day', price: 2500, key: 'coursePattern' },
]

const itemOptions = [
  { name: 'T-shirts සඳහා පතොරම් 3ක කට්ටලය(Ladies t-shirt, Unisex t-shirt, Crop top t-shirt)', price: 5500, key: 'itemSet3' },
  { name: 'T-shirts සඳහා පතොරම් 5ක කට්ටලය(Ladies t-shirt, Unisex t-shirt, Crop top t-shirt, Baggy t-shirt, Drop shoulder t-shirt)', price: 9500, key: 'itemSet5' },
  { name: 'ඇඳුම් සඳහා පතොරම් සැකසීම පිළිබඳ ලියා ඇති පොත', price: 5250, key: 'itemPatternBook' },
  { name: 'Machment chart', price: 1500, key: 'itemMachmentChart' }, 
]

// Target WhatsApp Number
const WHATSAPP_NUMBER = '94703755312'; // Must include country code without '+'

// --- NEW FADE SLIDESHOW COMPONENT ---
function FadeSlideshow({ images, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  if (images.length === 0) {
    return <div className="slideshow-error">No images provided.</div>
  }

  return (
    <div className="slideshow-container">
      {images.map((imageSrc, index) => (
        <img
          key={index}
          src={imageSrc}
          alt={`Slide ${index + 1}`}
          className={`slideshow-image ${index === currentIndex ? 'active' : ''}`}
          draggable={false}
        />
      ))}
    </div>
  )
}
// --- END NEW FADE SLIDESHOW COMPONENT ---

export default function Advertisements() {
  const navigate = useNavigate()
  const goToDetail = (poster) => {
    console.log(`Poster clicked: ${poster.title}`);
  }

  const [participateChecked, setParticipateChecked] = useState(false)
  const [selections, setSelections] = useState({
    courseTshirt: false,
    courseBatik: false,
    courseDTF: false,
    coursePattern: false,
    itemSet3: false,
    itemSet5: false,
    itemPatternBook: false,
    itemMachmentChart: false,
  })
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleSelectionChange = (key) => {
    setSelections(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const handleUserDetailChange = (e) => {
    setUserDetails(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const calculatedTotal = useMemo(() => {
    let total = 0
    courseOptions.forEach(option => {
      if (selections[option.key]) {
        total += option.price
      }
    })
    itemOptions.forEach(option => {
      if (selections[option.key]) {
        total += option.price
      }
    })
    return total
  }, [selections])

  const generateWhatsAppUrl = (total) => {
    const selectedCourses = courseOptions
      .filter(option => selections[option.key])
      .map(option => `\t- ${option.name} (LKR ${option.price})`).join('\n')
    const selectedItems = itemOptions
      .filter(option => selections[option.key])
      .map(option => `\t- ${option.name} (LKR ${option.price})`).join('\n')

    let messageBody = `
*NEW COURSE REGISTRATION*\n
*Personal Details:*\n
\tName: ${userDetails.name}
\tEmail: ${userDetails.email}
\tPhone: ${userDetails.phone}
\n
*Selected Courses:*
${selectedCourses || '\t(No courses selected)'}
\n
*Selected Items:*
${selectedItems || '\t(No items selected)'}
\n
*TOTAL FEE: LKR ${total.toFixed(2)}*\n
    `.trim()

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageBody)}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (calculatedTotal === 0) {
      alert("Please select at least one course or item to register.")
      return
    }
    if (!userDetails.name || !userDetails.email || !userDetails.phone) {
      alert("Please fill in all personal details (Name, Email, Phone) before submitting.")
      return
    }
    const whatsappLink = generateWhatsAppUrl(calculatedTotal)
    window.open(whatsappLink, '_blank')
  }

  const renderCheckboxes = (options, title) => (
    <div className="form-group">
      <h3 className="form-subtitle">{title}</h3>
      {options.map((option) => (
        <label key={option.key} className="checkbox-label">
          <input
            type="checkbox"
            checked={selections[option.key]}
            onChange={() => handleSelectionChange(option.key)}
          />
          {option.name} <span className="item-price"> (LKR {option.price})</span>
        </label>
      ))}
    </div>
  )

  return (
    <div className="advertisements-page">
      <NavBar />

      <main className="content-area">
        <header className="page-header">
          <h1>Creative Workshops & Courses 🎨</h1>
          <p>Explore a range of hands-on courses in textile design and printing!</p>
        </header>

        <section className="posters-grid">
          {posters.map((poster) => (
            <article key={poster.id} className="poster-card">
              <div className="poster-image-wrapper">
                <FadeSlideshow images={poster.images} /> 
              </div>
              <div className="poster-info">
                <h3 className="poster-title">{poster.title}</h3>
                <p className="poster-description">
                  {poster.description.split('\n').map((line, idx) => {
                    const cleanLine = line.trim();
                    if (cleanLine.startsWith('🔹') || cleanLine.startsWith('•')) {
                      return <span key={idx}><br />{cleanLine}</span>
                    }
                    return <span key={idx}>{cleanLine}<br /></span>
                  })}
                </p>
              </div>
            </article>
          ))}
        </section>

        <section className="registration-section">
          <h2 className="section-title">Course Registration</h2>

          <div className="participate-toggle">
            <label className="checkbox-label participate-label">
              <input
                type="checkbox"
                checked={participateChecked}
                onChange={() => setParticipateChecked(!participateChecked)}
              />
              Aromi fashion academy විසින් පවත්වන ඉතා වැදගත් වැඩමුළුව සඳහා අදම ලියාපදිංචි වන්න.
            </label>
          </div>

          {participateChecked && (
            <form onSubmit={handleSubmit} className="registration-form">
              <div className="form-selection-group">
                {renderCheckboxes(courseOptions, 'Select the Course')}
                <div className="form-divider"></div>
                {renderCheckboxes(itemOptions, 'I want to buy')}
              </div>

              <div className="total-value-box">
                Total Value: <span className="total-amount">LKR {calculatedTotal.toFixed(2)}</span>
              </div>

              <div className="form-divider"></div>

              <div className="personal-details-group">
                <h3 className="form-subtitle">Personal Details</h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={userDetails.name}
                  onChange={handleUserDetailChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={userDetails.email}
                  onChange={handleUserDetailChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (e.g., 07XXXXXXXX)"
                  value={userDetails.phone}
                  onChange={handleUserDetailChange}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Register & Send via WhatsApp 📲
              </button>
            </form>
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}
