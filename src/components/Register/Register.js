import React from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import useFirebase from "./../../Hook/useFirebase";

const Register = () => {
    const { user, registerUser, isLoading, authError,history} = useAuth();

    // const { googleSignIn, handleUserRegister } = useFirebase();
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        if(data.password!==data.password2){
            alert('did not match');
            return
        }
        
        registerUser(data.email, data.password,data.name, history);
        console.log(data);
    };
    return (
        <div>
            <h1 className='text-secondary'> Register Form</h1>
            {!isLoading &&  <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input-field"
                    name="name"
                    placeholder="Name"
                    // type="email"
                    {...register("name", { required: true })}
                />
                <br />
                <input
                    className="input-field"
                    name="email"
                    placeholder="Email"
                    type="email"
                    {...register("email", { required: true })}
                />
                <br />
                <input
                    className="input-field"
                    name="password"
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                />
                <br />
                <input
                    className="input-field"
                    name="password"
                    type="password"
                    placeholder="Re-type Your Password"
                    {...register("password2", { required: true })}
                />
                <br />
                <br />

                <input
                    className="submit-btn btn btn-secondary mt-3"
                    type="submit"
                    value="Register"
                />
                <br />
                <br />
                <NavLink to='/login' >
                    <button type="button" class="btn btn-primary btn-sm">Already Registered? Please Login</button>
                </NavLink>
                <br />
                <br />
            </form>}
            {isLoading && <Spinner animation="border" />}
            {user?.email && <Alert  variant='success'>
                User Created Successfully!!
            </Alert>}
            {authError && <Alert variant='danger'>
               {authError}
            </Alert>}
        </div>
    );
};

export default Register;