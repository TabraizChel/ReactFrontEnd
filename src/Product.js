import React from 'react'
import "./Products.css"

const Product = (props) =>{

    return <div className={props.className}>
        <p><div>Order ID: {props.values.id},</div>
            <div>Product Description: {props.values.description},   Product Cost in GBP: {props.values.priceInGBP},</div>
            Product Category: {props.values.category},   Product weight in KG: {props.values.weightInKG} </p>
    </div>


}

export default Product