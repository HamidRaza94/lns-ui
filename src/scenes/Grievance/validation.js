import * as yup from 'yup';

import { REGEX } from '../../libs/extra/constants';

const personalDetailSchema = yup.object().shape({
  name: yup.string().min(3).required().label('Name'),
  fatherName: yup.string().min(3).required().label('Father Name'),
  sex: yup.string().required().label('Sex'),
  maritalStatus: yup.string().required().label('Marital Status'),
  dateOfBirth: yup.date().required().label('Date of Birth'),
  religion: yup.string().required().label('Religion'),
  category: yup.string().required().label('Category'),
});

const communicationDetailSchema = yup.object().shape({
  phone: yup.string().matches(REGEX.phone, 'Phone Number is not valid').required().label('Phone Number'),
  address: yup.string().required().label('Address'),
  policeStation: yup.string().required().label('Police Station'),
  state: yup.string().required().label('State'),
  pincode: yup.number().required().label('Pincode'),
});

const incidentDetailSchema = yup.object().shape({
  placeOfIncident: yup.string().required().label('Place of Incident'),
  dateTimeIncident: yup.date().required().label('Date and Time of Incident'),
  summary: yup.string().required().label('Summary'),
});

const grievanceSchema = personalDetailSchema
  .concat(communicationDetailSchema)
  .concat(incidentDetailSchema);

export {
  personalDetailSchema,
  communicationDetailSchema,
  incidentDetailSchema,
  grievanceSchema,
}
