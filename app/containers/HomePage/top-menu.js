import React, {Component} from 'react';
import TopMenuLeft from './top-menu-left'
import TopMenuRight from './top-menu-right'

class TopMenu extends Component {
    render() {
        return (
            <div>
                <div style={{float: 'left'}}>
                    <TopMenuLeft />
                </div>
                <div style={{float: 'right'}}>
                    <TopMenuRight />
                </div>
            </div>
        );
    }
}

export default TopMenu;