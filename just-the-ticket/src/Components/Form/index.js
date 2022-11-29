import Input from "../Input";

const Form = ({ setTicket, userTicket, handleSubmit }) => {
  const handleChange = (event) => {
    setTicket({ ...userTicket, [event.target.name]: event.target.value });
  };
  return (
    <form className="form-container">
      <div className="name-room-container">
        <Input
          containerClassName="name-input-container"
          type="text"
          inputClassName="input"
          autoComplete="off"
          placeholder="Your name or username..."
          htmlName="name"
          handleChange={handleChange}
          value={userTicket.name}
          label="Name:"
        />
        <div className="room-input-container">
          <label htmlFor="roomNumber">Room:</label>
          <input
            type="number"
            className="input"
            placeholder="#"
            min="0"
            autoComplete="off"
            name="roomNumber"
            id="roomNumber"
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
          id="question"
          onChange={handleChange}
          value={userTicket.question}
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="problem">Problem Summary:</label>
        <textarea
          type="text"
          className="area-input"
          autoComplete="off"
          placeholder="Break down the problem as you understand it so far..."
          name="problem"
          id="problem"
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
          id="description"
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
          id="code"
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
          id="errorLog"
          onChange={handleChange}
          value={userTicket.errorLog}
          required
        />
      </div>

      <button className="submit-button" type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Form;
