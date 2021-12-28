import React from 'react';
import Banner from '../Banner/Banner';
import CarItems from '../CarItems/CarItems';
import Contact from '../Contact/Contact';
import ReviewDisplay from '../ReviewDisplay/ReviewDisplay';

const Home = () => {
    return (
        <div id="#home">
             <Banner />
             <CarItems />
            <ReviewDisplay></ReviewDisplay>
             <Contact></Contact>
        </div>
    );
};

export default Home;