import React from "react";
import from from "./AddReview.css";
import { useForm } from "react-hook-form";
import useFirebase from "../../hooks/useFirebase";
// import useFirebase from "../../Hook/useFirebase";

const AddReview = () => {
    const { user } = useFirebase();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/addReview", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
            alert('Review Added Successfully')
        console.log(data);
    };
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div>
                        <h1 className="mt-5 text-center text-secondary">Please Add Review</h1>
                        <div className=" w-25 m-auto mt-5">
                            <div className=" ">
                                <div className="">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input
                                            {...register("name", { required: true })}
                                            placeholder="Name"
                                            value={user?.displayName}
                                            className="p-2 m-2 w-100 input-field"
                                        />

                                        <input
                                            {...register("comments", { required: true })}
                                            placeholder="Add Comments"
                                            className="p-2 m-2 w-100 input-field"
                                        />

                                        



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

export default AddReview;