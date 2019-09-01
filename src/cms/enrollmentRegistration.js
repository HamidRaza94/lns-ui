export default {
  title: 'Enrollment Registration Form',
  steps: [
    'Personal Details',
    'Communication Detail',
    'Document Detail',
    'Payment',
  ],
  response: {
    success: {
      variant: 'success',
      snackBarMsg: 'Enrollment Saved Successfully',
    },
    error: {
      variant: 'error',
      snackBarMsg: 'Enrollment Not Saved',
    },
  },
}
