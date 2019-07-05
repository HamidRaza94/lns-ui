import { TEAM_FOLDER, RANKS } from './constants';

const {
  CENTRAL_CHIEF_DIRECTOR,
  Central_Deputy_Director,
  OFFICE_SUPERINTENDENT,
  STATE_INCHARGE,
  SUPERINTENDENT,
  DEPUTY_SUPERINTENDENT,
  CHIEF_SECRETORY_STATE,
  STATE_SECRETORY,
  STATE_DIRECTOR_GENERAL,
  DIRECTOR,
} = RANKS;

function createData(state, name, rank, contact) {
  return { state, name, rank, contact };
}

const centralBoardData = [
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
];

const centralProtectorBoardData = [
  {
    name: 'SAIYAD SHAH ALAM',
    image: `${TEAM_FOLDER}/saiyad_shah_alam.jpg`,
    rank: CENTRAL_CHIEF_DIRECTOR,
    facebook: 'facebook.com',
    whatsapp: 'whatsapp.com',
    twitter: 'twitter.com',
  },
];

const centralAdvisoryBoardData = [
  {
    name: 'SAIYAD SHAH ALAM',
    image: `${TEAM_FOLDER}/saiyad_shah_alam.jpg`,
    rank: CENTRAL_CHIEF_DIRECTOR,
    facebook: 'facebook.com',
    whatsapp: 'whatsapp.com',
    twitter: 'twitter.com',
  },
];

const centralSectionBoardData = [
  {
    name: 'SAIYAD SHAH ALAM',
    image: `${TEAM_FOLDER}/saiyad_shah_alam.jpg`,
    rank: CENTRAL_CHIEF_DIRECTOR,
    facebook: 'facebook.com',
    whatsapp: 'whatsapp.com',
    twitter: 'twitter.com',
  },
];

const centralStaffSelectionBoardData = [
  {
    name: 'SAIYAD SHAH ALAM',
    image: `${TEAM_FOLDER}/saiyad_shah_alam.jpg`,
    rank: CENTRAL_CHIEF_DIRECTOR,
    facebook: 'facebook.com',
    whatsapp: 'whatsapp.com',
    twitter: 'twitter.com',
  },
];

const centralDisciplinaryBoardData = [
  {
    name: 'SAIYAD SHAH ALAM',
    image: `${TEAM_FOLDER}/saiyad_shah_alam.jpg`,
    rank: CENTRAL_CHIEF_DIRECTOR,
    facebook: 'facebook.com',
    whatsapp: 'whatsapp.com',
    twitter: 'twitter.com',
  },
];

const stateBoardData = {
  heading: ['state', 'name', 'rank', 'contact'],
  boardMembers: [
    createData('DELHI', 'YOGESH MEHTA', SUPERINTENDENT, 9015826397),
    createData('DELHI', 'DR. M. H. PASHA', DIRECTOR, 9990547081),
    createData('HARYANA', 'MARDAN ALI', STATE_DIRECTOR_GENERAL, 9671213606),
    createData('BIHAR', 'MD. YAKUB ANSARI', STATE_INCHARGE, 7903798853),
    createData('BIHAR', 'SUMAN KUMAR', CHIEF_SECRETORY_STATE, 8210767690),
    createData('BIHAR', 'ARADHANA KUMARI', STATE_SECRETORY, 6201841772),
    createData('GUJARAT', 'HARESH AMBALIYA', STATE_INCHARGE, 9714428903),
    createData('GUJARAT', 'GHAN SHYAM DONGA', SUPERINTENDENT, 8160350508),
    createData('MAHARASHTRA', 'RAHIM MD. PINJARI', SUPERINTENDENT, 8530378535),
    createData('UTTAR PRADESH', 'VED PRAKASH SHARMA', STATE_INCHARGE, 9548540575),
    createData('UTTAR PRADESH', 'S. M. KHALID ADV. HIGH COURT OF U.P.', SUPERINTENDENT, 9839110962),
    createData('UTTAR PRADESH', 'RAJ BABU GAHLAUT', DEPUTY_SUPERINTENDENT, 9634401079),
    createData('UTTAR PRADESH', 'FAISAL MUMTAZ', STATE_DIRECTOR_GENERAL, 9837551110),
    createData('UTTAR PRADESH', 'CHAUDHARY FARMAN RAYEEM', DIRECTOR, 7417282919),
  ],
}

const stateAdvisoryBoardData = {
  heading: ['state', 'name', 'rank', 'contact'],
  boardMembers: [
    createData('DELHI', 'YOGESH MEHTA', SUPERINTENDENT, 9015826397),
    createData('DELHI', 'DR. M. H. PASHA', DIRECTOR, 9990547081),
    createData('HARYANA', 'MARDAN ALI', STATE_DIRECTOR_GENERAL, 9671213606),
    createData('BIHAR', 'MD. YAKUB ANSARI', STATE_INCHARGE, 7903798853),
    createData('BIHAR', 'SUMAN KUMAR', CHIEF_SECRETORY_STATE, 8210767690),
    createData('BIHAR', 'ARADHANA KUMARI', STATE_SECRETORY, 6201841772),
    createData('GUJARAT', 'HARESH AMBALIYA', STATE_INCHARGE, 9714428903),
    createData('GUJARAT', 'GHAN SHYAM DONGA', SUPERINTENDENT, 8160350508),
    createData('MAHARASHTRA', 'RAHIM MD. PINJARI', SUPERINTENDENT, 8530378535),
    createData('UTTAR PRADESH', 'VED PRAKASH SHARMA', STATE_INCHARGE, 9548540575),
    createData('UTTAR PRADESH', 'S. M. KHALID ADV. HIGH COURT OF U.P.', SUPERINTENDENT, 9839110962),
    createData('UTTAR PRADESH', 'RAJ BABU GAHLAUT', DEPUTY_SUPERINTENDENT, 9634401079),
    createData('UTTAR PRADESH', 'FAISAL MUMTAZ', STATE_DIRECTOR_GENERAL, 9837551110),
    createData('UTTAR PRADESH', 'CHAUDHARY FARMAN RAYEEM', DIRECTOR, 7417282919),
  ],
}

const stateSectionBoardData = {};

const stateStaffSelectionBoardData = {};

const stateDisciplinaryBoardData = {};

export {
  centralBoardData,
  centralProtectorBoardData,
  centralAdvisoryBoardData,
  centralSectionBoardData,
  centralStaffSelectionBoardData,
  centralDisciplinaryBoardData,
  stateBoardData,
  stateAdvisoryBoardData,
  stateSectionBoardData,
  stateStaffSelectionBoardData,
  stateDisciplinaryBoardData,
}
