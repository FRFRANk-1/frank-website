// ContactInfo.js
import React from 'react';
import './contact_bar.css'; 

const Contact_bar = () => {
  const email = "rlifrank18@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/runcheng-li-1b9748205/";
  const instagram = "fr_studio_art";
  const videoPortfolio = "https://space.bilibili.com/398891472";

  return (
    <div className="contact-info-sticky">
      <h3>Contact:</h3>
      <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
      <p>LinkedIn: <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">Runcheng(Frank) Li</a></p>
      <p>Instagram: <a href={`https://www.instagram.com/${instagram}/`} target="_blank" rel="noopener noreferrer">{instagram}</a></p>
      <p>Video Portfolio: <a href={videoPortfolio} target="_blank" rel="noopener noreferrer">Bilibili</a></p>
    </div>
  );
}

export default Contact_bar;
