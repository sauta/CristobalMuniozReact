import React from 'react';
import CardList from './components/CardListComponent';
import MatchList from './components/MatchListComponent';
import './assets/css/App.css';

const App: React.FC = () => {
    return (
        <div>
            <h1>Tender Pepe</h1>
            <CardList />
            <MatchList />
        </div>
    );
};

export default App;
