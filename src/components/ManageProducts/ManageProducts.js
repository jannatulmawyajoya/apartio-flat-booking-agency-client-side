import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageProducts = () => {
    const [control, setControl] = useState(false);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/allServices")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [control]);
    // console.log(services);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteProducts/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                }

            });
        alert('Are you sure you want to delete this item?')
        console.log(id);
    };
    return (
        <div className="container">
            <h1>Manage Products</h1>
            <div className="services">
                <div className="row container">
                    {services?.map((pd, index) => (
                        <div className="col-md-6 col-lg-4">
                            <div className="service p-3 border border m-2">
                                <div className="service-img">
                                    <img className="w-50" src={pd?.image} alt="" />
                                </div>
                                <h1>{pd.name}</h1>
                                <p>{pd.description}</p>
                                <p>{pd.price}</p>
                                {/* <Link to={`/purchase/${pd._id}`}>
                                    {" "}
                                    
                                </Link> */}
                                <button
                                    onClick={() => handleDelete(pd?._id)}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;