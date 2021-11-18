import React, { useEffect, useState } from "react";
// import "./Booking";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
// import useAuth from "../../hooks/useAuth";
import useFirebase from "../../hooks/useFirebase";

const Purchase = () => {
    const { productId } = useParams();
    const [service, setService] = useState({});


    // const{user} = useAuth();

    const { user } = useFirebase();

    // const email = sessionStorage.getItem("email");
   
    useEffect(() => {
        fetch(`http://localhost:5000/singleProduct/${productId}`)
            .then((res) => res.json())
            // .then((data) => console.log(data));
            .then((data) => setService(data));
    }, []);

    // console.log(service);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.email = user?.email;
        // data.status = "pending";

        fetch("http://localhost:5000/confirmOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    };

    return (
        <div>
            <h1 className="text-secondary"> Purchase Form</h1>

            <div className="booking-container">
                <div className="row container">
                    <div className="col-md-6">
                        <div className="details-img">
                            <img className="w-75" src={service?.image} alt="" />
                        </div>
                        <h2>{service?.name}</h2>
                        <p className="text-start">{service?.description}</p>
                        <h5> price: {service?.price} $</h5>
                       
                    </div>
                    <div className="col-md-6">
                        
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input
                                {...register("name")}
                                value={service?.name}
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("userName")}
                                value={user?.displayName}
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("userEmail")}
                                value={user?.email}
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input
                                {...register("description")}
                                value={service?.description}
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            {/* <input
                                {...register("userEmail")}
                                defaultValue={user?.email}
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("name")}
                                defaultValue={service?.name}
                                className="p-2 m-2 w-100"
                            />
                            <br /> */}

                            <input
                                {...register("address")}
                                placeholder="Address"
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("phone")}
                                placeholder="Phone"
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            


                            
                            

                            <input
                                {...register("price", { required: true })}
                                value={service?.price}
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("image", { required: true })}
                                value={service?.image}
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            
                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input
                                type="submit"
                                value="Order Now"
                                className="btn btn-secondary w-50"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;