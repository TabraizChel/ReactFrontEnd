import React, {Component} from 'react';
import ProductView from './ProductView';
import './App.css';
import AddProductsV2 from "./AddProductsV2";
import SingleProductController from "./SingleProductController";
import IdDelete from "./IdDelete"
import UpdateProducts from "./UpdateProducts"

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            noData:false
        };
    }

    changeData = (changer) => {
        if (changer) {
            this.setState({data: null});
        }
    }

    fetchAllData() {
        fetch('http://localhost:8080/product', {mode: 'cors'})
            .then(response => response.json())
            .then(response => response._embedded.productResourceList)
            .catch(error => this.setState({noData:true}))
            .then(data1 => this.setState({data: data1,noData:false}))
    }

    render() {
        if (this.state.data === null && this.state.noData === false) {
            this.fetchAllData();
        }

        return (
            <div className="App">
                <AddProductsV2 dataSubmitted={this.changeData}/>
                <UpdateProducts dataSubmitted={this.changeData}/>
                {this.state.data && (
                    <div className="productDisplay">
                        <h1>Product List:</h1>
                        <ProductView values={this.state.data}/>
                    </div>
                )}
                {<SingleProductController/>}
                {<IdDelete/>}
            </div>
        );
    }
}

export default App;
