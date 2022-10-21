import React from 'react'
import { motion } from 'framer-motion'
const Register = () => {
  return (
    <motion.div className='d-flex justify-content-center'
    initial={{opacity : 0}}
    animate={{opacity : 1}}
    exit={{opacity : 0}}
    >
      <p >Register</p>
    </motion.div>
  )
}

export default Register
