import React, { useState } from 'react';
import Card from './CardComponent';
import { profiles, Profile } from '../data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CardListProps {
    onProfileAccepted: (profile: Profile) => void;
}


const CardList: React.FC<CardListProps> = ({ onProfileAccepted }) => {

    const [profileIndex, setProfileIndex] = useState(0);
    const [rejectedProfiles, setRejectedProfiles] = useState<Profile[]>([]); // Define el tipo para rejectedProfiles

    const handleSwipeLeft = () => {
        if (profileIndex < profiles.length) {
            setRejectedProfiles(prevRejected => [...prevRejected, profiles[profileIndex]]);
            setProfileIndex(prevIndex => prevIndex + 1);
        }
    };

    const handleSwipeRight = () => {
        if (profileIndex < profiles.length) {
            onProfileAccepted(profiles[profileIndex]);
            setProfileIndex(prevIndex => prevIndex + 1);
        }
    };

    return (
       <>
            {profileIndex < profiles.length ? (
                <div key={profileIndex} className="">
                    <Card
                        name={profiles[profileIndex].name}
                        age={profiles[profileIndex].age}
                        profile={`${profiles[profileIndex].image}`}
                        onSwipeLeft={handleSwipeLeft}
                        onSwipeRight={handleSwipeRight}
                    />
                </div>
            ) : (
                <div>No hay más perfiles</div>
            )}
        </>
    );
};

export default CardList;

