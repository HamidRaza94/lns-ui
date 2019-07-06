import { TEAM_FOLDER, RANKS } from './constants';

const {
  CHIEF_FOUNDER,
  CENTRAL_CHIEF_DIRECTOR,
  CENTRAL_DEPUTY_DIRECTOR,
  CENTRAL_OFFICE_SUPERINTENDENT,
  CENTRAL_CHIEF_SECRETORY,
  CENTRAL_PROTECTOR,
  CENTRAL_SR_CHIEF_ADVISOR,
  CENTRAL_CHEIF_ADVISOR,
  CENTRAL_ADVISOR,
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

function createCentralData(name, image, rank, facebook, whatsapp, twitter) {
  return { name, image, rank, facebook, whatsapp, twitter };
}

const centralBoardData = [
  createCentralData(
    'SAIYAD SAJID ALI (EX-SERVICEMAN DEPARTMENT OF ARMY GOVT. OF INDIA)',
    `${TEAM_FOLDER}/saiyad_sajid_ali.jpg`,
    CHIEF_FOUNDER,
  ),

  createCentralData(
    'SAIYAD SHAH ALAM',
    `${TEAM_FOLDER}/saiyad_shah_alam.jpg`,
    CENTRAL_CHIEF_DIRECTOR,
    'saiyad.shahalam',
    '9911521255, 9454156405',
  ),

  createCentralData(
    'MD. NASEEM SAIFI',
    `${TEAM_FOLDER}/md_naseem_saifi.jpg`,
    CENTRAL_DEPUTY_DIRECTOR,
    'MDNASEEM.SAIFI.1',
    '9555642723',
  ),

  createCentralData(
    'GURDAYAL SINGH GAUTAM',
    `${TEAM_FOLDER}/guridayal_singh_gautam.jpg`,
    CENTRAL_OFFICE_SUPERINTENDENT,
    'GURDIAL.GAUTAM.3',
    '9266068240',
  ),

  createCentralData(
    'SAIYAD BABLU ALI',
    `${TEAM_FOLDER}/saiyad_bablu_ali.jpg`,
    CENTRAL_CHIEF_SECRETORY,
    'saiyad_bablu_ali',
    '7830008306',
  ),

  // createCentralData(
  //   '',
  //   `${TEAM_FOLDER}/.jpg`,
  //   '',
  //   '',
  //   '',
  // ),
];

const centralProtectorBoardData = [
  createCentralData(
    'MR. ASHRAF ALI KHILJI (FORMER STATE MINISTER GOVT. OF RAJASTHAN)',
    `${TEAM_FOLDER}/ashraf_ali_khilji.jpg`,
    `${CENTRAL_PROTECTOR}`,
  ),
];

const centralAdvisoryBoardData = [
  createCentralData(
    'MR. DHARMPAL DHANKHAR DIG OF POLICE (RTD.)',
    `${TEAM_FOLDER}/dharmpal_singh_dhankhar.jpg`,
    `${CENTRAL_SR_CHIEF_ADVISOR} (SPL. IN DEFENSE)`,
  ),

  createCentralData(
    'MR. A.S. SHASHTRI (ADV. SUPREME COURT OF INDIA)',
    `${TEAM_FOLDER}/a_s_shashtri.jpg`,
    `${CENTRAL_CHEIF_ADVISOR} (SPL. IN LEGAL)`,
  ),

  createCentralData(
    'MR. S.M. KHALID (ADV. HIGH COURT OF ALLAHABAD)',
    `${TEAM_FOLDER}/s_m_khalid.jpg`,
    `${CENTRAL_ADVISOR} (SPL. IN LEGAL)`,
  ),

  createCentralData(
    'MR. VED PRAKASH SHARMA',
    `${TEAM_FOLDER}/ved_prakash_sharma.jpg`,
    `${CENTRAL_ADVISOR} (SPL. IN POLITICAL)`,
  ),

  createCentralData(
    'MR. RANBIR KUMAR MEHTA',
    `${TEAM_FOLDER}/ranbir_kumar_mehta.jpg`,
    `${CENTRAL_ADVISOR} (SPL. IN SOCIAL)`,
  ),
];

const centralSectionBoardData = [
  
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
  createCentralData(
    'SAIYAD SHAH ALAM',
    `${TEAM_FOLDER}/saiyad_shah_alam.jpg`,
    `CENTRAL CHAIRMAN`,
  ),

  createCentralData(
    'DR. A.S. SHASHTRI (ADV. SUPREME COURT OF INDIA)',
    `${TEAM_FOLDER}/a_s_shashtri.jpg`,
    `CENTRAL VICE CHAIRMAN`,
  ),

  createCentralData(
    'GURDAYAL SINGH GAUTAM',
    `${TEAM_FOLDER}/gurdayal_singh_gautam.jpg`,
    `CENTRAL SECRETORY`,
  ),

  createCentralData(
    'MR. VED PRAKASH SHARMA',
    `${TEAM_FOLDER}/ved_prakash_sharma.jpg`,
    `CENTRAL ADDITIONAL SECRETORY`,
  ),

  createCentralData(
    'MD. NASEEM SAIFI',
    `${TEAM_FOLDER}/md_naseem_saifi.jpg`,
    `CENTRAL JOINT SECRETORY`,
  ),
];

const stateBoardData = {
  heading: ['STATE', 'NAME', 'RANK', 'CONTACT'],
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
    createData('UTTAR PRADESH', 'REKHA SAXENA', CHIEF_SECRETORY_STATE, 9412541576),
    createData('UTTAR PRADESH', 'RASHID ALI', STATE_SECRETORY, 8384017620),
  ],
}

const stateAdvisoryBoardData = {
  heading: ['STATE', 'NAME', 'RANK', 'CONTACT'],
  boardMembers: [],
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
