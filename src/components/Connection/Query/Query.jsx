import React from 'react';
import PropTypes from 'prop-types';

const Query = props => {
  return <></>
}

Query.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string),
  projection: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.arrayOf(PropTypes.object),
}

Query.defaultProps = {
  conditions: [],
  projection: [],
  options: [{}],
}

export default Query;
