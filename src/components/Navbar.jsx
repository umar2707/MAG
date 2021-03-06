import { Search ,ShoppingCartOutlined} from '@material-ui/icons';
import {Badge} from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"
import {useSelector,useDispatch} from "react-redux"
import { Link, Redirect } from 'react-router-dom';
import logo from '../../src/logo.jpg'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { logout } from '../redux/apiCalls';

const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px",marginBottom:"1.1rem"})};
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content:space-between;
    align-items:center;
    ${mobile({padding: "10px 0"})} 
`;
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    ${mobile({display:"none"})}
`
const Center = styled.div`
    flex:1;
    text-align:center;
`
const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({flex:1,justifyContent: "center"})};
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display:flex;
    align-items:center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border:none;
    outline:none;
    ${mobile({width: "50px"})}
`
const Logo = styled.h1`
    font-weight:bold;
    ${mobile({fontSize: "18px"})};
    display:flex;
    align-items:center;
    justify-content:center;
`
const Brand = styled.img`
    ${mobile({fontSize: "24px"})};
    width:40px;
`
// const Language = styled.span`
//     font-size:14px;
//     cursor:pointer;
//     ${mobile({display: "none"})}
// `
const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    ${mobile({fontSize: "12px", marginLeft:"10px",border:"1px solid",padding:"5px 10px"})}
`
const Button = styled.button`
    cursor:pointer;
    background-color: transparent;
    color:#000;
    border:none;
    outline: none;
`

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    const user = useSelector(state=>state.user.currentUser);
    const dispatch = useDispatch()
    const [exit,setExit] = useState(false)
    const handleLogOut = (e)=>{
        e.preventDefault()
        logout(dispatch)
        setExit(true)
    }
  return (
    !exit ? (<Container>
        <Wrapper>
            <Left>
                <SearchContainer>
                    <Input placeholder='Search' />
                    <Search style={{color:"gray",fontSize:16}} />
                </SearchContainer>
            </Left>
            <Center>
                <Link style={{textDecoration:"none", color:"#000"}} to="/">
                    <Logo><Brand src={logo}/>EN5_CAPS</Logo>
                </Link>
            </Center>
            <Right>
                {user ? (
                    <div style={{display:"flex",backgroundColor:"transparent",outline:'none'}}>
                        <Button onClick={handleLogOut}>
                            <MenuItem>
                                <ExitToAppOutlinedIcon/>
                            </MenuItem>
                        </Button>
                        <Link to="/cart">
                            <MenuItem>
                                <Badge badgeContent={quantity} color="primary">
                                    <ShoppingCartOutlined />
                                </Badge>
                            </MenuItem>
                        </Link>
                    </div>) :(
                    <div style={{display:"flex"}}>
                        <Link style={{textDecoration:"none", color:"#000"}} to="/register">
                            <MenuItem>REGISTER</MenuItem>
                        </Link> 
                        <Link style={{textDecoration:"none", color:"#000"}} to="/login">
                            <MenuItem>SIGN IN</MenuItem>
                        </Link>
                    </div>
                    )
                }
            </Right>
        </Wrapper>
    </Container>) : <Redirect to='/' />
    
  )
}

export default Navbar