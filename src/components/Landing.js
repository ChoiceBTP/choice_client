import {
    Box,
    Center,
    Container,
    Flex,
    HStack,
    Spacer,
    Text
} from "@chakra-ui/layout";
import React from "react";
import ex from "../img/maybe (1).svg";
import z from "../img/maybe2.svg";
import journey from "../img/journey.svg";

export const Footer = () => {
    return (
        <Box
            h="100px"
            bg="black"
            color="white"
            position="absolute"
            w="100%"
            bottom="0px"
            overflowX="hidden"
        >
            <Center h="100px">
            </Center>
        </Box>
    );
};

const Title = () => {
    return (
        <Box>
            <Center>
                <Text fontSize="8vw" fontFamily="Indie Flower">
                    SQLVERSE
                </Text>
            </Center>
        </Box>
    );
};

const Why = () => {
    return (
        <Container bg="white" maxW="container.xl">
            <Text textAlign="center" fontSize="25px">
                Goal setting and achieving on an individual and personal scale is an overlooked task and as much as <i>92 percent</i>{' '}
                of people who set New Year’s goals never actually end up achieving them. It is often the case that people set up
                elaborate goals and are not able to fully implement them
            </Text>
        </Container>
    );
};

const How = () => {
    return (
        <Center>
            <HStack>
                <Container
                    maxW="container.md"
                    bg="white"
                    alignSelf="start"
                    fontSize="20px"
                    textAlign="center"
                >
                    Featuring an intuitive and easy-to-use UI, <i>Choice</i>{" "}
                    makes tracking your progress while reaching your goals as easy as clicking a button, and
                    staying on track as easy as ...ummm... let's be honest, staying on track while studying
                    isn't easy but <i>Choice</i> makes it as easy as it gets.
                </Container>
                <img height="500px" width="500px" src={ex} alt="ex" />
            </HStack>
        </Center>
    );
};

const Journey = () => {
    return (
        <Center>
            <HStack>
                <Container
                    maxW="container.md"
                    bg="white"
                    alignSelf="start"
                    fontSize="20px"
                    textAlign="center"
                >
                    We, at <i>Choice</i>, make use of Machine Learning to help take out the "you" part of
                    the goal progress tracking and work classifying task. Leave it to us to figure out what you
                    did and when you did and what you were supposed to do that time!
                </Container>
                <img height="500px" width="500px" src={journey} alt="journey" />
            </HStack>
        </Center>
    );
};

const You = () => {
    return (
        <Center>
            <HStack>
                <img height="400px" width="400px" src={z} alt="z" />
                <Center h="400px">
                    <Container
                        textAlign="center"
                        maxW="container.md"
                        bg="white"
                        alignSelf="start"
                        fontSize="20px"
                    >
                        <i>Choice</i> takes cues from the latest research in habit tracking and goal setting
                        and helps you keep track of your study goals on autopilot. <i>Choice</i> is a reflection
                        of what you look at when you "study" and helps you realise the time spent on various
                        types of websites.
                    </Container>
                </Center>
            </HStack>
        </Center>
    );
};

const LandingPage = () => {
    return (
        <div
            style={{
                width: "100vw",
                height: "350vh",
                overflowX: "hidden"
            }}
        >
            <Flex h="100%" justify="space-evenly" flexDirection="column">
                {/* <Title /> */}
                {/* <Spacer /> */}
                <Why />
                <Spacer />
                <How />
                <Spacer />
                <You />
                <Spacer />
                <Journey />
                <Spacer />
            </Flex>
        </div>
    );
};

export default LandingPage;