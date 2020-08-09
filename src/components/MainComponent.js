import React from 'react';
import SideBar from './SideBar';
import MiddleCardsComponent from './MiddleComponent/MiddleCardsComponent';
import RightInfo from './RightComponent/RightInfo';


function MainComponent() {
  return(
    <div className="main-content-container">
      <SideBar/>
      <MiddleCardsComponent/>
      <RightInfo/>
    </div>
  )
}

export default MainComponent;