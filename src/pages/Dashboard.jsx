// Dashboard.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const { email } = useParams();

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>Email Address: {email}</p>
    </div>
  );
};

export default Dashboard;

