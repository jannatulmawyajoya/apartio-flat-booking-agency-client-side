import React from 'react';

const FlatInformation = () => {
    return (
        <div className="mt-5 mb-5">
            <div className="row container">
                <div className="col-md-6">
                    <img  className="img-fluid w-75" src="https://i.ibb.co/zhHVF8d/property-info.jpg" alt="" />
                </div>
                <div className="col-md-6">
                    <h2 >Property Information</h2>
                    <p className="text-start">Flats are self-contained housing unit (a type of residential property) which occupy part of a building, generally on a single story. There are many names for these overall buildings, see below. The housing tenure of apartments also varies considerably, from large-scale public housing, to owner occupancy within what is legally a condominium (strata title or commonhold)</p>
                    <p className="text-start">Project Name : Abolire</p>
                    <p className="text-start">Total Area : 560 Square Feets</p>
                    <p className="text-start">Net Worth : $20,555,000</p>
                    <p className="text-start">Category : Modern House</p>
                    <p className="text-start">Launch Time : 10 December, 2021</p>
                    <button className="btn btn-secondary">Get Details</button>

                </div>
            </div>
        </div>
    );
};

export default FlatInformation;