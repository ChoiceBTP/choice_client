import React from "react";
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import { Button, Input } from '@chakra-ui/react'
import { Center} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import MomentUtils from '@date-io/moment';
import {
  FormControl,
  FormLabel
} from '@chakra-ui/react'

export default function InfoReq() {

    const [formData, setFormData] = React.useState({
        "domain": "",
        "start": new Date(),
        "end": new Date()
    })

    const [submit, setSubmit] = React.useState(0)

    function handleChange(event) {
        const {name, value, type} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
        // console.log(formData)
    }

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
    }

    if(submit) sendFormData();
  }, [submit])

  function handleSubmit(event) {
    event.preventDefault();
    // console.log("submit")
    setSubmit(prev => prev + 1);
  }

    return (
      <Flex h="100%" w="100%" overflow="hidden" direction="row" justify="space-evenly">
        <Center>
          <form>
              <Flex direction='row' justify="center"><label>Domain</label></Flex>
              <Input 
                  type = "text"
                  value={formData.domain}
                  placeholder="Domain"
                  onChange={handleChange}
                  name="domain"
                  size = "med"
              />
              <br/>
              <br/>

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
    )
};

