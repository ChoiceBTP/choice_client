import React from "react";
import HomeButton from "./HomeButton";
import SettingsButton from "./SettingsButton";
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import { Button, Input } from '@chakra-ui/react'
import { Center} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import MomentUtils from '@date-io/moment';
import {
  FormControl,
  FormLabel
} from '@chakra-ui/react'
import { Link, useNavigate } from "react-router-dom"

export default function InfoReq({domain}) {

    const [formData, setFormData] = React.useState({
        "domain": domain,
        "start": new Date(),
        "end": new Date()
    })

    const [submit, setSubmit] = React.useState(0)

    const naviage = useNavigate();

    // function handleChange(event) {
    //     const {name, value, type} = event.target
    //     setFormData(prevFormData => {
    //         return {
    //             ...prevFormData,
    //             [name]: value
    //         }
    //     })
    //     // console.log(formData)
    // }

    function handleStart(value) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                "start": value["_d"]
            }
        })
    }

    function handleEnd(value) {
      setFormData(prevFormData => {
          return {
              ...prevFormData,
              "end": value["_d"]
          }
      })
  }

  React.useEffect(() => {
    async function sendFormData() {
      
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      };
  
      const response = await fetch('/data/', requestOptions);
      console.log("see res ", response);
    }
    if(submit) sendFormData();
  }, [submit])

  React.useEffect(() => {
    if(submit > 0) naviage('/dashboard');
  }, [submit])

  function handleSubmit(event) {
    event.preventDefault();
    // console.log("submit")
    setSubmit(prev => prev + 1);
  }

    return (
      <>
      <HomeButton />
      <SettingsButton />
      <Flex h="100%" w="100%" overflow="hidden" direction="row" justify="space-evenly">        
        <Center>
          <form>
              <Flex direction='row' justify="space-between">
                <Flex direction='column' justify="center">
                <Flex direction='row' justify="center"><label>Start</label></Flex>
                  <MuiPickersUtilsProvider utils={MomentUtils}>
                    <DateTimePicker value={formData["start"]} onChange={handleStart} />
                  </MuiPickersUtilsProvider>
                  <br />
                </Flex>

                <Spacer />
                <Flex direction='column' justify="center">
                <Flex direction='row' justify="center"><label>End</label></Flex>
                  <MuiPickersUtilsProvider utils={MomentUtils}>
                    <DateTimePicker value={formData["end"]} onChange={handleEnd} />
                  </MuiPickersUtilsProvider>
                  <br />
                </Flex>
              </Flex>

              <br />
              
              <Flex direction='row' justify="center"><Button colorScheme='blue' onClick={handleSubmit}>Submit</Button></Flex>
          </form>
        </Center>
      </Flex>
    </>
    )
};

