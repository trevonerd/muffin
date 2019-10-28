'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var MaterialButton = _interopDefault(require('@material-ui/core/Button'));
var PropTypes = _interopDefault(require('prop-types'));
var core = require('@material-ui/core');
var CloseIcon = _interopDefault(require('@material-ui/icons/Close'));
var styles = require('@material-ui/core/styles');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function Button(props) {
  return React.createElement(MaterialButton, _extends({
    variant: "contained"
  }, props), props.children);
}

ModalTrigger.propTypes = {
  type: PropTypes.string,
  linkText: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
};
function ModalTrigger(props) {
  var type = props.type,
      onClick = props.onClick,
      linkText = props.linkText;
  return React.createElement("span", {
    onClick: onClick
  }, linkText);
}

var dialogStyle = styles.makeStyles({
  paperWidthSm: {
    maxWidth: '450px',
    margin: '0 auto',
    boxShadow: '3px 3px #ccc',
    border: '1px solid #ccc'
  }
});
var dialogToolbarStyle = styles.makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

function SimpleDialog(props) {
  var onClose = props.onClose,
      open = props.open,
      title = props.title,
      icon = props.icon,
      children = props.children;

  var handleClose = function handleClose() {
    onClose();
  };

  return React.createElement(core.Dialog, {
    onClose: handleClose,
    "aria-labelledby": "simple-dialog-title",
    open: open,
    fullWidth: true,
    maxWidth: "sm",
    classes: dialogStyle()
  }, React.createElement(core.Toolbar, {
    disableGutters: true,
    classes: dialogToolbarStyle(),
    variant: "dense"
  }, React.createElement(core.DialogTitle, {
    id: "simple-dialog-title"
  }, title), icon ? React.createElement(core.IconButton, {
    edge: "start",
    color: "inherit",
    onClick: handleClose,
    "aria-label": "close"
  }, React.createElement(CloseIcon, null)) : ''), React.createElement(core.DialogContent, {
    id: "simple-dialog-content"
  }, children));
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
  title: PropTypes.string,
  icon: PropTypes.bool,
  children: PropTypes.node,
  trigger: PropTypes.node
};
SimpleDialog.defaultProps = {
  icon: true
};
SimpleDialogDemo.propTypes = {
  open: PropTypes.bool,
  trigger: PropTypes.node,
  className: PropTypes.string
};
function SimpleDialogDemo(props) {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleClickOpen = function handleClickOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  return React.createElement(React.Fragment, null, React.createElement(ModalTrigger, _extends({
    onClick: handleClickOpen
  }, props)), React.createElement(SimpleDialog, _extends({
    open: open,
    onClose: handleClose
  }, props)));
}

exports.Button = Button;
exports.Modal = SimpleDialogDemo;
exports.ModalTrigger = ModalTrigger;
