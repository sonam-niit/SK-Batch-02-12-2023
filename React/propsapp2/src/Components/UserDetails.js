function UserDetails({selected}) {
    return ( 
        <div>
            <h3>User Details Component</h3>
            <h4>Name: {selected.name}</h4>
            <p>
                Email: {selected.email} <br/>
                Country: {selected.country}<br/>
                Id: {selected.id}
            </p>
        </div>
     );
}

export default UserDetails;