import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)
export function CartProvider({ children }) { const [items, setItems] = useState([]); const addToCart = (product) => setItems((current) => { const existing = current.find((item) => item.id === product.id); return existing ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, quantity: 1 }] }); const removeFromCart = (id) => setItems((current) => current.filter((item) => item.id !== id)); return <CartContext.Provider value={{ items, addToCart, removeFromCart }}>{children}</CartContext.Provider> }
export function useCart() { return useContext(CartContext) }