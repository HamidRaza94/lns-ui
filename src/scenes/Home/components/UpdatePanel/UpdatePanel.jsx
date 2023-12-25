import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import { Card } from '../../../../components';
import styles from './style';
import request, { API_METHOD, ENDPOINTS } from '../../../../libs/request';
import { UPDATE_TYPE } from '../../../../libs/extra/constants';

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

  componentDidMount = () => {
    request(API_METHOD.get, ENDPOINTS.update)
      .then((res) => {
        const [NEWS, LINK, NOTICE] = UPDATE_TYPE

        const news = res.filter(({ type }) => type === NEWS).map(({ headline }) => headline);
        const link = res.filter(({ type }) => type === LINK).map(({ headline }) => headline);
        const notice = res.filter(({ type }) => type === NOTICE).map(({ headline }) => headline);

        return { news, link, notice }
      })
      .then(({ news, link, notice }) => this.setState({ isLoaded: true, news, link, notice }))
      .catch(({ message }) => this.setState({ isLoaded: true, error: [message] }));
  };

  render() {
    const { classes } = this.props;
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
      <div className={classes.root}>
        <Card variant="update" data={linkData} />
        <Card variant="update" data={noticeData} />
        <Card variant="update" data={newsData} />
      </div>
    );
  }
}

UpdatePanel.propTypes = {
  classes: PropTypes.object.isRequired,
}

UpdatePanel.defaultProps = {
  classes: {},
}

export default withStyles(styles)(UpdatePanel);
