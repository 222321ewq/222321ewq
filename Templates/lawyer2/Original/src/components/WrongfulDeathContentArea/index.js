import React from 'react'

import './style.scss'

const WrongfulDeathContentArea = ({ className, image }) => {
    return (
        <div className={className}>
            <div className="singleContentImg">
                <img src={image} alt="" />
            </div>
            <div className="singleContentWrap">
                <h3>Wrongful Death</h3>
                <p>A wrongful death claim refers to any type of case where the ultimate outcome is death. It must be proven, however, that the person died as a result of negligent or wrongful conduct of another. Thus, a wrongful death case may arise in any context including a car accident, a fall, an assault, or medical malpractice.</p>
                <p>Under the law, a person’s claim survives his or her death. The court will appoint a personal representative to advance the case against all those responsible for the death. Usually, the representative is a member of the decedent’s immediate family; a spouse, son or daughter. There are instances where the person is not survived by family. In such cases, the court will follow a different procedure for appointing a representative. In any event, the case will continue following the injured person’s death. The law contains very specific technical requirements for commencing a wrongful death lawsuit. There are strict time limitations and the items of compensation may not be the same as that of a person who is alive.</p>
                <p>It is important to note that a death may not occur immediately after an event. A person may be injured in an accident and may die from these injuries months or even years later. As long as the original claim (when the person was still alive) was filed timely, in New York and New Jersey, a personal representative may bring a wrongful death claim within 2 years of death. For instance, in a car accident case in New York, a person may bring a lawsuitwithin 3 years of the accident . If a person was severely injured in a car accident and dies from these injuries 2 years later, the personal representative has another 2 years to bring a wrongful death claim. The only condition, however, is that the original lawsuit from that car accident was filed within the permissible 3-year period from the date of the accident.</p>
                <p>Case-In-Point: If a car accident occurred on January 10, 2015. The person injured in that accident may bring a lawsuit no later than January 10, 2018. Let us assume that this person died on June 19, 2017. Now, his or her personal representative has until June 19, 2019 to bring a wrongful death claim. However, the personal representative will have this right only if the decedent, while still being alive, filed a personal injury lawsuit no later than January 10, 2018, the permissible 3-year period for bring a car accident action.</p>
            </div>
        </div>
    )
}
export default WrongfulDeathContentArea