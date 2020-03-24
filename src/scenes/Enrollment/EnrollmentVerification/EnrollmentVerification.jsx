import React, { useState, useEffect } from 'react';

import { MUITable } from '../../../components';
import { formattedDataToTable } from '../../../libs/utils/helpers';
import { ROW_PER_PAGE_OPTIONS, connection } from '../../../libs';
import { enrollmentVerification } from '../../../cms';

const EnrollmentVerification = () => {
  const [enrollmentList, setEnrollmentList] = useState([]);
  const [totalEnrollment, setTotalEnrollment] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const projection = 'enrollmentId,name,fatherHusbandName,address';
        const query = `projection=${projection}&limit=${rowsPerPage}&skip=${rowsPerPage * page}`;

        const { data: { data: { count, enrollments }} } = await connection('get', `enrollment?${query}`);

        if (!totalEnrollment) {
          setTotalEnrollment(count);
        }

        setEnrollmentList(formattedDataToTable(enrollments));
      } catch (err) {
        console.error(err);
      }
    }

    fetchEnrollments();
  }, [rowsPerPage, page, totalEnrollment]);

  const onChangeRowsPerPage = (rows) => {
    setRowsPerPage(rows);
  };

  const onChangePage = (pageNo) => {
    setPage(pageNo);
  }

  const getOptions = () => ({
    page,
    rowsPerPage,
    rowsPerPageOptions: ROW_PER_PAGE_OPTIONS,
    count: totalEnrollment,
    onChangeRowsPerPage,
    onChangePage,
  });


  return (
    <MUITable
      title={enrollmentVerification.title}
      columns={enrollmentVerification.columns}
      data={enrollmentList}
      options={getOptions()}
    />
  );
}

export default EnrollmentVerification;
