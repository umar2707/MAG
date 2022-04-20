import { Facebook, Instagram, MailOutline, Phone, Room, Telegram } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
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
    ${mobile({display: "none"})}
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
    flex-direction: column;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`   
const Right = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({backgroundColor: "#fff8f8"})}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
// const Payment = styled.img`
//     width: 50%;
// `
const Linkk = styled.a`
    text-decoration: none;
    color: #000;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>EN5_COMPANY</Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, praesentium?
            </Desc>
            <SocialContainer>
                <Linkk target="_blank" href="#">
                    <SocialIcon color='3b5999'>
                            <Facebook />
                    </SocialIcon>
                </Linkk>
                <Linkk target="_blank" href="https://www.instagram.com/en5_caps/">
                    <SocialIcon color='e4405f'>
                        <Instagram />
                    </SocialIcon>
                </Linkk>
                <Linkk target="_blank" href="https://t.me/en5_caps">
                    <SocialIcon color='55acee'>
                        <Telegram />
                    </SocialIcon>
                </Linkk>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <Link style={{textDecoration:"none", color:"#000"}} to="/">
                    <ListItem>Home</ListItem>
                </Link>
                <Link style={{textDecoration:"none", color:"#000"}} to="/cart">
                    <ListItem>Cart</ListItem>
                </Link>
                <Link style={{textDecoration:"none", color:"#000"}} to="/products/man">
                    <ListItem>Man Fashion</ListItem>
                </Link>
                <Link style={{textDecoration:"none", color:"#000"}} to="/products/woman">
                    <ListItem>Woman Fashion</ListItem>
                </Link>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:'20px'}} /> Tashkent</ContactItem>
            <Linkk href='tel:+99899 447 66 66'>
                <ContactItem><Phone style={{marginRight:'20px'}} /> +99 899 447 66 66</ContactItem>
            </Linkk>
            <Linkk href='mailto: Nurbek9000.comnet@gmail.com'>
                <ContactItem><MailOutline style={{marginRight:'20px'}}/> Nurbek9000.comnet@gmail.com</ContactItem>
            </Linkk>
            {/* <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/> */}
        </Right>
    </Container>
  )
}

export default Footer