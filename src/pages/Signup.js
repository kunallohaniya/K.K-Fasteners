import React from 'react'
import signupImg from "../assets/product1.png"
import { Template } from '../components/Template'

export const Signup = ({setIsLoggedIn}) => {
  return (
      <Template
      title="Exclusive Access to Top-Tier Forging Technologies - Register Now!"
      desc1="Streamline your forging process with our efficient cold/hot forging solutions."
      desc2="Your partner in high-quality forging services and solutions."
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
    
  )
}

export default Signup