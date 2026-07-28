import { supabase } from '../lib/supabase'

export async function getShoppingItems() {
  const { data, error } = await supabase
    .from('shopping_items')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) {
    throw error
  }

  return data
}

export async function addShoppingItem(text: string) {
  const { data, error } = await supabase
    .from('shopping_items')
    .insert({
      text,
    })
    .select()
    .single()

  if (error) {
    throw error
  }

  return data
}