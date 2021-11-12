import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);


  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });

  };
    return (
        <div>
        <h2>Make an Admin</h2>
        <form onSubmit={handleAdminSubmit}>
          <input type="email" placeholder="email" onBlur={handleOnBlur} />
  
          <button type="submit">Make Admin</button>
        </form>
        {success && <alert severity="success">Made Admin successfully!</alert>}
      </div>
    );
};

export default MakeAdmin;