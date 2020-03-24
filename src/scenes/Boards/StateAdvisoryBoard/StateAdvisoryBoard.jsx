import React from 'react';

import { MUITable } from '../../../components';
import { stateAdvisoryBoardData } from '../../../cms';

const { title, columns, data } = stateAdvisoryBoardData;

const StateAdvisoryBoard = () => <MUITable title={title} data={data} columns={columns} />

export default StateAdvisoryBoard;
