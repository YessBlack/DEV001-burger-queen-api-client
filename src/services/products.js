export const getDataProducts = async () => {
  const res = await fetch('https://api-rest-bq.vercel.app/products')
  const data = await res.json()
  return data
}
