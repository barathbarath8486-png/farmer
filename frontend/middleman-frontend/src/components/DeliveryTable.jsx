import { Link } from 'react-router-dom'

function DeliveryTable({ deliveries = [] }) {
  return <div className="table-wrap"><table><thead><tr><th>Delivery</th><th>Order</th><th>Destination</th><th>Expected</th><th>Status</th></tr></thead><tbody>{deliveries.map((delivery) => <tr key={delivery.id}><td><Link to={`/deliveries/${delivery.id}`}>{delivery.id}</Link></td><td>{delivery.order}</td><td>{delivery.destination}</td><td>{delivery.expected}</td><td><span className="status">{delivery.status}</span></td></tr>)}</tbody></table></div>
}

export default DeliveryTable