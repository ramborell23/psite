import React, { Component } from 'react';
import axios from 'axios'
import '../StyleSheet/contact.css';

class Contact extends React.Component {
    constructor() {
        super()
        this.state = {
            coantactName: '',
            coantactNumber: '',
            coantactEmail: '',
            testReturnCalendlyApi:'',
        }
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    checkCalendlyApi = () => {
        const {testReturnCalendlyApi} = this.state
        var config = {
            headers: {'X-TOKEN': 'CHMBIJMLPNATOWIQ3SDQ3QN6C5FWSMRN'}
          };
        axios
            .get('https://calendly.com/api/v1/users/me', config)
            .then(response => {
                this.setState({
                    testReturnCalendlyApi: response.data,
                });
                console.log(this.state.testReturnCalendlyApi)
            })
            .catch(err => {
                console.log("error fetching Calendly return");
                console.log(err);
            });
    };



    render() {
        const { coantactName, coantactNumber, coantactEmail } = this.state
        console.log('coantactName', coantactName)
        console.log('coantactNumber', coantactNumber)
        console.log('coantactEmail', coantactEmail)
        return (
            <div>
                Contact Page
                <h2>Let's get to work!</h2>
                <br />
                Name : {' '}
                <input
                    name='coantactName'
                    onChange={this.handleInput}
                />
                <br />
                Email : {' '}
                <input
                    name='coantactEmail'
                    onChange={this.handleInput}
                />
                <br />
                Number : {' '}
                <input
                    name='coantactNumber'
                    onChange={this.handleInput}
                />
                <br/>
                <button
                onClick={this.checkCalendlyApi}>
                    Api check
                </button>

            </div>
        )
    }
}
export default Contact