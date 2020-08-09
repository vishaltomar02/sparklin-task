import React from 'react';
import SideBar from './SideBar';
import MiddleCardsComponent from './MiddleComponent/MiddleCardsComponent';


function MainComponent() {
  return(
    <div className="main-content-container">
      <SideBar/>
      <MiddleCardsComponent/>
    </div>
  )
}

export default MainComponent;