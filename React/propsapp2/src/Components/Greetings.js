//direct destructing of props
function Greetings({name}) {
    return ( 
        <>
            <h3>Welcome {name}</h3>
        </>
     );
}
Greetings.defaultProps={
    name:"Guest User"
}
export default Greetings;