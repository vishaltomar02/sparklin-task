import React from 'react';
import ChevronIcon from '../svgs/chevron-icon-svg';

export default function TogglerComponent(props) {

  const {toShow, toggler} = props;

  return (
    <div className={`sidebar-toggler ${toShow ? 'show' : ''}`}>
      {toShow ? 'show' : 'hide'}
      <div className='toggler-icon' onClick={() => toggler(!toShow)}>
        <div style={{transform: `rotate(90deg) ${toShow ? 'rotate(-180deg)' : ''}`}}>
          <ChevronIcon />
        </div>
      </div>
    </div>
  )
}