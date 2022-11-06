import { ChatIcon, SettingsIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, Heading, Highlight, IconButton, scaleFadeConfig, Text, Tooltip, useDisclosure } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import ChatbotDialog from "./ChatbotDialog"
import SettingsButton from "./SettingsButton"
import InfoReq from "./InfoReq"

const HomePage = () => {
    // const { isOpen: isFirstOpen , onOpen: onFirstOpen, onClose: onFirstClose } = useDisclosure()
    const { isOpen: isSecondOpen , onOpen: onSecondOpen, onClose: onSecondClose } = useDisclosure()

    return (
        <>
            <SettingsButton />
            <Flex h="100%" w="100%" overflow="hidden" direction="row" justify="space-evenly">
                <Flex alignSelf="left" justify="space-evenly" direction="column">
                    <Link to="/track">
                        <Flex _hover={{ transition: "all .3s ease-in-out", transform: "scale(1.1)" }} bg="twitter.600" borderRadius="md" w="20vw" h="20vh" justify="center" align="center">
                            <Text>
                                Track Goals
                            </Text>                            
                            {/* <InfoReq onClose={onFirstClose} isOpen={isFirstOpen} /> */}
                        </Flex>
                    </Link>
                    <Link to="/update">
                        <Flex _hover={{ transition: "all .3s ease-in-out", transform: "scale(1.1)" }} borderRadius="md" bg="twitter.600" w="20vw" h="20vh" justify="center" align="center">
                            <Text>
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
                    <Heading as="h2">
                        Hi BTP
                    </Heading>
                    <Tooltip label="Chatbot">
                        <IconButton onClick={onSecondOpen} icon={<ChatIcon />} />
                    </Tooltip>                    
                    <ChatbotDialog onClose={onSecondClose} isOpen={isSecondOpen} />   
                </Flex>             
            </Flex>
        </>
    )
}

export default HomePage