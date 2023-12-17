import React from "react";
import Perfiles from "./PerfilComponent";

interface MatchedCardProps {
    name: string;
    age: number;
    images: string[];
    description: string;
}

const MatchedCard: React.FC<MatchedCardProps> = ({ name, age, images, description  }) => {
    return (
        <>
            <Perfiles
                name={name}
                age={age}
                images={images}
                description={description}
                node={
                    <>
                            <p>{description}</p>
                            <p>¡Match! Has encontrado una coincidencia.</p>
                    </>
                }
            >
            </Perfiles>
        </>
     
    );
};

export default MatchedCard;