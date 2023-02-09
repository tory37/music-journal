import React, {ReactElement, FC} from "react";
import {Box, Container, Typography} from "@mui/material";
import LogList from "../components/LogList";

const Home: FC<any> = (): ReactElement => {
    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            pt: 2
        }}>
            <Container>
                <LogList 
                    logsPerPage={5} 
                    logs={[
                        {
                            type: 'WORKOUT',
                            title: 'Riffhard: Endurance 1'
                        },
                        {
                            type: 'WORKOUT',
                            title: 'Riffhard: Taps 1'
                        },
                        {
                            type: 'WORKOUT',
                            title: 'Riffhard: Slides 1'
                        },
                        {
                            type: 'WORKOUT',
                            title: 'Riffhard: Endurance 1'
                        },
                        {
                            type: 'WORKOUT',
                            title: 'Riffhard: Taps 1'
                        },
                        {
                            type: 'WORKOUT',
                            title: 'Riffhard: Slides 1'
                        },
                        {
                            type: 'WORKOUT',
                            title: 'Riffhard: Endurance 1'
                        },
                        {
                            type: 'WORKOUT',
                            title: 'Riffhard: Taps 1'
                        },
                        {
                            type: 'WORKOUT',
                            title: 'Riffhard: Slides 1'
                        },
                    ]}
                />
            </Container>
        </Box>
    );
};

export default Home;