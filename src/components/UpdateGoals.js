import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react"
import HomeButton from "./HomeButton";
import SettingsButton from "./SettingsButton";

const UpdateGoals = () => {
    return (
        <>
            <HomeButton />
            <SettingsButton />
            <Flex padding="5" w="100vw" h="100vh" direction="column" >
                <Heading as="h1">
                    Update Goals
                </Heading>
                <Flex padding="5" w="100%" direction="row" alignSelf="center" justifyContent="space-evenly">
                    <Flex w="50%" bg="gray" justify="center" align="center">
                        Domain Logo
                    </Flex>
                    <SimpleGrid padding="5" spacing={20} columns={2}>
                        <Box h="15vh" w="15vw" bg="twitter.700"></Box>
                        <Box h="15vh" w="15vw" bg="twitter.700"></Box>
                        <Box h="15vh" w="15vw" bg="twitter.700"></Box>
                        <Box h="15vh" w="15vw" bg="twitter.700"></Box>
                    </SimpleGrid>

                </Flex>
            </Flex>
        </>
    )
}

export default UpdateGoals;