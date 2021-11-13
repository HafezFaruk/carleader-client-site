import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {

    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    
    const user = { email };
    console.log(user);
    fetch("https://desolate-cliffs-90588.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setEmail(data);
          setSuccess(true);
        }
      });
      e.preventDefault();
  };
  return (
    <div className="mt-5">
      <h2 className="text-danger fs-1">Make <span className="text-white">Admin</span> </h2>
      <div className="container" style={{marginTop: '5rem'}}>
      <form onSubmit={handleAdminSubmit}>
        <input style={{width: '100%', border: 'none', padding: '10px', borderRadius: '5px'}} type="email" placeholder="Email" onBlur={handleOnBlur} />
        <br />
        <button className="btn btn-success mt-3 w-100 fw-bold" type="submit">
          Make Admin
        </button>
      </form>
      {success && <alert severity="success">Made Admin successfully!</alert>}
    </div>
    </div>
  );
};

export default MakeAdmin;
