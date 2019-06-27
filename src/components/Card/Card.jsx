import React from 'react';

import { Update, Section, Team } from './components';

const Card = props => {
  const { variant, data } = props;

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

export default Card;
