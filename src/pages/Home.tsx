import React, {ReactElement, FC} from "react";
import {Box, Container, Typography} from "@mui/material";
import LogList from "../components/LogList";

import mockUserLogs from '../mock/userLogs.json';
import mockUserTags from '../mock/userTags.json';

const Home: FC<any> = (): ReactElement => {
    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            pt: 2,
            height: '100%'
        }}>
            <Container>
                <LogList 
                    logsPerPage={5} 
                    logs={mockUserLogs}
                    allTags={mockUserTags}
                />
            </Container>
        </Box>
    );
};

export default Home;