function Greetings(props) {
    const data1=props.name;
    const data2=props.message;
    return ( 
        <>
            <p>
             Name:  {props.data1} ,
               Message: {props.data2}
            </p>
        </>
     );
}

export default Greetings;