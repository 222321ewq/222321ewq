import React from 'react'
import Form from '../Form'
import './style.scss'
const ContactArea = ({ className }) => {
    return (
        <div className={className}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-12">
                        <div className="contactInfo">
                            <h2>Get Legal Help Today!</h2>
                            <h6>Call us 24/7 at (718) 492-4444 or fill out the form.</h6>
                            <p>It is important to consult with experienced attorneys who can ensure that you are complying with all of the deadlines and requirements in your case.  To schedule a free initial consultation to discuss your case, contact Shakhnevich Law Group NOW.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactArea