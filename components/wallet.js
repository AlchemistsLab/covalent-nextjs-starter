import { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Web3Modal from 'web3modal'
import { providers } from 'ethers'
import WalletConnectProvider from '@walletconnect/web3-provider'
import WalletLink from 'walletlink'
import Fortmatic from 'fortmatic'
import Portis from '@portis/web3'
import { Bitski } from 'bitski'
import { actionTypes } from '../store'

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
    },
  },
  'custom-walletlink': {
    display: {
      name: 'Coinbase',
      description: 'Connect to Coinbase Wallet (not Coinbase App)',
      logo: 'https://images.ctfassets.net/q5ulk4bp65r7/1rFQCqoq8hipvVJSKdU3fQ/21ab733af7a8ab404e29b873ffb28348/coinbase-icon2.svg',
    },
    options: {
      appName: 'My App', // Your app name
      networkUrl: `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
      chainId: 1,
    },
    package: WalletLink,
    connector: async (_, options) => {
      const { appName, networkUrl, chainId } = options
      const walletLink = new WalletLink({
        appName,
      })
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId)
      await provider.enable()
      return provider
    },
  },
  fortmatic: {
    package: Fortmatic,
    options: {
      key: process.env.NEXT_PUBLIC_FORTMATIC_KEY,
    },
  },
  portis: {
    package: Portis,
    options: {
      id: process.env.NEXT_PUBLIC_PORTIS_ID
    },
  },
  bitski: {
    package: Bitski,
    options: {
      clientId: process.env.NEXT_PUBLIC_BITSKI_CLIENT_ID,
      callbackUrl: process.env.NEXT_PUBLIC_BITSKI_CALLBACK_URL,
    },
  },
}

let web3Modal
if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    network: 'mainnet', // optional
    cacheProvider: true,
    providerOptions,
  })
}

export default function Wallet() {
  const wallet = useSelector(state => state[actionTypes.WALLET])
  const dispatch = useDispatch()

  const { provider, web3_provider, chain_id, address } = wallet

  const connect = useCallback(async () => {
    const provider = await web3Modal.connect()
    const web3Provider = new providers.Web3Provider(provider)

    const signer = web3Provider.getSigner()
    const address = await signer.getAddress()

    const network = await web3Provider.getNetwork()

    dispatch({ type: actionTypes.WALLET, payload: { provider, web3_provider: web3Provider, chain_id: network.chainId, address } })
  }, [])

  const disconnect = useCallback(
    async function () {
      await web3Modal.clearCachedProvider()

      if (provider?.disconnect && typeof provider.disconnect === 'function') {
        await provider.disconnect()
      }

      dispatch({ type: actionTypes.RESET_WALLET })
    },
    [provider]
  )

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect()
    }
  }, [connect])

  useEffect(() => {
    if (provider?.on) {
      const handleChainChanged = chainId => {
        if (!chainId) {
          disconnect()
        }
        else {
          dispatch({ type: actionTypes.WALLET, payload: { chain_id: parseInt(chainId) } })
        }
      }

      const handleAccountsChanged = accounts => {
        if (!accounts[0]) {
          disconnect()
        }
        else {
          dispatch({ type: actionTypes.WALLET, payload: { address: accounts[0] } })
        }
      }

      const handleDisconnect = ({ code }) => {
        disconnect()
        if (code === 1013) {
          connect()
        }
      }

      provider.on('chainChanged', handleChainChanged)
      provider.on('accountsChanged', handleAccountsChanged)
      provider.on('disconnect', handleDisconnect)

      return () => {
        if (provider.removeListener) {
          provider.removeListener('chainChanged', handleChainChanged)
          provider.removeListener('accountsChanged', handleAccountsChanged)
          provider.removeListener('disconnect', handleDisconnect)
        }
      }
    }
  }, [provider, disconnect])

  return (
    <>
      {web3_provider ?
        <button onClick={disconnect} className="bg-red-600 hover:bg-red-700 rounded-md shadow-sm text-sm font-medium text-white my-2 py-2 px-3">
          Disconnect
        </button>
        :
        <button onClick={connect} className="bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm text-sm font-medium text-white my-2 py-2 px-3">
          Connect
        </button>
      }
    </>
  )
}