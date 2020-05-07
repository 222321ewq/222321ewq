import React from 'react'
import './style.scss'
import {  } from 'react-router-dom'

const services = [
    { link: '/contact', icon: 'flaticon-calendar', subtitle: 'Schedule Your', title: 'Appointment' },
    { link: '/contact', icon: 'flaticon-mail', subtitle: 'Get Free', title: 'Expert Advice' },
    { link: '/our-attorneys', icon: 'flaticon-user', subtitle: 'Meet our', title: 'Professional Team' },
]
const Service = props => {
    return (
        <div className={props.className}>
            <div className="container">
                <div className="row">
                    {services.map((service, i) => (
                        <div key={i} className="col-lg-4 col-md-6">
                            <div className="serviceItem">
                            <a href={service.link}>
                                <div className="serviceIcon">
                                <i className={service.icon}></i>
                                </div>
                                <div className="serviceText">
                                    <span>{service.subtitle}</span>
                                    <h3>{service.title}</h3>
                                </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Service