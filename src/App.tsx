import { useEffect, useState } from 'react'
import { addShoppingItem, getShoppingItems } from './services/shopping'

type ShoppingItem = {
  id: string
  text: string
  created_at: string
}

function App() {
  const [items, setItems] = useState<ShoppingItem[]>([])
  const [newItem, setNewItem] = useState('')

  async function loadItems() {
    const data = await getShoppingItems()
    setItems(data ?? [])
  }

  useEffect(() => {
    loadItems()
  }, [])

  async function handleAdd() {
    if (!newItem.trim()) return

    await addShoppingItem(newItem)

    setNewItem('')

    await loadItems()
  }

  return (
    <main style={{ maxWidth: 500, margin: '40px auto', padding: 20 }}>
      <h1>🛒 Lista de Compras</h1>

      <div style={{ display: 'flex', gap: 8 }}>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Añadir producto"
          style={{ flex: 1 }}
        />

        <button onClick={handleAdd}>
          Añadir
        </button>
      </div>

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </main>
  )
}

export default App