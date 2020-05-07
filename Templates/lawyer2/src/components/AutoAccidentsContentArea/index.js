import React from 'react'
import avatarImg from '../../images/banner/logo.jpg'

import './style.scss'

const listItem = [
    'Pedestrian accidents',
    'Bicyclist accidents',
    'Motorcycle accidents',
    'Rear-end collisions',
    'Intersection collisions',
    'Truck accidents',
    'Failure to obey a stop-sign',
    'Multi-car collisions',
]


const AutoAccidentsContentArea = ({ className, avatar, image }) => {
    return (
        <div className={className}>
            <div className="singleContentImg">
                <img src={image} alt="" />
            </div>
            <div className="singleContentWrap">
                <h3>Auto Accidents</h3>
                <p>If you are injured in a car accident, the road to financial recovery will vary from case to case. Every accident arises from a unique set of facts. For this reason, it is important to contact an experienced attorney right away. The reason is simple - if you navigate in unfamiliar waters, you are bound to make a mistake.</p>
                <p>An injured person is always eager to tell his or her side of the story to everyone, including an insurance representative. In doing so, the person believes he or she is helping to advance the claim. In reality, however, this person is doing just the opposite; he or she is providing the insurance company with facts necessary for the insurance company to diminish or deny a strong claim. By simply calling or emailing an attorney for a free consultation, you will avoid pitfalls. Otherwise, you are virtually certain to overlook factors that will ultimately leave you with unpaid medical bills, uncompensated wages and a diminished compensation for damages.</p>
                <p>Our firm has handled hundredth of car accident cases. Over the years, we have developed in-depth knowledge of the applicable law and the claim process. Generally, the laws are designed to protect victims of motor vehicle negligence. These laws, of course, have to be applied properly in order to achieve the maximum benefit from their protections. Here are a few examples of frequently asked questions we encounter in our day-to-day practice:</p>
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
export default AutoAccidentsContentArea