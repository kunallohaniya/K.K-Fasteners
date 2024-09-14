import React from 'react'
import  {Template}  from '../components/Template'
import loginImg from "../assets/product2.png"

export const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back! Manage Your Cold Forging Operations"
      desc1="Log in to K.K. Fasteners, your trusted partner in precision cold  & hot forging."
      desc2="We provide integrated cold and hot forging automation solutions, enhancing efficiency and quality in the forging process."
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
  
}

export default Login   