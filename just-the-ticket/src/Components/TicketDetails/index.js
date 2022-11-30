import React from 'react'

const TicketDetails =({ containerClassName, label, detailsContainerClassName, text, pClassName})=> {
  return (
    <div className={containerClassName}>
    <label>{label}</label>
    <div className={detailsContainerClassName}>
      <p className= {pClassName}>{text}</p>
    </div>
  </div>
  )
}


export default TicketDetails