import React, { Fragment } from 'react'
import HeaderBottom from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import HeroSlider from '../../../components/HeroSlider'
import Service from '../../../components/Service'
import AboutWithButton from '../../../components/AboutWithButton'
import ServiceArea from '../../../components/ServiceArea'
import ContactArea from '../../../components/ContactArea'
import FooterArea from '../../../components/FooterArea'
// images
import about from '../../../images/about/logo.jpg'

const aboutText = [
    { text: 'For more than a decade, our law firm has successfully represented clients throughout the New York metro area. We focus on personal injury and worker’s compensation cases. In addition to our main office in Sheepshead Bay, Brooklyn, we have offices in Lower Manhattan and Newark, New Jersey. Our offices are easily accessible by all forms public transportation. For our injured clients, we provide home or hospital visits 24 hours, 7 days per week.' },
    { text: 'If you are injured late at night, on a weekend or during holiday, do not wait. Our attorneys will immediately respond to your inquiry by telephone, email, text or a social media message. We will gladly provide a free consultation and you have absolutely no obligation to hire us. Our goal is to combine experience and knowledge with compassion and culturally-sensitive legal representation. Over the years, this philosophy has been the backbone of our practice.' },
]

const heroSliders = [
    {
        images: 'slideWrapperOne',
        title: 'Injury Attorneys',
        subTitle: '(718) 492 - 4444',
        text: 'Shakhnevich Law Group',
        button: 'Contact us now'
    },
    {
        images: 'slideWrapperTwo',
        title: 'Free Consultation',
        subTitle: '24 hours 7 days a week',
        text: 'Shakhnevich Law Group',
        button: 'Contact us now'
    },
    {
        images: 'slideWrapperThree',
        title: 'We speak your language',
        subTitle: 'Español - Русский - Uzbek - ქართული',
        text: 'Shakhnevich Law Group',
        button: 'Contact us now'
    },
    
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
        content: 'Victims of construction accidents and their families turn to Shakhnevich Law Group because we have a proven track record of success. For more than 10 years, our firm has obtained millions for train accident victims and their families. '
    },
    {
        link: '/child-care-negligence',
        icon: 'flaticon-child',
        title: 'Child Care Negligence',
        content: 'Our mission to safeguard your parenting time with your children and secure your future. '
    },
    {
        link: '/elder-care-negligence',
        icon: 'flaticon-old',
        title: 'Elder Care Negligence',
        content: 'Shakhnevich Law Group has vigorously advocated for and represented victims of nursing home abuse by aggressively pursuing maximum compensation for their tragic injuries. '
    },
    {
        link: '/medical-malpractice',
        icon: 'flaticon-doctor',
        title: 'Medical Malpractice',
        content: 'Our attorneys have years of experience in successfully adjudicating medical malpractice lawsuits, '
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
        content: 'Shakhnevich Law Group is dedicated to promoting the interests of our clients and are prepared to negotiate hard and litigate even harder if that is the only way we can create a positive outcome.'
    },
    {
        link: '/business-law',
        icon: 'flaticon-man',
        title: 'Business Disputes',
        content: 'At Shakhnevich Law Group our attorneys are well versed in business law and can help make sure that all the paperwork is straightened out to help prevent an upset.'
    }
]


const HomePage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBottom className="headerBottomArea" />
            </header>
            <HeroSlider 
                sliders={heroSliders}
                className="heroSliderArea" />
            <Service className="serviceArea" />
            <AboutWithButton
                className="aboutArea"
                title="About Us"
                images={about}
                pragraphs={aboutText}
            />
            <ServiceArea
                className="ourServiceArea"
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
export default HomePage