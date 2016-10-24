import React, {Component} from 'react';
import styles from './styles.scss';

function Subitems(props) {
    const menuItem = props.menuItem;
    if (menuItem.subitems.length == 0) {
        return null;
    } else {
        return (
            <ul className="dropdown-menu">
                {
                    menuItem.subitems.map(function(subitem) {
                        return (<li key={subitem}><a href="#">{subitem}</a></li>);
                    })
                }
            </ul>
        )
    }
}

function Separator(props) {
    const isShown = props.isShown;

    if(isShown) {
        return (
            <div style={{float: 'left', width: '1px', height: '40px', background: '#617009'}}></div>
        );
    } else {
        return null;
    }
}

function MenuItem(props) {
    const i = props.i;
    const menuItem = props.menuItems[i];

    //const isSeparatorShown = props.menuItems.length-1 != i;

    return (
        <div className="dropdown" key={menuItem.title} style={{float: 'left', marginTop: '15px'}}>
            <a className={["btn dropdown-toggle", styles.topLeftMenuItem].join(' ')} data-toggle="dropdown">{menuItem.title}</a>
            <Subitems menuItem={menuItem}/>
            <Separator isShown={true} />
        </div>
    )
}

class TopMenuLeft extends Component {
    
    menuItems = [
        //{'title':'SP', subitems: []},
        {'title':'My Games', subitems: ['Minecraft', 'CLUB Penguin', 'Pokemon GO']},
        {'title':'My Categories', subitems: []},
        {'title':'Kingdom', subitems: []},
        {'title':'Shop', subitems: []}
    ];

    render() { 

        return (
            <div>
                <div className="dropdown" key='SP' style={{float: 'left'}}>
                    <a className={["btn dropdown-toggle", styles.topLeftMenuItemBig].join(' ')} data-toggle="dropdown">SP</a>
                </div>
                {this.menuItems.map(
                    function(menuItem, i, menuItems) {
                        return (
                            <MenuItem key={menuItem.title} menuItems={menuItems} i={i}/>
                        )
                    }
                )}
            </div>
        );
    }
}

export default TopMenuLeft;