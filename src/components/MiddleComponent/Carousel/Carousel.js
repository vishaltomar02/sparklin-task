import React, { useState, useEffect, useRef } from 'react';
import CarouselContent from './CarouselContent';
import ChevronIcon from '../../../svgs/chevron-icon-svg';


const Carousel = ({ images }) => {

  const element = document.getElementById('carousel-container');
  const width = element && element.offsetWidth;
  const [state, setState] = useState({ activeIndex: 0, xTranslate: 0, transition: 0.5 });
  const [slidesArray, setSlidesArray] = useState([images[images.length - 1], images[0], images[1]]);

  const { activeIndex, xTranslate, transition } = state;

  const autoSlideRef = useRef();
  const transitionRef = useRef();

  useEffect(() => {
    autoSlideRef.current = handleNextSlide;
    transitionRef.current = smoothTransition;
  });

  useEffect(() => {
    const autoPlay = () => {
      autoSlideRef.current();
    };

    let interval = setInterval(autoPlay, 2000);
    const transitionEnd = window.addEventListener('transitionend', (e) => {
      if (e.target === document.getElementById('carousel')) transitionRef.current();
    });

    const mouseEnter = document.getElementById('carousel').addEventListener('mouseenter', (e) => {
      clearInterval(interval);
    });

    const mouseLeave = document.getElementById('carousel').addEventListener('mouseleave', (e) => {
      interval = setInterval(autoPlay, 3000);
    });

    return () => {
      clearInterval(interval);
      window.removeEventListener('transitionend', transitionEnd);
      window.removeEventListener('mouseleave', mouseLeave);
      window.removeEventListener('mouseenter', mouseEnter);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (transition === 0) {
      setState({ ...state, transition: 0.5 });
    }
    // eslint-disable-next-line
  }, [transition]);

  const smoothTransition = () => {
    let newSlides = [];
    if (activeIndex === 0) {
      newSlides = [images[images.length - 1], images[0], images[1]];
    }
    else if (activeIndex === images.length - 1) {
      newSlides = [images[activeIndex - 1], images[activeIndex], images[0]];
    }
    else {
      newSlides = [images[activeIndex - 1], images[activeIndex], images[activeIndex + 1]];
    }
    setSlidesArray(newSlides);
    setState({ ...state, xTranslate: width, transition: 0 });
  };

  function handlePreviousSlide() {
    setState({ ...state, activeIndex: activeIndex === 0 ? images.length - 1 : activeIndex - 1, xTranslate: 0 });
  };

  const handleNextSlide = () => {
    setState({ ...state, activeIndex: (activeIndex === images.length - 1) ? 0 : activeIndex + 1, xTranslate: xTranslate + width });
  };

  return (
    <div className="carousel-box">
      <div className="card-toggler">Business H... <span className="cross"></span></div>
      <div id="carousel-container" className="carousel-container">
        <div className="carousel-left-arrow" >
          <div className='toggler-icon' style={{height: '100%', width: '100%'}} onClick={() => handlePreviousSlide()}>
            <div style={{ transform: 'rotate(90deg)'}}>
              <ChevronIcon />
            </div>
          </div>
        </div>
        <div className="carousel-right-arrow">
          <div className='toggler-icon' style={{height: '100%', width: '100%'}} onClick={handleNextSlide}>
            <div style={{ transform: 'rotate(-90deg)' }}>
              <ChevronIcon />
            </div>
          </div>
        </div>
        <CarouselContent transition={transition} sliderImages={slidesArray} xTranslate={xTranslate} width={width} />
      </div>
    </div>
  );
}

export default Carousel;