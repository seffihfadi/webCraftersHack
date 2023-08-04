import { Routes , Route } from "react-router-dom"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import Profile from "./pages/Profile"
import Dashboard from "./pages/Dashboard"
import NotFound from './pages/NotFound'

const App = () => {


  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/signup" element={ <SignUp /> } />
      <Route path="/signin" element={ <SignIn /> } />
      <Route path="/profile" element={ <Profile /> } />
      <Route path="/dashboard" element={ <Dashboard /> } />
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  )
}

export default App
