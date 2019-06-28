import { TEAM_FOLDER, RANKS } from './constants';

const {
  CENTRAL_CHIEF_DIRECTOR,
  Central_Deputy_Director,
  OFFICE_SUPERINTENDENT,
} = RANKS;

const teams = {
  central: [
    {
      name: 'SAIYAD SHAH ALAM',
      image: `${TEAM_FOLDER}/saiyad_shah_alam.jpg`,
      rank: CENTRAL_CHIEF_DIRECTOR,
      facebook: 'facebook.com',
      whatsapp: 'whatsapp.com',
      twitter: 'twitter.com',
    },
  
    {
      name: 'MD NASEEM SAIFI',
      image: `${TEAM_FOLDER}/md_naseem_saifi.jpg`,
      rank: Central_Deputy_Director,
      facebook: 'facebook.com',
      whatsapp: 'whatsapp.com',
      twitter: 'twitter.com',
    },
  
    {
      name: 'GURDAYAL SINGH GAUTAM',
      image: `${TEAM_FOLDER}/guridayal_singh_gautam.jpg`,
      rank: OFFICE_SUPERINTENDENT,
      facebook: 'facebook.com',
      whatsapp: 'whatsapp.com',
      twitter: 'twitter.com',
    },
  ],

  protector: [
    {
      name: 'SAIYAD SHAH ALAM',
      image: `${TEAM_FOLDER}/saiyad_shah_alam.jpg`,
      rank: CENTRAL_CHIEF_DIRECTOR,
      facebook: 'facebook.com',
      whatsapp: 'whatsapp.com',
      twitter: 'twitter.com',
    },
  ],

  advisory: {
    central: [
      {
        name: 'SAIYAD SHAH ALAM',
        image: `${TEAM_FOLDER}/saiyad_shah_alam.jpg`,
        rank: CENTRAL_CHIEF_DIRECTOR,
        facebook: 'facebook.com',
        whatsapp: 'whatsapp.com',
        twitter: 'twitter.com',
      },
    ],

    state: [
      {
        name: 'SAIYAD SHAH ALAM',
        image: `${TEAM_FOLDER}/saiyad_shah_alam.jpg`,
        rank: CENTRAL_CHIEF_DIRECTOR,
        facebook: 'facebook.com',
        whatsapp: 'whatsapp.com',
        twitter: 'twitter.com',
      },
    ],
  },
};

export default teams;
