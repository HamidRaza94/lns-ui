import React from 'react';
import MUIDataTable from 'mui-datatables';

import { stateBoardData } from '../../../cms';

const { title, columns, options, data } = stateBoardData;

const StateBoard = () => <MUIDataTable title={title} data={data} columns={columns} options={options} />

export default StateBoard;
