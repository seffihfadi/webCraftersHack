import { useNavigate } from "react-router-dom"
const Logout = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('agroland-uid')
    navigate('/signin')
  }
  return (
    <button 
      onClick={handleLogout} 
      className="flex justify-center items-center p-2 px-4 border-2 border-gray-300 rounded-md" 
    >
      <span className="material-symbols-rounded mr-3">logout</span>
      Logout
    </button>
  )
}

export default Logout