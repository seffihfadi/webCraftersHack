import { useSnapshot } from "valtio"
import state from "./store"
import { client } from "./config/sanity"


const App = () => {
  const snap = useSnapshot(state)
  return (
    <h1 className="text-4xl">Hackathon | {snap.team}</h1>
  )
}

export default App
