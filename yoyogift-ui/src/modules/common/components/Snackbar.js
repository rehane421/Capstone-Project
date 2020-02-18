import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";

export function MySnackBar(props) {
  const { message, color } = props;
  return (
    <React.Fragment>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        open={true}
      >
        <SnackbarContent message={message} style={{ backgroundColor: color }} />
      </Snackbar>
    </React.Fragment>
  );
}

export default MySnackBar;
