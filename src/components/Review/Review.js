import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";


const Review = () => {
   
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/allReviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    },[]);
    console.log(reviews);
    return (
        <div className="container">
            <h1 className="text-secondary m-3"> Customer's Reviews</h1>
            <div className="services">
                <div className="row container">
                    {reviews?.map((pd, index) => (
                        <div className="col-md-6 col-lg-4">
                            <div className="service p-3 border border m-2 container">
                                
                                <h1>{pd.name}</h1>
                               
                                <p>{pd.comments}</p>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Review;