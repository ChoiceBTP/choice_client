import { Box, Button, Flex, Heading, Highlight, Text, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import ChatbotDialog from "./components/ChatbotDialog";

const App = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box h="100vh" w="100vw" overflow="hidden">
            <Flex h="100%" w="100%" overflow="hidden" direction="row" justify="space-evenly">
                <Flex alignSelf="left" justify="space-evenly" direction="column">
                    <Box bg="blue" w="20vw" h="20vh">
                        <Text>
                            Track Goals
                        </Text>
                    </Box>
                    <Box bg="blue" w="20vw" h="20vh">
                        Update Goals
                    </Box>
                </Flex>
                <Flex direction="column" justify="space-evenly">
                    <Heading lineHeight='tall'>
                        <Highlight
                            query='choice'
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                        >
                            Make that choice
                        </Highlight>
                    </Heading>
                    <Heading as="h2">
                        Hi user
                    </Heading>
                    <Button onClick={onOpen}>Open Modal</Button>
                </Flex>
            </Flex>
            <ChatbotDialog onClose={onClose} isOpen={isOpen} />
        </Box>
    )
};

export default App