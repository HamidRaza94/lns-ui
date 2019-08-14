import React, { PureComponent } from 'react';

import { Card } from '../../../../components';
import styles from './style';
import { connection } from '../../../../lib/server';

class UpdatePanel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      news: [],
      link: [],
      notice: [],
    };
  }

  componentWillMount = () => {
    connection('get', 'update')
    .then(res => {
      const news = [];
      const link = [];
      const notice = [];

      res.data.data.forEach(({ type, headline }) => {
        if (type === 'news') {
          news.push(headline);
        } else if (type === 'link') {
          link.push(headline);
        } else if (type === 'notice') {
          notice.push(headline);
        }
      });

      return { news, link, notice }
    })
    .then(({ news, link, notice }) => {
      this.setState({
        isLoaded: true,
        news,
        link,
        notice,
      });
    })
    .catch(error => {
      console.log('hamid is here', error);
      this.setState({
        isLoaded: true,
        error
      });
    });
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
    } else if (error) {
      newsData.value = error;
      linkData.value = error;
      noticeData.value = error;
    } else {
      const { news, link, notice } = this.state;
      newsData.value = news;
      linkData.value = link;
      noticeData.value = notice;
    }

    return (
      <div style={styles.root}>
        <Card variant="update" data={linkData} />
        <Card variant="update" data={noticeData} />
        <Card variant="update" data={newsData} />
      </div>
    );
  }
}

export default UpdatePanel;
