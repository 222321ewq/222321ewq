import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import FooterArea from '../../../components/FooterArea'
import ContactArea from '../../../components/ContactArea'

// images
import breadcumb from '../../../images/breadcumb/attorneys.jpg'
import team from '../../../images/expert/MarthaTabachnikova.jpg'


import './style.scss'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Attorneys', route: '/our-attorneys' },
    { name: 'Martha Tabachnikova' }
]
const teamMemberInfo = [
    { level: 'Practice Area: ', text: 'Workers Compensation, Personal injury' },
    { level: 'Experience: ', text: '10 Years' },
    { level: 'Address: ', text: '1733 Sheepshead Bay Rd Ste 45 Brooklyn NY 11235-3742' },
    { level: 'Phone: ', text: '(718) 492-4444'},
    { level: 'Email: ', text: 'martha@lawfirm-ny.com' },
]
const teamContents = [
    'New England School of Law Boston'
]


const MarthaTabachnikovaPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Our Attorneys"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <div className='AttorneyArea'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-12">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="AttorneyImgWrap">
                                        <div className="AttorneyImg">
                                            <img src={team} alt="" />
                                        </div>
                                        <h4>Martha Tabachnikova</h4>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="AttorneyContent">
                                        <h4>Important Information</h4>
                                        <ul className="AttorneyInfo">
                                            {teamMemberInfo.map((teamInfo, i) => (
                                                <li key={i}>
                                                    <span>{teamInfo.level}</span>
                                                    {teamInfo.text}
                                                </li>
                                            ))}
                                        </ul>
                                        <ul className="socialShare">
                                            <li><a href="https://www.facebook.com/shakhnevichlaw/"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="https://twitter.com/shakhnevichlaw/"><i className="fa fa-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="SingleAttorneyInfo">
                                        <h3>Personal Experience</h3>
                                        <p>Martha Tabachnikova, handles workers’ compensation cases for the firm.She received her undergraduate degree from Hunter College in 2008 and her Juris Doctorate degree cum laude from New England School of Law Boston in 2011.</p>
                                        <p>She is admitted in both New York and New Jersey. Ms. Tabachnikova litigates workers’ compensation claims all over the State of New York. Martha Tabachnikova started her career in workers compensation at an insurance defense firm where she handled claims on behalf of carriers including trials and appeals. Since then, she has been helping injured workers receive the care and treatment they deserve.</p>
                                        <p>Ms. Tabachnikova handles claims from every aspect including trials, depositions, and appeals.</p>
                                        <h5>Education</h5>
                                        <ul>
                                            {teamContents.map(teamContent => (
                                                <li key={teamContent}>{teamContent}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactArea
                className="contactArea"
            />
            <FooterArea />
        </Fragment>
    )
}
export default MarthaTabachnikovaPage