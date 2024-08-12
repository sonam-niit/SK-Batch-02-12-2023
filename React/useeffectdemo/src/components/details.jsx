function Details(props) {
    // const user= props.user;
    const {user}=props;
    return ( 
        <div>
            <h3>{user.name}</h3>
            <p>
                Email: {user.email} <br/>
                UserName: {user.username} <br/>
                Address:{user.address.street},
                {user.address.suite},
                {user.address.city},
                {user.address.zipcode}<br/>
                Phone: {user.phone}<br/>
                Website: {user.website}<br/>
                company: {user.company.name}
            </p>
        </div>
     );
}

export default Details;