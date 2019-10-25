import React from 'react';
import MUIDataTable from 'mui-datatables';

import { enrollmentVerification } from '../../../cms';
import { formatedDataToTable } from '../../../libs/utils/helpers';

const { title, columns, options, data } = enrollmentVerification;

const EnrollmentVerification = () => (
  <MUIDataTable
    title={title}
    data={formatedDataToTable(data)}
    columns={columns}
    options={options}
  />
)

export default EnrollmentVerification;
