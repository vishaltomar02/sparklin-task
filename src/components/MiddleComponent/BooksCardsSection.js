import React from 'react';
import IndividualCards from './IndividualCards.js';
import IncomeTaxImage from '../../assets/images/income-tax-image.png';
import GstImage from '../../assets/images/gst-image.png';
import CentralImage from '../../assets/images/central-image.png';


const cardsArray = [
  {
    bookImage: IncomeTaxImage,
    bookName: 'Income Tax Rules with Master Guide To Income Tax Rules',
    authorName: 'Aditya Gadge, Biharilal Deora',
    price: 345,
    stars: '4'
  },
  {
    bookImage: GstImage,
    bookName: 'Central Excise Manual (Vol 2) (Set of 3 Books)',
    authorName: 'Amitabha Mukherjee',
    price: 1799,
    stars: '4'
  },
  {
    bookImage: CentralImage,
    bookName: 'Central Excise Manual (Vol 2) (Set of 3 Books)',
    authorName: 'By S. N. Bidani, P. K. Mitra',
    price: 1799,
    stars: '4'
  }
]

export default function BooksCardsSection() {

  return (
    <div className="section-cards">
      {cardsArray.map((cardObject) => {
        return (
          <IndividualCards cardData={cardObject}/>
        );
      })}
    </div>
  )
}