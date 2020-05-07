import React, { Fragment } from 'react'
import HeaderBottom from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import Service from '../../../components/Service'
import AboutNoButton from '../../../components/AboutNoButton'
import ServiceArea from '../../../components/ServiceArea'
import ContactArea from '../../../components/ContactArea'
import FooterArea from '../../../components/FooterArea'
// images
import about from '../../../images/single/about.jpg'
import breadcumb from '../../../images/breadcumb/about.jpg'

import './style.scss'

const aboutText = [
    { text: 'The Shakhnevich Law Group is a successful firm. Steven Shakhvecih has been leading his team of attorneys for more than 10 years. The following explains the different types of law, and why you may have a claim. Your choice in a representation directly affects the amount you will receive in compensation for how you have been harmed. We understand the difference your representation makes in the outcome of your case.' },
    { text: 'Many firms take a lot of cases, rendering them unable to provide the attention necessary to get the highest results for their clients. We will take your case to trial to get you adequate compensation; we consistently get much more for our clients than many other firms. This takes time, a lot of financial resources, and requires the highest level of skill.' },
]

const services = [
    {
        link: '/auto-accidents',
        icon: 'flaticon-crash',
        title: 'Auto Accidents',
        content: 'Our attorneys have handled many auto accident claims for our clients, helping them navigate complex insurance laws and legal issues.'
    },
    {
        link: '/premises-liability',
        icon: 'flaticon-alert',
        title: 'Premises Liability',
        content: 'Our lawyers have an experience handling premises liability claims and will fight on your behalf to obtain a favorable outcome.'
    },
    {
        link: '/construction-accidents',
        icon: 'flaticon-helmet',
        title: 'Construction Accidents',
        content: 'Shakhnevich Law Group firm has obtained a proven track record of success for construction accident victims.'
    },
    {
        link: '/child-care-negligence',
        icon: 'flaticon-child',
        title: 'Child Care Negligence',
        content: 'Our attorney`s mission is to safeguard your parenting time with your children and secure your children`s future.'
    },
    {
        link: '/elder-care-negligence',
        icon: 'flaticon-old',
        title: 'Elder Care Negligence',
        content: 'Shakhnevich Law Group has vigorously advocated for and represented victims of nursing home abuse.'
    },
    {
        link: '/medical-malpractice',
        icon: 'flaticon-doctor',
        title: 'Medical Malpractice',
        content: 'Our attorneys have years of experience in successfully adjudicating medical malpractice lawsuits.'
    },
    {
        link: '/wrongful-death',
        icon: 'flaticon-grave',
        title: 'Wrongful Death',
        content: 'Our wrongful death compensation attorneys will do whatever we can to help you through this dark time.'
    },
    {
        link: '/workers-compensation',
        icon: 'flaticon-contract',
        title: 'Workers’ Compensation',
        content: 'Our law firm is dedicated to helping workers who have been injured receive workers compensation benefits.'
    },
    {
        link: '/real-estate',
        icon: 'flaticon-law',
        title: 'Real Estate Litigation',
        content: 'Shakhnevich Law Group is dedicated to promoting the interests of our clients and are prepared to negotiate hard with successful outcome.'
    },
    {
        link: '/business-law',
        icon: 'flaticon-man',
        title: 'Business Disputes',
        content: 'At Shakhnevich Law Group our attorneys are well versed in business law and can help make sure that all the paperwork is straightened out to help prevent an upset.'
    }
]

const breadcumbMenu = [
    {name:'Home',route:'/'},
    {name:'About Us'}
]

const AboutPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBottom className="headerBottomArea" />
            </header>
            <Breadcumb 
                className="breadcumbArea"
                title="About Us"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <Service className="serviceArea mt-0" />
            <AboutNoButton
                className="aboutArea aboutAreaStyleTwo"
                title="Why You Need Us"
                subTitle="We Are Experts"
                images={about}
                orderLast="order-last"
                pragraphs={aboutText}
            />
            <ServiceArea
                className="ourServiceArea ourServiceAreaStyleTwo"
                title="Areas of Practice"
                services={services}
            />
            <ContactArea
                className="contactArea"
            />
            <FooterArea/>
        </Fragment>
    )
}
export default AboutPage