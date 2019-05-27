import React from 'react';

import { Card } from '../../../../components';
import styles from './style';

const news = [
  'Hey this is news',
  'Hey this is news',
  'Hey this is news',
  'Hey this is news'
];

const link = [
  'Hey this is link',
  'Hey this is link',
  'Hey this is link',
  'Hey this is link'
];

const notice = [
  'Hey this is notice',
  'Hey this is notice',
  'Hey this is notice',
  'Hey this is notice'
];

const UpdatePanel = () => (
  <div style={styles.root}>
    <Card title="News" value={news} style={styles.news} />
    <Card title="Important Link" value={link} style={styles.link} />
    <Card title="Notice" value={notice} style={styles.notice} />
  </div>
);

export default UpdatePanel;
