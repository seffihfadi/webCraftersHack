import { proxy } from "valtio"

const state = proxy({
  team: 'webCrafters'
})

export default state