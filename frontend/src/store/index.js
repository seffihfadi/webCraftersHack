import { proxy } from "valtio"



const state = proxy({
  team: 'webCrafters',
  step: 1,
  isprovider: false,
  msg: '',
  uid: localStorage.getItem('agroland-uid'),
  tel: '',
  farmerName:''

})

export default state