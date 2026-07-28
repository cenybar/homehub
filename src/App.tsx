import { useState } from 'react'
import './App.css'

function App() {
  const [item, setItem] = useState('')
  const [items, setItems] = useState<string[]>([])

  function addItem() {
    if (item.trim() === '') return

    setItems([...items, item])
    setItem('')
  }

  return (
    <main>
      <h1>🛒 HomeHub</h1>

      <input
        type="text"
        placeholder="Añadir un producto..."
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />

      <button onClick={addItem}>
        Añadir
      </button>

      <hr />

      {items.length === 0 ? (
        <p>No hay productos.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </main>
  )
}

export default App