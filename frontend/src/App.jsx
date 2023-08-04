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
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage/>}/>
          <Route path="/info" element={<InformationPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
