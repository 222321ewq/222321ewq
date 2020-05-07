import React from 'react'
import avatarImg from '../../images/banner/logo.jpg'

import './style.scss'

const listItem = [
    'Trip/Slip and Fall Accidents',
    'Ceiling Collapse',
    'Construction site accidents',
    'Snow and ice liability',
    'Sidewalk defects',
    'Building hazards',
    'Defective stairs',
    'Inadequate lighting conditions',
    'Childcare negligence',
    'Liability of Amusement Parks and Recreational Centers',
    'Negligent supervision',
    'Dog-bite cases',
]


const PremisesLiabilityContentArea = ({ className, avatar, image }) => {
    return (
        <div className={className}>
            <div className="singleContentImg">
                <img src={image} alt="" />
            </div>
            <div className="singleContentWrap">
                <h3>Premises Liability</h3>
                <h6>If you or your loved one is injured on someone else’s property, you may be entitled to compensation.</h6>
                <p> Every landowner has a duty to maintain his or her property in a reasonably safe condition. Moreover, that duty may extend beyond the actual deeded owner of the property. In certain instances, the responsibility for your injuries may lie with any party occupying a property such as tenants or contractors. For instance, if you trip and fall due a defective sidewalk in front of a property being renovated, you are eligible to pursue recovery against both the owner and the contractor. Similarly, if you suffer injury due to a ceiling collapse in your apartment, you may sue your landlord, the management company for the building and any other party responsible for compromising the structural integrity of the ceiling. Perhaps, the tenant living directly above your apartment has caused a water leak that contributed to the collapse. Now, you may pursue a claim against, not only the landlord and management, but also against that tenant. Another example is where a store owner clears snow and ice from a sidewalk in a negligent manner. If you slip and fall, you may pursue a claim against the owner of the building and the store leasing the property.</p>
                <h6>The laws governing premises liability cases are complex. </h6>
                <p>For nearly a decade, our law firm has had an opportunity to successfully handle all types of premises cases. At the outset, we thoroughly investigate each property in order to ensure the maximum recovery. Frequently, the injury-causing condition on a property may not be visible. For instance, we have handled numerous cases involving stairs. Many stairwells, both new and old, have no visual defects. There are no cracks or protrusions. However, a person descending that stairwell may have fallen despite exercising the utmost care. In such cases, our firm engages an experienced structural engineer to inspect the stairwell for hidden dangers. These dangers may lie in improper construction of handrails, uneven height of risers or a combination of both. In a different scenario, a worker at a construction site suffers an injury and the cause is not easily ascertainable. That is a task for an occupational safety expert who will investigate the site and report all violations causing injury to the worker. Our law firm has the expertise and resources necessary to maximize recovery for our clients.</p>
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
export default PremisesLiabilityContentArea