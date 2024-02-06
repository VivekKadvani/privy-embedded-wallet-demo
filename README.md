# Problem Statement

We need a platform or service that provides us with the following wallet utilities:

- Create wallet using API
- Manage private key
- Sign transaction through API
- Export private key

## Privy

Privy allows adding beautiful authentication flows in minutes and serves every user, whether they have a wallet or not, across mobile and desktop. With just a few lines of code, securely onboard all users and get back to focusing on your core product.

### Embedded Wallets

Embedded wallets are wallets provisioned by Privy itself for a wallet experience directly embedded in your application. They do not require a separate wallet client, like a browser extension or a mobile app. Users will have at most one embedded wallet linked to their account.

#### Manual Wallet Creation

To manually create embedded wallets for your users, simply call the `createWallet` method from `usePrivy` hook.

### Implementation

1. Create a simple React app.
2. Install the library using the command:
```
npm install @privy-io/react-auth
```
3. Wrap all your app in the `privyProvider` hook which includes API configuration.
4. Create a simple design which includes only a create wallet button.

### Additional Methods

- Export Private key method
- Send transaction method

### What We Cannot Do with Privy

- Add our own private key to embedded wallet

## GitHub Link

Find the example code at [demo-privy](https://github.com/VivekKadvani/demo-privy).


