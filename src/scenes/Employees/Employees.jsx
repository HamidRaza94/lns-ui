import React from 'react';
import MUIDataTable from 'mui-datatables';

import { employees } from '../../cms';

const { title, columns, options, data } = employees;

const Employees = () => <MUIDataTable title={title} data={data} columns={columns} options={options} />

export default Employees;
