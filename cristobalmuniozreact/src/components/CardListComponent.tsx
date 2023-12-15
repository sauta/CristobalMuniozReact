import React, { useState } from 'react';
import Card from './CardComponent';
import { profiles } from '../data';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardListComponent: React.FC = () => {
    const [profileIndex, setProfileIndex] = useState(0);
    const [acceptedProfiles, setAcceptedProfiles] = useState<Profile[]>([]);
    const [rejectedProfiles, setRejectedProfiles] = useState<Profile[]>([]);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const handleSwipeLeft = () => {
        const currentProfile = profiles[profileIndex];
        setRejectedProfiles([...rejectedProfiles, currentProfile]);
        setProfileIndex((prevIndex) => prevIndex + 1);
    };

    const handleSwipeRight = () => {
        const currentProfile = profiles[profileIndex];
        setAcceptedProfiles([...acceptedProfiles, currentProfile]);
        setProfileIndex((prevIndex) => prevIndex + 1);
    };

    return (
        <Slider {...settings}>
            {profileIndex < profiles.length ? (
                <div key={profileIndex}>
                    <Card
                        name={profiles[profileIndex].name}
                        age={profiles[profileIndex].age}
                        profile={`src/assets/img/${profiles[profileIndex].image}`}
                        onSwipeLeft={handleSwipeLeft}
                        onSwipeRight={handleSwipeRight}
                    />
                </div>
            ) : (
                <div>No hay más perfiles</div>
            )}
        </Slider>
    );
};

export default CardListComponent;

interface Profile {
    name: string;
    age: number;
    image: string;
}
