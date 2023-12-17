import React, { useState } from 'react';
import CardList from './components/CardListComponent';
import MatchList from './components/MatchListComponent';
import { Profile } from './data';


const App: React.FC = () => {

    const [acceptedProfiles, setAcceptedProfiles] = useState<Profile[]>([]);

    return (
        <>
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <main className="px-3">
                    <h1>Tender-like App</h1>
                    <div className="CardList-container">
                        <h2>Perfiles</h2>
                        <CardList
                            onProfileAccepted={(profile) => setAcceptedProfiles([...acceptedProfiles, profile])}
                        />
                    </div>
                    <div className="MatchList-container">
                        <MatchList matchedProfiles={acceptedProfiles} />
                    </div>
               </main>
            </div>
        </>
    );
};

export default App;
