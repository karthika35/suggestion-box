import {Snackbar} from "@mui/material";
import React from "react";
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function SnackBar({open, severity, handleClose, alertMessage}) {

    const vertical = 'top';
    const horizontal = 'right';

    return (
        <Snackbar open={open} color={"green"} autoHideDuration={2000} onClose={handleClose}
                  anchorOrigin={{vertical, horizontal}}>
            <Alert onClose={handleClose} severity={severity} sx={{width: '100%'}}>{alertMessage}</Alert>
        </Snackbar>
    );
}
