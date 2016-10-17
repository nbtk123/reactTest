import React, {Component} from 'react';

class TopMenuSearch extends Component {
    render() {
        return (
            <div>
                    <input type="textbox" style={{backgroundImage: 'url(http://icons.iconarchive.com/icons/graphicloads/100-flat/256/zoom-search-2-icon.png)', 
                backgroundPosition: 'right top',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundColor: '#fff',
                paddingRight: '48px',
                height: '48px',
                borderRadius: '25px',
                border: '2px solid #73AD21'}}/>
            </div>
        );
    }
}

export default TopMenuSearch;