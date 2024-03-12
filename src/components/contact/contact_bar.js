// ContactInfo.js
import React from 'react';
import './contact_bar.css'; 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailForward, faLink, faCamera, faCameraRetro} from '@fortawesome/free-solid-svg-icons';

const Contact_bar = () => {
  const email = "rlifrank18@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/runcheng-li-1b9748205/";
  const instagram_1 = "fr_studio_art";
  const instagram_2 = "frfrankli__";
  const videoPortfolio = "https://space.bilibili.com/398891472";

  return (
    <div className="contact-info-sticky">
      <h3>Contact:</h3>
      <p>Email <FontAwesomeIcon icon={faMailForward} />: <a href={`mailto:${email}`}>{email} </a> </p>
      <p>Linkedin <FontAwesomeIcon icon={faLink} />: <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">Runcheng(Frank) Li  </a></p>
      <p>Instagram <FontAwesomeIcon icon={faCameraRetro} /> : 
        <a href={`https://www.instagram.com/${instagram_1}/`} target="_blank" rel="noopener noreferrer">
          {instagram_1}
        </a> 
        <a href={`https://www.instagram.com/${instagram_2}/`} target="_blank" rel="noopener noreferrer">
          {` ${instagram_2}`} 
        
        
        </a>
      </p>
      <p>Video Portfolio <FontAwesomeIcon icon={faCamera} />: <a href={videoPortfolio} target="_blank" rel="noopener noreferrer">Bilibili  </a></p>
    </div>
  );
}

export default Contact_bar;
