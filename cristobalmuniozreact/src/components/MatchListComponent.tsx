// src/components/MatchListComponent.tsx
import React from "react";
import MatchedCard from "./MatchedCardComponent";

interface MatchListProps {
    matchedProfiles: MatchedCardProps[];
}

const MatchList: React.FC<MatchListProps> = ({ matchedProfiles }) => {
    return (
        <div className="match-list">
            <h2>Tus Coincidencias</h2>
            {matchedProfiles.map((profile, index) => (
                <MatchedCard key={index} {...profile} />
            ))}
        </div>
    );
};

export default MatchList;
