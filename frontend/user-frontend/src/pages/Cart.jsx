import CartItem from '../components/CartItem'
import { useCart } from '../context/CartContext'
function Cart() { const { items, removeFromCart } = useCart(); return <div className="page"><h1>Your cart</h1>{items.length ? <div className="grid">{items.map((item) => <CartItem key={item.id} item={item} onRemove={removeFromCart} />)}</div> : <p className="muted">Your cart is empty.</p>}</div> }
export default Cart