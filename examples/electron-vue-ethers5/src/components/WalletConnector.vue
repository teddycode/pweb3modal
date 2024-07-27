<script setup lang="ts">
import { useWeb3Modal,createWeb3Modal, defaultConfig } from '@web3modal/ethers5/vue'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '343fd684b4e15b05c6c532d431a4a13a'

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

// 3. Create modal
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com',
  icons: ['https://avatars.mywebsite.com/']
}

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId
})
// 4. Use modal composable
const modal = useWeb3Modal()

</script>

<template>
  <button @click="modal.open()">Open Connect Modal</button>
  <button @click="modal.open({ view: 'Networks' })">Open Network Modal</button>
</template>