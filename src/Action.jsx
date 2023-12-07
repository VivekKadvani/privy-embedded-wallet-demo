import React from 'react';
import { useWallets } from '@privy-io/react-auth';
import { useAuth0 } from '@auth0/auth0-react';

const Action = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const { wallets } = useWallets();
  function getwallet() {
    if (isAuthenticated) {
      const embeddedWallet = wallets.find(
        (wallet) => wallet.walletClientType === 'privy',
      );
      if (embeddedWallet)
        console.log('wallet authenticated : ', embeddedWallet?.address);
      else console.log('wallet not found');
    }
  }
  // console.log(wallets);
  return (
    <div>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      {isAuthenticated && (
        <>
          {' '}
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
          <button
            onClick={() => {
              getwallet();
            }}
          >
            Get wallet
          </button>
        </>
      )}
    </div>
  );
};

export default Action;
