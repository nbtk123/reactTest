import React, {Component} from 'react';
import TopMenuProfile from './top-menu-profile'
import TopMenuSearch from './top-menu-search'

class TopMenuRight extends Component {
    render() {
        return (
            <ul>
                <li style={{display: 'inline-block'}}><TopMenuProfile /></li>
                <li style={{display: 'inline-block'}}><TopMenuSearch /></li>
            </ul>
        );
    }
}

export default TopMenuRight;