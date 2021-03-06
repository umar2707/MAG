import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product';
import { publicRequest } from '../requestMethods';
import axios from 'axios';

const Container = styled.div`
  padding:20px;
  display:flex;
  flex-wrap: wrap;
`

const Products = ({cat,filters,sort}) => {
  const [products,setProducts] = useState([])
  const [filteredProducts,setFilteredProducts] = useState([])
  useEffect(()=>{
    const getProducts = async ()=>{
      try{
        const res = await axios.get(cat ? `http://18.117.85.109:5000/api/products?category=${cat}` 
                                        : `http://18.117.85.109:5000/api/products`);
        setProducts(res.data)
      }catch(err){
        console.log(err);
      }
    }
    getProducts()
  },[cat])

  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter(item => 
        Object.entries(filters).every(([key,value])=>
        item[key].includes(value)
      ))
    )
  },[products,cat,filters])

  useEffect(()=>{
    if(sort === "Oxirgi qo'shilgan"){
      setFilteredProducts(prev=>
        [...prev].sort((a,b) => a.createdAt - b.createdAt )
      );
    }else if(sort === "O'sib borish"){
      setFilteredProducts(prev=>
        [...prev].sort((a,b) => a.price - b.price)
      );
    }else{
      setFilteredProducts(prev=>
        [...prev].sort((a,b) => b.price - a.price)
      );
    }
  },[sort])

  return (
    <Container>
      {cat 
        ? filteredProducts.map((item,i) => <Product item={item} key={i} />) 
        : products
          .slice(0,8)
          .map((item,i) => <Product item={item} key={i} />)}
    </Container>
  )
}

export default Products
