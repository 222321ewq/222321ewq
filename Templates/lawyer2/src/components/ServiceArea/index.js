import React from "react";
import SectionTitle from '../Title'
import './style.scss'

const ServiceArea = ({ className, title, subTitle,services }) => {
    return (
        <div className={className}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <SectionTitle
                            title={title}
                        />
                    </div>
                    {services.map((service, index) => (
                        <div key={index} className="col-lg-6 col-md-20">
                            <div className="serviceWrap">
                                <div className="serviceIcon">
                                <a href={service.link}><i className={`fi ${service.icon}`}></i></a>
                                </div>
                                <div className="serviceContent">
                                <a href={service.link}><h3>{service.title}</h3></a>
                                    <p>{service.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
export default ServiceArea