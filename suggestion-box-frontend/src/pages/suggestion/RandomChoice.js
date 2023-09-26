import React, { useState} from 'react';
import Paper from '@mui/material/Paper';
import {Button, Card, Grid} from "@mui/material";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import SnackBar from "./SnackBar";

export default function RandomChoice({baseUrl}) {

    const [randomRestaurant, setRandomRestaurant] = useState("");
    const [openSnack, setOpenSnack] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [alertMessage,setAlertMessage ] = React.useState("");
    const [severity, setSeverity] = React.useState("");


    const submitRequest = () => {
        axios.get(baseUrl + '/get/random/name', {
            "mode": "cors"
        }).then(response => {
            console.log(response)
            if (response.status === 200) {
                setOpenDialog(true)
                setSeverity("success")
                setRandomRestaurant(response.data.name)
            } else {
                setSeverity("error")
                setOpenSnack(true)
                setAlertMessage("Error while getting restaurantName: " + randomRestaurant );
            }
        }).catch(errorRes => {
            setSeverity("error")
            setOpenSnack(true);
            setAlertMessage("Error while getting restaurantName: " + randomRestaurant);
        });

        setRandomRestaurant("");

    }

    const handleClose = () => {
        setOpenDialog(false);

    }
    const handleCloseSnack = () => {
        setOpenSnack(false);
    }

    return (
        <Paper sx={{width: '100%', overflow: 'hidden'}}>
            <Card class="view-panel" variant="outlined">
                <Grid item xs={4} sm={3} sx={{paddingLeft: 50, paddingTop:7}}>
                    <Button  size={"large"} variant="contained" color={"success"} sx={{height: "40px"}}   onClick={submitRequest}>Press For Final Result</Button>
                </Grid>
            </Card>
            <SnackBar open={openSnack} severity={severity} handleClose={handleCloseSnack} alertMessage={alertMessage}>
            </SnackBar>

            <Dialog open={openDialog} fullWidth maxWidth="sm">
                <DialogTitle class="content" id="alert-dialog-title">{"Restaurant "+randomRestaurant}</DialogTitle>
                <DialogActions>
                    <Button variant="contained" size={"small"}  onClick={handleClose} color="error">close</Button>
                </DialogActions>
            </Dialog>
        </Paper>

    );
}
