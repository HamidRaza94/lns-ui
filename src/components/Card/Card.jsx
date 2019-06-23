import React from 'react';

import { Update, Section, Team } from './components';

const Card = props => {
  switch (props.variant) {
    case 'update':
      return (
        <Update
          title={props.title}
          isLoading={props.isLoading}
          value={props.value}
        />
      );

    case 'section':
      return <Section media={props.media} mediaText={props.mediaText} />;

    case 'team':
      return (
        <Team
          name={props.name}
          image={props.image}
          backgroundImage={props.backgroundImage}
          jobTitle={props.jobTitle}
          facebook={props.facebook}
          whatsapp={props.whatsapp}
          twitter={props.twitter}
        />
      );

    default:
      return <></>;
  }
};

export default Card;
