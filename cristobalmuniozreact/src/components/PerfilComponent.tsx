import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUsers } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
interface Perfil  {
    name: string;
    age: number;
    images: string[];
    description: string;
    node: React.ReactNode;
}

const Perfiles: React.FC<Perfil> = ({ name, age, images, description, node }) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };  
    return (
    <>
            <div className="tbgwrap ">
                <div className="tphoto ">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <img key={index} src={image} title={name} alt={`Tinder Photo ${index}`} />
                        ))}
                    </Slider>
                </div>
                <div className="row pt-4 card">
                    <div className="tcontrols">
                        <div className="tname">{name}, <span className="age">{age}</span></div>
                        <div className="tinfo">
                            <FontAwesomeIcon icon={faBook} className="fa fa-book" aria-hidden="true" title={description} />
                            <FontAwesomeIcon icon={faUsers} className="fa fa-users" aria-hidden="true" />
                        </div>
                        {node}
                    </div>
                </div>
            </div>
    </>
  );
}

export default Perfiles;