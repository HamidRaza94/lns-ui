const SEX = ['Male', 'Female', 'Transgender'];
const MARITAL_STATUS = ['Single', 'Married', 'Widowed', 'Divorced', 'Separated'];
const CATEGORY = ['General', 'OBC', 'SC', 'ST'];
const RELIGION = ['Christianity', 'Islam', 'Hinduism', 'Buddhism', 'Sikhism', 'Jainism', 'Other'];
const PHYSICAL_STATUS = ['Capable', 'Incapable'];

const IMAGE_FOLDER = '/images';

// Logo
const LOGO_FOLDER = `${IMAGE_FOLDER}/logo`;
const LOGO_IMAGE = `${IMAGE_FOLDER}/logo/lns.jpg`;

// Nav Bar
const NAV_BAR_FOLDER = `${IMAGE_FOLDER}/navbar`;
const NAV_BAR = [
  'Home',
  'Team',
  'Membership',
  'Member',
  'Complaints',
  'Donate',
  'Contact'
];

// Background
const BACKGROUND_FOLDER = `${IMAGE_FOLDER}/background`;

// Team
const TEAM_FOLDER = `${IMAGE_FOLDER}/team`;

// Gallery
const GALLERY_FOLDER = `${IMAGE_FOLDER}/gallery`;
const BANNER_FOLDER = `${IMAGE_FOLDER}/banners`;

// Section
const SECTION_FOLDER = `${IMAGE_FOLDER}/section`;

// State
const STATES = [
  'ANDHRA PRADESH',
  'ANDAMAN AND NICOBAR',
  'ARUNACHAL PRADESH',
  'ASSAM',
  'BIHAR',
  'CHANDIGARH',
  'CHASTTISGARH',
  'DADRA AND NAGAR HAVELI',
  'DAMAN AND DIU',
  'DELHI',
  'GOA',
  'GUJARAT',
  'HARYANA',
  'HIMACHAL PRADESH',
  'JAMMU AND KASHMIR',
  'JHARKHAND',
  'KARNATAKA',
  'KERALA',
  'LADAKH',
  'LAKSHADWEEP',
  'MADHYA PRADESH',
  'MAHARASHTRA',
  'MANIPUR',
  'MEGHALAYA',
  'MIZORAM',
  'NAGALAND',
  'ODISHA',
  'PUDUCHERRY',
  'PUNJAB',
  'RAJASTHAN',
  'SIKKIM',
  'TAMIL NADU',
  'TELANGANA',
  'TRIPURA',
  'UTTAR PRADESH',
  'UTTARAKHAND',
  'WEST BENGAL',
];

const RANKS = {
  CHIEF_FOUNDER: 'CHIEF FOUNDER',
  CENTRAL_CHIEF_DIRECTOR: 'PRESIDENT / CENTRAL CHIEF DIRECTOR',
  CENTRAL_DEPUTY_DIRECTOR: 'VICE PRESIDENT / CENTRAL DEPUTY DIRECTOR',
  CENTRAL_OFFICE_SUPERINTENDENT: 'TREASURER / OFFICE SUPERINTENDENT',
  CENTRAL_CHIEF_SECRETORY: 'CENTRAL CHIEF SECRETORY',
  CENTRAL_PROTECTOR: 'CENTRAL PROTECTOR',
  CENTRAL_SR_CHIEF_ADVISOR: 'CENTRAL SR. CHIEF ADVISOR',
  CENTRAL_CHIEF_ADVISOR: 'CENTRAL_CHIEF_ADVISOR',
  CENTRAL_ADVISOR: 'CENTRAL ADVISOR',
  STATE_INCHARGE: 'STATE INCHARGE',
  SUPERINTENDENT: 'SUPERINTENDENT',
  DEPUTY_SUPERINTENDENT: 'DEPUTY SUPERINTENDENT',
  CHIEF_SECRETORY_STATE: 'CHIEF SECRETORY STATE',
  STATE_SECRETORY: 'STATE SECRETORY',
  CHIEF_ACCOUNT_INCHARGE: 'CHIEF ACCOUNT INCHARGE',
  STATE_DIRECTOR_GENERAL: 'DIRECTOR GENERAL (STATE)',
  DIRECTOR: 'DIRECTOR',
}

const ROW_PER_PAGE_OPTIONS = [5, 10, 15, 20, 25, 50, 100];

const API_METHOD = {
  post: 'post',
  get: 'get',
  put: 'put',
  delete: 'delete',
}

export const ENDPOINTS = {
  update: '/update',
};

export const UPDATE_TYPE = ['news', 'link', 'notice'];

const SERVER_ROUTE = {
  team: 'team',
  member: 'member',
  contact: 'contact',
  update: 'update',
  grievance: 'grievance',
  enrollment: 'enrollment',
}

const REGEX = {
  phone: /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
}

const FILE_SIZE = {
  image: 160 * 1024,
}

const SUPPORTED_FORMATS = {
  image: [
    "image/jpg",
    "image/jpeg",
    "image/png",
  ],
}

const RESET_TYPE = {
  current: 'current',
  all: 'all',
}

const SUPPORTED_FILES = ['jpg', 'jpeg', 'png'];

const SNACKBAR_VARIANTS= ['success', 'error', 'warning', 'info'];

const TIME_SHIFT = [
  '10 AM',
  '11 AM',
  '12 PM',
  '01 PM',
  '02 PM',
  '03 PM',
  '04 PM',
  '05 PM',
  '06 PM',
  '07 PM',
  '08 PM',
  '09 PM',
  '10 PM',
];

export {
  SEX,
  MARITAL_STATUS,
  CATEGORY,
  RELIGION,
  PHYSICAL_STATUS,
  LOGO_FOLDER,
  LOGO_IMAGE,
  NAV_BAR_FOLDER,
  NAV_BAR,
  BACKGROUND_FOLDER,
  TEAM_FOLDER,
  GALLERY_FOLDER,
  BANNER_FOLDER,
  SECTION_FOLDER,
  STATES,
  RANKS,
  ROW_PER_PAGE_OPTIONS,
  API_METHOD,
  SERVER_ROUTE,
  REGEX,
  FILE_SIZE,
  SUPPORTED_FORMATS,
  RESET_TYPE,
  SUPPORTED_FILES,
  SNACKBAR_VARIANTS,
  TIME_SHIFT,
};
