import React  from "react";
// import { Alert } from "react-bootstrap";
// import from from "./AddReview.css";
import { useForm } from "react-hook-form";
import useFirebase from "../../hooks/useFirebase";


const MakeAdmin = () => {
  
    const { user } = useFirebase();
    const {email} =user;
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {

        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
               
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                
                    console.log(data);
                    
            })
                   
        };
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div>
                        <h1 className="mt-5 text-center text-secondary">Make Admin</h1>
                        <div className=" w-25 m-auto mt-5">
                            <div className=" ">
                                <div className="">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input
                                            {...register("email")}
                                            placeholder="Email"
                                            type="email"
                                            className="p-2 m-2 w-100 input-field"
                                        />

                                        {/* <input
                                    {...register("comments")}
                                    placeholder="Add Comments"
                                    className="p-2 m-2 w-100 input-field"
                                /> */}

                                        {/* <input
                                    {...register("image", { required: true })}
                                    placeholder="Image Link"
                                    className="p-2 m-2 w-100 input-field"
                                />

                                <input
                                    {...register("price", { required: true })}
                                    placeholder="Price"
                                    type="number"
                                    className="p-2 m-2 w-100 input-field"
                                /> */}



                                        {errors.exampleRequired && <span>This field is required</span>}

                                        <input
                                            type="submit"
                                            value="Add"
                                            className="btn btn-secondary w-50"
                                        />
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default MakeAdmin;