import React from 'react';

export default function OfferCard(props) {
  const { offer : {image, heading, subHeading}} = props;

  return (
    <div className="offer-card">
      <div className="image-container">
        <img src={image} alt=" " />
      </div>
      <div className="card-content">
        <h1>{heading}</h1>
        <h3>{subHeading}</h3>
        <span className="know-more">Know more</span>
      </div>
    </div>
  )
}