import React from 'react'
import "./IdSearchBox.css"

class IdSearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '',
                      orderData: null};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }


    handleSubmit(event) {
        event.preventDefault()
        let id = this.state.value;
        fetch('http://localhost:8080/product/' + id, {mode: 'cors'})
            .then(response => response.json())
            .then(response => this.setState({orderData:response}))
        console.log(this.state.orderData)
        this.props.changeOrderData(this.state.orderData)

    }

    render() {
        return (
            <form className="searchForm" onSubmit={this.handleSubmit}>
                <label>
                    search by id:
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="id" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default IdSearchBox
