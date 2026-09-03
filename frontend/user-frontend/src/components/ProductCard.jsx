import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const { addToCart } = useCart()
  return <article className="card"><h3>{product.name}</h3><p className="muted">{product.unit}</p><strong>₹{product.price}</strong><br /><button className="button" onClick={() => addToCart(product)}>Add to cart</button></article>
}
export default ProductCard