import { ChatIcon, SettingsIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, Heading, Highlight, IconButton, scaleFadeConfig, Text, Tooltip, useDisclosure } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ChatbotDialog from "./ChatbotDialog"
import SettingsButton from "./SettingsButton"

const HomePage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [user, setUser] = useState('')

    useEffect(() => {
        setUser(localStorage.getItem('user'))
        console.log(localStorage.getItem('user'))
    }, [])

    return (
        <>
            {user === "null" ? "signup first" :
                <>
                    <SettingsButton />
                    <Flex h="100%" w="100%" overflow="hidden" direction="row" justify="space-evenly">
                        <Flex alignSelf="left" justify="space-evenly" direction="column">
                            <Link to="/track">
                                <Flex _hover={{ transition: "all .3s ease-in-out", transform: "scale(1.02)" }} bg="twitter.600" borderRadius="md" w="20vw" h="20vh" justify="center" align="center">
                                    <Text fontSize="2xl">
                                        Track Goals
                                    </Text>
                                </Flex>
                            </Link>
                            <Link to="/update">
                                <Flex _hover={{ transition: "all .3s ease-in-out", transform: "scale(1.02)" }} borderRadius="md" bg="twitter.600" w="20vw" h="20vh" justify="center" align="center">
                                    <Text fontSize="2xl">
                                        Update Goals
                                    </Text>
                                </Flex>
                            </Link>
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
                            <Heading fontSize="2xl">
                                Hi {user},<br />
                                <Highlight
                                    query="own"
                                    styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}>
                                    make this page your own!
                                </Highlight>
                            </Heading>
                            <Tooltip label="Chatbot">
                                <IconButton onClick={onOpen} icon={<ChatIcon />} />
                            </Tooltip>
                        </Flex>
                        <ChatbotDialog onClose={onClose} isOpen={isOpen} />
                    </Flex>
                </>
            }
        </>
    )
}

export default HomePage