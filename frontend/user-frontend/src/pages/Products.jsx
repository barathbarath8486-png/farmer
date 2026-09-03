import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'
import { getProducts } from '../services/api'
function Products() { const [products, setProducts] = useState([]); const [search, setSearch] = useState(''); useEffect(() => { getProducts().then(setProducts) }, []); const visible = products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase())); return <div className="page"><h1>Fresh produce</h1><SearchBar value={search} onChange={setSearch} /><div className="grid">{visible.map((product) => <ProductCard key={product.id} product={product} />)}</div></div> }
export default Products