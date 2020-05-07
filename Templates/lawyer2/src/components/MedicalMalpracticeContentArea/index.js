import React from 'react'

import './style.scss'

const MedicalMalpracticeContentArea = ({ className, avatar, image }) => {
    return (
        <div className={className}>
            <div className="singleContentImg">
                <img src={image} alt="" />
            </div>
            <div className="singleContentWrap">
                <h3>Medical Malpractice</h3>
                <p>A claim for medical malpractice arises when a person suffers injury at the hands of a doctor or a healthcare provider. However, not all negative consequences of medical treatment give rise a medical malpractice claim. Rather, it must be proven that, in rendering medical treatment (1) the physician violated a standard of medical care, and (2) that the physician’s violation was the proximate cause of making her or her patient’s condition worse.</p>
                <p>Both of the above elements must be proven in order to recover compensation. Thus, a doctor’s error is not, in and of itself, enough to bring a lawsuit. The error must be of such nature that it amounts to a departure from the accepted standard of medical care by similar physicians in the community. The question is whether a reasonable physician, if confronted with same circumstances in treating a patient, would act the same. If the answer is “yes”, there can be no claim. If the answer is “no”, there may be a claim provided that the second element of satisfied - the element of “proximate cause” described above. In other words, if a physician committed an unreasonable error, but the outcome of treatment would have been the same, there can be no claim. If, however, the outcome would have been different but for that error, a person may have grounds to bring a medical malpractice lawsuit.</p>
                <p>The law requires attorneys to thoroughly investigate every medical malpractice claim before filing a lawsuit on behalf of his or her client. In particular, a medical malpractice attorney is required to consult with an independent expert physician. That expert physician will form an opinion as to whether grounds exist to bring a lawsuit. The attorney is then obligated to certify to the court that the requirement of consulting with an independent expert has been met.</p>
                <p>In addition, a medical malpractice lawsuit follows a unique procedural pattern in the court system. The time limit to file a claim is generally shorter for medical malpractice cases than for other types of injury cases.</p>
            </div>
        </div>
    )
}
export default MedicalMalpracticeContentArea