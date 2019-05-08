import React, {Component} from 'react';
import IdSearchBox from "./IdSearchBox";
import Product from "./Product";

class ProductDeleteController extends Component {

    constructor(props) {
        super(props)

        this.state = {
            orderData: null
        }


    }

    changeOrderData = (data) => {
        this.setState({orderData: data})
    }

    render() {
        return (<div>
            <IdDeleteBox changeOrderData={this.changeOrderData}/>
            {this.state.orderData && (
                <Product values={this.state.orderData}/>
            )}
        </div>)
    }

}

export default ProductDeleteController