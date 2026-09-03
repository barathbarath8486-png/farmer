import Home from '../pages/Home'
import Login from '../pages/Login'
import Products from '../pages/Products'
import Cart from '../pages/Cart'
import Orders from '../pages/Orders'
import Profile from '../pages/Profile'

export function Navigate({ to }) { window.location.hash = `#${to}`; return null }
function AppRoutes() { const path = window.location.hash.replace('#', '') || '/'; if (path === '/') return <Home />; if (path === '/products') return <Products />; if (path === '/cart') return <Cart />; if (path === '/orders') return <Orders />; if (path === '/profile') return <Profile />; if (path === '/login') return <Login />; return <Home /> }
export default AppRoutes