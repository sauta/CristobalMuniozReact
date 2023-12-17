import React from "react";

interface MatchedCardProps {
    name: string;
    age: number;
    image: string;
}

const MatchedCard: React.FC<MatchedCardProps> = ({ name, age, image }) => {
    return (
        <div className="matched-card">
            <img src={image} alt={`${name}'s profile`} />
            <h2>{name}, {age}</h2>
            <p>¡Match! Has encontrado una coincidencia.</p>
        </div>
    );
};

export default MatchedCard;