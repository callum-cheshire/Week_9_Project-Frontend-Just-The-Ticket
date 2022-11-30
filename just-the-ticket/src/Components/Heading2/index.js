const Heading2 = ({ containerClassName, headingClassName, text }) => {
    return (
    <div className={containerClassName}>
        <h2 className={headingClassName} >{text}</h2>
    </div>
    )
}

export default Heading2