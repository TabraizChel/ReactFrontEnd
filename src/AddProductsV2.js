import React from 'react'
import "./AddProductsV2.css"

class AddProductsV2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            cost: '',
            status: '',
            id:'',
            weightInKg:'',
            category:'',
        };

        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleCostChange = this.handleCostChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleIdChange = this.handleIdChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleDescChange(event) {
        this.setState({description: event.target.value});
    }

    handleCostChange(event) {
        this.setState({cost: event.target.value});
    }

    handleIdChange(event) {
        this.setState({id: event.target.value});
    }

    handleWeightChange(event) {
        this.setState({weightInKg: event.target.value});
    }
    handleCategoryChange(event) {
        this.setState({category: event.target.value});
    }

    parseData(){
        String.prototype.format = function() {
            var s = this,
                i = arguments.length;

            while (i--) {
                s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
            }
            return s;
        };

        let fullString =
            "{\"description\": \"{0}\", \"priceInGBP\": \"{1}\", \"id\": \"{2}\", \"weightInKG\": \"{3}\", \"category\": \"CATEGORY{4}\"}"
                .format(this.state.description,this.state.cost,this.state.id, this.state.weightInKg, this.state.category);
        return fullString;
    }

    handleSubmit(event) {
        event.preventDefault();
        let fullString = this.parseData()
        fetch('http://localhost:8080/product', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'access-control-expose-headers':'*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: fullString
        })
        .then(response => response.headers.forEach(console.log))
        this.props.dataSubmitted(true);
    }

    render() {
        return (
            <form className='AddForm' onSubmit={this.handleSubmit}>
                <label>
                    Add Product:
                    <input type="text" value={this.state.id} onChange={this.handleIdChange}
                           placeholder="Product id"/>
                    <input type="text" value={this.state.description} onChange={this.handleDescChange}
                           placeholder="Product Desc"/>
                    <input type="text" value={this.state.cost} onChange={this.handleCostChange}
                           placeholder="Product cost in GBP"/>
                    <input type="text" value={this.state.weightInKg} onChange={this.handleWeightChange}
                           placeholder="Product weight in kg"/>
                    <input type="text" value={this.state.category} onChange={this.handleCategoryChange}
                           placeholder="Product category"/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default AddProductsV2
