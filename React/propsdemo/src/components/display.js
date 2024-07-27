function Display(props) {
    const {user}=props; //destructing props to user
    return ( 
        <div>
            <h3>Name: {user.name}</h3><hr/>
            <p>
                Email: {user.email} <br/>
                Country: {user.country} <br/>
            </p>
        </div>
     );
}

export default Display;