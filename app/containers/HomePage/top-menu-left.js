import React, {Component} from 'react';

class TopMenuLeft extends Component {
    
    menuItems = [
        {'title':'SP', subitems: []},
        {'title':'My Games', subitems: ['Minecraft', 'CLUB Penguin', 'Pokemon GO']},
        {'title':'My Categories', subitems: []},
        {'title':'Kingdom', subitems: []},
        {'title':'Shop', subitems: []}
    ];

    render() { 

        return (
            <div>
                {this.menuItems.map(
                    function(menuItem) {
                        if (menuItem.subitems.length > 0) {
                            return (
                                <div className="dropdown" key={menuItem.title} style={{float: 'left'}}>
                                    <a className="btn dropdown-toggle" data-toggle="dropdown">{menuItem.title}</a>
                                    {
                                        <ul className="dropdown-menu">
                                            {
                                                menuItem.subitems.map(function(subitem) {
                                                    return (<li key={subitem}><a href="#">{subitem}</a></li>);
                                                })
                                            }
                                        </ul>
                                    }
                                </div>
                            )
                        } else {
                            return (
                                <div className="dropdown" key={menuItem.title} style={{float: 'left'}}>
                                    <a className="btn dropdown-toggle" data-toggle="dropdown">{menuItem.title}</a>
                                </div>
                            )
                        }
                    }
                )}
            </div>
        );
    }
}

export default TopMenuLeft;