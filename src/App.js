import { SettingsIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Highlight, IconButton, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ChatbotDialog from "./components/ChatbotDialog";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import Settings from "./components/Settings";
import Signup from "./components/Signup";
import UpdateGoals from "./components/UpdateGoals";

const App = () => {
    const [user, setUser] = useState('')
    useEffect(() => {
        setUser(localStorage.getItem('user'))
        console.log(typeof (localStorage.getItem('user')))
        console.log("null" === localStorage.getItem('user'))
    }, [])
    return (
        <Box h="100vh" w="100vw" overflow="hidden">
            <Routes>
                <Route path="/" element={user !== "null" ? <HomePage /> : <Signup />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/track" element={<Dashboard />} />
                <Route path="/update" element={<UpdateGoals />} />
            </Routes>
        </Box>
    )
};

export default App