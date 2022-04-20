import styled from 'styled-components'
import React, {useState} from 'react'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../redux/apiCalls';
import 'react-phone-input-2/lib/style.css'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:  url("https://i.ibb.co/c8M5db9/photo-2022-03-28-10-16-48.jpg") center  ;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover ;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
    ${mobile({width:"75%"})}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`
const Agremeent = styled.span`
    font-size: 12px;
    margin:20px 0px;
`
const Button = styled.button`
    /* width: 40%; */
    border: none;
    padding: 15px 20px;
    background-color: teal ;
    color: white;
    cursor: pointer;
    margin: 0 10px;
`
const Register = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const [name,setName] = useState("")
  const [lastname,setLastname] = useState("")
  const [phone,setPhone] = useState(0)
  const dispatch = useDispatch()
  const handleClick = (e)=>{
    e.preventDefault()
    register(dispatch,{username,password,email,name,lastname,phone})
  }
  return (
    <Container>
      <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
              <Input 
                placeholder="Ismiz"
                onChange={(e)=>setName(e.target.value)}
              />
              <Input 
                placeholder="Familya"
                onChange={(e)=>setLastname(e.target.value)}
              />
              <Input 
                placeholder="username"
                onChange={(e)=>setUsername(e.target.value)}
              />
              <Input 
                placeholder="email"
                onChange={(e)=>setEmail(e.target.value)}
              />
              <Input 
                placeholder="password"
                onChange={(e)=>setPassword(e.target.value)}
                type="password"
              />
              <Input 
                placeholder="Tel. raqam"
                onChange={(e)=>setPhone(e.target.value)}
                type="number"
              />
              <Agremeent>
                  By creating an acoount , i concept to the processing  of my  personal data in accordance  with the <b>PRIVACY POLICY</b>
              </Agremeent>
              <Button onClick={handleClick} >CREATE ACCOUNT</Button>
              <Link style={{textDecoration:"none", color:"#000"}} to="/login">
                  <Button>LOGIN</Button>
              </Link>
          </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
