import React, { useState } from 'react'
import logo from '../../images/logo/logo.png'
import './style.scss'

const HeaderBottom = props => {
    const [responsive, setResponsive] = useState(false)
    
    const responsiveHandler = () => {
        setResponsive(!responsive)
    }
    return (
        <div className={props.className}>
            <div className="container">
                <div className="headerBottomMainWrapper">
                    <div className="row">
                        <div className="col-lg-5 col-md-10 col-sm-6 col-8">
                            <div className="logo">
                                <a href="/">
                                    <img src={logo} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className={responsive ? "col-lg-6 responsiveWrapper active" : "col-lg-7 responsiveWrapper"}>
                            <ul className="mainMenuWrap">
                                <li><a href='/'>Home</a></li>
                                <li><a href='/about'>About Us</a></li>
                                <li><a href='/about'>Practice Areas</a>
                                    <ul className="subMenu">
                                        <li><a href='/auto-accidents'>Auto Accidents</a></li>
                                        <li><a href='/premises-liability'>Premises Liability</a></li>
                                        <li><a href='/construction-accidents'>Construction Accidents</a></li>
                                        <li><a href='/child-care-negligence'>Child Care Negligence</a></li>
                                        <li><a href='/elder-care-negligence'>Elder Care Negligence</a></li>
                                        <li><a href='/medical-malpractice'>Medical Malpractice</a></li>
                                        <li><a href='/wrongful-death'>Wrongful Death</a></li>
                                        <li><a href='/workers-compensation'>Workers Compensation</a></li>
                                        <li><a href='/real-estate'>Real Estate Litigation</a></li>
                                        <li><a href='/business-law'>Business Disputes</a></li>
                                    </ul>
                                </li>
                                <li><a href='/our-attorneys'>Our Attorneys</a></li>
                                <li><a href='/contact'>Contact</a></li>
                            </ul>
                        </div>
                            <div className="col-lg-1 col-md-2 col-sm-6 col-4">
                            <div className="searchMenuWrapper">
                                
                                <div onClick={responsiveHandler} className="responsiveTrigger">
                                    <span className="first"></span>
                                    <span className="second"></span>
                                    <span className="third"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderBottom