import React from 'react';
import IndividualCards from './IndividualCards';
import SectionLabelComponent from './SectionLabelComponent';
import IncomeTaxImage from '../../assets/images/income-tax-image.png';
import GstImage from '../../assets/images/gst-image.png';
import CentralImage from '../../assets/images/central-image.png';
import LimitedEditionLabel from '../../assets/images/limited-edition-label.png';
import BestSellerLabel from '../../assets/images/best-seller-label.png';


const cardsArray = [
  {
    bookImage: IncomeTaxImage,
    bookName: 'Income Tax Rules with Master Guide To Income Tax Rules',
    authorName: 'Aditya Gadge, Biharilal Deora',
    price: 345,
    label: LimitedEditionLabel,
    stars: '4'
  },
  {
    bookImage: CentralImage,
    bookName: 'Central Excise Manual (Vol 2) (Set of 3 Books)',
    authorName: 'Amitabha Mukherjee',
    price: 1799,
    label: null,
    stars: '4'
  },
  {
    bookImage: GstImage,
    bookName: 'Central Excise Manual (Vol 2) (Set of 3 Books)',
    authorName: 'By S. N. Bidani, P. K. Mitra',
    price: 1799,
    label: BestSellerLabel,
    stars: '4'
  }
]

export default function BooksCardsSection() {

  return (
    <div>
      <SectionLabelComponent chevron={true} name={'Recommended for you'}/>
      <div className="section-cards">
        {cardsArray.map((cardObject) => {
          return (
            <IndividualCards cardData={cardObject} />
          );
        })}
      </div>
      <div style={{ padding: '22px 0px', background: 'white' }}>
        <div className="section-cards">
          {[cardsArray[2], cardsArray[0], cardsArray[1]].map((cardObject) => {
            return (
              <IndividualCards cardData={cardObject} />
            );
          })}
        </div>
        <div className="divider" style={{width: '90%', margin: '42px auto'}}></div>
        <SectionLabelComponent name={'New Releases'}/>
        <div className="section-cards">
          {[cardsArray[0], cardsArray[1], cardsArray[2], cardsArray[2], cardsArray[0], cardsArray[1]].map((cardObject) => {
            return (
              <IndividualCards cardData={cardObject} />
            );
          })}
        </div>
        <div className="divider" style={{width: '90%', margin: '42px auto'}}></div>
        <SectionLabelComponent name={'featured'}/>
        <div className="section-cards">
          {cardsArray.map((cardObject) => {
            return (
              <IndividualCards cardData={cardObject} />
            );
          })}
        </div>
        <div className="divider" style={{width: '90%', margin: '42px auto'}}></div>
        <SectionLabelComponent name={'Latest'}/>
        <div className="section-cards">
          {cardsArray.map((cardObject) => {
            return (
              <IndividualCards cardData={cardObject} />
            );
          })}
        </div>
      </div>
    </div>
  )
}