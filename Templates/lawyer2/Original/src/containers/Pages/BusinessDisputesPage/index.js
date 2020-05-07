import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import CategorySidebar from '../../../components/CategorySidebar'
import FooterArea from '../../../components/FooterArea'
import BannerSidebar from '../../../components/BannerSidebar'
import ContactArea from '../../../components/ContactArea'
import BusinessDisputesContentArea from '../../../components/BusinessDisputesContentArea'

// images
import breadcumb from '../../../images/breadcumb/business-disputes.jpg'
import banner from '../../../images/banner/banner.jpg'
import single from '../../../images/single/business-disputes.jpg'

import './style.scss'


const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'About Us', route: '/about' },
    { name: 'Business Disputes' }
]



const BusinessDisputesPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Business Disputes"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <div className="singleArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <aside className=" pr25">
                                <BannerSidebar
                                    image={banner}
                                    className="bannerWrapper"
                                />
                                <CategorySidebar
                                    title="Practice Areas:"
                                    className="categoryWrap"
                                />
                            </aside>
                        </div>
                        <div className="col-lg-8">
                            <BusinessDisputesContentArea
                                className="BusinessDisputesContentArea"
                                image={single}
                                avatar={true}
                            />
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
export default BusinessDisputesPage