import React, { useState } from 'react';
import './App.css';

const AutocorrectTextArea = ({ corrections }) => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        const { value } = event.target;
        const lastChar = value[value.length - 1];

        setText(value);

        if (lastChar === ' ') {
            const words = value.trim().split(' ');
            const lastWord = words[words.length - 1];

            if (corrections[lastWord]) {
                const correctedText = [...words.slice(0, -1), corrections[lastWord]].join(' ') + ' ';
                setText(correctedText);
            }
        }
    };

    return (
        <textarea
            data-testid="textarea"
            value={text}
            onChange={handleChange}
            className="autocorrect-textarea"
        />
    );
};

export default AutocorrectTextArea;
