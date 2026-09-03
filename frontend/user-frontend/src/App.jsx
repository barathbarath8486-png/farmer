import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'

function App() {
	return (
		<AuthProvider>
			<CartProvider>
				<Navbar />
				<main className="app-main">
					<AppRoutes />
				</main>
				<Footer />
			</CartProvider>
		</AuthProvider>
	)
}

export default App
