import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
// import useCollapse from 'react-collapsed';

// function Collapsible() {
//   const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
// return (
//   <div className="collapsible">
//       <div className="header" {...getToggleProps()}>
//           {isExpanded ? 'Collapse' : 'Expand'}
//       </div>
//       <div {...getCollapseProps()}>
//           <div className="content">
//               Now you can see the hidden content. <br/><br/>
//               Click again to hide...
//           </div>
//       </div>
//   </div>
//   );
// }

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
    async function fetchData() {
      await fetch('http://localhost:8000/api/tickets', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ticket)
      }).then(() => {
        console.log('new ticket added');
      })
      }
      fetchData();
    setTicketList([...ticketList, ticket])
  }

  return (
    <div className="App">
      <div className="create-ticket-container">
        <div className="form-header-container">
          <h2 className="form-header">Create Ticket</h2>
        </div>
        <form className="form-container" >
          <div className="name-room-container">
            <div className="name-input-container">
              <label htmlFor="name">Name:</label>
              <input 
                type="text" 
                className="input"
                autoComplete="off" 
                placeholder="Your name or username..."
                name="name" 
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="room-input-container">
              <label htmlFor="room-number">Room:</label>
              <input 
                type="number" 
                className="input"
                placeholder="#"
                min="0" 
                autoComplete="off"
                name="room-number" 
                onChange={(e) => setRoomNumber(e.target.value)}
                />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="question">Ticket Title:</label>
            <input 
              type="text" 
              className="input"
              placeholder="Enter a short title for your question..." 
              autoComplete="off" 
              name="question" 
              onChange={(e) => setQuestion(e.target.value)}
              />
          </div>
          {/* <div className="input-container">
            <label htmlFor="categories">Question Categories (select all that apply):</label>
            <div className="category-container" name="categories">
            <label htmlFor="javascript">JavaScript</label>
              <input 
                className="input" 
                type="checkbox" 
                name="javascript" 
                checked={jsChecked}
                onChange={jsCatOnChange}
                />
              </div>
          </div> */}
          <div className="input-container">
            <label htmlFor="problem">Problem Summary:</label>
            <textarea 
              type="text" 
              className="area-input"
              autoComplete="off"
              placeholder="Break down the problem as you understand it so far..."  
              name="problem" 
              onChange={(e) => setProblem(e.target.value)}
              />
          </div>
          <div className="input-container">
            <label htmlFor="description">Steps Taken:</label>
            <textarea 
              type="text" 
              className="area-input"
              autoComplete="off" 
              placeholder="Describe the things have you already tried..."  
              name="description" 
              onChange={(e) => setDescription(e.target.value)}
              />
          </div>
          <div className="input-container">
            <label htmlFor="code">Code:</label>
            <textarea 
              type="text" 
              className="area-input monospace-input"
              autoComplete="off" 
              placeholder="Paste some of your code to help provide context..." 
              name="code" 
              onChange={(e) => setCode(e.target.value)}
              />
          </div>
          <div className="input-container">
            <label htmlFor="error-logs">Error Logs:</label>
            <textarea 
              type="text" 
              className="area-input monospace-input" 
              autoComplete="off"
              placeholder="Paste any error logs you have recieved here..."  
              name="error-logs" 
              onChange={(e) => setErrorLog(e.target.value)}
              />
          </div>
          
          <button className="submit-button" type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
      <div className="test-container">
        {ticketList.map((ticket)=> {
          return (
            <div key={ticket.id}>
              <p>{ticket.name}</p>
              <p>{ticket.roomNumber}</p>
              <p>{ticket.question}</p>
              <p>{ticket.categories}</p>
              <p>{ticket.problem}</p>
              <p>{ticket.description}</p>
              <p>{ticket.code}</p>
              <p>{ticket.errorLog}</p>
            </div>
          )
        } )}
      </div>
    </div>
  );
}

export default App;
