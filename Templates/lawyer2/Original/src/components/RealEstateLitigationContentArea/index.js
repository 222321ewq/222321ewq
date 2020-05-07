import React from 'react'
import avatarImg from '../../images/banner/logo.jpg'

import './style.scss'

const listItem = [
    'Foreclosure Defense',
    'Condominium/Coop Litigation',
    'Boundary Disputes',
    'Property Insurance Claims',
    'Water Damage',
    'Construction Defects',
    'Professional Negligence',
]

const RealEstateLitigationContentArea = ({ className, avatar, image }) => {
    return (
        <div className={className}>
            <div className="singleContentImg">
                <img src={image} alt="" />
            </div>
            <div className="singleContentWrap">
                <h3>Real Estate Litigation</h3>
                <p>The cyclical real estate industry has had more than its fair share of challenges. In good times or bad, however, this industry is always evolving and developing, especially in the markets in which Shakhnevich Law Group operates, all of which are known for having robust real estate development. While the key players, laws, regulations, and practices in this industry continue to change, so too have our firm and practice groups, with a continued focus on significant real estate issues.</p>
                <p>Shakhnevich Law Group has an unparalleled reputation in real estate litigation. Our attorneys help clients resolve disputes, achieve their objectives and gain a competitive advantage in the real estate industry. Our real estate litigation practice group, working with our colleagues in complementary practices, is well-positioned to assist with any issues and disputes that arise during any phase of a real estate venture or project. It is what we do, and we do it efficiently and effectively.</p>
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
export default RealEstateLitigationContentArea