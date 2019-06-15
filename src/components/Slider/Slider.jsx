import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { getRandomNumber, getNextRoundRobin } from '../../lib/utils/helpers';
import styles from './style';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 1
    };
  }

  componentDidMount() {
    const { banners, duration, random } = this.props;

    if (banners) {
      this.interval = setInterval(() => {
        const { index } = this.state;
        if (random) {
          this.setState({
            index: getRandomNumber(banners.length)
          });
        }

        this.setState({
          index: getNextRoundRobin(banners.length, index)
        });
      }, duration);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {
      classes,
      altText,
      banners,
      defaultBanner,
      ...rest
    } = this.props;

    const { index } = this.state;

    return (
      <div className={classes.root}>
        <img
          alt={altText}
          src={banners ? banners[index] : defaultBanner}
          className={classes.slider}
          {...rest}
        />
      </div>
    );
  }
}

Slider.defaultProps = {
  altText: 'Lok Niyay Sansthan Gallery',
  defaultBanner: '',
  duration: 3000,
  random: false
};

Slider.propTypes = {
  altText: PropTypes.string,
  banners: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultBanner: PropTypes.string,
  duration: PropTypes.number,
  random: PropTypes.bool
};

export default withStyles(styles)(Slider);
