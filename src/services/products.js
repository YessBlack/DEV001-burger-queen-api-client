export const getDataProducts = async () => {
  const res = await fetch('https://api-rest-bq.vercel.app/products')
  const data = await res.json()
  return data
}

export const sendOrder = async (data) => {
  fetch('https://api-rest-bq.vercel.app/orders', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
