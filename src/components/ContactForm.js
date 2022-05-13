import React, { useState } from 'react'
import { validateEmail } from '../utils/helpers'

function ContactForm() {

    // track the form state using hooks
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    })

    const { name, email, message } = formState

    const [errorMessage, setErrorMessage] = useState('')

    function handleChange(event) {

        // run the validations BEFORE submitting to formState
        if (event.target.name === 'email') {
            const isValid = validateEmail(event.target.value)
            if (!isValid) {
                // initial error message is ''
                // assign this message when email is '!isValid'
                setErrorMessage('Your email is invalid')
            } else {
                setErrorMessage('')
            }
        } else {
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required`)
            } else {
                setErrorMessage('')
            }
        }
        console.log(errorMessage)
        // update the 'formState' with the new values
        // ... is there to preserve the REST of the 'formState' properties (e.g. email/message) while
        // updating the 'name' property only
        // using...[]...you can reference variable for object property names
        if (!errorMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value })
        }   
    }

    console.log(errorMessage)

    function handleSubmit(event) {
        event.preventDefault()
        console.log('Clicked submit')
        if (errorMessage.length > 0) {
            setErrorMessage('FORM ERROR')
        }
        console.log('SUBMIT', errorMessage)
    }

    return (
        <section>
            <div className="contact">
                <h2>Contact Me</h2>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" defaultValue={name} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" name="email" defaultValue={email} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" cols="30" rows="10" defaultValue={message} onChange={handleChange}>
                        </textarea>
                    </div>
                    {errorMessage && (
                        <div style={{paddingTop: '1rem'}}>
                            <p>{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default ContactForm