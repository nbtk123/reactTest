import React, {Component} from 'react';
import TopMenuProfile from './top-menu-profile'
import TopMenuSearch from './top-menu-search'
import TopMenuFriends from './top-menu-friends'

class TopMenuRight extends Component {
    render() {
        return (
            <ul>
                <li style={{display: 'inline-block'}}><TopMenuProfile /></li>
                <li style={{display: 'inline-block'}}><TopMenuFriends /></li>
                <li style={{display: 'inline-block'}}><TopMenuSearch /></li>
            </ul>
        );
    }
}

export default TopMenuRight;