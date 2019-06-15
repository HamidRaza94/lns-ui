import PropTypes from 'prop-types'

export const ButtonPropTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.string),
  value: PropTypes.string.isRequired,
}

export const SectionPropTypes = {
  style: PropTypes.object.isRequired,
}

export const SliderPropTypes = {
  altText: PropTypes.string,
  banners: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultBanner: PropTypes.string,
  duration: PropTypes.number,
  random: PropTypes.bool,
}
