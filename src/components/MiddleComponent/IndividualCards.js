import React from 'react';

export default function IndividualCards(props) {
  const { cardData: {bookImage, bookName, authorName, price} } = props;
  return(
    <div className="individual-cards">
      <div className="image-container">
        <img src={bookImage} alt="book" />
      </div>
      <div className="book-content">
        <h3>{bookName}</h3>
        <h2>{authorName}</h2>
        <div className="price-and-stars">
          <div>Rs. &nbsp; {price} </div>
        </div>
      </div>
    </div>
  )
}