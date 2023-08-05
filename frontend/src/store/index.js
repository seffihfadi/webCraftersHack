import { proxy } from "valtio"



const state = proxy({
  team: 'webCrafters',
  step: 1,
  isprovider: false,
  msg: '',

  
})

export default state