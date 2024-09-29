'use client'
import { useState } from 'react'
import { Trash2 } from "lucide-react"

export default function Dashboard() {
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('')
  const [email, setEmail] = useState('')

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, { id: Date.now(), name: newItem.trim() }])
      setNewItem('')
    }
  }

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (items.length > 0 && email) {
      console.log('Submitting:', { items, email })
      alert('Rewards initiated!')
      setItems([])
      setEmail('')
    } else {
      alert('Please add items and enter an email before submitting.')
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Merchant Dashboard</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6 bg-gray-50 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Initiate Recycling Rewards</h2>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="newItem" className="block text-sm font-medium text-gray-700">Add Recycled Item</label>
              <div className="flex space-x-2">
                <input
                  id="newItem"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  placeholder="Enter item name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
                <button
                  type="button"
                  onClick={addItem}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Add
                </button>
              </div>
            </div>

            {items.length > 0 && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Recycled Items</label>
                <ul className="space-y-2">
                  {items.map(item => (
                    <li key={item.id} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                      <span>{item.name}</span>
                      <button onClick={() => deleteItem(item.id)} className="text-red-500">
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete item</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Customer Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter customer email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded-lg">
              Initiate Rewards
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
