import React from 'react';
import MatchedCard from './MatchedCardComponent';
import { matchedProfiles } from '../data'; // Asume que ya has creado tu archivo de datos

interface MatchListProps {
    matchedProfiles: Profile[]; // Asumiendo que tienes una interfaz Profile
}

const MatchList: React.FC = () => {
    return (
        <div>
            <h2>Matches</h2>
            {matchedProfiles.map(matchedProfile => (
                <MatchedCard
                    key={matchedProfile.id}
                    name={matchedProfile.name}
                    age={matchedProfile.age}
                    profileImageUrl={`src/assets/img/${matchedProfile.profileImageUrl}`}
                />
            ))}
        </div>
    );
};

export default MatchList;
