import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/allServices")
            .then((res) => res.json())
            .then((data) => setServices(data.slice(0,6)));
    }, []);
    console.log(services);
    return (
        <div className="container">
            <h1 className="text-secondary m-3">Services </h1>
            <h5>we will provide with your dream house</h5>
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
                                <Link to={`/purchase/${pd._id}`}>
                                    {/* {" "} */}
                                    <button className="btn btn-success">Purchase Now</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Product;