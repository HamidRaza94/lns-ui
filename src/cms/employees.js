import { ROW_PER_PAGE_OPTIONS } from './constants';

const learnerVerification = {
  title: 'Employees List',
  columns: ['REGN NO', 'NAME', 'FATHER/HUSBAND NAME', 'DATE OF BIRTH', 'SUBJECT', 'ADDRESS'],
  options: {
    filterType: 'dropdown',
    selectableRows: 'none',
    responsive: 'scroll',
    print: false,
    rowsPerPage: ROW_PER_PAGE_OPTIONS[0],
    rowsPerPageOptions: ROW_PER_PAGE_OPTIONS,
    fixedHeader: false,
  },
  data: [
    ['No Data'],
  ],
}

export default learnerVerification;
