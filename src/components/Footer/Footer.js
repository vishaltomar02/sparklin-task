import React from 'react';
import SocialConnect from './SocialConnect';
import FooterCategories from'./FooterCategories';

const categories = {
  products : {
    heading: 'Products',
    links: [
      'Research',
      'Practice',
      'Exam',
      'Compliance',
      'Taxmann Bookstore',
      'Taxmann Blog'
    ]
  },
  about_company: {
    heading: 'About Company',
    links: [
      'History',
      'Board of Directors',
      'Media Coverage',
      'Taxmann Educations(CSR)',
      'Careers'
    ]
  },
  catalogue: {
    heading: 'Catalogue',
    links: [
      'Academic',
      'Professional',
      'Bare Acts',
      'Banking & Finance',
      'NISM Certification Courses',
      'One Solution TDS & ITR',
      'Goods & Services Tax (GST)',
      'L.L.B. Series',
      'Insolvency and Bankruptcy'
    ]
  },
  authors: {
    heading: 'Authors',
    links: [
      'Academic',
      'Professional',
      'A-Z'
    ]
  },
  bookstore: {
    heading: 'Bookstore Support',
    links: [
      'Quick Delivery with Fedex',
      'Secured Payment',
      'Free Shipping above Rs 350',
      'Missed Call support @ 45562222'
    ]
  },
  support: {
    heading: 'Business & Support',
    links: [
      'Sell with Taxmann',
      'Locate Dealers',
      'Locate Representatives',
      'Contact Us'
    ]
  },
  legal: {
    heading: 'Legal',
    links: [
      'Privacy Policy',
      'Return Policy',
      'Payment Terms',
      'Disclaimer',
      'EULA'
    ]
  }
};

export default function Footer() {
  return (
    <div className="footer-container">
      <SocialConnect />
      <div>
        <FooterCategories category={categories.products}/>
        <FooterCategories category={categories.about_company}/>
      </div>
      <div>
        <FooterCategories category={categories.catalogue}/>
      </div>
      <div>
        <FooterCategories category={categories.authors}/>
        <FooterCategories category={categories.bookstore}/>
      </div>
      <div>
        <FooterCategories category={categories.support}/>
        <FooterCategories category={categories.legal}/>
      </div>
    </div>
  );
}