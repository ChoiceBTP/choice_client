import { SettingsIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Highlight, IconButton, Text, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ChatbotDialog from "./components/ChatbotDialog";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import Settings from "./components/Settings";
import UpdateGoals from "./components/UpdateGoals";
import InfoReq from "./components/InfoReq"
import "./styles.css";

const App = () => {

    return (
        <Box h="100vh" w="100vw" overflow="hidden">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/track" element={<InfoReq />} />
                <Route path="/update" element={<UpdateGoals />} />
            </Routes>
        </Box>
    )
};

export default App