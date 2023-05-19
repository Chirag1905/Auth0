// import logo from './logo.svg';
import './App.css';
import { Auth0Provider } from '@auth0/auth0-react';
import Login from './Components/Login';

const App = () => {
  const domain = 'dev-45n2y4rfbbj7k3jd.us.auth0.com';
  const clientId = 'EVd43TI7paNylyX4Qh8mGkfxiu7yCP1O';

  return (
    <>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      >
      {/* Your app's components and routes */}
        <Login/>
    </Auth0Provider>
      </>
  );
};

export default App;
