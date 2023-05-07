import { supabase } from './supabaseClient'

export const loginUser = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    return error.message
  }

  return data
}

export const logoutUser = async () => {
  const { error } = await supabase.auth.signOut()

  if (error) {
    return error.message
  }

  return true
}

export const getUserRole = async (email) => {
  const { data, error } = await supabase
    .from('my_users')
    .select('*')
    .eq('email', email)
    .single()

  if (error) {
    return error.message
  }

  return data
}
