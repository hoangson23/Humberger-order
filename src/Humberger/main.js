import React, { Component } from 'react';
import Menu from './menu';
import Pay from './pay';

class Main extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Pay/>
            </div>
        );
    }
}

export default Main;