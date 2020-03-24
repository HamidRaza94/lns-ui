import React from 'react';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';

const Carousel = ({ children }) => (
  <ReactCarousel
    autoPlay={true}
    infiniteLoop={true}
    showStatus={false}
    showThumbs={false}
  >
    {children}
  </ReactCarousel>
);

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Carousel;
