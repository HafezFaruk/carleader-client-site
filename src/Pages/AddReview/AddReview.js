import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-food py-5 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-4">
                            <h2>Please write your valuable comment</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="single-add-food">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control mb-3" {...register("email")} value={user?.email} required />
                            <input className="form-control mb-3" {...register("name")} value={user?.displayName} required />
                            <input className="form-control mb-3" type="number" {...register("rating")} placeholder="rating(0-5)" required/>
                            <textarea rows="4"  className="form-control mb-3" {...register("comment")} placeholder="Please writ your comment here" required/>
                            <input className="btn btn-success w-25 fw-bold" type="submit" />
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;