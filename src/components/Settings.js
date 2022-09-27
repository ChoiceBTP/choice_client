import { Flex, Heading, Switch, Text, useColorMode } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import HomeButton from "./HomeButton";

const Settings = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [on, setOn] = useState(colorMode === "dark");
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
                        <Text>Setting 2</Text>
                        <Text>?</Text>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default Settings