import React, { Component } from 'react';
import axios from 'axios';
import DisplayData from './DisplayData';

export class Display extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            items: [],
            isLoaded: false
        }

        this.fetchData = this.fetchData.bind(this);
    }
    
    fetchData() {
        axios
            .get("https://restcountries.eu/rest/v2/region/asia")
            .then(json => {
                this.setState({
                    items: json, isLoaded: true
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div>
                <h1 className="country">Countries of Asia</h1>
                <div className="button">
                <button className="btn" onClick={this.fetchData}>Click Here</button> 
                </div>

                    { this.state.isLoaded ? (<DisplayData value = {this.state.items}/>) : null}
            </div>
        )
    }
}

export default Display
