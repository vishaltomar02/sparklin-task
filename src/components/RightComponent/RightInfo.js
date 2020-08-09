import React from 'react';
import ShippingIcon from '../../svgs/ShippingIcon';
import SecurtiyIcon from '../../svgs/SecurityIcon';
import TruckIcon from '../../svgs/TruckIcon';
import FeaturesComponent from './FeaturesComponent';
import OffersComponent from './OffersComponent';

const features = [
  {
    image: TruckIcon,
    heading: 'Quick Delivery',
    description: 'FedEx courier in most of the Cities'
  },
  {
    image: ShippingIcon,
    heading: 'Free Shipping',
    description: 'FAcross India on order above Rs 350'
  },
  {
    image: SecurtiyIcon,
    heading: 'Secured Payment',
    description: 'TaxMann provider secure service'
  }
]

export default function RightInfo() {
  return(
    <div className="right-info-container">
      <FeaturesComponent features={features}/>
      <OffersComponent />
    </div>
  );
}