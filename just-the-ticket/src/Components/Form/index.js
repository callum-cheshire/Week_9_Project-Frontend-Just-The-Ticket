// setName, setQuestion, setRoomNumber, setProblem, setDescription, setCode, setErrorLog, handleSubmit

const Form = ({setTicket, userTicket, handleSubmit}) => {

  const handleChange = (event) => {
    setTicket({ ...userTicket, [event.target.name]: event.target.value })
  }
  return ( 
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
                onChange={handleChange}
                value={userTicket.name}
                required
                />
            </div>
            <div className="room-input-container">
              <label htmlFor="roomNumber">Room:</label>
              <input 
                type="number" 
                className="input"
                placeholder="#"
                min="0" 
                autoComplete="off"
                name="roomNumber" 
                onChange={handleChange}
                value={userTicket.roomNumber}
                required
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
              onChange={handleChange}
              value={userTicket.question}
              required
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
              onChange={handleChange}
              value={userTicket.problem}
              required
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
              onChange={handleChange}
              value={userTicket.description}
              required
              />
          </div>
          <div className="input-container">
            <label htmlFor="code">Code:</label>
            <textarea 
              type="text" 
              className="code-area-input"
              autoComplete="off" 
              placeholder="Paste some of your code to help provide context..." 
              name="code" 
              onChange={handleChange}
              value={userTicket.code}
              required
              />
          </div>
          <div className="input-container">
            <label htmlFor="errorLog">Error Logs:</label>
            <textarea 
              type="text" 
              className="error-area-input" 
              autoComplete="off"
              placeholder="Paste any error logs you have recieved here..."  
              name="errorLog" 
              onChange={handleChange}
              value={userTicket.errorLog}
              required
              />
          </div>
          
          <button className="submit-button" type="submit" onClick={handleSubmit}>Submit</button>
        </form>

   );
}
 
export default Form;