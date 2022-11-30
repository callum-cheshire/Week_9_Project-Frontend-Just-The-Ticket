import { useState, useRef } from 'react';
import "./Collapsible.css"

/**
 * Collapsible creates a expandable container component which houses the existing tickets.
 *
 * @param {props} children
 * @param {string} id
 * @param {string} name 
 * @param {string} room 
 * @param {string} title 
 * @param {function} handleDelete
 * 
 * @returns Collapsible* component which contains current tickets and displays them when toggled
 */


const Collapsible = ({ children, id, name, room, title, handleDelete }) => {

    const [open, setOpen] = useState(false);
    const [completed, setCompleted] = useState(false);

    const contentRef = useRef();

    const toggle = () => {
        setOpen(!open);
    };
    return(
        <div className="single-ticket-container">
            <div className="ticket-body-container">
                <h3 className="ticket-info"> 
                    <span className={completed ? "status-span-closed" : "status-span-open"}>
                        {completed ? "● CLOSED " : "● OPEN "}  
                    </span>-
                    <span className="text-span"> Ticket {id}</span> - from 
                    <span className="name-span"> {name} </span> in  
                    <span className=""> Room {room} </span>
                </h3>
                    <div className="question-title-container" onClick={toggle}>
                        <p className="question-title">
                            <span className="arrow-span">{open ? "▼" : "▶"}</span> {title} 
                        </p>
                    </div>
                <div 
                className={open ? "content-show" : "content-parent"} 
                ref={contentRef}
                style={open ? { height: contentRef.current.scrollHeight + "px" } : { height: "0px" }}
                >   
                    <div className="content"> {children} </div>
                    <div className="button-container">
                    <button className={completed ? "reopen-button" : "complete-button"}  onClick={() => {
                        setCompleted(!completed)
                        console.log(`✅ Ticket ${id} UPDATED`);}}> {completed ? "Reopen" : "Resolve"}</button>
                    <button className="delete-button" onClick={(e) => handleDelete(e, id)}>Delete</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Collapsible;