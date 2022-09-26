import { Flex, Heading, Text } from "@chakra-ui/react"

const Settings = () => {
    return (
        <Flex padding="5" w="100vw" h="100vh" direction="column" >
            <Heading as="h1">
                Settings
            </Heading>
            <Flex padding="6" w="100%" direction="column">
                <Flex w="80%" margin="10" justifyContent="space-between">
                    <Text>Hey</Text>
                    <Text>Ok</Text>
                </Flex>
                <Flex w="80%" margin="10" justifyContent="space-between">
                    <Text>Hey</Text>
                    <Text>Ok</Text>
                </Flex>
                <Flex w="80%" margin="10" justifyContent="space-between">
                    <Text>Hey</Text>
                    <Text>Ok</Text>
                </Flex>
                <Flex w="80%" margin="10" justifyContent="space-between">
                    <Text>Hey</Text>
                    <Text>Ok</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Settings