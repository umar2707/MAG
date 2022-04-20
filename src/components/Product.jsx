import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartRedux';
import { useSelector } from 'react-redux';

const Info = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color: rgba(0,0,0,0.2);
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center;
    opacity: 0;
    transition: all 0.5s ease;
    cursor:pointer;
`
const Container = styled.div`
    flex:1;
    margin:5px;
    min-width:280px;
    height:350px;
    justify-content:center;
    background-color:#f5fbfd;
    display:flex;
    align-items:center;
    position:relative;
    &:hover ${Info}{
        opacity: 1;
    }
`
const Circle = styled.div`
    width:200px;
    height:200px;
    background-color:white;
    border-radius:50%;
    position:absolute;
`
const Image = styled.img`
    height:75%;
    z-index:2;
`
const Icon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    margin:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    transition: all 0.5s  ease;
    cursor: pointer;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }    
`

const Product = ({item}) => {
    const dispatch = useDispatch();
    const user = useSelector((state)=>state.user.currentUser)
    const handleClickCart = ()=>{
        if(user){
            dispatch(addProduct({ item }))
        }else{
            console.log('=');
            return  true
        }
    };
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
          <Icon onClick={handleClickCart}>
              <ShoppingCartOutlined />
          </Icon>
          <Icon>
              <Link to = {`/product/${item._id}`}>
                <SearchOutlined />
              </Link>
          </Icon>
          <Icon>
              <FavoriteBorderOutlined />
          </Icon>
      </Info>
    </Container>
  )
}

export default Product
