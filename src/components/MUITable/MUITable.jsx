import React from 'react';
import PropTypes from 'prop-types';
import MUIDataTable from 'mui-datatables';

const defaultOptions = {
  search: false,
  filter: false,
  sort: false,
  filterType: 'dropdown',
  selectableRows: 'none',
  print: false,
  fixedHeader: false,
  fixedHeaderOptions: {
    xAxis: false,
    yAxis: false
  },
  serverSide: true,
};

const MUITable = ({ title, columns, data, options }) => (
  <MUIDataTable
    title={title}
    columns={columns}
    data={data}
    options={{
      ...defaultOptions,
      ...options,
    }}
  />
);

MUITable.propTypes = {
  title: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.string, PropTypes.number)).isRequired,
  data: PropTypes.array.isRequired,
  options:PropTypes.object,
};

export default MUITable;
