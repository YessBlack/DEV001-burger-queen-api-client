import { supabase } from './supabaseClient'

export const sendOrder = async (data) => {
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

export const onSnapshotOrders = (callback) => {
  supabase
    .channel('any')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, payload => {
      return callback(payload)
    })
    .subscribe()
}

export const updateStateOrder = async (id, state) => {
  id = id.toString()
  console.log(typeof id)
  const { error } = await supabase
    .from('orders')
    .update({ state })
    .eq('id', id)

  if (error) {
    return error.message
  }

  return 'success'
}
