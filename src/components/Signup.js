import { Button, Checkbox, Flex, FormLabel, Heading, Highlight, Input, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LandingPage from './Landing';
// import { useHistory } from 'react-router-dom';


const Signup = () => {
    const [user, setUser] = useState('')
    const [accepted, setAccepted] = useState(false)
    const navigate = useNavigate()
    const toast = useToast()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (user === '') {
            toast({
                title: 'Error.',
                description: "Please provide a name",
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
        } else {
            localStorage.setItem('user', user)
            setUser('null')
            navigate('/update')
            toast({
                title: 'Welcome.',
                description: "Complete your sign up by selecting the goals you want to track :)",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
        }
    }

    return (
        <>
            <Flex padding="10vw" w="100vw" h="100vh" direction="column" >
                <Heading alignSelf="center" lineHeight='tall'>
                    <Highlight
                        query='choice'
                        styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                    >
                        Make that choice
                    </Highlight>
                </Heading>
                <Flex padding="5vw" direction="column">
                    <FormLabel w="28%" alignSelf="center">Username</FormLabel>
                    <Input marginBottom="10" alignSelf="center" w="30%" value={user} onChange={(e) => { setUser(e.target.value) }} />
                    <Checkbox fontSize={5} alignSelf="center" w="50%" isChecked={accepted} onChange={(e) => setAccepted(e.target.checked)}>
                        You agree to anonymously send your browser history to Choice.
                    </Checkbox>
                    <Button isDisabled={!accepted} margin="10" alignSelf="center" w="10%" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Flex>
            </Flex>
            <LandingPage />
        </>
    )
}

export default Signup;