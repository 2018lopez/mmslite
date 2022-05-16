import * as React from 'react'
import ProductsCard from './comp/Product'
import ProductList from './comp/ProductList'
import { useLocation } from "react-router-dom";
import {Box, Typography } from '@mui/material'

const items =[
    {
        'id':'1',
        'title':'Apple',
        'price':'23',
        'description':'Sold by pound (lb)'
    }
]

const ProductListing = ()=>{
    const location = useLocation();

    return(
        <div>
            <Box margin={5}>
                <Typography color="success.main" variant="h3"> Stall Product - {location.state.name}</Typography>
           
            
            <ProductList items={items}/>
            </Box>
        </div>
    );

} 

export default ProductListing