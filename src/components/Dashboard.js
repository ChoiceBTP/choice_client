import { Box, Flex, Grid, Heading, SimpleGrid } from "@chakra-ui/react"
import SettingsButton from "./SettingsButton";

const Dashboard = () => {
    return (
        <>
            <SettingsButton />
            <Flex padding="5" w="100vw" h="100vh" direction="column" >
                <Heading as="h1">
                    Dashboard
                </Heading>
                <SimpleGrid columns={3} padding="5" spacing={10}>
                    <Box bg='gray' height='30vh'></Box>
                    <Box bg='gray' height='30vh'></Box>
                    <Box bg='gray' height='30vh'></Box>
                    <Box bg='gray' height='30vh'></Box>
                    <Box bg='gray' height='30vh'></Box>
                </SimpleGrid>
            </Flex>
        </>
    )
}

export default Dashboard;