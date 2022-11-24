import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import Form from '../Components/Form'
import Collapsible from './Collapsible';

const App = () => {
  
  useEffect(() => {
    async function getInitialData() {
      let response = await fetch('http://localhost:8000/api/tickets');
      let data = await response.json();
      setTicketList(data);
    }
    getInitialData();
  }, []);

  const [userTicket, setUserTicket] = useState({
    name: "",
    question: "",
    roomNumber: 0,
    problem: "",
    description: "",
    code: "",
    errorLog: ""})

  const [ticketList, setTicketList] = useState([]);
  
  // const [jsChecked, setJsChecked] = useState(false)

  // const jsCatOnChange = () => {
  //   setJsChecked(!jsChecked);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const ticket = {
      id: uuidv4(),
      name: userTicket.name,
      question: userTicket.question,
      // categories: jsChecked ? "JavaScipt" : "",
      roomNumber: userTicket.roomNumber,
      problem: userTicket.problem,
      description: userTicket.description,
      code: userTicket.code,
      errorLog: userTicket.errorLog
    }

    const postData = async () => {
      await fetch('http://localhost:8000/api/tickets', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ticket)
        }).then(() => {
          console.log('new ticket added');
        })
      }
      await postData();


    const getData = async () => {
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
        <Form setTicket={setUserTicket} userTicket={userTicket} handleSubmit={handleSubmit} /> 
      </div>
      <div className="latest-tickets-container">
        <div className="tickets-header-container">
          <h2 className="tickets-header">Latest Tickets</h2>
        </div>
        <div className= "tickets-container">
          {ticketList.map((ticket) => {
            return (
              <Collapsible key={ticket.id}
                id={ticket.id} 
                name={ticket.question_author} 
                room={ticket.room_number}
                title={ticket.question_title}
              >
                <div className="input-container">
                  <label>Problem Summary:</label>
                  <div className="ticket-details-container">
                    <p className="ticket-p">{ticket.problem_summary}</p>
                  </div>
                </div>
                <div className="input-container">
                  <label>Steps Taken:</label>
                  <div className="ticket-details-container">
                    <p className="ticket-p">{ticket.tried_input}</p>
                  </div>
                </div>
                <div className="monospace-container">
                  <label>Code:</label>
                  <div className="code-details-container">
                    <code className="ticket-p">{ticket.code}</code>
                  </div>
                </div>
                <div className="monospace-container">
                  <label>Error Logs:</label>
                  <div className="error-details-container">
                    <code className="ticket-p">{ticket.error_logs}</code>
                  </div> 
                </div>
              </Collapsible>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
