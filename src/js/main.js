import React from 'react';
import {render} from 'react-dom';

const Hello = () => {
    return (
        <div>
            Hello from react
        </div>
    );
};

render(<Hello/>, document.getElementById('app'));
