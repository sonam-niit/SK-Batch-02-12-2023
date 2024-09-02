import { useForm } from "react-hook-form";

function RegistrationForm() {
    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm();
    const onSubmit=(data)=>{
        console.log('Form Data',data);
    }
    return ( 
        <div>
            <h3>Registration Form</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name"
                    {...register('name',{required:'Name is Required'})}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"
                    {...register('email',{
                        required:'Email is Required',
                        pattern:{
                            value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message:'EmailId is Invalid'
                        }
                    })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"
                    {...register('password',{
                        required:'Password is Required',
                        minLength:{
                            value:6,
                            message:'Password must be 6 characters long'
                        }
                    })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <br/>
                <button type="submit">Register</button>
            </form>
        </div>
     );
}

export default RegistrationForm;