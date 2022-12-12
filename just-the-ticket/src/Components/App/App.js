import { useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import Collapsible from '../Collapsible';
import Form from '../Form'
import Heading2 from '../Heading2';
import NavBar from '../NavBar';
import TicketDetails from '../TicketDetails';
import emptyTicket from "../../data/emptyTicket.js"
import './App.css';

const App = () => {
  
  useEffect(() => {
    async function getInitialData() {
      let response = await fetch('http://localhost:8000/api/tickets');
      let data = await response.json();
      setTicketList(data);
    }
    getInitialData();
  }, []);


  const [ticketList, setTicketList] = useState([])
  const [userTicket, setUserTicket] = useState(emptyTicket);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (Object.values(userTicket).some(input => input === "")) {
      return alert("All must be filled out");
    }
    
    const ticket = {
      name: userTicket.name,
      question: userTicket.question,
      roomNumber: userTicket.roomNumber,
      problem: userTicket.problem,
      description: userTicket.description,
      code: userTicket.code,
      errorLog: userTicket.errorLog
    }
    
    // clears form after submit
    setUserTicket(emptyTicket);

    const postData = async () => {
      await fetch('http://localhost:8000/api/tickets', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ticket)
        }).then(() => {
          console.log('✅ New ticket CREATED');
        });
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
       <Heading2 
          containerClassName="form-header-container" 
          headingClassName="form-header" 
          text="Create Ticket"
        /> 

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
                <TicketDetails 
                  containerClassName ="input-container"
                  label="Problem Summary:"
                  detailsContainerClassName="ticket-details-container"
                  text={ticket.problem_summary}
                  pClassName="ticket-p"
                  tag="p"
                /> 
                <TicketDetails 
                  containerClassName="input-container"
                  label="Steps Taken:"
                  detailsContainerClassName="ticket-details-container"
                  text={ticket.problem_summary}
                  pClassName="ticket-p"
                /> 
                <TicketDetails 
                  containerClassName="monospace-container"
                  label="Code:"
                  detailsContainerClassName="code-details-container"
                  text={ticket.code}
                  pClassName="ticket-code"
                /> 
                <TicketDetails 
                  containerClassName="monospace-container"
                  label="Error Logs:"
                  detailsContainerClassName="error-details-container"
                  text={ticket.error_logs}
                  pClassName="ticket-code"
                />
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
