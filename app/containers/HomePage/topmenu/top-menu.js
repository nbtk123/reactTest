import React, {Component} from 'react';
import TopMenuLeft from './top-menu-left'
import TopMenuRight from './top-menu-right'

class TopMenu extends Component {
    render() {
        return (
            <ul style={{paddingLeft: '0'}}>
                <li style={{display: 'inline-block'}}>
                    <TopMenuLeft />
                </li>
                <li style={{display: 'inline-block', float: 'right', position: 'relative', top:'0.45vw'}}>
                    <TopMenuRight />
                </li>
            </ul>
        );
    }
}

export default TopMenu;