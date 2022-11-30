import './App.css';
import { useEffect, useState } from 'react';
import Form from '../Form'
import Collapsible from '../Collapsible';
import NavBar from '../NavBar';
import { confirmAlert } from 'react-confirm-alert';

const App = () => {
  
  useEffect(() => {
    /**
     * JSDoc eg
     */
    async function getInitialData() {
      let response = await fetch('http://localhost:8000/api/tickets');
      let data = await response.json();
      setTicketList(data);
    }
    getInitialData();
  }, []);


  const [ticketList, setTicketList] = useState([])
  // const { name, question } = ticketList
  const [userTicket, setUserTicket] = useState({
    name: "",
    question: "",
    roomNumber: "",
    problem: "",
    description: "",
    code: "",
    errorLog: ""})

  
  // const [jsChecked, setJsChecked] = useState(false)

  // const jsCatOnChange = () => {
  //   setJsChecked(!jsChecked);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      userTicket.name === "" || 
      userTicket.question === "" || 
      userTicket.roomNumber === "" ||
      userTicket.problem === "" ||
      userTicket.description === "" ||
      userTicket.code === "" ||
      userTicket.errorLog === ""
    ) {
      return alert("All must be filled out");
    }
    
    const ticket = {
      name: userTicket.name,
      question: userTicket.question,
      // categories: jsChecked ? "JavaScipt" : "",
      roomNumber: userTicket.roomNumber,
      problem: userTicket.problem,
      description: userTicket.description,
      code: userTicket.code,
      errorLog: userTicket.errorLog
    }
    // clears form after submit
    setUserTicket({
      name: "",
      question: "",
      roomNumber: "",
      problem: "",
      description: "",
      code: "",
      errorLog: ""})

    const postData = async () => {
      await fetch('http://localhost:8000/api/tickets', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ticket)
        }).then(() => {
          console.log('✅ New ticket CREATED');
        })
      }
      await postData();

    const getData = async () => {
      let response = await fetch('http://localhost:8000/api/tickets')
      console.log('✅ All tickets READ');
      
      let data = await response.json();
      setTicketList(data);
    }
    await getData();

    alert("Thank you for your submission. You can find your new ticket in the latest tickets section.")
  }

  const deleteTicket = (event, ticketId) => {

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="alert">
            <h1 className="alert__title">Delete Ticket</h1>
            <p className="alert__body">Warning: This action is irreversible. <br/> Are you sure you want to delete this ticket?</p>
            <button
              onClick={() => {
                onClose();
                handleDelete(event, ticketId);
              }}
              className="alert__btn alert__btn--yes"
            >
              Delete
            </button>
            <button onClick={onClose} className="alert__btn alert__btn--no"> Cancel </button>
          </div>
        );
      }
    });
    
    const handleDelete = async (event, ticketId) => {
      event.preventDefault();
      
      const deleteData = async () => {
        await fetch(`http://localhost:8000/api/tickets/${ticketId}`, {
          method: 'DELETE'
        }).then(() => {
          console.log(`✅ Ticket ${ticketId} DELETED`);
        })
      }
      await deleteData();
      
      const getData = async () => {
        let response = await fetch('http://localhost:8000/api/tickets')
        let data = await response.json();
        setTicketList(data);
      }
      await getData();
    }
  }
  return (
    <div className="App">
    <NavBar />
    <div className="main-container">
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
                handleDelete={deleteTicket}
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
    </div>
  );
}

export default App;
