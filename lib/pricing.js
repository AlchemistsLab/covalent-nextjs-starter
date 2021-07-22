import { url } from './covalent'

export const getHistoricalPricesDataByAddressV2 = async (wallet, quote_currency, contract_addresses, params) => {
  const res = await fetch(url(`/pricing/historical_by_addresses_v2/${wallet.chain_id}/${quote_currency}/${contract_addresses}/`, params))
  const json = await res.json()
  return json.data
}

export const getHistoricalPricesDataByTicker = async (quote_currency, ticker_symbol, params) => {
  const res = await fetch(url(`/pricing/historical/${quote_currency}/${ticker_symbol}/`, params))
  const json = await res.json()
  return json.data
}

export const getSpotPricesData = async params => {
  const res = await fetch(url(`/pricing/tickers/`, params))
  const json = await res.json()
  return json.data
}

export const getPriceVolatilityData = async params => {
  const res = await fetch(url(`/pricing/volatility/`, params))
  const json = await res.json()
  return json.data
}