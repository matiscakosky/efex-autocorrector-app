import React from 'react';
import './App.css';
import AutocorrectTextArea from './AutocorrectTextArea';

const corrections = {
    'realy': 'really',
    'wierd': 'weird',
};

const App = () => {
    return (
        <div className="App" style={{ padding: '20px' }}>
            <div className="header">
                <h1>Autocorrect Text Area</h1>
            </div>
            <AutocorrectTextArea corrections={corrections} />
        </div>
    );
};

export default App;
