import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
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
  const [jsChecked, setJsChecked] = useState(false)
  const [roomNumber, setRoomNumber] = useState(0)
  const [problem, setProblem] = useState("")
  const [description, setDescription] = useState("")
  const [code, setCode] = useState("")
  const [errorLog, setErrorLog] = useState("")

  const jsCatOnChange = () => {
    setJsChecked(!jsChecked);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const ticket = {
      id: uuidv4(),
      name: name,
      question: question,
      categories: jsChecked ? "JavaScipt" : "",
      roomNumber: roomNumber,
      problem: problem,
      description: description,
      code: code,
      errorLog: errorLog
    }
    setTicketList([...ticketList, ticket])
  }

  return (
    <div className="App">
      <header>
        Ticket Creation Form
      </header>
      
      <form className="form-wrapper" >
        <div className="input-wrapper">
          <label htmlFor="name">Name:</label>
          <input 
            className="input" 
            type="text" 
            name="name" 
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="input-wrapper">
          <label htmlFor="question">Question Title:</label>
          <input 
            className="input" 
            type="text" 
            name="question" 
            onChange={(e) => setQuestion(e.target.value)}
            />
        </div>
        <div className="input-wrapper">
          <label htmlFor="categories">Question Categories (select all that apply):</label>
          <div className="category-wrapper" name="categories">
          <label htmlFor="javascript">JavaScript</label>
            <input 
              className="input" 
              type="checkbox" 
              name="javascript" 
              checked={jsChecked}
              onChange={jsCatOnChange}
              />
            </div>
        </div>
        <div className="input-wrapper">
          <label htmlFor="room-number">Room Number:</label>
          <input 
            className="input" 
            type="number" 
            name="room-number" 
            onChange={(e) => setRoomNumber(e.target.value)}
            />
        </div>
        <div className="input-wrapper">
          <label htmlFor="problem">Problem Summary:</label>
          <textarea 
            className="input" 
            type="text" 
            name="problem" 
            onChange={(e) => setProblem(e.target.value)}
            />
        </div>
        <div className="input-wrapper">
          <label htmlFor="description">What have you tried?</label>
          <textarea 
            className="input" 
            type="text" 
            name="description" 
            onChange={(e) => setDescription(e.target.value)}
            />
        </div>
        <div className="input-wrapper">
          <label htmlFor="code">Code:</label>
          <textarea 
            className="input" 
            type="text" 
            name="code" 
            onChange={(e) => setCode(e.target.value)}
            />
        </div>
        <div className="input-wrapper">
          <label htmlFor="error-logs">Error logs:</label>
          <textarea 
            className="input" 
            type="text" 
            name="error-logs" 
            onChange={(e) => setErrorLog(e.target.value)}
            />
        </div>
        
        <button className="submit-button" type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      
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
  );
}

export default App;
