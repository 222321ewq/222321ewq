import React from 'react'
import './style.scss'

const AboutNoButton = ({ subTitle, title, className, pragraphs,images,orderLast }) => {
    return (
        <div className={className}>
            <div className="container">
                <div className="row">
                    <div className={orderLast ? `${orderLast} col col-lg-6`:'col col-lg-6'}>
                        <div className="aboutImageWrap">
                            <img src={images} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="aboutContent">
                            {subTitle && <span>{subTitle}</span>}
                            <h2>{title}</h2>
                            {pragraphs.map((pragraph, i) => (
                                <p key={i}>{pragraph.text}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutNoButton