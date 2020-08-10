import React from 'react';

const Slide = (props) => {
  return (
    <div className="slides" style={{backgroundImage: `url(${props.imageUrl})`}}>
      <div style={{height: '100%', width: '100%', background: 'rgba(0,0,0,0.1)'}}></div>
    </div>
  );
}

export default Slide;