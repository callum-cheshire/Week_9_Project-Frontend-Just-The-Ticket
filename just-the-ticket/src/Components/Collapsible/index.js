import React from 'react';
import { useState, useRef } from 'react';
import "./Collapsible.css"

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
                    <button className="complete-button" onClick={() => setCompleted(!completed)}>Resolve</button>
                    <button className="delete-button" onClick={(e) => handleDelete(e, id)}>Delete</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Collapsible;


// USEREF COLLAPSE TUTORIAL ---> https://blog.openreplay.com/creating-a-collapsible-component-for-react/
// const Collapsible = ({ label, children })=>{
//     const [open, setOpen] = useState(false);
//     const contentRef = useRef();
//     if (contentRef.current) console.log(contentRef.current.scrollHeight);
//     const toggle = () => {
//         setOpen(!open);
//     };
//     return(
//         <div>
//             <button onClick={toggle}> {label} </button>
//             <div 
//             className={open ? "content-show" : "content-parent"} 
//             ref={contentRef}
//             style={open ? { height: contentRef.current.scrollHeight + "px" } : { height: "0px" }}
//             >   
//                 <div className='content'> {children} </div>
//             </div>
//         </div>
//     )
// }
// export default Collapsible;

// // BASIC TOGGLE COMPONENT BEFORE ANIMATION AND USEREF
// const Collapsible = ({ label, children })=>{
//     const [open, setOpen] = useState(false);
//     const toggle = () => {
//         setOpen(!open);
//       };
//     return(
//         <div>
//         <button onClick={toggle}> {label} </button>
//         {open && (
//             <div className="toggle"> {children} </div>
        
//         )}
//       </div>
//     )
// }
// export default Collapsible;