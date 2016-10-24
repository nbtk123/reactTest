import React, {Component} from 'react';
import styles from './styles.scss';

function Subitems(props) {
    const menuItem = props.menuItem;
    if (menuItem.subitems.length == 0) {
        return null;
    } else {
        return (
            <div className="dropdown-menu">
                {
                    menuItem.subitems.map(function(subitem) {
                        return (<div><a href="#" key={subitem}>{subitem}</a></div>);
                    })
                }
            </div>
        )
    }
}

function Separator(props) {
    const isShown = props.isShown;

    if(isShown) {
        return (
            <div style={{width: '1px', height: '2vw', background: '#617009', display: 'inline-block', position: 'absolute', top: '0.1vw'}}></div>
        );
    } else {
        return null;
    }
}

function MenuItem(props) {
    const i = props.i;
    const menuItem = props.menuItems[i];

    const isSeparatorShown = props.menuItems.length-1 != i;

    return (
        <li className="dropdown" key={menuItem.title} style={{verticalAlign: 'middle', display: 'inline-block', position: 'relative'}}>
            <a className={["btn dropdown-toggle", styles.topLeftMenuItem].join(' ')} data-toggle="dropdown">{menuItem.title}</a>
            <Subitems menuItem={menuItem}/>
            <Separator isShown={isSeparatorShown} />
        </li>
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
            <ul style={{paddingLeft: '0'}}>
                <li style={{verticalAlign: 'middle', display: 'inline-block', position: 'relative'}}>
                    <a className={["btn dropdown-toggle", styles.topLeftMenuItemBig].join(' ')} data-toggle="dropdown" key="SP">SP</a>
                    <div style={{display: 'inline-block', position: 'absolute', top: '0.7vw'}}><Separator isShown={true} /></div>
                </li>
                {this.menuItems.map(
                    function(menuItem, i, menuItems) {
                        return (
                            <MenuItem key={menuItem.title} menuItems={menuItems} i={i}/>
                        )
                    }
                )}
            </ul>
        );
    }
}

export default TopMenuLeft;