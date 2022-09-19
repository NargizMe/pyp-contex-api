import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import styled from '@emotion/styled';
import axios from "axios";

function ProductDetail() {
    const params = useParams();
    const [detailProduct, setDetailProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios(`https://northwind.vercel.app/api/products/${params.id}`).then(result => {
            setDetailProduct(result.data);
        })
    }, [])


    if (!Object.keys(detailProduct).length) {
        return null;
    }

    return (
        <Container>
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                <h2>Supplier Detail</h2>
            </div>
            <div>
                <h3>ID:</h3>
                <p>{detailProduct.id}</p>
            </div>
            <div>
                <h3>Company Name:</h3>
                <p>{detailProduct.name}</p>
            </div>
            <div>
                <h3>Contact Name:</h3>
                <p>{detailProduct.quantityPerUnit}</p>
            </div>
            <div>
                <h3>Contact Name:</h3>
                <p>{detailProduct.reorderLevel}</p>
            </div>
            <div>
                <h3>City</h3>
                <p>{detailProduct.unitPrice}</p>
            </div>
        </Container>
    );
}

export default ProductDetail;


//-------------style---------

const Container = styled.div`
  margin: 70px 13px;
  
  h2{
    color: darkblue;
  }
  
  div{
    display: flex;
    align-items: end;
    margin: 13px 0;
    p{
      margin-left: 10px;
    }
  }
  
  button{
    padding: 5px;
    margin-right: 13px;
    font-weight: bold;
    background-color: lightblue;
    border-radius: 3px;
    border: none;
    cursor: pointer;
  }

  button:hover{
    background-color: black;
    color: white;
  }
`
