import React from 'react';
import PropTypes from 'prop-types';

import { Update, Section, Team } from './components';

const Card = ({ variant, data }) => {
  switch (variant) {
    case 'update':
      return <Update data={data} />;

    case 'section':
      return <Section data={data} />;

    case 'team':
      return <Team data={data} />;

    default:
      return <></>;
  }
};

Card.propTypes = {
  variant: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

Card.defaultProps = {
  variant: '',
  data: {},
};

export default Card;
