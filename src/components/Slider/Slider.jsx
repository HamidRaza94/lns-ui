import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { getRandomNumber, getNextRoundRobin } from '../../libs/utils/helpers';
import styles from './style';
import { SliderDefaultProps, SliderPropTypes } from '../../libs/utils/props'

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
          alt=""
          src={banners ? banners[index] : defaultBanner}
          className={classes.slider}
          {...rest}
        />
      </div>
    );
  }
}

Slider.defaultProps = SliderDefaultProps;
Slider.propTypes = SliderPropTypes;

export default withStyles(styles)(Slider);
