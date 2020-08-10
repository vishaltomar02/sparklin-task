import React from 'react';
import Slide from './Slide';

const CarouselContent = ({sliderImages, xTranslate, transition, width}) => {

  return ( 
    <div id="carousel" className="carousel-content" style={{transform: `translateX(-${xTranslate}px)`, transition: `transform ease-in ${transition}s`, width: `${width*sliderImages.length}px`}}>
      {sliderImages.map((item) => {
        return(
          <Slide key={item.text} className="slides" imageUrl={item.imageSrc}/>
        );
      })}
    </div>
  );
}

export default CarouselContent;