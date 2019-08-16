import PropTypes from 'prop-types';

export const ButtonPropTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.string),
  value: PropTypes.string.isRequired
};

export const CardPropTypes = {
  variant: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}

export const SectionPropTypes = {
  style: PropTypes.object.isRequired
};

export const SliderPropTypes = {
  altText: PropTypes.string,
  banners: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultBanner: PropTypes.string,
  duration: PropTypes.number,
  random: PropTypes.bool
};

export const PersonalDetailPropTypes = {
  name: PropTypes.string.isRequired,
  fatherName: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  maritalStatus: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  placeOfBirth: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  religion: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  physicalStatus: PropTypes.string.isRequired
};
