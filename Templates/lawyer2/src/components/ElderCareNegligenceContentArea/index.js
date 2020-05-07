import React from 'react'
import avatarImg from '../../images/banner/logo.jpg'

import './style.scss'

const listItem = [
    'Home attendant negligence',
    'Nursing home mistreatment',
    'Ambulette transport injuries',
    'Adult day care negligence',
    'Falls in hospitals and outpatient facilities',
    'Abuse and abandonment',
    'Pressure ulcers',
]

const ElderCareNegligenceContentArea = ({ className, avatar, image }) => {
    return (
        <div className={className}>
            <div className="singleContentImg">
                <img src={image} alt="" />
            </div>
            <div className="singleContentWrap">
                <h3>Elder Care Negligence</h3>
                <p>While we would like to believe that no one would ever hurt or harm our loved ones under their care, it unfortunately does happen.  Our elderly and the disabled are sometimes subjected to nursing home neglect and abuse, which leaves them and their loved ones shaken. Sometimes neglect and abuse in nursing homes is the direct result of facilities cutting back on trained physicians, nurses, therapists and other healthcare professionals, leaving too few adequately trained people to properly care for a large amount of residents. Many nursing home residents and their families feel helpless at the hands of abusive or neglectful staff because they feel they have no other options. Sometimes, the resident is unwilling or unable to tell their relatives and loved ones about the abuse and neglect that is occurring.</p>
                <p>At Shakhnevich Law Group, our medical malpractice attorneys can be of assistance to you in taking any necessary legal action against a nursing home if your loved one has not received appropriate care. We have handled nursing home neglect and abuse cases involving:</p>
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
export default ElderCareNegligenceContentArea