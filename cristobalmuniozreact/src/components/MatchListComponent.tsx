// src/components/MatchListComponent.tsx
import React from "react";
import MatchedCard from "./MatchedCardComponent";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
interface MatchedCardProps {
    name: string;
    age: number;
    images: string[];
    description: string;
}
interface MatchListProps {
    matchedProfiles: MatchedCardProps[];
}

const MatchList: React.FC<MatchListProps> = ({ matchedProfiles }) => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };  

    return (
        <div className="match-list">
            <h2>Tus Coincidencias</h2>
            <Slider {...settings}>
                {matchedProfiles.map((profile, index) => (
                    <MatchedCard key={index} {...profile} />
                ))}
            </Slider>
        </div>
    );
};

export default MatchList;
