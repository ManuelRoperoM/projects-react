const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_RANDOM_IMAGE = 'https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=beng&api_key='

export const fetchRandomFact = async () => {
  const response = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await response.json()
  const { fact } = data
  return fact
}

export const getImage = async (fact) => {
  const threeFirstWords = fact.split(' ', 3).join('%')
  const res = await fetch(CAT_ENDPOINT_RANDOM_IMAGE + threeFirstWords)
  const response = await res.json()
  const { url } = response[0]
  return url
}
