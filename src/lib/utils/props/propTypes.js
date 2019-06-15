import PropTypes from 'prop-types'

export const draggablePropType = {
    connectDragSource:PropTypes.func,
    file: PropTypes.object,
    dataSourceName:PropTypes.string,
    classes:PropTypes.object,
}
export const droppingPropType = {
    connectDropTarget:PropTypes.func,
    canDrop:PropTypes.bool,
    isOver:PropTypes.bool,
    getFiles: PropTypes.func,
    openSnackBar: PropTypes.func,
}
export const expansionPanelWCPropType = {
    onChange: PropTypes.func,
    title: PropTypes.string,
    icon: PropTypes.object,
    children:PropTypes.element,
}
export const calenderWCPropType = {
  value:PropTypes.string,
  onChange:PropTypes.func,
  label:PropTypes.string,
  keyboard:PropTypes.bool,
  margin:PropTypes.string,
  clearable:PropTypes.bool,
  format:PropTypes.string,
  placeholder:PropTypes.string,
  disableOpenOnEnter:PropTypes.bool,
  minDate:PropTypes.string,
  minDateMessage:PropTypes.string,
}
export const buttonWCPropType = {
  onClick: PropTypes.func,
  title:PropTypes.string,
  variant:PropTypes.string,
  color:PropTypes.string,
  href:PropTypes.string,
  icon:PropTypes.element,
}
export const classesPropType = {
  dateRangeSelector: PropTypes.arrayOf(PropTypes.object),
  classes: PropTypes.object,
}
export const alertWCPropType = {
  title:PropTypes.string,
  fullScreen:PropTypes.string,
  color:PropTypes.string,
  open:PropTypes.func,
  onClose:PropTypes.func,
  alertText:PropTypes.string,
}

export const loaderPropType = {
  classes: PropTypes.object,
  title: PropTypes.string,
}

export const JoinFieldSelectionPropTypes = {
  openSnackBar: PropTypes.func,
  first: PropTypes.object,
  second: PropTypes.object,
  join: PropTypes.string,
}

export const GetAllFilesPropTypes = {
  name: PropTypes.string.isRequired,
  dataSourceID: PropTypes.number.isRequired,
  fields: PropTypes.arrayOf(PropTypes.object),
  file: PropTypes.object.isRequired,
}

export const childrenPropTypes = {
  children : PropTypes.element,
}

export const LeftPanelPropTypes = {
  dateRangeSelector: PropTypes.arrayOf(PropTypes.object),
}

export const getListPropTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export const draftListPropTypes = {
  getConfig: PropTypes.func.isRequired,
}
