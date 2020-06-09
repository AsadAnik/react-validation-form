import React, { Component } from 'react';
import Button from '../../widgets/widgets';
import Styles from './form.module.css';
import Input from './forms';

///Importing the Database (firebase)..
import { firebaseDB } from '../../firebase';

class App extends Component {
    ///Application State...   
    state = {
        formData: {
            fname: {
                elements: 'input',
                label: true,
                labelText: 'First Name',
                value: '',

                config: {
                    name: 'fname_input',
                    type: 'text',
                    placeholder: 'Enter your firstname..'
                },

                validation: {
                    required: true,
                    minLen: 4,
                },
                valid: false,
                touched: false,
                validationMessage: '',
            },
            lname: {
                elements: 'input',
                label: true,
                labelText: 'Last Name',
                value: '',

                config: {
                    name: 'lname_input',
                    type: 'text',
                    placeholder: 'Enter your lastname..'
                },

                validation: {
                    required: true,
                    minLen: 4,
                },
                valid: false,
                touched: false,
                validationMessage: '',
            },
            email: {
                elements: 'input',
                label: true,
                labelText: 'Email',
                value: '',

                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Type a valid Email..'
                },

                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
            },
            password: {
                elements: 'input',
                label: true,
                labelText: 'Password',
                value: '',

                config: {
                    name: 'pass_input',
                    type: 'password',
                    placeholder: 'Type Password'
                },

                validation: {
                    required: true,
                    minLen: 8,
                },
                valid: false,
                touched: false,
                validationMessage: '',
            },
            repass: {
                elements: 'input',
                label: true,
                labelText: 'Re Type Password',
                value: '',

                config: {
                    name: 'repass_input',
                    type: 'password',
                    placeholder: 'ReType Password'
                },

                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
            },
            bio: {
                elements: 'textarea',
                label: true,
                labelText: 'Bio..',
                value: '',

                config: {
                    name: 'textarea_input',
                    placeholder: 'Write Bio...',
                    rows: 4,
                    cols: 25
                },

                validation: {
                    required: true,
                    minLen: 80,
                },
                valid: false,
                touched: false,
                validationMessage: '',
            },
            select: {
                elements: 'select',
                label: true,
                labelText: 'Age',
                value: '',

                config: {
                    name: 'select_input',
                    options: [
                        { val: '0', age: 'AGE' },
                        { val: '1', age: '10-20' },
                        { val: '2', age: '20-30' },
                        { val: '3', age: '30-40' },
                        { val: '4', age: '40+' }
                    ]
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
            },
        }
    }

    //Update State when onChange method will calling...   
    updateState = (newState) => {
        this.setState({
            formData: newState
        })
    }

    //Submit handler method....   
    submittedForm = (e) => {
        e.preventDefault();
        ///Add the Data to specific properties of object like value.. 
        //Loop thow the object and find value and keep data here..  
        let formValues = {};
        let validData = true;

        //Loop the state to set into the new state...   
        for (let key in this.state.formData) {
            formValues[key] = this.state.formData[key].value;
        }
        //for throw the state and checking for valid data..   
        for (let key in this.state.formData) {
            validData = this.state.formData[key].valid && validData;
        }
        //Checking full state if valid then access for data in console...   
        if (validData) {
            alert('Successfully Collected Your Informations!')
            // console.log(formValues);
            ///Add Data to Database...
            firebaseDB.ref('users').push(formValues)
                .then(() => console.log('Added Data Successfully to Database!'))
                .catch(e => console.log(e))
        }
    }

    //Rendering Method of the application...   
    render() {
        //The Return Statement..   
        return (
            <>
                <form onSubmit={this.submittedForm} className={Styles.form}>
                    <Button type='close' />

                    <Input
                        formData={this.state.formData}
                        change={(newState) => this.updateState(newState)}
                        changeWithBlur={(newState) => this.updateState(newState)}
                    />
                   <Button type='submit' value='submit' />
                </form>
            </>
        )
    }
}

export default App;