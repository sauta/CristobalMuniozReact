import React from 'react';

interface CardProps {
    name: string;
    age: number;
    profile: string;
    onSwipeLeft: () => void; 
    onSwipeRight: () => void;
}

const Card: React.FC<CardProps> = ({ name, age, profile, onSwipeLeft, onSwipeRight }) => {
    const handleSwipeLeft = () => {
        onSwipeLeft();
    };

    const handleSwipeRight = () => {
        onSwipeRight();
    };

    return (
        <div className="card">
            <img src={profile} className="card-img-top card-img-small" alt={`Perfil de ${name}`} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Age: {age}</p>
                <button className="btn btn-danger" onClick={handleSwipeLeft}>
                    Swipe Left
                </button>
                <button className="btn btn-success" onClick={handleSwipeRight}>
                    Swipe Right
                </button>
            </div>
        </div>
    );
};

export default Card;
