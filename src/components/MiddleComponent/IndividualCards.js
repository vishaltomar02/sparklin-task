import React from 'react';
import ActiveStar from '../../svgs/ActiveStar';
import InactiveStar from '../../svgs/InactiveStar';

export default function IndividualCards(props) {
  const { cardData: {bookImage, bookName, authorName, price, stars, label} } = props;

  const renderStars = () => {
    const starsArray = [];
    for(let i = 0; i < 5; i++)
    {

      if(stars > i) starsArray.push(<div key={i}><ActiveStar/></div>);
      else starsArray.push(<div key={i}><InactiveStar/></div>);
    }
    return starsArray;
  }

  return(
    <div className="individual-cards">
      <div className="image-container">
        {label && <img className="label-image" src={label} alt="label"/>}
        <img className="main-image" src={bookImage} alt="book" />
      </div>
      <div className="book-content">
        <h3>{bookName}</h3>
        <h2>{authorName}</h2>
        <div className="price-and-stars">
          <div>Rs. &nbsp; {price} </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>{renderStars()}</div>
        </div>
        <div className="cards-button-container">
          <button className="add-to-cart-button">Add To Cart</button>
          <button className="buy-now-button">Buy Now</button>
        </div>
      </div>
    </div>
  )
}