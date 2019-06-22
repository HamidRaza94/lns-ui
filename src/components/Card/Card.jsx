import React from 'react';

import { Update, Team } from './components';

const Card = props => {
  const { variant } = props;

  switch (variant) {
    case 'update':
      const { title, isLoading, value } = props;
      return <Update title={title} isLoading={isLoading} value={value} />;

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
