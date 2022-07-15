import React, { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from 'nanoid';


class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }
    
    handleChange = e => {
        // const { name, number } = e.currentTarget;
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    }

    handleSubmit = e => { 
        e.preventDefault();

        console.log(this.state);
        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({ name: '', number: '' })
    };

    render() {
        return (
            // <p className="form_title">Phonebook</p>
        
            <div className="form__container">
                <form action="" onSubmit={ this.handleSubmit}>
                    <label className="form__label">
                        Name
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </label>
                    <label className="form__label">
                        Number
                        <input
                            type="tel"
                            name="number"
                            value={this.state.number}
                            onChange={this.handleChange}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </label>
                    <button type="submit" className="">Add contact</button>
                </form>
            </div>
        );
    };
};

export default ContactForm;