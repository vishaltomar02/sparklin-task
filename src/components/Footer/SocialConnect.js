import React from 'react';
import TaxMannLogo from '../../assets/images/taxmann-logo-footer.jpg';
import GooglePlay from '../../assets/images/google-play-badge.png';
import AppStore from '../../assets/images/app-store.png';
import FacebookIcon from '../../svgs/FacebookIcon';
import TwitterIcon from '../../svgs/TwitterIcon';
import LinkedInIcon from '../../svgs/LinkedInIcon';
import YoutubeIcon from '../../svgs/YoutubeIcon';

export default function SocialConnect() {
  return (
    <div className="social-connect-container">
      <img src={TaxMannLogo} alt="Taxmann-logo" style={{width: '163px', height: '48px'}} />
      <p>
        Everything you need on Income Tax, <br></br>
        GST and Corporate Laws. Authentic <br></br>
        databases, books, journals Practice <br></br>
        and Exam Platforms.
      </p>
      <div className="stores">
        <img src={GooglePlay} alt="google-play"/>
        <img src={AppStore} alt="app-store"/>
      </div>
      <div className="social-icons">
        <FacebookIcon/>
        <TwitterIcon/>
        <LinkedInIcon/>
        <YoutubeIcon/>
      </div>
      <p style={{fontSize: '11px'}}> &#169; 2019 Taxmann.com. All rights reserved. </p >
    </div>
  )
}