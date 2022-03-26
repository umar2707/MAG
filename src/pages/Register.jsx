import styled from 'styled-components'
import React from 'react'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:  url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center  ;
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
  return (
    <Container>
      <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
              <Input placeholder="name"/>
              <Input placeholder="last name"/>
              <Input placeholder="username"/>
              <Input placeholder="email"/>
              <Input placeholder="password"/>
              <Input placeholder="confirm password"/>
              <Agremeent>
                  By creating an acoount , i concept to the processing  of my  personal data in accordance  with the <b>PRIVACY POLICY</b>
              </Agremeent>
              <Button>CREATE ACCOUNT</Button>
              <Link style={{textDecoration:"none", color:"#000"}} to="/login">
                  <Button>LOGIN</Button>
              </Link>
          </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
