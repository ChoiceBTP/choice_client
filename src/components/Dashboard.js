import React from "react";
import { Box, Flex, Grid, Heading, SimpleGrid } from "@chakra-ui/react"
import HomeButton from "./HomeButton";
import SettingsButton from "./SettingsButton";
import PieChart from "./PieChart";
import BarChart from "./BarChart"

const Dashboard = () => {

    const [scores, setScores] = React.useState({});

    React.useEffect(() => {

        const requestOptions = {
            method: 'GET',
        };

        async function fetchScores() {
            let response = await fetch('/score', requestOptions);
            let data = await response.json();
            setScores(data);
        }
    
        fetchScores();
    }, [])

    return (
        <>
            <HomeButton />
            <SettingsButton />
            <Flex padding="5" w="100vw" h="100vh" direction="column" >
                <Heading as="h1">
                    Dashboard
                </Heading>
                <SimpleGrid columns={2} padding="2" spacing={20}>
                    <Box height='30vh' style={{width:'60%', height:'60%'}}><PieChart scores={scores}/></Box>
                    <Box height='30vh'><BarChart scores={scores}/></Box>
                </SimpleGrid>
            </Flex>
        </>
    )
}

export default Dashboard;