import { useNavigate, NavLink } from 'react-router-dom'
import { Logo } from '../components'
import { userQuery } from "../config/serverData"
import { useEffect, useState } from "react"
import { client } from '../config/sanity'

const Dashboard = () => {
  //const farmer = useSnapshot(farmerData)
  const navigate = useNavigate()
  const [farmer, setFarmer] = useState(null)
  useEffect(() => {
    const uniqID = localStorage.getItem('agroland-uid')
    if (uniqID) {
      client.fetch(userQuery(uniqID)).then((data) => {
        if (data.length > 0) {
          setFarmer(data)
        }else{
          localStorage.removeItem('agroland-uid')
          navigate('/signin')
        }
        
      })
    }else{
      navigate('/signin')
    }

  }, [])

  return (
    <div className="dashboard">
      <nav>
        <Logo />
        <NavLink activeclassname='active' to='/dashboard'>
          <span className="material-symbols-rounded">home</span>
          <h5>Dashboard</h5>
          
        </NavLink>
        <NavLink activeclassname='active' to='/search'>
          <span className="material-symbols-rounded">search</span>
          <h5>Search</h5>
        </NavLink>
      </nav>
      <div className="content">

      </div>
    </div>
  )
}

export default Dashboard