import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
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


function App() {

  // GET request
  async function getInitialData() {
    let response = await fetch('http://localhost:8000/api/tickets')
    let data = await response.json();
    return data
  }
  let initialTicketList = getInitialData();
  
  const [ticketList, setTicketList] = useState(initialTicketList)
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
          return (
            <div key={ticket.id}>
              <Collapse defaultActiveKey={['1']}>
                <Panel className="panel-header" header="This is panel header 1" key="1">
                  <div>
                    <p>{ticket.name}</p>
                    <p>{ticket.roomNumber}</p>
                    <p>{ticket.question}</p>
                    <p>{ticket.categories}</p>
                    <p>{ticket.problem}</p>
                    <p>{ticket.description}</p>
                    <p>{ticket.code}</p>
                    <p>{ticket.errorLog}</p>
                  </div>
                </Panel>
                <Panel className="panel-header" header="This is panel header 2" key="2">
                  <div>
                    <p>{ticket.name}</p>
                    <p>{ticket.roomNumber}</p>
                    <p>{ticket.question}</p>
                    <p>{ticket.categories}</p>
                    <p>{ticket.problem}</p>
                    <p>{ticket.description}</p>
                    <p>{ticket.code}</p>
                    <p>{ticket.errorLog}</p>
                  </div>
                </Panel>
              </Collapse>
            </div>
          )
        } )}
      </div>
    </div>
  );
}

export default App;
