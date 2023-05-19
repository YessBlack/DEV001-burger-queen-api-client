import { supabase } from './supabaseClient'

export const sendOrder = async (data) => {
  console.log(data)
  const { error } = await supabase
    .from('orders')
    .insert([data])

  if (error) {
    return error.message
  }

  return 'success'
}

export const getDataOrders = async () => {
  const { data: orders, error } = await supabase
    .from('orders')
    .select('*')

  if (error) {
    return error.message
  }

  return orders
}

export const subscribeOrders = (callback) => {
  const orders = supabase.channel('custom-insert-channel')
    .on(
      'postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'orders' },
      (payload) => {
        console.log('Change received!', payload)
      }
    )
    .subscribe()

  return orders
}
