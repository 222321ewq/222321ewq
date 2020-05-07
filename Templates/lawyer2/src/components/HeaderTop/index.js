import React from 'react'
import './style.scss'
const HeaderTop = props => {
    return (
        <div className={props.className}>
            <div className="container">
                <div className="headerTopMainWrapper">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 col-12 col-lg-5">
                            <ul className="d-flex accountLoginArea">
                                <li><i className="fa fa-map-marker" ></i>1733 Sheepshead Bay Rd, Suite 45, Brooklyn, NY 11235</li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-sm-12 col-12 col-lg-5">
                            <ul className="headerContact">
                                <li><i className="fa fa-phone"></i> (718) 492-4444</li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-12">
                            <div className="btnStyle text-right">
                                <a href="contact">Free Consultation </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderTop