import React from 'react'
import avatarImg from '../../images/banner/logo.jpg'

import './style.scss'

const listItem = [
    'Daily exposure to infectious diseases',
    'Severe cuts from surgical instruments',
    'Slipping and falling',
    'Trip and falls',
    'Staircase falls',
    'Car accidents',
    'Repetitive stress injuries due to lifting patients in and out of hospital beds and gurneys',
    'Shoulder and knee pain from pushing and lifting patients and heavy wheelchairs',
    'Carpal tunnel',
    'Pain or illness due to an accident at work such as a fall or car accident'
]

const WorkersCompensationContentArea = ({ className, avatar, image }) => {
    return (
        <div className={className}>
            <div className="singleContentImg">
                <img src={image} alt="" />
            </div>
            <div className="singleContentWrap">
                <h3>Workers Compensation</h3>
                <h6>What are Workers’ Compensation Benefits?</h6>
                <p>New York State law provides many different types of benefits for injured workers, with the goals of preventing financial hardship and helping victims return to work as soon as possible.</p>
                <h6>If you are found to qualify for workers’ compensation, you can receive benefits including:</h6>
                <p>• Payments equal to 2/3 of your average weekly wage for lost time due to your disability.</p>
                <p>• Reduced earning compensation to make up for a decreased ability to work if you have suffered a partial disability.</p>
                <p>• Medical treatment from doctors and chiropractors that is paid by the workers’ compensation provider.</p>
                <p>• Compensation for extremity injuries, such as damage to arms, legs, hands, and feet or a facial scar, even when the damage does not keep you from working.</p>
                <p>• Reimbursement for traveling to doctors or therapists and out-of-pocket expenses related to your injury, such as bandages and prescriptions.</p>
                <p>These benefits are based on the nature of your injuries, the amount of time you will be unable to work, and what is needed for recovery. As such, it is vital that you collect evidence and testimony that proves the true extent of your losses so that you can gain fair and full compensation. Injured workers will have to be regularly evaluated by doctors and complete hearings with the Workers’ Compensation Board to prove that their injuries or disabilities are still present and preventing work.</p>
                <p>Without workers’ compensation benefits, the cost of recovery and lost wages from being unable to work can fall squarely on your shoulders.</p>
                <h6>Occupational diseases can develop over time from various professions and work duties including:</h6>
                <p>• Computer keyboard typing and using a mouse</p>
                <p>• Moving heavy objects</p>
                <p>• Caring for elderly</p>
                <p>• Restaurants</p>
                <p>• Cleaning services</p>
                <p>• Landscaping and gardening</p>
                <p>• Road work and construction</p>
                <p>• Nurses lifting hospital patients</p>
                <p>• Stocking warehouse inventory</p>
                <p>• Construction site power tools</p>
                <p>• Driving</p>
                <p>• Operating heavy machinery</p>
                <p>• Moving and stacking boxes</p>
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
export default WorkersCompensationContentArea