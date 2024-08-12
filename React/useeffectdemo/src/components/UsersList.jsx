import users from '../assets/users.json';
function UsersList() {
    return ( 
        <div>
            {
                users.map(user=>(
                    <div key={user.id}>
                        <h3>{user.id} {user.name} 
                            {user.email} {user.country}</h3>
                        <img src={user.url} 
                        alt={user.name} height="50"/>
                    </div>
                ))
            }
        </div>
     );
}

export default UsersList;