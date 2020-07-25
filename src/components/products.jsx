import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import product1 from './../public/products/product (1).jpg'
import product2 from './../public/products/product (2).jpg'
import product3 from './../public/products/product (3).jpg'
import './../supports/css/products.css'
import Zoom from 'react-reveal/Zoom';

const items = [
  {
    src: product1,
    altText: 'product 1'
  },
  {
    src: product2,
    altText: 'product 2'
  },
  {
    src: product3,
    altText: 'product 3'
  }
];

const Products = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className='product-image'/>
      </CarouselItem>
    );
  });

  return (
    <div id='products' className="d-flex flex-column align-items-center wrapper-product">
        <Zoom right cascade>
          <h2 className='title-product'>Our Products</h2>
        </Zoom>

        <Zoom>
          <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </Zoom>
    </div>
  );
}

export default Products;