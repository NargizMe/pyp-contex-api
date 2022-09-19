import React, { useContext } from 'react';
import {productData} from '../../Contex';
import {useNavigate} from "react-router-dom";
import styled from '@emotion/styled'

function ProductsList() {
    const navigate = useNavigate()
    const {products, setProducts} = useContext(productData);

    console.log(products);

    return (
        <Table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Quantity per unit</th>
                <th>Name</th>
                <th>Reorder level</th>
                <th>Unit price</th>
            </tr>
            </thead>
            <tbody>
            {
                products.map((product) => {
                    return <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product?.quantityPerUnit}</td>
                        <td>{product?.name}</td>
                        <td>{product.reorderLevel}</td>
                        <td>{product.unitPrice}</td>
                        <td onClick={() => navigate(`/productDetail/${product.id}`)}>
                            <Detail>Detail</Detail>
                        </td>
                        {/* <td onClick={() => handleDelete(product.id)}>
                            <Delete>X</Delete>
                        </td> */}
                    </tr>
                })
            }
            </tbody>
        </Table>
    );
}

export default ProductsList;



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

const Detail = styled.button`
  padding: 5px 10px;
  text-align: start;
  font-weight: bold;
  background-color: lightblue;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  
  :hover{
      background-color: black;
      color: white;
  }
`
const Table = styled.table`
  margin: 70px auto;    
  
  tr{
    margin: 13px 0;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
  }
  td{
    padding: 0 13px;
    text-align: center;
  }
  th{
    text-align: center;
    font-size: 18px;
    font-style: italic;
  }
`