import React from 'react';
import Banner from '../../../Components/Banner/Banner';
import Category from '../../../Components/Category/Category';
import Feature from '../../../Components/Features/Feature';
import Testimonial from '../../../Components/Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <Feature/>
            <Testimonial/>
        </div>
    );
};

export default Home;