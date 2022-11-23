import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { Collapse } from 'antd';
import Form from '../Components/Form'
const { Panel } = Collapse;

function App() {
  useEffect(() => {
    async function getInitialData() {
      let response = await fetch('http://localhost:8000/api/tickets');
      let data = await response.json();
      setTicketList(data);
    }
    getInitialData();
  }, []);
  
  const [ticketList, setTicketList] = useState([]);
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  // const [jsChecked, setJsChecked] = useState(false)
  const [roomNumber, setRoomNumber] = useState(0);
  const [problem, setProblem] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");
  const [errorLog, setErrorLog] = useState("");

  // const jsCatOnChange = () => {
  //   setJsChecked(!jsChecked);
  // };

  async function handleSubmit(event) {
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
    async function postData() {
      await fetch('http://localhost:8000/api/tickets', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ticket)
        }).then(() => {
          console.log('new ticket added');
        })
      }
      await postData();
    /* setTicketList([...ticketList, ticket]) */
    // GET request
    async function getData() {
      let response = await fetch('http://localhost:8000/api/tickets')
      let data = await response.json();
      setTicketList(data);
    }
    await getData();
  }

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
                    <p className="1">{ticket.question_author}</p>
                    <p className="2">{ticket.question_title}</p>
                    <p className="3">{ticket.room_number}</p>
                    <p className="4">{ticket.problem_summary}</p>
                    <p className="5">{ticket.tried_input}</p>
                    <p className="6">{ticket.description}</p>
                    <p className="7">{ticket.code}</p>
                    <p className="8">{ticket.error_logs}</p>
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
