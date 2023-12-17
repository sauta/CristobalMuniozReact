import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faInfo, faHeart } from '@fortawesome/free-solid-svg-icons';

interface CardProps {
    name: string;
    age: number;
    profile: string;
    onSwipeLeft: () => void; 
    onSwipeRight: () => void;
}

const Card: React.FC<CardProps> = ({ name, age, profile, onSwipeLeft, onSwipeRight }) => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };  

    const handleSwipeLeft = () => {
        onSwipeLeft();
    };

    const handleSwipeRight = () => {
        onSwipeRight();
    };

    return (
                <>
            <div className="tbg">
                <div className="theader">
                    <i className="fa fa-cog" aria-hidden="true"></i>
                    <i className="fa fa-comments" aria-hidden="true"></i>
                    <div className="tlogo">
                        <img src="https://worldvectorlogo.com/logos/tinder-1.svg" alt="Tinder Logo" title="Tinder Logo" />
                    </div>
                </div>
                <div className="tbgwrap">
                    <div className="tphoto">
                        <Slider {...settings}>
                            <img src={profile} title={name} alt="Tinder Photo" />
                            <img src={profile} title={name} alt="Tinder Photo" />
                            <img src={profile} title={name} alt="Tinder Photo" />

                        </Slider>
                        <div className={name}>{name}, <span className="age">{age}</span></div>
                        <div className="tinfo"><i className="fa fa-book" aria-hidden="true"> 0</i><i className="fa fa-users" aria-hidden="true"> 0</i></div>
                    </div>
                    <div className="tcontrols">
                        <div>
                            <div className="tno" onClick={handleSwipeLeft}>
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                            <div className="ti" >
                                <FontAwesomeIcon icon={faInfo} />
                            </div>
                            <div className="tyes" onClick={handleSwipeRight} >
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="credit"><a href="http://themakery.jcink.net">Created by Miami</a></div>
            </div>
        </>
    );
};

export default Card;
