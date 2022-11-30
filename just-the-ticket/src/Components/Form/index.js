import Input from "../Input";
import Textarea from "../Textarea";

/**
 * Form is our form containing Inputs and buttons (yet to be separated into components).
 * This is the main component of the page.
 * 
 * @param {setState} setTicket
 * @param {setState} userTicket
 * @param {function} handleSubmit
 * 
 * @returns Form which renders Input components and takes user input 
 */
const Form = ({ setTicket, userTicket, handleSubmit }) => {
  const handleChange = (event) => {
    setTicket({ ...userTicket, [event.target.name]: event.target.value });
  };
  return (
    <form className="form-container">
      <div className="name-room-container">
        <Input
          containerClassName="name-input-container"
          inputClassName="input"
          label="Name:"
          type="text"
          htmlName="name"
          placeholder="Your name or username..."
          autoComplete="off"
          handleChange={handleChange}
          value={userTicket.name}
        />
        <Input
          containerClassName="room-input-container"
          inputClassName="input"
          label="Room:"
          type="number"
          htmlName="roomNumber"
          placeholder="#"
          autoComplete="off"
          handleChange={handleChange}
          min="0"
          value={userTicket.roomNumber}
        />
      </div>
      <Input
          containerClassName="input-container"
          inputClassName="input"
          label="Ticket Title:"
          type="text"
          htmlName="question"
          placeholder="Enter a short title for your question..."
          autoComplete="off"
          handleChange={handleChange}
          value={userTicket.question}
        />
      <Textarea
          containerClassName="input-container"
          inputClassName="area-input"
          label="Problem Summary:"
          type="text"
          htmlName="problem"
          placeholder="Break down the problem as you understand it so far..."
          autoComplete="off"
          handleChange={handleChange}
          value={userTicket.problem}
        />
      <Textarea
          containerClassName="input-container"
          inputClassName="area-input"
          label="Steps Taken:"
          type="text"
          htmlName="description"
          placeholder="Describe the things you already tried..."
          autoComplete="off"
          handleChange={handleChange}
          value={userTicket.description}
        />
      <Textarea
          containerClassName="input-container"
          inputClassName="code-area-input"
          label="Code:"
          type="text"
          htmlName="code"
          placeholder="Paste some of your code to help provide context..."
          autoComplete="off"
          handleChange={handleChange}
          value={userTicket.code}
        />
      <Textarea
          containerClassName="input-container"
          inputClassName="error-area-input"
          label="Error Logs:"
          type="text"
          htmlName="errorLog"
          placeholder="Paste any error logs you have recieved here..."
          autoComplete="off"
          handleChange={handleChange}
          value={userTicket.errorLog}
        />

      <button className="submit-button" type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Form;
