import React from 'react';
import MUIDataTable from 'mui-datatables';

import { enrollmentVerification } from '../../../cms';

const { title, columns, options, data } = enrollmentVerification;

const EnrollmentVerification = () => <MUIDataTable title={title} data={data} columns={columns} options={options} />

export default EnrollmentVerification;
