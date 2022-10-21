import React from 'react'
import { motion } from 'framer-motion'
import { Form , Button, Image} from 'react-bootstrap'
import '.././components.style.css'
const LogIn = () => {
  return (
    <motion.div className='d-flex justify-content-center'
    initial={{opacity : 0}}
    animate={{opacity : 1}}
    exit={{opacity : 0}}
    >
      <Form className='mt'>
        {/* <h5 className='text-center mb-3'>LOG IN</h5> */}
        <Image src='https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=170667a&w=0&h=zP3l7WJinOFaGb2i1F4g8IS2ylw0FlIaa6x3tP9sebU=' className='imgsetting mb-3' roundedCircle fluid/>
        <Form.Group className="mb-3">
            <p className='text-center'>USERNAME</p>
            <Form.Control placeholder="Enter username"/>
        </Form.Group>
        <Form.Group className="mb-3">
            <p className='text-center'>PASSWORD</p>
            <Form.Control type='password' placeholder="Enter Password"/>
        </Form.Group>
        <div className='d-grid'>
        <Button variant="primary" size="md">
        Log In
        </Button>
        </div>
        <hr />
        {/* errorcode goes here */}
        <p className='text-muted text-center fs-6'> &#169; copyright 2022</p>
      </Form>
 

    </motion.div>
  )
}

export default LogIn
