import React from 'react';
import './css/Membership.css';

function Membership() {
  return (
    <div className="membership-container">
      <h1>Join PSITS</h1>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Student ID" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Membership;
