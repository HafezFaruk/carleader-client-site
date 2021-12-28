import React from 'react';
import dashboard from '../../../images/dashboard.png'
const Welcome = () => {
    return (
        <div className='text-center'>
            <img className="img-fluid w-50" src={dashboard} alt="img"/>
        </div>
    );
};

export default Welcome;