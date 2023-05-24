import React from 'react';
import facebook from '../../images/social_media_icons/facebook-icon.svg';
import twitter from '../../images/social_media_icons/twitter-icon.svg';
import instagram from '../../images/social_media_icons/instagram-icon.svg';
import '../../css/social_media.css';

const SocialMedia = () => {
  return (
    <div className="social-media">
      <a href="https://www.facebook.com"><img src={facebook} alt="Facebook" /></a>
      <a href="https://www.twitter.com"><img src={twitter} alt="Twitter" /></a>
      <a href="https://www.instagram.com"><img src={instagram} alt="Instagram" /></a>
    </div>
  );
}

export default SocialMedia;
