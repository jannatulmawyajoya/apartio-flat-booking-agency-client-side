import React from 'react';
import Banner from '../Banner/Banner';
import FlatInformation from '../FlatInformation/FlatInformation';
import Product from '../Product/Product';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Product></Product>
            <Review></Review>
            <FlatInformation></FlatInformation>
        </div>
    );
};

export default Home;