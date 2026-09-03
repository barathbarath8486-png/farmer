import { useAuth } from '../context/AuthContext'
function Profile() { const { user, logout } = useAuth(); return <div className="page"><h1>Your profile</h1>{user ? <><p>{user.email}</p><button className="button" onClick={logout}>Log out</button></> : <a className="button" href="#/login">Log in</a>}</div> }
export default Profile