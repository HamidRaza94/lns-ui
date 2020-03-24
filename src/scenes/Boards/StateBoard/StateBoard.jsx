import React from 'react';

import { MUITable } from '../../../components';
import { stateBoardData } from '../../../cms';

const { title, columns, data } = stateBoardData;

const StateBoard = () => <MUITable title={title} data={data} columns={columns} />

export default StateBoard;
