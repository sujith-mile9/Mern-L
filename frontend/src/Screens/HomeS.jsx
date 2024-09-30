import React from 'react'
import { Row, Col } from 'react-bootstrap';

import Product from '../components/Product'
import Loader from '../components/Loader';
import Message from '../components/Message';

import { useGetProductsQuery } from '../slices/productApiSlice';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
function HomeS() {
    const { data: products , isloading, isError} = useGetProductsQuery();
    
  return (
        <>
                {isloading ? (<Loader/>) : isError ? (<Message> {isError?.data?.messgae || isError.error}</Message>): (

                    <>
                        <ProductCarousel/>
                        <Meta />
                        <h1>Latest Products</h1>
                            <Row>
                                {products?.map((product) => (
                                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                        <Product product={product} />
                                            
                                    </Col>
                                ))}
                            </Row>
                    </>        

                )}
            
        </>
    )
  
}

export default HomeS
