import React from 'react'
import './style.scss'

const BannerSidebar = ({ className, image }) => {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className={className}>
            <h3><span>10</span> Years of Experience In This Field</h3>
            <div className="btnStyle">
                <a href="/contact">Contact Us Now</a>
            </div>
        </div>
    )
}
export default BannerSidebar