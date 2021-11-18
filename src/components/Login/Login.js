import React from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Login = () => {
    const {user, loginUser, isLoading, authError} = useAuth();
    // const { googleSignIn, handleUserRegister } = useFirebase();
    const { register, handleSubmit, watch, errors } = useForm();

    const location = useLocation();
    const history = useHistory();

    const onSubmit = (data) => {
        loginUser(data.email, data.password,location,history);
        console.log(data);
    };
    return (
        <div>
            <h1 className='text-secondary'> Login Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    className="submit-btn btn btn-secondary mt-3"
                    type="submit"
                    value="Login"
                />
                <br />
                <br />
                <NavLink to='/register' >
                    <button type="button" class="btn btn-primary btn-sm">New User? Please Register</button>
                </NavLink>
                <br />
                <br />
            </form>
            {isLoading && <Spinner animation="border" />}
            {user?.email && <Alert variant='success'>
                Logined Successfully!!
            </Alert>}
            {authError && <Alert variant='danger'>
                {authError}
            </Alert>}
        </div>
    );
};

export default Login;