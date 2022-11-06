import { Button, Flex, FormLabel, Heading, Highlight, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';


const Signup = () => {
    const [user, setUser] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', user)
        setUser('')
        navigate('/home')
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
                    <Button margin="10" alignSelf="center" w="10%" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Flex>
            </Flex>
        </>
    )
}

export default Signup;