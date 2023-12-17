import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faInfo, faHeart, faComments, faCog } from '@fortawesome/free-solid-svg-icons';
import Perfiles from './PerfilComponent';

interface Profile {
    name: string;
    age: number;
    images: string[];
    description: string;
    onSwipeLeft(): void;
    onSwipeRight(): void;
}


const Card: React.FC<Profile> = ({ name, age, images, description, onSwipeLeft, onSwipeRight }) => {

    const handleSwipeLeft = () => {
        onSwipeLeft();
    };

    const handleSwipeRight = () => {
        onSwipeRight();
    };

    return (
          <>
            <div className="tbg">
                <div className="theader">
                    <FontAwesomeIcon icon={faCog} className="fa fa-cog" aria-hidden="true" />
                    <FontAwesomeIcon icon={faComments} className="fa fa-comments" aria-hidden="true" />
                    <div className="tlogo">
                        <img src="https://worldvectorlogo.com/logos/tinder-1.svg" alt="Tinder Logo" title="Tinder Logo" />
                    </div>
                </div>

                <Perfiles
                    name={name}
                    age={age}
                    images={images}
                    description={description}
                    node= {<>{description}</> }>
                </Perfiles>
                <div className="row ">
                    <div className="d-flex">
                        <div className="tno" onClick={handleSwipeLeft}>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                        <div className="ti" >
                            <FontAwesomeIcon icon={faInfo} />
                        </div>
                        <div className="tyes" onClick={handleSwipeRight} >
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                    </div>
                </div>
                <div className="credit"><a href="">Created by Sauta</a></div>
            </div>
        </>
    );
};

export default Card;
