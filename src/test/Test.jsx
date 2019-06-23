import React from 'react';

import { SECTION_FOLDER } from '../cms/constants';
import styles from './style.css';

const Test = () => (
  <div className="card">
    <img className="image" alt="ii" src={`${SECTION_FOLDER}/journalism.jpg`}/>
    <div className="text">JOURNALISM</div>
  </div>
)

export default Test;
