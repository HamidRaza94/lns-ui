import * as yup from 'yup';

import { REGEX } from '../../libs/extra/constants';

const personalDetailSchema = yup.object().shape({
  name: yup.string().min(3).required().label('Name'),
  fatherName: yup.string().min(3).required().label('Father Name'),
  sex: yup.string().required().label('Sex'),
  maritalStatus: yup.string().required().label('Marital Status'),
  dateOfBirth: yup.date().required().label('Date of Birth'),
});

const communicationDetailSchema = yup.object().shape({
  phone: yup.string().matches(REGEX.phone, 'Phone Number is not valid').required().label('Phone Number'),
  address: yup.string().required().label('Address'),
});

const documentDetailSchema = yup.object().shape({
  aadhaar: yup.number().required().label('Aadhar'),
  pan: yup.string().required().label('PAN'),
});

const appointmentSchema = personalDetailSchema
  .concat(communicationDetailSchema)
  .concat(documentDetailSchema);

export { personalDetailSchema, communicationDetailSchema, documentDetailSchema, appointmentSchema };
