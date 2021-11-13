import React,{useEffect, useState} from 'react';
import { Spinner } from 'react-bootstrap';
import SingleReviewDisplay from './SingleReviewDisplay';


const ReviewDisplay = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://desolate-cliffs-90588.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className="text-center">
            
            <div className="container">
            <hr/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-4">
                            <h1 className="text-danger">Our Customer Reviews</h1>
                        </div>
                    </div>
                </div>
                {
                    reviews.length === 0 ?
                    <Spinner animation="border" />
                    :
                    <div className="row">
                    {
                        reviews.map(review => <SingleReviewDisplay
                        key={review._id}
                        review={review}
                        ></SingleReviewDisplay>)
                    }
                </div>
                }
            </div>
        </div>
    );
};

export default ReviewDisplay;