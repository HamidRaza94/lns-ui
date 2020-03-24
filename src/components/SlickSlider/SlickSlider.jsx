import React from 'react';
import Sliders from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const buildSetting = ({ slidesToShow }) => {
  let setting = {};
  let responsive = [];

  if (slidesToShow) {
    setting = {
      ...setting,
      slidesToShow,
    };
  } else {
    setting = {
      ...setting,
      slidesToShow: 3,
      centerMode: true,
      className: 'center',
      centerPadding: 60,
    };

    responsive = [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        },
      },
    ];
  }

  return ({
    ...setting,
    speed: 500,
    arrows: false,
    infinite: true,
    responsive,
  });
}

const SlickSlider = ({ children, slidesToShow }) => (
  <Sliders {...buildSetting({ slidesToShow })}>
    {children}
  </Sliders>
);

export default SlickSlider;
