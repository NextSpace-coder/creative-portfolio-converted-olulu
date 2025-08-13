import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


const ContactForm = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            })
        } else {
            validator.showMessages();
        }
    };

    return (
        <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
            <div className="form-group">
                <input
                    value={forms.name}
                    type="text"
                    name="name"
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                    className="form-control"                    
                    placeholder="Your Name" />
                {validator.message('name', forms.name, 'required|alpha_space')}
            </div>
            <div className="form-group">
                <input
                    value={forms.email}
                    type="email"
                    name="email"
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                    className="form-control"  
                    placeholder="Your Email" />
                {validator.message('email', forms.email, 'required|email')}
            </div>
            <textarea
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
                value={forms.message}
                type="text"
                name="message"
                className="form-control"  
                placeholder="Message">
            </textarea>
            {validator.message('message', forms.message, 'required')}
            <div className="submit-area">
                <button type="submit">Submit Now</button>
            </div>
        </form >
    )
}

export default ContactForm;