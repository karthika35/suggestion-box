import React from 'react';
import {Box, Container} from '@mui/material';
import UserSuggestion from './UserSuggestion';
import RandomChoice from './RandomChoice';
import logo from '../../logo.png';

export default function TamLunch() {

    const baseUrl = 'http://localhost:8081/restaurant';

    return (
        <Box>
            <Container>
                <Box>
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <h1 className="App-title heading1 ">SUGGESTION BOX</h1>
                        </header>
                    </div>
                </Box>
                <Box sx={{marginTop: 3, display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <Box className={"title"}>
                        Team Lunch Restaurant Suggestion
                    </Box>
                </Box>
                <Box sx={{marginTop: 3}}>
                    <UserSuggestion baseUrl={baseUrl}/>
                </Box>
                <div></div>
                <Box class={"containerResult"}>
                    <RandomChoice baseUrl={baseUrl}/>
                </Box>
                <footer className={"footer"}>
                    <Box sx={{ marginTop: 3, marginBottom: 3, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Box>
                            copyright @ iLabs, All Rights Reserved
                        </Box>
                        <Box>
                            @ Privacy Policy | Terms of Service | Help Center
                        </Box>
                    </Box>
                </footer>
            </Container>

        </Box>
    );
}