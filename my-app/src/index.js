import React from 'react';
import ReactDOM from 'react-dom/client';

function Gretting () {
    return <h2> Amit Singh</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Gretting />);