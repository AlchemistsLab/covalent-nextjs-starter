import { url } from './covalent'

export const getTokenBalancesData = async (wallet, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/address/${wallet.address}/balances_v2/`, params))
  const json = await res.json()
  return json.data
}

export const getHistoricalPortfolioData = async (wallet, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/address/${wallet.address}/portfolio_v2/`, params))
  const json = await res.json()
  return json.data
}

export const getTransactionsData = async (wallet, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/address/${wallet.address}/transactions_v2/`, params))
  const json = await res.json()
  return json.data
}

export const getERC20TokenTransfersData = async (wallet, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/address/${wallet.address}/transfers_v2/`, params))
  const json = await res.json()
  return json.data
}

export const getBlockData = async (wallet, block_height, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/block_v2/${block_height}/`, params))
  const json = await res.json()
  return json.data
}

export const getBlockHeightsData = async (wallet, start_date, end_date, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/block_v2/${start_date}/${end_date}/`, params))
  const json = await res.json()
  return json.data
}

export const getLogEventsDataByContract = async (wallet, contract_address, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/events/address/${contract_address}/`, params))
  const json = await res.json()
  return json.data
}

export const getLogEventsDataByTopic = async (wallet, topic, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/events/topics/${topic}/`, params))
  const json = await res.json()
  return json.data
}

export const getChangesTokenHoldersData = async (wallet, token_address, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/tokens/${token_address}/token_holders_changes/`, params))
  const json = await res.json()
  return json.data
}

export const getTokenHoldersData = async (wallet, token_address, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/tokens/${token_address}/token_holders/`, params))
  const json = await res.json()
  return json.data
}

export const getExternalNftMetadata = async (wallet, contract_address, token_id, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/tokens/${contract_address}/nft_metadata/${token_id}/`, params))
  const json = await res.json()
  return json.data
}

export const getNftTokenIdsData = async (wallet, contract_address, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/tokens/${contract_address}/nft_token_ids/`, params))
  const json = await res.json()
  return json.data
}

export const getNftTransactionsData = async (wallet, contract_address, token_id, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/tokens/${contract_address}/nft_transactions/${token_id}/`, params))
  const json = await res.json()
  return json.data
}

export const getAllContractMetadata = async (wallet, id, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/tokens/tokenlists/${id}/`, params))
  const json = await res.json()
  return json.data
}

export const getTransactionData = async (wallet, tx_hash, params) => {
  const res = await fetch(url(`/${wallet.chain_id}/transaction_v2/${tx_hash}/`, params))
  const json = await res.json()
  return json.data
}

export const getAllChainsData = async () => {
  const res = await fetch(url(`/chains/`))
  const json = await res.json()
  return json.data
}

export const getAllChainsStatusData = async () => {
  const res = await fetch(url(`/chains/status/`))
  const json = await res.json()
  return json.data
}