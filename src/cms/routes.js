export const path = {
  home: '/',
  board: {
    home: '/board',
    central: {
      home: '/board/central/governing',
      protector: '/board/central/protector',
      advisory: '/board/central/advisory',
      section: '/board/central/section',
      staffSelection: '/board/central/staffSelection',
      disciplinary: '/board/central/disciplinary',
    },
    state: {
      home: '/board/state/governing',
      advisory: '/board/state/advisory',
      section: '/board/state/section',
      staffSelection: '/board/state/staffSelection',
      disciplinary: '/board/state/disciplinary',
    },
  },
  enrollment: {
    home: '/enrollment',
    verification: '/enrollment/verification',
    registration: '/enrollment/registration',
  },
  grievance: '/grievance',
  donate: '/donate',
  appointment: '/appointment',
  academics: {
    home: '/academics',
    learner: {
      home: '/learner',
      registration: '/academics/learner/registration',
      verification: '/academics/learner/verification',
    },
    examinationRegistration: '/academics/examination-registration',
    course: '/academics/course',
    feeStructure: '/academics/fee-structure',
    passingCertificate: '/academics/passing-certificate',
    academicCenter: '/academics/academic-center',
    payOnlineAcademicsFees: '/academics/pay-online-academics-fees',
    syllabus: '/academics/syllabus',
    admissionCell: '/academics/admission-cell',
    feesCollectionCell: '/academics/fees-collection-cell',
    examinationCell: '/academics/examination-cell',
    academicsCell: '/academics/academics-cell',
  },
  employees: '/employees',
  employments: '/employments',
  placementCell: '/placement-cell',
}

export default [
  {
    label: 'Home',
    value: 'home',
    path: path.home,
    // icon: 'home',
  },

  {
    label: 'All Boards',
    value: 'board',
    path: path.board.central.home,
    children: [
      {
        label: 'Central Governing Board',
        value: 'centralBoard',
        path: path.board.central.home,
      },
      {
        label: 'Central Protector Board',
        value: 'centralProtectorBoard',
        path: path.board.central.protector,
      },
      {
        label: 'Central Advisory Section',
        value: 'centralAdvisoryBoard',
        path: path.board.central.advisory,
      },
      {
        label: 'Central Board of Section',
        value: 'centralSectionBoard',
        path: path.board.central.section,
      },
      {
        label: 'Central Staff Selection Board',
        value: 'centralStaffSelectionBoard',
        path: path.board.central.staffSelection,
      },
      {
        label: 'Central Disciplinary Board',
        value: 'centralDisciplinaryBoard',
        path: path.board.central.disciplinary,
      },
      {
        label: 'State Board',
        value: 'stateBoard',
        path: path.board.state.home,
      },
      {
        label: 'State Advisory Board',
        value: 'stateAdvisoryBoard',
        path: path.board.state.advisory,
      },
      {
        label: 'State Board of Section',
        value: 'stateSectionBoard',
        path: path.board.state.section,
      },
      {
        label: 'State Staff Selection Board',
        value: 'stateStaffSelectionBoard',
        path: path.board.state.staffSelection,
      },
      {
        label: 'State Disciplinary Board',
        value: 'stateDisciplinaryBoard',
        path: path.board.state.disciplinary,
      },
    ],
  },

  {
    label: 'Enrollment',
    value: 'enrollment',
    path: path.enrollment.verification,
    children: [
      {
        label: 'Enrollment Verification',
        value: 'enrollmentVerification',
        path: path.enrollment.verification,
      },
      {
        label: 'Apply for Enrollment',
        value: 'enrollmentRegistration',
        path: path.enrollment.registration,
      },
    ],
  },

  {
    label: 'Public Grievance',
    value: 'publicGrievance',
    path: path.grievance,
    children: [
      {
        label: 'Regd. Grievance in LNSPJI',
        value: 'grievance',
        path: path.grievance,
      },
      {
        label: 'Regd. Grievance in CPGRAMS',
        value: 'grievanceCPGRAMS',
        external: true,
        path: 'https://pgportal.gov.in/Registration',
      },
      {
        label: 'Online FIR (All State in India)',
        value: 'fir',
        external: true,
        path: '/fir',
        show: false,
      },
      {
        label: 'Online Lost Report (All State in India)',
        value: 'lostReport',
        external: true,
        path: '/lost-report',
        show: false,
      },
      {
        label: 'Regd. in any commission',
        value: 'lostReport2',
        external: true,
        path: '/lost-report-2',
        show: false,
      },
      {
        label: 'lostReport3',
        value: 'Regd. in Chief Minister Office All India',
        path: '/lost-report-3',
        show: false,
        children: [
          {
            label: 'demo',
            value: 'demo',
            external: true,
            path: '/demo',
          },
        ]
      },
    ],
  },

  {
    label: 'Donate',
    value: 'donate',
    path: path.donate,
  },

  {
    label: 'Appointment',
    value: 'appointment',
    path: path.appointment,
  },

  {
    label: 'Academics',
    value: 'academics',
    path: path.academics.learner.registration,
    children: [
      {
        label: 'Learner Registration',
        value: 'learnerRegistration',
        path: path.academics.learner.registration,
        show: false,
      },
      {
        label: 'Learner Verification',
        value: 'learnerVerification',
        path: path.academics.learner.verification,
      },
      {
        label: 'Examination Registration',
        value: 'examinationRegistration',
        path: path.academics.examinationRegistration,
        show: false,
      },
      {
        label: 'Course',
        value: 'course',
        path: path.academics.course,
        show: false,
      },
      {
        label: 'Fee Structure',
        value: 'feeStructure',
        path: path.academics.feeStructure,
        show: false,
      },
      {
        label: 'Passing Certificate',
        value: 'passingCertificate',
        path: path.academics.passingCertificate,
        show: false,
      },
      {
        label: 'Academic Center',
        value: 'academicCenter',
        path: path.academics.academicCenter,
        show: false,
      },
      {
        label: 'Pay Online Academics Fees',
        value: 'payOnlineAcademicsFees',
        path: path.academics.payOnlineAcademicsFees,
        show: false,
      },
      {
        label: 'Syllabus',
        value: 'syllabus',
        path: path.academics.syllabus,
        show: false,
      },
      {
        label: 'Admission Cell',
        value: 'admissionCell',
        path: path.academics.admissionCell,
        show: false,
      },
      {
        label: 'Fees Collection Cell',
        value: 'feesCollectionCell',
        path: path.academics.feesCollectionCell,
        show: false,
      },
      {
        label: 'Examination Cell',
        value: 'examinationCell',
        path: path.academics.examinationCell,
        show: false,
      },
      {
        label: 'Academics Cell',
        value: 'academicsCell',
        path: path.academics.academicsCell,
        show: false,
      },
      {
        label: 'Placement Cell',
        value: 'placementCell',
        path: path.placementCell,
        show: false,
      },
    ]
  },

  {
    label: 'Employees',
    value: 'employees',
    path: path.employees,
    show: false,
  },

  {
    label: 'Employments',
    value: 'employments',
    path: path.employments,
    show: false,
  },
];
