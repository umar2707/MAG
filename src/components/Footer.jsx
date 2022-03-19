import { Facebook, Instagram, MailOutline, Phone, Room, Telegram } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;

`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color: #${props=>props.color};
    justify-content:center;
    display:flex;
    align-items:center;
    margin-right: 20px;
`
const Center = styled.div`
    flex:1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;

`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;

`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`   
const Right = styled.div`
    flex:1;
    padding: 20px;

`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SIMPLE SHOP</Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, praesentium?
            </Desc>
            <SocialContainer>
                <SocialIcon color='3b5999'>
                    <Facebook />
                </SocialIcon>
                <SocialIcon color='e4405f'>
                    <Instagram />
                </SocialIcon>
                <SocialIcon color='55acee'>
                    <Telegram />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Aksesuar</ListItem>
                <ListItem>Mening akkauntim</ListItem>
                <ListItem>Aksiya</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:'20px'}} /> Tashkent</ContactItem>
            <ContactItem><Phone style={{marginRight:'20px'}} /> +998948900817</ContactItem>
            <ContactItem><MailOutline style={{marginRight:'20px'}}/> simpleshop.uz@gmail.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer