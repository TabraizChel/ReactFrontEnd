import React from 'react'

class AddOrders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
    }

    handleSubmit(event) {
        fetch('http://localhost:8080/order',{
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.parse(this.state.value)
        })
        .then(response => console.log(response.json()))
        console.log(JSON.parse(this.state.value))
        this.sleep(10000);
        this.props.changeData(true);
        alert('An order was submitted: ' + this.state.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Add Order:
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Order Desc" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default AddOrders
