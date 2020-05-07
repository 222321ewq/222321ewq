import React from 'react'
import avatarImg from '../../images/banner/logo.jpg'

import './style.scss'

const listItem = [
    'Dangerous Equipment',
    'Scaffold Cases',
    'Fall from Height',
    'Falling Objects',
    'Electrocutions',
    'Burn Injuries',
    'Crane/Forklift Accidents',
    'Fall from a Ladder',
    'Slippery Conditions',
]

const ConstructionAccidentsArea = ({ className, avatar, image }) => {
    return (
        <div className={className}>
            <div className="singleContentImg">
                <img src={image} alt="" />
            </div>
            <div className="singleContentWrap">
                <h3>Construction Accidents</h3>
                <p>More American workers are injured or killed in construction-related accidents every year than employees in any other field. In 2015, about one in five work-related fatalities occurred in construction, and over 58,000 workers suffered some type of non-fatal injury. In New York, more than 5,500 construction workers sustained an injury that forced them to miss days of work, roughly equal to 15 construction injuriesConstruction Accident Lawyers NYC Hofmann and Schweitzer every day in the state. Despite these statistics, dedicated construction workers head to the job site each day to continue building and developing the structures that help keep our country moving forward.</p>
                <p>Employees in the construction industry understand the serious nature of their work and realize the risks involved, but this does not mean workers don’t have rights. If you are a construction worker who has suffered serious injuries on the job or a family member of a construction worker who was killed in a scaffold accident, crane accident, or other construction site injury, you have rights that can be protected.</p>
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
export default ConstructionAccidentsArea