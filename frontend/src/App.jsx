import { useSnapshot } from "valtio"
import state from "./store"
import { client } from "./config/sanity"


const App = () => {

  const snap = useSnapshot(state)

  return (
    <div>
      <div> hello world </div>
      <h1 className="text-4xl">Hackathon | {snap.team}</h1>
      <span class="material-symbols-rounded text-5xl">home</span>
    </div>
  )
}

export default App
