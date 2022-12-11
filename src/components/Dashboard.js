import React from "react";
import { Box, Button, Flex, Heading, SimpleGrid, Highlight, Text, HStack } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import HomeButton from "./HomeButton";
import SettingsButton from "./SettingsButton";
import PieChart from "./PieChart";
import BarChart from "./BarChart"

const Dashboard = ({domain}) => {

    const [scores, setScores] = React.useState({});

    React.useEffect(() => {

        const requestOptions = {
            method: 'GET',
        };

        async function fetchScores() {
            let response = await fetch('/score', requestOptions);
            let data = await response.json();
            setScores(data);
            console.log("scores received ", data)
        }
    
        fetchScores();
    }, [])

    const num_labels = Object.keys(scores).length
    const topic_freq = {}

    for (let [key, value] of Object.entries(scores)) {
        if(!topic_freq[value]) topic_freq[value] = 0;
        topic_freq[value] += 1
    }

    const match_percentage = (topic_freq[domain]/num_labels)*100;
    console.log("percent ", match_percentage, domain)

    return (
        <>
            <HomeButton />
            <SettingsButton />
            <Flex padding="5" w="100vw" h="100vh" direction="column" >
                <Heading as="h1">
                    Dashboard
                </Heading>
                <SimpleGrid columns={2} padding="2" spacing={20}>
                    {/* <HStack spacing="10px"> */}
                        <Box mt="10%">
                            <Card>
                                <CardHeader>
                                    <Heading fontSize="2xl">Totals URLS classified: {Object.keys(scores).length}</Heading>
                                    <Heading fontSize="2xl">
                                        {/* <Highlight
                                            query='chosen'
                                            styles={{ px: '2', py: '0', rounded: 'full', bg: 'red.100' }}
                                        > */}
                                            Your chosen Goal: {domain}
                                        {/* </Highlight>
                                        { domain} */}
                                    </Heading>
                                </CardHeader>
                                <CardBody>
                                    { (match_percentage>60) ? 
                                    // <Text>Keep it up! Good Job</Text>
                                    <Button variant='solid' colorScheme='blue'>
                                        Keep it up! Good Job
                                    </Button>
                                    : ((match_percentage>10)
                                    ? 
                                    <Button variant='solid' colorScheme='yellow'>
                                        You need to focus more
                                    </Button>
                                    : 
                                    <Button variant='solid' colorScheme='red'>
                                        You are not even trying
                                    </Button>
                                    )
                                    }
                                </CardBody>
                            </Card>
                        </Box>
                    {/* </HStack> */}
                    <Box height='30vh' style={{width:'60%', height:'60%'}}>
                        <Card>
                            <PieChart scores={scores}/>
                        </Card>
                    </Box>                    
                </SimpleGrid>
            </Flex>
        </>
    )
}

export default Dashboard;