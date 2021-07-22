import { url } from './covalent'

export const getAaveV2BalancesData = async wallet => {
  const res = await fetch(url(`/${wallet.chain_id}/address/${wallet.address}/stacks/aave_v2/balances/`))
  const json = await res.json()
  return json.data
}

export const getSushiSwapLiquidityTransactionsData = async (wallet, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/address/${wallet.address}/stacks/sushiswap/acts/`, params))
  const json = await res.json()
  return json.data
}

export const getSushiSwapBalancesData = async (wallet, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/address/${wallet.address}/stacks/sushiswap/balances/`, params))
  const json = await res.json()
  return json.data
}

export const getAaveV2NetworkAssetsData = async wallet => {
  const res = await fetch(url(`/${wallet.chain_id}/networks/aave_v2/assets/`)
  const json = await res.json()
  return json.data
}

export const getSushiSwapNetworkAssetsData = async (wallet, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/networks/sushiswap/assets/`, params))
  const json = await res.json()
  return json.data
}

export const getAaveBalancesData = async wallet => {
  const res = await fetch(url(`/${wallet.chain_id}/address/${wallet.address}/stacks/aave/balances/`))
  const json = await res.json()
  return json.data
}

export const getBalancerBalancesData = async wallet => {
  const res = await fetch(url(`/${wallet.chain_id}/address/${wallet.address}/stacks/balancer/balances/`))
  const json = await res.json()
  return json.data
}

export const getCompoundActivityData = async wallet => {
  const res = await fetch(url(`/${wallet.chain_id}/address/${wallet.address}/stacks/compound/acts/`))
  const json = await res.json()
  return json.data
}

export const getCompoundBalancesData = async wallet => {
  const res = await fetch(url(`/${wallet.chain_id}/address/${wallet.address}/stacks/compound/balances/`))
  const json = await res.json()
  return json.data
}

export const getCurveBalancesData = async wallet => {
  const res = await fetch(url(`/${wallet.chain_id}/address/${wallet.address}/stacks/curve/balances/`))
  const json = await res.json()
  return json.data
}

export const getFarmingStatsData = async wallet => {
  const res = await fetch(url(`/${wallet.chain_id}/address/${wallet.address}/stacks/farming/positions/`))
  const json = await res.json()
  return json.data
}

export const getUniSwapV1BalancesData = async wallet => {
  const res = await fetch(url(`/${wallet.chain_id}/address/${wallet.address}/stacks/uniswap_v1/balances/`))
  const json = await res.json()
  return json.data
}

export const getUniSwapV2LiquidityTransactionsData = async (wallet, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/address/${wallet.address}/stacks/uniswap_v2/acts/`, params))
  const json = await res.json()
  return json.data
}

export const getUniSwapV2BalancesData = async wallet => {
  const res = await fetch(url(`/${wallet.chain_id}/address/${wallet.address}/stacks/uniswap_v2/balances/`))
  const json = await res.json()
  return json.data
}

export const getAaveNetworkAssetsData = async wallet => {
  const res = await fetch(url(`/${wallet.chain_id}/networks/aave/assets/`))
  const json = await res.json()
  return json.data
}

export const getAugurAffiliateFeeData = async (wallet, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/networks/augur/affiliate_fee/`, params))
  const json = await res.json()
  return json.data
}

export const getCompoundNetworkAssetsData = async wallet => {
  const res = await fetch(url(`/${wallet.chain_id}/networks/compound/assets/`))
  const json = await res.json()
  return json.data
}

export const getUniSwapV2NetworkAssetsData = async (wallet, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/networks/uniswap_v2/assets/`, params))
  const json = await res.json()
  return json.data
}

export const getPancakeSwapV2BalancesData = async (wallet, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/address/${wallet.address}/stacks/pancakeswap_v2/balances/`, params))
  const json = await res.json()
  return json.data
}

export const getPancakeSwapV2LiquidityTransactionsData = async (wallet, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/address/${wallet.address}/stacks/pancakeswap_v2/acts/`, params))
  const json = await res.json()
  return json.data
}

export const getPancakeSwapBalancesData = async (wallet, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/address/${wallet.address}/stacks/pancakeswap/balances/`, params))
  const json = await res.json()
  return json.data
}

export const getPancakeSwapV2NetworkAssetsData = async (wallet, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/networks/pancakeswap_v2/assets/`, params))
  const json = await res.json()
  return json.data
}

export const getPancakeSwapV2NetworkAssetsDataByAddress = async (wallet, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/networks/pancakeswap_v2/assets/${wallet.address}/`, params))
  const json = await res.json()
  return json.data
}

export const getPancakeSwapNetworkAssetsData = async (wallet, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/networks/pancakeswap/assets/`, params))
  const json = await res.json()
  return json.data
}
