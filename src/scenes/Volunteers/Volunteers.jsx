import React from 'react';
import MUIDataTable from 'mui-datatables';

import { volunteers } from '../../cms';

const { title, columns, options, data } = volunteers;

const Volunteers = () => <MUIDataTable title={title} data={data} columns={columns} options={options} />

export default Volunteers;
