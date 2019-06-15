export const draggableDefaultProps = {
    connectDragSource:() => {},
    dataSourceName:"test",
    file: {},
    classes:{},
}
export const droppingDefaultProps = {
    connectDropTarget:() => {},
    canDrop:false,
    isOver:false,
    getFiles: () => {},
    openSnackBar: () => {},
}
export const expansionPanelWCDefaultProps = {
    onChange: () => {},
    title: 'test',
    icon: {},
    children:undefined,
}
export const calenderWCDefaultProps = {
  value:"date",
  onChange:() => {},
  label:"label",
  keyboard:true,
  margin:'normal',
  clearable:true,
  format:"MM/dd/yyyy",
  placeholder:"MM/DD/YYYY",
  disableOpenOnEnter:true,
  minDate:new Date(),
  minDateMessage:"Date should be of current or future",
}
export const buttonWCDefaultProps = {
  title:'button',
  onClick: () => {},
  variant:'contained',
  color:'default',
  href:'#',
  icon:undefined,
}
export const classesDefaultProps = {
  dateRangeSelector: [{}],
  classes: {},
}
export const alertWCDefaultProps = {
  title:"Alert",
  fullScreen:"fullscreen",
  color:"primary",
  open:() => {},
  onClose:() => {},
  alertText:"Alert Message",
}

export const loaderDefaultProp = {
  classes: {},
  title: '',
}

export const JoinFieldSelectionDefaultProp = {
  openSnackBar: () => {},
  first: {},
  second: {},
  join: '',
}

export const childrenDefaultProps = {
  children: null,
}

export const LeftPanelDefaultProps = {
  dateRangeSelector: [{}],
}
