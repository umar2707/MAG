import React, { useState } from 'react'
import styled from 'styled-components'
import { login } from '../redux/apiCalls'
import { mobile } from '../responsive'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:  url("https://i.ibb.co/fxFvWxN/photo-2022-03-28-10-16-32.jpg") center  ;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover ;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
    ${mobile({width:"75%"})}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal ;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;

    &:disabled{
      color:green;
      cursor: not-allowed;
    }
`
// const Link = styled.a`
//     margin:5px 0;
//     font-size: 12px;
//     text-decoration: underline;
//     cursor: pointer;
// `
const Error = styled.span`
  color:red;
`


const Login = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const dispatch = useDispatch()
  const {isFetching} = useSelector((state)=>state.user)
  const handleClick = (e)=>{
    e.preventDefault()
    login(dispatch,{username, password})
  }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input 
              placeholder="username"
              onChange={(e)=>setUsername(e.target.value)}
              />
            <Input 
              placeholder="password"
              type="password"
              onChange={(e)=>setPassword(e.target.value)}
              />
            <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
            {isFetching && <Error>Noto'g'ri kiritildi...</Error>}
            {/* <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link> */}
            <Link style={{ color:"#000"}} to="/register">CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
