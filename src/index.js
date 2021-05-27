import React from 'react';
import ReactDOM from 'react-dom';

import Main from './Main';

const data = {
    title: 'Beer Order',
    caption: 'How much beer do you want ?',
    statements: [
        { trigger: 0, label: `None, it's only nine!` },
        { trigger: 1, label: `Actually, I changed my mind.` },
        { trigger: 4, label: `Ok, maybe a little bit.` },
        { trigger: 6, label: `Wait, I said a little bit!` },
        { trigger: 10, label: `Ugh nevermind...` }
    ]
};

ReactDOM.render(
    <Main {...data} />, 
document.getElementById('app'));