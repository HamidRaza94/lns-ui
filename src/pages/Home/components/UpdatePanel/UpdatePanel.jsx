import React, { Component } from 'react';

import { Card } from '../../../../components';
import styles from './style';
import { config } from '../../../../config';

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
    const { SERVER_URL } = config;

    fetch(`${SERVER_URL}/update`)
      .then(res => res.json())
      .then(
        (result) => {
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
          <Card
            variant="update"
            title="News"
            isLoading
            style={styles.news}
          />
          <Card
            variant="update"
            title="Important Link"
            isLoading
            style={styles.link}
          />
          <Card
            variant="update"
            title="Notice"
            isLoading
            style={styles.notice}
          />
        </div>
      );
    } else if (error) {
      return (
        <div style={styles.root}>
          <Card
            variant="update"
            title="News"
            value={error}
            style={styles.news}
          />
          <Card
            variant="update"
            title="Important Link"
            value={error}
            style={styles.link}
          />
          <Card
            variant="update"
            title="Notice"
            value={error}
            style={styles.notice}
          />
        </div>
      );
    } else {
      const { news, link, notice } = this.state;

      return (
        <div style={styles.root}>
          <Card
            variant="update"
            title="News"
            value={news}
            style={styles.news}
          />
          <Card
            variant="update"
            title="Important Link"
            value={link}
            style={styles.link}
          />
          <Card
            variant="update"
            title="Notice"
            value={notice}
            style={styles.notice}
          />
        </div>
      );
    }
  }
}

export default UpdatePanel;
