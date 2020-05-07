import React from 'react'
import avatarImg from '../../images/banner/logo.jpg'

import './style.scss'

const listItem = [
    'Day Care / Preschool Injuries',
    'Negligent Supervision at School',
    'Playground Falls',
    'Injuries During Sports Activities',
    'After-School Care Injuries',
    'Sleep-Away / Day Camp Injuries',
    'Falls at Party Centers',
]

const ChildCareNegligenceContentArea = ({ className, avatar, image }) => {
    return (
        <div className={className}>
            <div className="singleContentImg">
                <img src={image} alt="" />
            </div>
            <div className="singleContentWrap">
                <h3>Child Care Negligence</h3>
                <p>As a parent, you cannot be with your child every minute of every day. Whether you work or have other responsibilities, you often rely on a child care provider to watch your son or daughter. You trust this individual or facility’s employees to not only take care of your child’s basic needs but nurture them and provide both structure and entertainment throughout the day.</p>
                <p>Unfortunately, you may discover that your child is hurt because they did not receive the care you expected and the provider is legally obligated to give. If a child care worker does not properly care for your child and this results in your son or daughter being physically or psychologically injured, then you may have a claim of child care negligence against that provider and his or her employer.</p>
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
export default ChildCareNegligenceContentArea 