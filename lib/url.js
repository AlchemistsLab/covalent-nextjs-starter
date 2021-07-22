export default function url(url, params) {
  if (url) {
    url = new URL(url)

    if (params) {
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    }
  }

  return url
}