import React from "react";
import { default as MaterialButton } from "@material-ui/core/Button";

function Button(props) {
  return (
    <MaterialButton variant="contained" {...props}>
      {props.children}
    </MaterialButton>
  );
}

export { Button };
