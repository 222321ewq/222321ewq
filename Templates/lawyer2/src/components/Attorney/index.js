import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from '../Title'
import './style.scss'

// images
import Attorney1 from '../../images/expert/StevenShakhnevich.jpg'
import Attorney2 from '../../images/expert/MarthaTabachnikova.jpg'


const attorneys = [
    {
        link: 'our-attorneys/steven-shakhnevich', name: 'Steven Shakhnevich', level: 'Attorney at Law', image: Attorney1, socialMedia: [
            'facebook', 'twitter'
        ]
    },
    {
        link: 'our-attorneys/martha-tabachnikova', name: 'Martha Tabachnikova', level: 'Attorney at Law', image: Attorney2, socialMedia: [
            'facebook', 'twitter',
        ]
    }
]

const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
const Attorney = ({ className, title, subTitle, slider, noGutters }) => {
    return (
        <div className={className}>
            <div className="container">
                <div className={!noGutters ? 'row' : 'row no-gutters'}>
                    <div className="col-12">
                        <SectionTitle
                            title={title}
                            subTitle={subTitle}
                        />
                    </div>
                    {slider ? (
                        <div className="col-12">
                            <Slider className="attorneySlideArea" {...settings}>
                                {attorneys.map((attorney, i) => (
                                    <div key={i} className="attorneyWrapper">
                                        <div className="attorneyImage">
                                            <img src={attorney.image} alt=""/>
                                        </div>
                                        <div className="attorneyContent">
                                            <h3>{attorney.name}</h3>
                                            <span>{attorney.level}</span>
                                            <ul>
                                                {attorney.socialMedia.map(social => (
                                                    <li key={social}><a href="https://www.facebook.com/shakhnevichlaw/"><i className={`fa fa-${social}`} ></i></a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    ) : (
                            <Fragment>
                                {attorneys.map((attorney, i) => (
                                    <div key={i} className="col-lg-6 col-md-6 col-12">
                                        <div className="attorneyWrapper">
                                            <div className="attorneyImage">
                                            <a href ={attorney.link}><img src={attorney.image} alt="" /></a>
                                            </div>
                                            <div className="attorneyContent">
                                                <a href ={attorney.link}><h3>{attorney.name}</h3></a>
                                                <span>{attorney.level}</span>
                                                <ul>
                                                    {attorney.socialMedia.map(social => (
                                                        <li key={social}><a href="https://twitter.com/shakhnevichlaw/"><i className={`fa fa-${social}`} ></i></a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Fragment>
                        )}
                </div>
            </div>
        </div>
    )
}
export default Attorney