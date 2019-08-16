import React from 'react';
import MUIDataTable from 'mui-datatables';

import { learnerVerification } from '../../../cms';

const { title, columns, options, data } = learnerVerification;

const LearnerVerification = () => <MUIDataTable title={title} data={data} columns={columns} options={options} />

export default LearnerVerification;
