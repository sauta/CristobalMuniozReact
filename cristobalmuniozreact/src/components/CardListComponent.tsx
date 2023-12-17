import React, { useState } from 'react';
import Card from './CardComponent';
import { profiles, Profile } from '../data';

interface CardListProps {
    onProfileAccepted: (profile: Profile) => void;
}

const CardList: React.FC<CardListProps> = ({ onProfileAccepted }) => {
    const [profileIndex, setProfileIndex] = useState(0);
    const [rejectedProfiles, setRejectedProfiles] = useState<Profile[]>([]);

    const handleSwipeLeft = () => {
        if (profileIndex < profiles.length - 1) {
            setRejectedProfiles((prevRejected: Profile[]) => [...prevRejected, profiles[profileIndex]]);
           setProfileIndex(prevIndex => prevIndex + 1);
        }
    };

    const handleSwipeRight = () => {
        if (profileIndex < profiles.length - 1) {
            onProfileAccepted(profiles[profileIndex]);
            setProfileIndex(prevIndex => prevIndex + 1);
        }
    };

    const currentProfile = profileIndex < profiles.length ? profiles[profileIndex] : null;

    return (
        <>
            {currentProfile ? (
                <div key={currentProfile.id} className="">
                    <Card
                        name={currentProfile.name}
                        age={currentProfile.age}
                        images={currentProfile.images }
                        description={currentProfile.description}
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
