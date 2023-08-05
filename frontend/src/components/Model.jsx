import { motion } from "framer-motion"

const Model = ({ msg }) => {
  return (
    <motion.div 
      initial={{y: 300}} 
      animate={{y: 0}} 
      className="flex items-center absolute right-10 bottom-5 px-5 py-3 font-semibold capitalize rounded-lg bg-white text-red-900"
    >
      <span className="material-symbols-rounded mr-3">report</span>
      {msg}
    </motion.div>
  )
}

export default Model