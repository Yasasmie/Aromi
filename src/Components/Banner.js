import React from 'react'
import './banner.css';

export default function() {
  return (
    <div>
        <div className="banner">
            <img src="/Images/banner.png" alt="Banner" className="banner-img" />
            <div className="banner-text-box">
                <img src="/Images/aromiLogo.png" alt="Logo" className="banner-logo" />
                <div className="banner-text">
                <h1>මූලික පතොරම් නිර්මාණ පාඨමාලාව</h1>
                <h3>ඔබ සාදන ලද පතොරම්වල ෆොටෝස් අප වෙත WhatsApp කිරීම තුළින් එහි අඩුපාඩු සකසාගත හැකිය - 070 375 5312</h3>
                <h3>Conducted By - MR. ASANKA RAJAPAKSHA - Dip in Fashion Design & Advance Pattern Making (University of Moratuwa)</h3>
                </div>
            </div>
        </div>
        <div className="course">
            <h2>AROMI FASHION ACADEMY</h2>
        </div>
    </div>
  )
}
