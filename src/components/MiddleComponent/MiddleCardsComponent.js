import React from 'react';
import BooksCardsSection from './BooksCardsSection';
import Carousel from './Carousel/Carousel';
import OfferOne from '../../assets/images/offer-1-image.png'
import OfferTwo from '../../assets/images/offer-2-image.png'
import CentralImage from '../../assets/images/central-image.png'
import GSTImage from '../../assets/images/gst-image.png'
import TaxMannLogo from '../../assets/images/taxmann-logo.jpg'


const imagesArray = [
  {
    imageSrc: OfferOne
  },
  {
    imageSrc: OfferTwo
  },
  {
    imageSrc: CentralImage,
  },
  {
    imageSrc: GSTImage,
  },
  {
    imageSrc: TaxMannLogo,
  }
  // 'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2015/09/Animal_shelters.jpg?w=1200&h=628&fill=blur&fit=fill',
  // 'https://i.pinimg.com/originals/05/64/25/05642599e307500e58746d0ad8d2de7f.jpg'
];

export default function MiddleCardsComponent() {
  return(
    <div className="middle-container">
      <Carousel images={imagesArray}/>
      <BooksCardsSection/>
    </div>
  )
}