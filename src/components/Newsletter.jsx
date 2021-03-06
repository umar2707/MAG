import React from 'react'
import styled from 'styled-components'
import {Send} from '@material-ui/icons'
import { mobile } from '../responsive'

const Container = styled.div`
  height: 60vh;
  ${mobile({height:"40vh"})}
  justify-content:center;
  display:flex;
  align-items:center;
  background-color: #fcf5f5;
  flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({fontSize:"40px"})}
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({textAlign: "center"})}
`
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border:1px solid lightgray;
  ${mobile({width: "80%"})}

`
const Input = styled.input`
    border: none;
    flex:8;
    padding-left: 20px;
    outline: none;
`
const Button = styled.button`
  flex:1;
  border:none;
  background-color: teal;
  color:#fff;
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>get timely updates...</Desc>
      <InputContainer>
        <Input placeholder='Your email' />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter