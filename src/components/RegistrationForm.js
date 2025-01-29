import React from 'react';

const RegistrationForm = () => (
  <div className="card">
    <h2>Registration Form</h2>
    <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <button type="submit">Register</button>
    </form>
  </div>
);

export default RegistrationForm;
