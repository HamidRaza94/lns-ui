import React from 'react';

import { MUITable } from '../../components';
import { employees } from '../../cms';

const { title, columns, data } = employees;

const Employees = () => <MUITable title={title} data={data} columns={columns} />

export default Employees;
