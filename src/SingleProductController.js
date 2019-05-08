import React, {Component} from 'react';
import IdSearchBox from "./IdSearchBox";
import Product from "./Product";
class SingleProductController extends Component {

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
            <IdSearchBox changeOrderData={this.changeOrderData}/>
            {this.state.orderData && (
                <div>
                <Product className="singleOrder" values={this.state.orderData}/>
                <img src={"/Users/chelt/Documents/RestAppFirstTry/restfrontend/src/deliveryvan.jpg"} alt="image"/>

                </div>
            )}
        </div>)
    }

}

export default SingleProductController