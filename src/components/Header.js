import React, { useState } from 'react';
import TaxMannLogo from '../assets/images/taxmann-logo.jpg';
import ChevronIcon from '../svgs/chevron-icon-svg';
import CartIcon from '../svgs/CartIcon';
import DownloadIcon from '../svgs/DownloadIcon';
import ProfileIcon from '../svgs/ProfileIcon';
import NotificationIcon from '../svgs/NotificationIcon';

const accountsInitials = [
  { text: 'R', color: '#25C16F' },
  { text: 'E', color: '#CC4783' },
  { text: 'C', color: '#8847CC' }
];


function Header() {

  const [toShow, setShow] = useState(true);

  const handleHamburger = () => {
    const elem = document.getElementById("hamburg");
    if(elem.className.includes('open')) {
      elem.classList.remove('open');
    }
    else {
      elem.classList.add('open');
    }
  }

  return (
    <div className="header">
      <div className="logo-container">
        <img src={TaxMannLogo} alt="Taxmann-logo" />
        <div>Bookstore</div>
      </div>
      <div className="search-container">
        <input
          type="text"
          name="search-page"
          placeholder="Search anything on tax and corporate law in bookstore" />
      </div>
      <div className="accounts-container">
        {
          accountsInitials.map(
            (item, index) => (
              <div
                key={index}
                style={{ transitionDelay: `${0.2*index}s`}}
                className={`initials-container ${!toShow ? 'hide' : ''}`}>
                <div style={{ background: `${item.color}` }} className="initials-inner">{item.text}</div>
              </div>
            )
          )
        }
        <div style={{ padding: '0px 0.6em' }}>
          <div
            onClick={() => setShow(!toShow)}
            style={{ transition: 'all 0.2s ease', cursor: 'pointer' }}
            className={`${!toShow ? 'chevron-right' : ''}`}>
            <ChevronIcon />
          </div>
        </div>
      </div>
      <div className="header-icons">
        <div><DownloadIcon /></div>
        <div><NotificationIcon /></div>
        <div><ProfileIcon /></div>
        <div><CartIcon /></div>
      </div>
      <div id="hamburg" className="hamburger-menu" onClick={(e) => handleHamburger(e)}>
        <div>
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;