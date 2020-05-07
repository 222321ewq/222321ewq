import React from 'react'
import logo from '../../images/logo/logo.png'
import './style.scss'
const footerLinks = [
    {
        title: 'Quick Link', menus: [
            { name: 'Home', route: '/' },
            { name: 'About', route: '/about' },
            { name: 'Attorneys', route: '/our-attorneys' },
            { name: 'Contact', route: '/contact' },
        ]
    },
    {
        title: 'Practice Areas', menus: [
            { name: 'Auto Accidents', route: '/auto-accidents' },
            { name: 'Premises Liability', route: '/premises-liability' },
            { name: 'Construction Accidents', route: '/construction-accidents' },
            { name: 'Child Care Negligence', route: '/child-care-negligence' },
            { name: 'Elder Care Negligence', route: '/elder-care-negligence' },
            { name: 'Medical Malpractice', route: '/medical-malpractice' },
            { name: 'Wrongful Death', route: '/wrongful-death' },
            { name: 'Workers’ Compensation', route: '/workers-compensation' },
            { name: 'Real Estate Litigation', route: '/real-estate' },
            { name: 'Business Disputes', route: '/business-law' },
        ]
    },
    {
        title: 'Contact Us', menus: [
            { name: 'MAIN OFFICE:' },
            { name: '1733 Sheepshead Bay Rd', },
            { name: 'Suite 45', },
            { name: 'Brooklyn, NY 11235', },
            { name: '(718) 492-4444', },
            { name: 'LOWER MANHATTAN OFFICE:' },
            { name: '233 Broadway', },
            { name: 'Suite 810', },
            { name: 'New York, NY 10279', },
            { name: '(212) 233-7800', },
            { name: 'NEW JERSEY OFFICE:' },
            { name: '972 Broad Street', },
            { name: 'Suite 602', },
            { name: 'Newark, NJ 07102', },
            { name: '(973) 500-6800', },
        ]
    }
]

const FooterArea = () => {
    return (
        <footer className="footerArea">
            <div className="footerTopArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footerLogo">
                                <a href="/">
                                    <img src={logo} alt="" />
                                </a>
                                <p>Our firm has handled hundredth of car accident cases. Over the years, we have developed in-depth knowledge of the applicable law and the claim process.</p>
                            </div>
                        </div>
                        {footerLinks.map((menu, i) => (
                            <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footerWrap">
                                    <h3>{menu.title}</h3>
                                    <ul>
                                        {menu.menus.map((item, i) => (
                                            <li key={i}>{item.route ? <a href={item.route}>{item.name}</a> : `${item.name}`}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footerBottomArea">
                <div className="container">
                    <div className="footerBottomContent">
                        <div className="row">
                            <div className="col-md-8 col-sm-10 col-12">
                                <span>Privacy Policy | © 2019 Shakhnevich. All rights reserved.</span>
                            </div>
                            <div className="col-md-4 col-sm-2 col-12">
                                <ul className="socialListFooter">
                                    <li><a href="https://www.facebook.com/shakhnevichlaw/"><i className="fa fa-facebook" ></i></a></li>
                                    <li><a href="https://twitter.com/shakhnevichlaw/"><i className="fa fa-twitter" ></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default FooterArea