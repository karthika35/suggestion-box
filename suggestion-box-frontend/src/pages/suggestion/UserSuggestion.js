import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import {Button, Grid, TextField} from '@mui/material';
import axios from 'axios';
import SnackBar from "./SnackBar";

export default function UserSuggestion({baseUrl}) {

    const [restaurantName, setRestaurant] = useState("");
    const [open, setOpen] = React.useState(false);
    const [severity, setSeverity] = React.useState("");
    const [alertMessage, setAlertMessage] = React.useState("");

    const handleInputChange = (event) => {
        setRestaurant(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const submitRequest = () => {
        if (restaurantName !== '') {
            console.log(restaurantName);
            axios.post(baseUrl + '/insert/name', {"name": restaurantName}, {
                "mode": "cors"
            }).then(response => {
                setRestaurant("");
                console.log(response)
                if (response.status === 200) {
                    setOpen(true)
                    setSeverity("success")
                    setAlertMessage("Successfully saved restaurantName: " + restaurantName);
                } else {
                    setOpen(true)
                    setSeverity("error")
                    setAlertMessage("Error while saving restaurantName: " + restaurantName);
                }
            }).catch(errorRes => {
                setSeverity("error")
                setOpen(true);
                setAlertMessage("Error while saving restaurantName: " + restaurantName );
            });
        } else {
            setSeverity("error")
            setOpen(true);
            setAlertMessage("restaurantName is empty");
        }
        setRestaurant("");

    }

    return (<Paper sx={{width: '100%', padding: "16px 24px"}}>
        <Grid container>
            <Grid item xs={8} sm={9}>
                <TextField value={restaurantName} fullWidth placeholder="Give Your Restaurant Suggetsion Here....."
                           id="fullWidth" size="smaurantName is empty.all" InputLabelProps={{shrink: false}}
                           onChange={handleInputChange}/>
            </Grid>
            <Grid item xs={4} sm={3} sx={{paddingLeft: 2}}>
                <Button variant="contained" fullWidth sx={{height: "40px"}} onClick={submitRequest}>Submit</Button>
            </Grid>
        </Grid>

        <SnackBar open={open} severity={severity} handleClose={handleClose} alertMessage={alertMessage}>
        </SnackBar>
    </Paper>);
}
