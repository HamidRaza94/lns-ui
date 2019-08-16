import * as yup from 'yup';

const phoneReg = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const personalDetailSchema = yup.object().shape({
  name: yup.string().min(3).required().label('Name'),
  fatherName: yup.string().min(3).required().label('Father Name'),
  sex: yup.string().required().label('Sex'),
  maritalStatus: yup.string().required().label('Marital Status'),
  email: yup.string().email().required().label('Email Address'),
  phone: yup.string().matches(phoneReg, 'Phone Number is not valid').required().label('Phone Number'),
  dateOfBirth: yup.date().required().label('Date of Birth'),
  aadhaar: yup.number().required().label('Aadhar'),
  category: yup.string().required().label('Category'),
  religion: yup.string().required().label(),
  address: yup.string().required().label(),
  policeStation: yup.string().required().label(),
  state: yup.string().required().label(),
  pincode: yup.number().required().label(),
});

const incidentDetailSchema = yup.object().shape({
  placeOfIncident: yup.string().required().label('Place of Incident'),
  dateTimeIncident: yup.date().required().label('Date and Time of Incident'),
  summary: yup.string().required().label('Summary'),
});

export { personalDetailSchema, incidentDetailSchema };
