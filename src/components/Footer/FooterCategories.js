import React from 'react';

export default function FooterCatgories(props) {
  const { category } = props;
  return (
    <div className="footer-category">
      <h3>{category.heading}</h3>
      {category.links.map((item) => (
        <p><a href=" ">{item}</a></p>
      ))}
    </div>
  )
}