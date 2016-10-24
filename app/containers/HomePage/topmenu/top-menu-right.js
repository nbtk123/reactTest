import React, {Component} from 'react';
import TopMenuProfile from './top-menu-profile'
import TopMenuSearch from './top-menu-search'
import TopMenuFriends from './top-menu-friends'

class TopMenuRight extends Component {
    render() {
        return (
            <ul style={{fontSize: '1vw'}}>
                <li style={{display: 'inline-block', color: 'white'}}><TopMenuProfile /></li>
                <li style={{display: 'inline-block', color: 'white'}}><TopMenuFriends /></li>
                <li style={{display: 'inline-block'}}><TopMenuSearch /></li>
            </ul>
        );
    }
}

export default TopMenuRight;