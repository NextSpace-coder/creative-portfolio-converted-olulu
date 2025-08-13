import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'


const ContactArea = (props) => {
    return (
        <section id="contact" className="wpo-contact-area section-padding">
            <div className="container">
                <div className="col-lg-6">
                    <div className="wpo-section-title">
                        <h2>Contact Me</h2>
                        <p>Lorpsum doloramet, consectetur adipiscing elit. Quam dolor sed tortor.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-sm-7">
                        <div className="wpo-contact-form-area">
                            <ContactForm/>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5">
                        <div className="contact-info">
                            <div className="info-item email">
                                <h3>Email</h3>
                                <span>olulu562@gmail.com</span>
                            </div>
                            <div className="info-item phone">
                                <h3>Phone</h3>
                                <span>(+852) 256 328 698</span>
                                <span>(+852) 365 025 589</span>
                            </div>
                            <div className="info-item adress">
                                <h3>Address</h3>
                                <span>90 Green Bypass  Rd, FseeL 3290,
                                    United States</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactArea;