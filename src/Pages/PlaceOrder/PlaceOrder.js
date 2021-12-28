import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./PlaceOrder.css";
import AOS from "aos";
import "aos/dist/aos.css";
const PlaceOrder = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const { id } = useParams();
  const [order, setOrder] = useState({});
  useEffect(() => {
    AOS.init();
  });
  useEffect(() => {
    fetch(`https://desolate-cliffs-90588.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [id]);
  const onSubmit = (data) => {
    const orderId = id;
    data.order = orderId;
    const price = order.price;
    data.price = price;

    fetch("https://desolate-cliffs-90588.herokuapp.com/placeorder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order processed Successfully");
          reset();
        }
      });
  };
  return (
    <>
      <div className="works-area py-5">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-12">
              <div className="text-center">
                <h1>Confirm your car order</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              data-aos="zoom-in"
              data-aos-offset="300"
              data-aos-duration="2000"
              data-aos-easing="ease-in-sine"
              className="card p-3 col-md-6"
            >
              <div>
                <img className="img-fluid" src={order.img} alt="" />
                <h1>{order.name}</h1>
                <h3>Price: ${order.price}</h3>
                <h5>Order Id: {id}</h5>
                <p>{order.description}</p>
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              data-aos-offset="300"
              className="col-md-6"
            >
              <div>
                <form
                  className="shipping-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    className="form-control p-2 mb-3"
                    defaultValue={user.displayName}
                    {...register("name")}
                  />

                  <input
                    className="form-control p-2 mb-3"
                    defaultValue={user.email}
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="error">This field is required</span>
                  )}
                  <input
                    className="form-control p-2 mb-3"
                    placeholder="Status"
                    defaultValue={"pending"}
                    {...register("status")}
                  />

                  <input
                    className="form-control p-2 mb-3"
                    placeholder="City"
                    defaultValue=""
                    {...register("city")}
                  />
                  <input
                    className="form-control p-2 mb-3"
                    placeholder="phone number"
                    defaultValue=""
                    {...register("phone")}
                  />
                  <textarea
                    rows="11"
                    className="form-control p-2 mb-3"
                    placeholder="Address"
                    defaultValue=""
                    {...register("address")}
                  />
                  <input className="btn btn-success px-5 w-100" type="submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
