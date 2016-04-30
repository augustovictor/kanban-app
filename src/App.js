import React, {Component} from 'react';
import {render} from 'react-dom';

class Hello extends Component {
    render() {
        var name = "Victor";
        return (
            <h1> Hello, {name} </h1>
        )
    }
};

render(<Hello />, document.getElementById('root'));
