import React, { useState, useEffect } from 'react';
import { profiles } from '../data';

const App: React.FC = () => {
    const [username, setUsername] = useState('');
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        // Verifica si ya hay un usuario autenticado (puedes utilizar localStorage)
        const storedUsername = localStorage.getItem('username');
        if (storedUsername && profiles.some(profile => profile.name === storedUsername)) {
            setUsername(storedUsername);
            setAuthenticated(true);
        }
    }, []);

    const handleLogin = (selectedUsername: string) => {
        if (profiles.some(profile => profile.name === selectedUsername)) {
            setUsername(selectedUsername);
            setAuthenticated(true);
            // Almacena el nombre de usuario en localStorage para mantener la sesión
            localStorage.setItem('username', selectedUsername);
        }
    };

    const handleLogout = () => {
        setUsername('');
        setAuthenticated(false);
        // Elimina el nombre de usuario almacenado al cerrar sesión
        localStorage.removeItem('username');
    };

    return (
        <div>
            {authenticated ? (
                <div>
                    <p>Bienvenido, {username}!</p>
                    <button onClick={handleLogout}>Cerrar sesión</button>
                </div>
            ) : (
                <div>
                    <p>Selecciona un usuario para iniciar sesión:</p>
                    <ul>
                        {profiles.map(profile => (
                            <li key={profile.name} onClick={() => handleLogin(profile.name)}>
                                {profile.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default App;
