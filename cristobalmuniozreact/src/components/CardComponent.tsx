import React from 'react';

interface CardProps {
    name: string;
    age: number;
    profile: string;
    onSwipeLef: () => void;
    onSwipeRight: () => void;
}

const Card: React.FC<CardProps>({
    name,
    age,
    profile,
    onSwipeLef,
    onSwipeRight,
}) => {

    handleSwipeLef = () => {

    };

    handleSwipeRight = () => {

    };

    return (
        <div className="card">Hello world!</div>
    );
};

export default Card;