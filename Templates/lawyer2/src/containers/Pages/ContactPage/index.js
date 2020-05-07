import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import FooterArea from '../../../components/FooterArea'
import Form from '../../../components/Form'

// images
import breadcumb from '../../../images/breadcumb/call.jpg'

import './style.scss'
import GoogleMaps from '../../../components/GoogleMaps';

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Contact', },
]


const ContactPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Contact"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />

            <div className="contactusPageArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="contactUsInfo">
                                <h3>Our Locations:</h3>
                                <div className="locationsBackgroundColor"> 
                                <h4>MAIN OFFICE:</h4>
                                <span>1733 Sheepshead Bay Rd</span>
                                <span>Suite 45</span>
                                <span>Brooklyn, NY 11235</span>
                                <span>(718) 492-4444</span>
                                </div>
                                <div className="locationsBackgroundColor">
                                <h4>LOWER MANHATTAN:</h4>
                                <span>233 Broadway</span>
                                <span>Suite 810</span>
                                <span>New York, NY 10279</span>
                                <span>(212) 233-7800</span>
                                </div>
                                <div className="locationsBackgroundColor">
                                <h4>NEW JERSEY OFFICE:</h4>
                                <span>972 Broad Street</span>
                                <span>Suite 602</span>
                                <span>Newark, NJ 07102</span>
                                <span>(212) 233-7800</span>
                                </div>
                                <h4>EMAIL:</h4>
                                <span>info@shakhnevich.com</span>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="contactUSForm">
                                <h3>Quick Contact Form:</h3>
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="googleMapsForm">
                        <GoogleMaps />
                    </div>
            </div>
            <FooterArea />
        </Fragment>
    )
}
export default ContactPage