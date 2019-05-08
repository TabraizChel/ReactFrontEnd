import React from 'react'
import "./IdDelete.css"

class IdDelete extends React.Component {
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
        event.preventDefault()
        let id = this.state.value;
        fetch('http://localhost:8080/product/' + id, {mode: 'cors',
            method: 'DELETE',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }})
    }

    render() {
        return (
            <form className="deleteForm" onSubmit={this.handleSubmit}>
                <label>
                    delete by id:
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="id" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default IdDelete
