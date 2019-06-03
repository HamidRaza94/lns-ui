import React, { Component } from 'react';

import { Card } from '../../../../components';
import styles from './style';

class UpdatePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      news: [],
      link: [],
      notice: []
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:9000/api/update')
      .then(res => res.json())
      .then(
        result => {
          const news = [];
          const link = [];
          const notice = [];

          result.data.forEach(({ type, headline }) => {
            if (type === 'news') {
              news.push(headline);
            } else if (type === 'link') {
              link.push(headline);
            } else if (type === 'notice') {
              notice.push(headline);
            }

            this.setState({
              isLoaded: true,
              news,
              link,
              notice
            });
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  render() {
    const { error, isLoaded } = this.state;

    if (!isLoaded) {
      return (
        <div style={styles.root}>
          <Card title="News" value={['Loading...']} style={styles.news} />
          <Card
            title="Important Link"
            value={['Loading...']}
            style={styles.link}
          />
          <Card title="Notice" value={['Loading...']} style={styles.notice} />
        </div>
      );
    } else if (error) {
      return (
        <div style={styles.root}>
          <Card title="News" value={error} style={styles.news} />
          <Card title="Important Link" value={error} style={styles.link} />
          <Card title="Notice" value={error} style={styles.notice} />
        </div>
      );
    } else {
      const { news, link, notice } = this.state;

      return (
        <div style={styles.root}>
          <Card title="News" value={news} style={styles.news} />
          <Card title="Important Link" value={link} style={styles.link} />
          <Card title="Notice" value={notice} style={styles.notice} />
        </div>
      );
    }
  }
}

export default UpdatePanel;
