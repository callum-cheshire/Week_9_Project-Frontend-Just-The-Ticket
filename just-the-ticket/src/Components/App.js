import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { Collapse } from 'antd';
import Form from '../Components/Form'

// Inputs
  // Question Author
  // Room Number
  // Question title 
  // Categories
    // Checkboxes
  // Problem Summary
  // What you have tried 
  // Code 
  // Error logs
    // Non required?
// Submit button
  // Create JSON - take input states to create an object>JSON 
  // Associated with a POST request?
  // Pt 2. GET request to display the posts under the form 

const { Panel } = Collapse;

const mockTicket =
  [{
    id: 1,
    name: "Adie",
    question: "How do i use react",
    roomNumber: 1,
    problem: "I don't know how to use react",
    description: "It's hard",
    code: "SETSTATE",
    errorLog: "ERROR ERROR"
  }]

// GET inital data



function App() {
  // useEffect(() => {
  //   async function getInitialData() {
  //     let response = await fetch('http://localhost:8000/api/tickets')
  //     let data = await response.json();
  //     console.log("in function ->", data);
  //     return data
  //   }
  //   let initialTicketList = getInitialData()
  // }, []);
  
  const [ticketList, setTicketList] = useState(mockTicket)
  const [name, setName] = useState("")
  const [question, setQuestion] = useState("")
  // const [jsChecked, setJsChecked] = useState(false)
  const [roomNumber, setRoomNumber] = useState(0)
  const [problem, setProblem] = useState("")
  const [description, setDescription] = useState("")
  const [code, setCode] = useState("")
  const [errorLog, setErrorLog] = useState("")

  // const jsCatOnChange = () => {
  //   setJsChecked(!jsChecked);
  // };

  function handleSubmit(event) {
    event.preventDefault();
    const ticket = {
      id: uuidv4(),
      name: name,
      question: question,
      // categories: jsChecked ? "JavaScipt" : "",
      roomNumber: roomNumber,
      problem: problem,
      description: description,
      code: code,
      errorLog: errorLog
    }

    // POST request
    async function postData() {
      await fetch('http://localhost:8000/api/tickets', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ticket)
        }).then(() => {
          console.log('new ticket added');
        })
      }
      postData();
    /* setTicketList([...ticketList, ticket]) */
    // GET request
    async function getData() {
      let response = await fetch('http://localhost:8000/api/tickets')
      let data = await response.json();
      setTicketList(data)
      console.log(data)
    }
    getData();
  }

 /*  function handleChange(e) {
    setName(e.target.value)
  } */
/* onChange={(e) => handleChange(e)} */

  return (
    <div className="App">
      <div className="create-ticket-container">
        <div className="form-header-container">
          <h2 className="form-header">Create Ticket</h2>
        </div>
        
        <Form handleSubmit={handleSubmit} setName={setName} setQuestion={setQuestion} setRoomNumber={setRoomNumber} setProblem={setProblem} setDescription={setDescription} setCode={setCode} setErrorLog={setErrorLog} /> 

      </div>
      <div className="test-container">
        {ticketList.map((ticket)=> {
          {/* console.log(ticket) */}
          return (
            
            <div key={ticket.id}>

              {/* <Collapse defaultActiveKey={['1']}>
                <Panel className="panel-header" header="This is panel header 1" key="1"> */}
                  <div>
                    <p className="1">{ticket.question_author}</p>
                    <p className="2">{ticket.question_title}</p>
                    <p className="3">{ticket.room_number}</p>
                    <p className="4">{ticket.problem_summary}</p>
                    <p className="5">{ticket.tried_input}</p>
                    <p className="6">{ticket.description}</p>
                    <p className="7">{ticket.code}</p>
                    <p className="8">{ticket.error_logs}</p>
                  </div>
                {/* </Panel>
              </Collapse> */}
            </div>
          )
        } )}
      </div>
    </div>
  );
}

export default App;
