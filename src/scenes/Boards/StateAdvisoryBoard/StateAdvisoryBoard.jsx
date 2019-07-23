import React from 'react';
import MUIDataTable from 'mui-datatables';

import { stateAdvisoryBoardData } from '../../../cms';

const { title, columns, options, data } = stateAdvisoryBoardData;

const StateAdvisoryBoard = () => <MUIDataTable title={title} data={data} columns={columns} options={options} />

export default StateAdvisoryBoard;
