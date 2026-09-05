import { Link } from 'react-router-dom'

function OrderTable({ orders = [] }) {
  return <div className="table-wrap"><table><thead><tr><th>Order</th><th>Farmer</th><th>Buyer</th><th>Status</th><th>Total</th></tr></thead><tbody>{orders.map((order) => <tr key={order.id}><td><Link to={`/orders/${order.id}`}>{order.id}</Link></td><td>{order.farmer}</td><td>{order.buyer}</td><td><span className="status">{order.status}</span></td><td>₹{order.total.toLocaleString()}</td></tr>)}</tbody></table></div>
}

export default OrderTable