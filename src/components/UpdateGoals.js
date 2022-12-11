import React from "react";
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import HomeButton from "./HomeButton";
import SettingsButton from "./SettingsButton";

const UpdateGoals = ({domain, handleChange}) => {

    return (
        <>
            <HomeButton />
            <SettingsButton />
            <Flex padding="5" w="100vw" h="100vh" direction="column" >
                <Heading as="h1">
                    Update Goals
                </Heading>
                <Flex padding="5" w="100%" direction="row" alignSelf="center" justifyContent="space-evenly">
                    {/* <Flex w="50%" bg="gray" justify="center" align="center" > */}
                    {/* <Card bg="twitter.700" w="50%">
                            <CardHeader>
                                <Heading size='md'>{domain}</Heading>
                            </CardHeader>`
                        </Card> */}
                    {/* </Flex> */}
                    <SimpleGrid padding="5" spacing={20} columns={2}>
                        <Card align="center" bg={domain == "Machine Learning" ? "green" : "twitter.700"} onClick={() => handleChange("Machine Learning")} size="lg">
                            <CardHeader>
                                <Heading size='md' color="white">Machine Learning</Heading>
                            </CardHeader>
                        </Card>
                        <Card align="center" bg={domain == "Web Development" ? "green" : "twitter.700"} onClick={() => handleChange("Web Development")} size="lg">
                            <CardHeader>
                                <Heading size='md' color="white">Wev Development</Heading>
                            </CardHeader>
                        </Card>
                        <Card align="center" bg={domain == "Data Structures" ? "green" : "twitter.700"} onClick={() => handleChange("Data Structures")} size="lg">
                            <CardHeader>
                                <Heading size='md' color="white">Data Structures</Heading>
                            </CardHeader>
                        </Card>
                        <Card align="center" bg={domain == "Management" ? "green" : "twitter.700"} onClick={() => handleChange("Management")} size="lg">
                            <CardHeader>
                                <Heading size='md' color="white">Management</Heading>
                            </CardHeader>
                        </Card>

                        {/* <Box h="15vh" w="15vw" bg="twitter.700">Web Development</Box>
                        <Box h="15vh" w="15vw" bg="twitter.700">Social Science</Box>
                        <Box h="15vh" w="15vw" bg="twitter.700">Data Structure and Algorithms</Box> */}
                    </SimpleGrid>

                </Flex>
            </Flex>
        </>
    )
}

export default UpdateGoals;