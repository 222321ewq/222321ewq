import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import Attorney from '../../../components/Attorney'
import ContactArea from '../../../components/ContactArea'
import FooterArea from '../../../components/FooterArea'
// images
import breadcumb from '../../../images/breadcumb/attorneys.jpg'

import './style.scss'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Attorneys' }
]

const AttorneysPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Our Attorneys"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <Attorney
                title="Our Qualified Attorneys "
                className="attorneyArea"
                noGutters={true}
            />
            <ContactArea
                className="contactArea"
            />
            <FooterArea />
        </Fragment>
    )
}
export default AttorneysPage