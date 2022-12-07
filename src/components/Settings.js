import { Button, Flex, Heading, Switch, Text, useColorMode } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import HomeButton from "./HomeButton";

const Settings = () => {
    const navigate = useNavigate()
    const { colorMode, toggleColorMode } = useColorMode();
    const [on, setOn] = useState(colorMode === "dark");

    const handleLogout = () => {
        localStorage.setItem('user', 'null')
        navigate('/signup')
    }

    return (
        <>
            <HomeButton />
            <Flex padding="5" w="100vw" h="100vh" direction="column" >
                <Heading as="h1">
                    Settings
                </Heading>
                <Flex padding="6" w="100%" direction="column">
                    <Flex w="80%" margin="10" justifyContent="space-between">
                        <Text>Toggle Dark</Text>
                        <Switch colorScheme="teal" isChecked={on} onChange={() => {
                            setOn(!on)
                            toggleColorMode();
                        }}
                            size="lg" />
                    </Flex>
                    <Flex w="80%" margin="10" justifyContent="space-between">
                        <Text>Privacy Info</Text>
                        <Text>?</Text>
                    </Flex>
                    <Button margin="10" alignSelf="center" w="20%" colorScheme="teal" onClick={handleLogout}>
                        Logout
                    </Button>
                </Flex>
            </Flex>
        </>
    )
}

export default Settings