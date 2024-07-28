import PropTypes from 'prop-types';
function User({name,age,isStudent}) {
    return ( 
        <div>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Role: {isStudent? 'Student':'Employee'}</p>
        </div>
     );
}
User.propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    isStudent:PropTypes.bool
}
User.defaultProps={
    isStudent:false
}
export default User;