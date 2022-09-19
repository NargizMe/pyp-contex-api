import React from 'react';
import AddProduct from '../AddProduct';
import ProductList from '..//ProductList';
import ProductDetail from '../ProductDetail';
import styled from '@emotion/styled'

import {
    Route,
    Routes,
    Link,
} from "react-router-dom";

function Home() {
    // console.time('filter array');
    // console.timeEnd('filter array');
    return (
        <>
            <NavBar>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/productDetail/:id'>Product Detail</Link></li>
                    <li><Link to='/addProduct'>Add Product</Link></li>
                </ul>
            </NavBar>

            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/productDetail/:id" element={<ProductDetail />} />
                <Route path="/addProduct" element={<AddProduct />} />
            </Routes>

            <Footer>
                <span>Copyright 2022 by Nargiz. All Rights Reserved.</span>
            </Footer>
        </>
    );
}

export default Home;


// ----------------STYLE------------------
const NavBar = styled.ul`
  background-color: lightblue;
  position: fixed;
  top: 0;
  width: 100vw;
  
  ul{
    display: flex;
    list-style: none;
    justify-content: space-between;
    width: 500px;
    margin: 0 auto;
    padding: 13px;
  }
  
  a{
    text-decoration: none;
    color: black;
    font-size: 17px;
    font-style: italic;
    padding: 13px;
  }
  
  a:hover{
    background-color: black;
    color: white;
  }
`

const Footer = styled.footer`
  padding: 15px 13px;
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  
  span{
    font-size: 13px;
  }
`
