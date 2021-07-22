import URL from './url'

export const url = (path, params) => {
  params = { ...params, path }

  return URL(process.env.NEXT_PUBLIC_COVALENT_API_URL, params)
}