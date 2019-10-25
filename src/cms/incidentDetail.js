import { SUPPORTED_FILES } from '../libs/extra/constants';

export default {
  placeOfIncident: {
    label: 'Incident\'s Place',
  },

  dateTimeIncident: {
    label: 'Incident\'s Date & Time',
  },

  summary: {
    label: 'Incident\'s Detail',
  },

  attachment: {
    label: 'Attachment',
    message: `Note: Maximum File Size is 160 kb and Supported File is ${SUPPORTED_FILES.join(', ')}`,
  },
}