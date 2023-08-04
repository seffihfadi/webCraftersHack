import { useSnapshot } from "valtio"
import state from "./store"
// import { client } from "./config/sanity"
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import { InformationPage } from "./pages/InformationPage"
import { WelcomePage } from "./pages/WelcomePage"

const App = () => {

  const snap = useSnapshot(state)

  return (
    <div>
<<<<<<< HEAD
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage/>}/>
          <Route path="/info" element={<InformationPage/>}/>
        </Routes>
      </Router>
=======
      <div> hello world </div>
      <h1 className="text-4xl">Hackathon | {snap.team}</h1>
      <span class="material-symbols-rounded text-5xl">home</span>
>>>>>>> 3d2aed94d21e868d1293b2c28a20a3d3dd6e69a8
    </div>
  )
}

export default App
