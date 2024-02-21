// ContactInfo.js
import React from 'react';
import './contact_bar.css'; 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailForward, faLink, faCamera, faCameraRetro} from '@fortawesome/free-solid-svg-icons';

const Contact_bar = () => {
  const email = "rlifrank18@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/runcheng-li-1b9748205/";
  const instagram = "fr_studio_art";
  const videoPortfolio = "https://space.bilibili.com/398891472";

  return (
    <div className="contact-info-sticky">
      <h3>Contact:</h3>
      <p>Email: <a href={`mailto:${email}`}>{email} <FontAwesomeIcon icon={faMailForward} /></a> </p>
      <p>LinkedIn: <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">Runcheng(Frank) Li <FontAwesomeIcon icon={faLink} /> </a></p>
      <p>Instagram: <a href={`https://www.instagram.com/${instagram}/`} target="_blank" rel="noopener noreferrer">{instagram} <FontAwesomeIcon icon={faCameraRetro} /> </a></p>
      <p>Video Portfolio: <a href={videoPortfolio} target="_blank" rel="noopener noreferrer">Bilibili <FontAwesomeIcon icon={faCamera} /> </a></p>
    </div>
  );
}

export default Contact_bar;
