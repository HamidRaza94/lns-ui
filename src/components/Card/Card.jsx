import React from 'react';

import { Update } from './Update';
import { Team } from './Team';

const Card = props => {
  const { variant } = props;

  switch (variant) {
    case 'update':
      const { title, isLoading, value, style } = props;
      return <Update title={title} isLoading={isLoading} value={value} style={style} />;

    case 'team':
      const {
        name,
        image,
        backgroundImage,
        jobTitle,
        facebook,
        whatsapp,
        twitter
      } = props;
      return (
        <Team
          name={name}
          image={image}
          backgroundImage={backgroundImage}
          jobTitle={jobTitle}
          facebook={facebook}
          whatsapp={whatsapp}
          twitter={twitter}
        />
      );

    default:
      return <></>;
  }
};

export default Card;
