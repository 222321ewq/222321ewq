import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import FooterArea from '../../../components/FooterArea'
import ContactArea from '../../../components/ContactArea'

// images
import breadcumb from '../../../images/breadcumb/attorneys.jpg'
import team from '../../../images/expert/StevenShakhnevich.jpg'

import './style.scss'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Attorneys', route: '/our-attorneys' },
    { name: 'Attorneys Details' }
]
const teamMemberInfo = [
    { level: 'Practice Areas: ', text: 'Personal Injury, Commercial Litigation' },
    { level: 'Experience: ', text: '10 Years' },
    { level: 'Address: ', text: '1733 Sheepshead Bay Rd Ste 45 Brooklyn NY 11235-3742' },
    { level: 'Phone: ', text: '(718) 492-4444' },
    { level: 'Email: ', text: 'steven@lawfirm-ny.com' },
]
const teamContents = [
    'Delaware Law School J.D. 2006',
    'Pace University, B.A 2003',
]


const StevenShakhnevichPage = () => {
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
                                        <h4>Steven Shakhnevich</h4>
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
                                        <p>Steven Shakhnevich founded Shakhnevich Law Group in 2007. Since that time, the law firm has been representing injured clients in negligence cases. Steve and his staff pride themselves on honesty and integrity. The firm approaches each case with professionalism and sensitivity to the need of each individual client. This method of practice combines diligence and determination with the proper individualized attention that every client deserves from their attorney. In the past, these qualities have proven financially rewarding for the firm’s clients.</p>
                                        <p>Steve is a highly experienced personal injury attorney. He started his career in 1999 working as a paralegal at the law office of Sherman & Basichas, LLP. After 8 years with the firm, both as a paralegal and eventually, as an attorney, Steve started his own law practice. Since that time, he has successfully represented hundredth of injured clients recovering millions in compensation.</p>
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
export default StevenShakhnevichPage




