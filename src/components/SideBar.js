import React, { useState } from 'react';
import TogglerComponent from './TogglerComponent';
import SideBarOptions from './SideBarOptions';

const MenuOptions = [
  'Professional Books',
  'NISM/IIBF',
  "Journals",
  'Tax Compliance on DVD',
  'Taxmann online on DVD',
  'Taxmann online on Web',
  'E-Services',
  'E-Journals',
  'E-Books',
  'Advanced Diploma in international taxation'
];

function SideBar() {
  const [toShow, toggler] = useState(true);

  return (
    <div className="sidebar-container">
      <TogglerComponent toggler={toggler} toShow={toShow} />
      <div className={`all-options ${toShow ? 'show' : ''}`}>
        <div className="bookstore-home-option">
          Bookstore Home
      </div>
        <div className="divider"></div>
        {
          MenuOptions.map((item, index) => {
            return (
              <div key={index}>
                <SideBarOptions option={item} />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default SideBar;