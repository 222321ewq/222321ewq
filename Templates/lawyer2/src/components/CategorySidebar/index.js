import React from 'react'
import './style.scss'

const categoryMenu = [
    { name: 'Auto Accidents', route: "/auto-accidents" },
    { name: 'Premises Liability', route: "/premises-liability" },
    { name: 'Construction Accidents', route: "/construction-accidents" },
    { name: 'Child Care Negligence', route: "/child-care-negligence" },
    { name: 'Elder Care Negligence', route: "/elder-care-negligence" },
    { name: 'Medical Malpractice', route: "/medical-malpractice" },
    { name: 'Wrongful Death', route: "/wrongful-death" },
    { name: 'Workers Compensation', route: "/workers-compensation" },
    { name: 'Real Estate Litigation', route: "/real-estate" },
    { name: 'Business Disputes', route: "/business-law" },
]

const CategorySidebar = ({ className, title }) => {
    return (
        <div className={className}>
            <h3 className="sidebarTitle">{title}</h3>
            <ul>
                {categoryMenu.map((category,i) => (
                    <li key={i}><a href={category.route}>{category.name}</a></li>
                ))}
            </ul>
        </div>
    )
}
export default CategorySidebar