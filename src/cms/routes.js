const BOARD = '/board';
const CENTRAL_BOARD = `${BOARD}/central`;
const STATE_BOARD = `${BOARD}/state`;

export default {
  path: {
    home: '/',
    board: {
      home: BOARD,
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
    volunteers: '/volunteers',
    volunteerShip: '/volunteer_ship',
    complaints: '/complaints',
    donate: '/donate',
    appointment: '/appointment',
    academics: {
      home: '/academics',
      studentRegistration: '/student_registration',
      examinationRegistration: '/examination_registration',
      course: '/course',
      feeStructure: '/fee_structure',
      studentList: '/student_list',
      passingCertificate: '/passing_certificate',
      academicCenter: '/academic_center',
      payOnlineAcademicsFees: '/pay_online_academics_fees',
      syllabus: '/syllabus',
      studentAttendance: '/student_attendance',
      admissionCell: '/admission_cell',
      feesCollectionCell: '/fees_collection_cell'
    },
    employees: '/employees',
    employments: '/employments'
  }
};
