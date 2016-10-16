import React, {Component} from 'react';

class TopMenuProfile extends Component {
    render() {
        return (
            <div>
                <img src="http://image.xboxlive.com/global/t.434f07d2/tile/0/28002" style={{width: '48px', height: '48px'}} />
                <ul style={{float: 'right', listStyle: 'none', paddingLeft: '1em'}}>
                    <li>Yotam</li>
                    <li>Online</li>
                </ul>
            </div>
        );
    }
}

export default TopMenuProfile;