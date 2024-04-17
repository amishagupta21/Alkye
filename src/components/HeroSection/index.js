import React, { useState } from 'react';
import styles from './index.module.css';
import crouselImage1 from '../../utils/images/bannerImage.PNG';
import crouselImage5 from '../../utils/images/bannerimage5.jpg';
import crouselImage3 from '../../utils/images/bannerimage4.jpg';
import leftArrow from '../../utils/images/testimonialleftarrow.svg';
import rightArrow from '../../utils/images/testimonialrightarrow.svg';

const carouselData = [
  {
    imageUrl: crouselImage1,
    content: {
      path: 'Home / Why work with us',
      headline: 'Headline #1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  },
  {
    imageUrl: crouselImage3,
    content: {
      path: 'Home / Why work with us',
      headline: 'Headline #2',
      text: 'Vestibulum ac nisi vitae eros vehicula cursus. Nullam suscipit nisi',
    },
  },
  {
    imageUrl: crouselImage5,
    content: {
      path: 'Home / Why work with us',
      headline: 'Headline #3',
      text: 'Proin ultricies sapien sit amet lectus consectetur, ac convallis',
    },
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
  };

  const currentCarouselItem = carouselData[currentIndex];

  return (
    <div className={styles.heroContainer}>
      <div className={styles.crousels}>
        <img src={currentCarouselItem.imageUrl} alt="Carousel" />
        <div className={styles.crouselContent}>
          <p>{currentCarouselItem.content.path}</p>
          <span>{currentCarouselItem.content.headline}</span>
          <p>{currentCarouselItem.content.text}</p>
        </div>
        <div className={styles.navigationArrow}>
          <div className={styles.arrow} onClick={handleLeftArrowClick}>
            <img src={leftArrow} alt="Left Arrow" />
          </div>
          <div className={styles.arrow} onClick={handleRightArrowClick}>
            <img src={rightArrow} alt="Right Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
