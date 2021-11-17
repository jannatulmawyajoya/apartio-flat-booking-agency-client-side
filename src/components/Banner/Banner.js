// import React from 'react';

// const Banner = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Banner;

import React from 'react';
// import MenuBar from "../MenuBar/MenuBar";
// import Services from '../Services/Services';
import "./Banner.css";
const Banner = () => {
    return (
        <div className="banner-container ">
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">
                    {/* <MenuBar></MenuBar> */}
                    <div className="col-md-6">
                        <h3 className="title text-white">

                           MODERN HOUSE MAKE BETTER LIFE!!
                        </h3>
                        <h5 className="text-white text-center mt-3">
                            “LET'S TAKE YOU TO YOUR DREAM HOUSE.”
                        </h5>
                        <button className="mt-3 btn btn-secondary about-btn">TAKE A TOUR</button>
                    </div>
                    <div className="col-md-6">

                    </div>

                </div>
            </div>
            {/* <Services></Services> */}
        </div>

    );
};
export default Banner;