import React from 'react';

export default function FeaturesComponent({features}) 
{
  return(
    <section className="features-container">
      {
        features.map((feature, index) => (
          <div key={index} className="feature">
            <div className="feature-icon">
              {feature.image()}
            </div>
            <h2>{feature.heading}</h2>
            <h3>{feature.description}</h3>
          </div>
        ))
      }
    </section>
  )
}