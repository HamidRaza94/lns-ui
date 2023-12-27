export const path = {
  admin: '/admin',
  home: '/',
  centralBoard: '/central-board',
  enrollment: {
    home: '/enrollment',
    verification: '/enrollment/verification',
    registration: '/enrollment/registration',
  },
  grievance: '/grievance',
  donate: '/donate',
  appointment: '/appointment',
}

const routes = [
  {
    label: 'Home',
    value: 'home',
    path: path.home,
    // icon: 'home',
  },
  {
    label: 'Central Board',
    value: 'centralBoard',
    path: path.centralBoard,
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
    value: 'grievance',
    path: path.grievance,
    children: [
      {
        label: 'Regd. Grievance in LNSPJI',
        value: 'grievanceLNS',
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
];

export default routes;
