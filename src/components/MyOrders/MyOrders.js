import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
// import useFirebase from "../../hooks/useFirebase";

const MyOrders = () => {
    // const {user} = useFirebase();
    const {user} = useAuth();
    const{email} = user;
    // const email = sessionStorage.getItem("email");
    const [services, setServices] = useState([]);

    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${email}`)
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [email,control]);

    console.log(services);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                }
            
            });
        console.log(id);
    };

    return (
        <div>
            <h1>My orders </h1>

            <div className="services">
                <div className="row container">
                    {services?.map((pd) => (
                        <div className="col-md-4">
                            <div className="service border border p-3">
                                <div className="services-img ">
                                    <img className="w-100" src={pd?.image} alt="" />
                                </div>

                                <h6>{pd?.name}</h6>
                                
                                <p>{pd?.description}</p>
                                <h3 className="text-danger"> Cost :{pd?.price}$</h3>

                                <button
                                    onClick={() => handleDelete(pd?._id)}
                                    className="btn btn-danger"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyOrders;