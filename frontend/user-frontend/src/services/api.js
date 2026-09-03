const products = [{ id: 1, name: 'Farm tomatoes', unit: '1 kg', price: 60 }, { id: 2, name: 'Fresh spinach', unit: '250 g', price: 30 }, { id: 3, name: 'Organic potatoes', unit: '1 kg', price: 45 }]
export async function getProducts() { return products }
export async function getProduct(id) { return products.find((product) => product.id === Number(id)) }