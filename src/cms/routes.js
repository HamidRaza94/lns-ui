const BOARD = '/board';
const CENTRAL_BOARD = `${BOARD}/central`;
const STATE_BOARD = `${BOARD}/state`;

const ACADEMICS = '/academics';

export default {
  path: {
    home: '/',
    board: {
      home: CENTRAL_BOARD,
      central: {
        home: CENTRAL_BOARD,
        protector: `${CENTRAL_BOARD}/protector`,
        advisory: `${CENTRAL_BOARD}/advisory`,
        section: `${CENTRAL_BOARD}/section`,
        staffSelection: `${CENTRAL_BOARD}/staff_selection`,
        disciplinary: `${CENTRAL_BOARD}/disciplinary`
      },
      state: {
        home: STATE_BOARD,
        advisory: `${STATE_BOARD}/advisory`,
        section: `${STATE_BOARD}/section`,
        staffSelection: `${STATE_BOARD}/staff_selection`,
        disciplinary: `${STATE_BOARD}/disciplinary`
      }
    },
    enrolled: {
      home: '/enrolled',
      enrollmentVerification: '/volunteers',
      applyEnrollment: '/volunteer_ship',
    },
    volunteers: '/volunteers',
    volunteerShip: '/volunteer_ship',
    grievance: {
      home: '/grievance',
      cpgrams: 'https://pgportal.gov.in/Registration',
      fir: '/online_fir',
      lostReport: '/lost_report',
    },
    donate: '/donate',
    appointment: '/appointment',
    academics: {
      home: ACADEMICS,
      studentRegistration: `${ACADEMICS}/student_registration`,
      examinationRegistration: `${ACADEMICS}/examination_registration`,
      course: `${ACADEMICS}/course`,
      feeStructure: `${ACADEMICS}/fee_structure`,
      studentList: `${ACADEMICS}/student_list`,
      passingCertificate: `${ACADEMICS}/passing_certificate`,
      academicCenter: `${ACADEMICS}/academic_center`,
      payOnlineAcademicsFees: `${ACADEMICS}/pay_online_academics_fees`,
      syllabus: `${ACADEMICS}/syllabus`,
      admissionCell: `${ACADEMICS}/admission_cell`,
      feesCollectionCell: `${ACADEMICS}/fees_collection_cell`,
      examinationCell: `${ACADEMICS}/examination_cell`,
      academicsCell: `${ACADEMICS}/academics_cell`,
      placementCell: `${ACADEMICS}/placement_cell`,
    },
    employees: '/employees',
    employments: '/employments'
  }
};
