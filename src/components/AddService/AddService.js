import React from "react";
import from from "./AddService.css";
import { useForm } from "react-hook-form";
// import useFirebase from "../../Hook/useFirebase";

const AddService = () => {
    // const { user } = useFirebase();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/addService", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
            alert('Services added successfully')
        console.log(data);
    };
    return (
        <div>
            <div>
                <h1 className="mt-5 text-center text-secondary">Please Add Services</h1>
                <div className=" w-25 m-auto mt-5">
                    <div className=" ">
                        <div className="">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    {...register("name", { required: true })}
                                    placeholder="Name"
                                    className="p-2 m-2 w-100 input-field"
                                />

                                <input
                                    {...register("description", { required: true })}
                                    placeholder="Description"
                                    className="p-2 m-2 w-100 input-field"
                                />

                                <input
                                    {...register("image", { required: true })}
                                    placeholder="Image Link"
                                    className="p-2 m-2 w-100 input-field"
                                />

                                <input
                                    {...register("price", { required: true })}
                                    placeholder="Price"
                                    type="number"
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
    );
};

export default AddService;