import { Auth0Provider } from '@auth0/auth0-react';
// Import the custom wrapper component we just wrote
import EmbeddedWalletProvider from './EmbeddedWalletProvider';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Auth0Provider
        domain="dev-p5z7mii1yql0ejwo.us.auth0.com"
        clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin,
          audience: process.env.REACT_APP_AUDIANCE_URL,
          scope: 'read:users',
        }}
      >
        <EmbeddedWalletProvider></EmbeddedWalletProvider>
      </Auth0Provider>
    </>
  );
}

export default MyApp;
