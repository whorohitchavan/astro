// SuccessPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const SuccessPage = () => {
  const location = useLocation();
  const email = location.state?.email || '';

  return (
    <div>
      <h2>Success Page</h2>
      <p>Email Address: {email}</p>
    </div>
  );
};

export default SuccessPage;
