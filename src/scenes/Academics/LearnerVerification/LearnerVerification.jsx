import React from 'react';

import { MUITable } from '../../../components';
import { learnerVerification } from '../../../cms';

const { title, columns, data } = learnerVerification;

const LearnerVerification = () => <MUITable title={title} data={data} columns={columns} />

export default LearnerVerification;
