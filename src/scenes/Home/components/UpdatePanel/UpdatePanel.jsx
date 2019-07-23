import React, { PureComponent } from 'react';

import { Card } from '../../../../components';
import styles from './style';
import { config } from '../../../../config';

class UpdatePanel extends PureComponent {
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
        result => {
          const news = [];
          const link = [];
          const notice = [];

          // result.data.forEach(({ type, headline }) => {
          //   if (type === 'news') {
          //     news.push(headline);
          //   } else if (type === 'link') {
          //     link.push(headline);
          //   } else if (type === 'notice') {
          //     notice.push(headline);
          //   }

          //   this.setState({
          //     isLoaded: true,
          //     news,
          //     link,
          //     notice
          //   });
          // });
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
    const newsData = { title: 'News' }
    const linkData = { title: 'Important Link' }
    const noticeData = { title: 'Notice' }

    if (!isLoaded) {
      newsData.isLoading = true;
      linkData.isLoading = true;
      noticeData.isLoading = true;

      return (
        <div style={styles.root}>
          <Card variant="update" data={linkData} />
          <Card variant="update" data={noticeData} />
          <Card variant="update" data={newsData} />
        </div>
      );
    } else if (error) {
      newsData.value = error;
      linkData.value = error;
      noticeData.value = error;

      return (
        <div style={styles.root}>
          <Card variant="update" data={linkData} />
          <Card variant="update" data={noticeData} />
          <Card variant="update" data={newsData} />
        </div>
      );
    } else {
      const { news, link, notice } = this.state;
      newsData.value = news;
      linkData.value = link;
      noticeData.value = notice;

      return (
        <div style={styles.root}>
          <Card variant="update" data={linkData} />
          <Card variant="update" data={noticeData} />
          <Card variant="update" data={newsData} />
        </div>
      );
    }
  }
}

export default UpdatePanel;
