import React from 'react';
import PropTypes from 'prop-types';

import { Update, Message, Section, Team } from './components';

const Card = ({ variant, data }) => {
  switch (variant) {
    case 'update':
      return <Update data={data} />;

    case 'section':
      return <Section data={data} />;

    case 'team':
      return <Team data={data} />;

    case 'message':
      return <Message data={data} />;

    default:
      return <></>;
  }
};

Card.propTypes = {
  variant: PropTypes.oneOf(['update, section, team, message']).isRequired,
  data: PropTypes.object.isRequired,
};

export default Card;
