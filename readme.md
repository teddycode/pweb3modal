> [!NOTE]
> Looking for v2? [switch the branch](https://github.com/WalletConnect/web3modal/tree/V2).

#### 📚 [Documentation](https://docs.walletconnect.com/web3modal/about)

#### 🧪 [Laboratory](https://lab.web3modal.com)

#### 🔗 [Website](https://web3modal.com)

# Web3Modal

Your on-ramp to web3 multichain. Web3Modal is a versatile library that makes it super easy to connect users with your Dapp and start interacting with the blockchain.

<p align="center">
  <img src="./.github/assets/header.png" alt="" border="0">
</p>

# Dev setup

1. Create `apps/laboratory/env.local` file with following contents

```zsh
NEXT_PUBLIC_PROJECT_ID="your_project_id"
NEXTAUTH_SECRET="your_session_secret"
NEXTAUTH_URL=""
```

2. In each of the `examples` create `.env.local` file with following contents

```zsh
VITE_PROJECT_ID="your_project_id"
```

3. Run `npm run watch` to build and watch for file changes in a separate tab
4. Run gallery, laboratory or examples in a separate tab i.e. `npm run laboratory`

# Releasing new versions

1. Run `npm outdated` and update dependencies
2. Run `npm install` and verify if everything still works correctly
3. Merge your feature branch into `V3`
4. Create a new branch from `V3` and name it with the version tag
5. Run `npm run pre-publish` and set new custom version
6. Update version in `ConstantsUtil` in `@web3modal/scaffold-utils` to the correct version
7. Create a new `PR` with Release Notes and merge into `V3`
8. Checkout `V3` and run `npm run publish:latest`
9. Draft a new release in GitHub and create new tag
10. Click on `Generate Change` and only leave the link with difference. Paste in your changelog from PR.
11. Check `Set as the last release` and publish release.
12. Update Web3Modal for https://web3modal.com/ (https://github.com/WalletConnect/www-web3modal) and create a PR
13. Update Web3Modal for https://app.web3inbox.com (https://github.com/WalletConnect/web3inbox) and create a PR
