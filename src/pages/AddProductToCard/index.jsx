import React, {useContext, useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {productData} from '../../Contex';
import styled from '@emotion/styled';
import axios from "axios";

function ProductDetail() {
    const {card, setCard} = useContext(productData);
    const navigate = useNavigate();

    function onDelete(id){
        setCard((cards) => cards.filter(c => c.id !== id))
    }

    return (
        <Container>
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                <h2>Product Card</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Quantity Per Unit</th>
                        <th>Reorder Level</th>
                        <th>Unit Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    card.map((el, i) => {
                        return <tr key={el.id}>
                            <td>{el.id}</td>
                            <td>{el.name}</td>
                            <td>{el.quantityPerUnit}</td>
                            <td>{el.reorderLevel}</td>
                            <td>{el.unitPrice}</td>
                            <td>
                                <Delete onClick={() => onDelete(el.id)}>Remove</Delete>
                            </td>
                        </tr>
                    })
                }
                </tbody>
            </table>
            <button onClick={() => setCard([])}>Clear Card</button>
        </Container>
    );
}

export default ProductDetail;


//-------------style---------
const Delete = styled.button`
  padding: 5px 10px;
  text-align: start;
  color: white;
  background-color: red;
  border-radius: 3px;
  border: none;
  cursor: pointer;
`

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

  button:hover{
    background-color: black;
    color: white;
  }
`
