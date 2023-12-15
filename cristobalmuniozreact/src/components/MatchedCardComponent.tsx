import React from 'react';

interface MatchedCardProps {
    name: string;
    age: number;
    profileImageUrl: string;
}

const MatchedCard: React.FC<MatchedCardProps> = ({ name, age, profileImageUrl }) => {
    return (
        <div className="matched-card">
            <img src={profileImageUrl} alt={`Perfil de ${name}`} />
            <h2>{name}, {age}</h2>
        </div>
    );
};

export default MatchedCard;
