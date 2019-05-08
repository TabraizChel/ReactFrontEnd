import React from 'react'
import Product from './Product'
import "./ProductView.css";
const ProductView = (props) => {
    console.log(props.values)
    if (props.values.length === 0){
        return <div></div>
    }

    else if(props.values.length === 1 ){
        return <div>
            <Product values={props.values[0]}/>
        </div>
    }

    else {
        let returnTag = []
        props.values.map((order, index) => {
            console.log(order)
            returnTag.push(<Product className="displayAll" key={index} values={order}/>)
        })
        return returnTag
    }
}

export default ProductView;