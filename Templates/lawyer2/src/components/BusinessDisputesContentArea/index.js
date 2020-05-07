import React from 'react'
import avatarImg from '../../images/banner/logo.jpg'

import './style.scss'

const listItem = [
    'Commercial Litigation',
    'Breach of Contract',
    'Partnership Disputes',
    'Corporate Dissolution',
    'Shareholder Derivative Actions',
]


const BusinessDisputesContentArea = ({ className, avatar, image }) => {
    return (
        <div className={className}>
            <div className="singleContentImg">
                <img src={image} alt="" />
            </div>
            <div className="singleContentWrap">
                <h3>Business Disputes</h3>
                <p>While disputes continue to play out in courtrooms and arbitration settings around the world, the types of matters are evolving with advancements in technology, changes in the economic landscape and government agencies led by new administrations. These and other factors are affecting the ways in which companies conduct business and are giving rise to conflicts surrounding trade secrets, antitrust issues, intellectual property assets, and more.</p>
                <p>Shakhnevich Law Group Litigation experts bring decades of experience in business disputes. We work with clients to address the complex financial, accounting, valuation and economic-related issues in legal matters. We present findings in a clear, concise and compelling way in reports and at depositions, trials and before other triers of fact.</p>
                {avatar && (
                    <div className="avatarWrap">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={avatarImg} alt="" />
                            </div>
                            <div className="col-md-8">
                                <ul>
                                    {listItem.map(list => (
                                        <li key={list}>{list}</li>
                                    ))}

                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default BusinessDisputesContentArea