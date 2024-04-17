import React, { useState } from 'react';
import styles from './index.module.css';
import clientImage1 from '../../utils/images/businesswomen1.jpg';
import clientImage2 from '../../utils/images/clientImage.svg'; // Add more images as needed
import clientImage3 from '../../utils/images/businesswomen2.png';
import quotationmark from '../../utils/images/quotationmark.svg';
import readStory from '../../utils/images/readStoryArrow.svg';
import leftArrow from '../../utils/images/testimonialleftarrow.svg';
import rightArrow from '../../utils/images/testimonialrightarrow.svg';

const testimonialData = [
  {
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales turpis et lacinia fermentum. Curabitur vestibulum at arcu sed blandit.Vestibulum fringilla magna nec erat . ',
    title: 'Title 1',
    name: 'Name 1',
    image: clientImage2,
  },
  {
    message: 'Proin ultricies sapien sit amet lectus consectetur, ac convallis odio convallis. Pellentesque pharetra mi nec enim ultrices, id tincidunt metus suscipit. Vestibulum fringilla magna nec erat . ',
    title: 'Title 2',
    name: 'Name 2',
    image: clientImage3,
  },
  {
    message: 'a iaculis elit vehicula nec. Mauris lobortis, dolor nec convallis consectetur, quam tortor scelerisque libero, sed condimentum leo tortor eget nunc. Sed nec turpis nulla. In ultricies diam ',
    title: 'Title 3',
    name: 'Name 3',
    image: clientImage1,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1));
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1));
  };

  const testimonial = testimonialData[currentIndex];

  return (
    <div className={styles.testimonialContainer}>
      <div className={styles.testimonial}>
        <div className={styles.clientImage}>
          <img src={testimonial.image} alt="Client" />
        </div>
        <div className={styles.clientFeedback}>
          <img src={quotationmark} alt="Quotation Mark" />
          <div className={styles.clientMessage}>
            <p>
              {testimonial.message}
              <br />
              <br />
              {testimonial.title}
              <br />
              {testimonial.name}
            </p>
          </div>
          <div className={styles.readStory}>
            <img src={readStory} alt="Read Story" />
            <p>Read my story</p>
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
    </div>
  );
};

export default Testimonial;
