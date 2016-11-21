import React, {Component} from 'react';
import TopMenuProfile from './top-menu-profile'
import TopMenuSearch from './top-menu-search'
import TopMenuFriends from './top-menu-friends'
import Separator from './separator';

class TopMenuRight extends Component {
    render() {
        return (
            <ul>
                <li style={{display: 'inline-block', color: 'white'}}><TopMenuProfile /></li>
                <li style={{display: 'inline-block', color: 'white', position: 'relative', top: '-1.6vw', marginRight:'1vw'}}><Separator isShown='true' /></li>
                <li style={{display: 'inline-block', color: 'white'}}><TopMenuFriends /></li>
                <li style={{display: 'inline-block', color: 'white', position: 'relative', top: '-1.6vw', marginRight:'1vw', marginLeft:'1vw'}}><Separator isShown='true' /></li>
                <li style={{display: 'inline-block'}}><TopMenuSearch /></li>
            </ul>
        );
    }
}

export default TopMenuRight;