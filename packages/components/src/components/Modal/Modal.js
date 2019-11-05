import React from "react";
import PropTypes from "prop-types";
import { Dialog, DialogTitle, DialogContent, Toolbar, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ModalTrigger from "./ModalTrigger";

function SimpleDialog(props) {
  const { onClose, open, title, icon, children } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      fullWidth={true}
      maxWidth="sm"
    >
      <Toolbar disableGutters={true} variant="dense">
        <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
        {icon ? (
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        ) : (
          ""
        )}
      </Toolbar>

      <DialogContent id="simple-dialog-content">{children}</DialogContent>
    </Dialog>
  );
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

export default function SimpleDialogDemo(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ModalTrigger onClick={handleClickOpen} {...props}></ModalTrigger>
      <SimpleDialog open={open} onClose={handleClose} {...props} />
    </React.Fragment>
  );
}
