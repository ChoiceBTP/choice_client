import React from "react";
import { useState, useRef } from "react";
import "./../App.css";
import image from "./../img/bot_image.jpg";

const chatbot = ()=> {
    const humanMessage = useRef();
    const botmessage = useRef();
    const input = useRef();
  
    const date = new Date();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
  
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const [time, setTime] = useState(`${hours}:${seconds}`); //using the useState hook to get the data from the local time and set it to the time variable
    const [dateTime, setDateTime] = useState(
      `${days[day]}, ${months[month]} ${year}`
    ); //using the useState hook to get the data from the local date and set it to the dateTime variable
  
    const checkStatus = (e) => {
      let isActive = true;
      if (dateTime === "Thursday, Aug 13 2022") {
        //if the dateTime is Thursday, 13 Aug 2022, the bot will be inactive
        isActive = false;
      }
      const status = document.querySelector(".status");
      // selecting the status class
      if (isActive === true) {
        //if the bot is active
        status.innerHTML = "Active";
        status.style.color = "green";
      } else {
        status.innerHTML = "Not Active";
        status.style.color = "red";
      }
    };
    const handleInput = () => {
      const botMessage = document.querySelector("#message1");
      const userMessage = document.querySelector("#message2");
      const inputRef = input.current;
      const getHumanMessage = humanMessage.current;
      const getBotMessage = botmessage.current;
  
      let badwords = ["fuck|bad|stupid|useless|bitch|crazy|nonsense"];
      let words = new RegExp(badwords);
      if (words.test(document.querySelector("#input").value)) {
        // if the input contains bad words
        getBotMessage.innerText = "Typing...";
        setTimeout(() => {
          getBotMessage.innerText = "Please do not use bad words"; // display the message
          inputRef.value = ""; // clear the input
        }, 2000);
      }
      let welcome = [
        "Hi|hello|Hello|hey|sup|yo|wassup|whats up|howdy|greetings|good morning|good afternoon|good evening",
      ];
      let words2 = new RegExp(welcome);
      if (words2.test(document.querySelector("#input").value)) {
        const status = document.querySelector(".status");
        // if the input contains welcome words
        getBotMessage.innerText = "Typing...";
        setTimeout(() => {
          getBotMessage.innerText = "Hello there! How are you doing today?"; // display the message
          status.innerText = "Active";
          status.style.color = "green";
          inputRef.value = ""; // clear the input
        }, 2000);
      }
      let bye = ["bye|Bye|goodbye|see you later|cya|goodnight|goodbye"];
      let words3 = new RegExp(bye);
      if (words3.test(document.querySelector("#input").value)) {
        const status = document.querySelector(".status");
        getBotMessage.innerText = "Typing...";
        setTimeout(() => {
          getBotMessage.innerText = "Bye, have a nice day";
          inputRef.value = ""; // clear the input
        }, 2000);
        setTimeout(() => {
          status.innerText = "Not active";
          status.style.color = "red";
        }, 5000);
      }
      let thanks = [
        "Thanks|thanks|thank you|thank you very much|Thank you very much",
      ];
      let words4 = new RegExp(thanks);
      if (words4.test(document.querySelector("#input").value)) {
        getBotMessage.innerText = "Typing...";
        setTimeout(() => {
          getBotMessage.innerText = "You are welcome";
          inputRef.value = ""; // clear the input
        }, 2000);
      }
      let how = [
        "How are you|how are you doing|how are you doing today|how are you doing today|How are you|how are you",
      ];
      let words5 = new RegExp(how);
      if (words5.test(document.querySelector("#input").value)) {
        const status = document.querySelector(".status");
        getBotMessage.innerText = "Typing...";
        setTimeout(() => {
          getBotMessage.innerText = "I am fine, thank you";
          status.innerText = "Active";
          status.style.color = "green";
          inputRef.value = ""; // clear the input
        }, 2000);
      }
      let good = [
        "That's good|Sound nice|that sounds awesome|that sounds great|Great|great|sounds great|that's sounds good|Nice|nice",
      ];
      let words6 = new RegExp(good);
      if (words6.test(document.querySelector("#input").value)) {
        getBotMessage.innerText = "Typing...";
        setTimeout(() => {
          getBotMessage.innerText = "😁";
          inputRef.value = ""; // clear the input
        }, 1000);
      }
  
      let response = [
        "I'm fine|I am fine|I am fine today|I am fine today|i'm fine|i'm great|I'm fine|I'm great|I'm good|i'm good|great|Great",
      ];
      let words7 = new RegExp(response);
      if (words7.test(document.querySelector("#input").value)) {
        getBotMessage.innerText = "Typing...";
        setTimeout(() => {
          getBotMessage.innerText = "That is good";
          inputRef.value = ""; // clear the input
        }, 2000);
      }
  
      let nameAsk = [
        "What's your name|what's your name|What is your name|what is your name",
      ];
      let words8 = new RegExp(nameAsk);
      if (words8.test(document.querySelector("#input").value)) {
        getBotMessage.innerText = "Typing...";
        setTimeout(() => {
          getBotMessage.innerText = "My name is Bot";
          inputRef.value = ""; // clear the input
        }, 2000);
      }
  
      let owner = [
        "Who is the owner|who is the owner|Who is the owner of this bot|who is the owner of this bot|Who made you|who made you|Who is your maker|Who made you|who is your maker|who is your owner|Who is your owner",
      ];
      let words9 = new RegExp(owner);
      if (words9.test(document.querySelector("#input").value)) {
        getBotMessage.innerText = "Typing...";
        setTimeout(() => {
          getBotMessage.innerText = "The owner of this bot is Treasure";
          inputRef.value = ""; // clear the input
        }, 2000);
      }
  
      let owner2 = [
        "Who's Treasure|who's Treasure|Who is Treasure|who is Treasure",
      ];
      let words10 = new RegExp(owner2);
      if (words10.test(document.querySelector("#input").value)) {
        getBotMessage.innerText = "Typing...";
        setTimeout(() => {
          getBotMessage.innerText =
            "Treasure is a programmer based on ReactJS and NodeJS he is the owner of a youtube channel called Creative Tutorials";
          inputRef.value = ""; // clear the input
        }, 2000);
      }
  
      let ageAsk = [
        "What's your age|what's your age|What is your age|what is your age|How old are you|how old are you",
      ]; //adding the age-question
      let words11 = new RegExp(ageAsk);
      if (words11.test(document.querySelector("#input").value)) {
        // if the input contains some question
        getBotMessage.innerText = "Typing...";
        setTimeout(() => {
          getBotMessage.innerText = "I am 1 year old";
          inputRef.value = ""; // clear the input
        }, 2000);
      }

      let query1 = [
        "What are the scholarships offered by NSUT?|What are the scholarships offered by NSUT|What are the scholarships offered by NSIT|What are the scholarships offered by NSIT? | What are some scholarships offered by NSUT? | what are some scholarships offered by NSUT? | what are the scholarships offered by NSUT",
      ];
      let words12 = new RegExp(query1);
      if (words12.test(document.querySelector("#input").value)) {
        getBotMessage.innerText = "Typing...";
        setTimeout(() => {
          getBotMessage.innerText = "Please refer to this link to find the details you are looking for: http://www.nsit.ac.in/UAIS/";
          inputRef.value = ""; // clear the input
        }, 2000);
      }

      let query2 = [
        "what programmes does nsut offer|what programmes does nsut offer?|what programmes does NSUT offer|what programs does NSUT offer | what programs does nsut offer | what programs does nsut offer? | What programs does nsut offer?",
      ];
      let words13 = new RegExp(query2);
      if (words13.test(document.querySelector("#input").value)) {
        getBotMessage.innerText = "Typing...";
        setTimeout(() => {
          getBotMessage.innerText = "NSUT offers Under-Graduate, Post-Graduate and Doctorate programmes. For more information please hop onto this website: http://www.nsit.ac.in/academics/courses/ ";
          inputRef.value = ""; // clear the input
        }, 2000);
      }

      let query3 = [
        "what is the fee structure at nsut|what is the fee structure at nsut?|What is the fee structure at nsut|What is the fee structure at NSUT?|what is the fee structure like at NSUT?|what is the fee structure like at nsut|what is the fee structure like at nsut?",
      ];
      let words14 = new RegExp(query3);
      if (words14.test(document.querySelector("#input").value)) {
        getBotMessage.innerText = "Typing...";
        setTimeout(() => {
          getBotMessage.innerText = "For information about this, please hop onto this link: http://www.nsit.ac.in/academics/fee-structure/";
          inputRef.value = ""; // clear the input
        }, 2000);
      }

      let query4 = [
        "what is the course curriculum at nsut|what is the course curriculum at nsut?|What is the course curriculum at nsut|What is the course curriculum at NSUT?|what is the course curriculum like at NSUT?|what is the course curriculum like at nsut|what is the course curriculum like at nsut?",
      ];
      let words15 = new RegExp(query4);
      if (words15.test(document.querySelector("#input").value)) {
        getBotMessage.innerText = "Typing...";
        setTimeout(() => {
          getBotMessage.innerText = "For information about this, please hop onto this link: http://www.nsit.ac.in/academics/curriculum/";
          inputRef.value = ""; // clear the input
        }, 2000);
      }

      let query5 = [
        "how is the hostel facility at nsut|how is the hostel facility at nsut?|How is the hostel facility at nsut|How is the hostel facility at nsut?|How is the hostel facility at NSUT?|how are the hostels provided by nsut?|how are the hostels provided by nsut",
      ];
      let words16 = new RegExp(query5);
      if (words16.test(document.querySelector("#input").value)) {
        getBotMessage.innerText = "Typing...";
        setTimeout(() => {
          getBotMessage.innerText = "NSUT has hostel provision for girls and boys separately. Many facilities are incorporated to ensure a good hostel life for all residents. These hostels can availed on the basis of distance from their home. For information about this, please hop onto this link: http://www.nsit.ac.in/campus-life/hostels/";
          inputRef.value = ""; // clear the input
        }, 2000);
      }

      getHumanMessage.innerText = inputRef.value; // display the message
    };
    
    return (
        <div className="App" onLoad={checkStatus}>
          <div className="wrapper">
            <div className="content">
              <div className="header">
                <div className="img">
                  <img src={image} alt="" />
                </div>
                <div className="right">
                  <div className="name">ChatBot</div>
                  <div className="status">Active</div>
                </div>
              </div>
              <div className="main">
                <div className="main_content">
                  <div className="messages">
                    <div
                      className="human-message"
                      id="message2"
                      ref={humanMessage}
                    ></div>
                    <div
                      className="bot-message"
                      id="message1"
                      ref={botmessage}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="btm">
                  <div className="input">
                    <input
                      type="text"
                      id="input"
                      placeholder="Enter your message"
                      ref={input}
                    />
                  </div>
                  <div className="btn">
                    <button onClick={handleInput}>
                      <i className="fas fa-paper-plane"></i>Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );  
 }

 export default chatbot;


    