import React from 'react';
import Card from './CardComponents';
import { profile } from '../data';

const CardListComponent: React.FC = () => {

    const [profileIndex, setProfileIndex] = useState(0);
    const [aceptedProfile, setAceptedProfile] = useState([]);
    const [rejectedProfile, setRejectedProfile] = useState([]);

    //Acá  implementamos esta card list, incluyendo el renderisado adicional (si el perfil esta oculto o no)
      return (
    <p>Hello world!</p>
  );
}

export default CardListComponent;