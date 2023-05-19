import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  if (isAuthenticated) {
    return (
      <div>
        <img src={user.picture} alt="Profile" />
        <h2>Welcome, {user.name}!</h2>
        <button onClick={() => logout()}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Please login to view your profile.</h2>
      <button onClick={() => loginWithRedirect()}>Login</button>
    </div>
  );
};

export default Login;
