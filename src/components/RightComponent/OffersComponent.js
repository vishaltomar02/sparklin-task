import React from 'react';
import OfferCard from './OfferCard';
import OfferOne from '../../assets/images/offer-1-image.png';
import OfferTwo from '../../assets/images/offer-2-image.png';

const offerCards = [
  {
    image: OfferOne,
    id: 1,
    heading: 'Super Deal of a Lifetime',
    subHeading: 'Get 2 modules at a price of 1 module'
  },
  {
    image: OfferTwo,
    id: 2,
    heading: 'Books under Rs 500 only',
    subHeading: '5000+ books on Income Tax and Corporate Tax'
  },
  {
    image: OfferOne,
    id: 3,
    heading: 'Super Deal of a Lifetime',
    subHeading: 'Get 2 modules at a price of 1 module'
  },
  {
    image: OfferTwo,
    id: 4,
    heading: 'Books under Rs 500 only',
    subHeading: '5000+ books on Income Tax and Corporate Tax'
  }
]

export default function OffersComponent() {
  return (
    <div className="offers-container">
      <h3>Offers</h3>
      {offerCards.map((offer) => {
        return (
        <div key={offer.id} style={{margin: '25px 0px 50px 0px'}}>
          <OfferCard offer={offer}/>
        </div>
        );
      })}
    </div>
  )
}