import { supabase } from './supabaseClient'

export const getDataProducts = async () => {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')

  if (error) {
    return error.message
  }

  return products
}
