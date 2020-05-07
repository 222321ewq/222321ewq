import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import CategorySidebar from '../../../components/CategorySidebar'
import FooterArea from '../../../components/FooterArea'
import BannerSidebar from '../../../components/BannerSidebar'
import ContactArea from '../../../components/ContactArea'
import AutoAccidentsContentArea from '../../../components/AutoAccidentsContentArea'

// images
import breadcumb from '../../../images/breadcumb/car-accident.jpg'
import banner from '../../../images/banner/banner.jpg'
import single from '../../../images/single/car-accident.jpg'

import './style.scss'


const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'About Us', route: '/about' },
    { name: 'Auto Accidents' }
]



const AutoAccidentsPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Auto Accidents"
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
                            <AutoAccidentsContentArea
                                className="AutoAccidentsContentArea"
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
export default AutoAccidentsPage