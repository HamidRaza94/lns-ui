import * as yup from 'yup';

const phoneReg = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const donateSchema = yup.object().shape({
  name: yup.string().min(3).required().label('Name'),
  fatherName: yup.string().min(3).required().label('Father Name'),
  sex: yup.string().required().label('Sex'),
  maritalStatus: yup.string().required().label('Marital Status'),
  dateOfBirth: yup.date().required().label('Date of Birth'),
  aadhaar: yup.number().required().label('Aadhar'),
  pan: yup.string().required().label('PAN'),
  address: yup.string().required().label('Address'),
  phone: yup.string().matches(phoneReg, 'Phone Number is not valid').required().label('Phone Number'),
  place: yup.string().min(3).required().label('Place'),
});

export { donateSchema };
