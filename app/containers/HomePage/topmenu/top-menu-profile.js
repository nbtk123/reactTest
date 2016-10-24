import React, {Component} from 'react';

class TopMenuProfile extends Component {
    render() {
        return (
            <ul>
                <li style={{display: 'inline', verticalAlign: 'middle'}}><img src="http://image.xboxlive.com/global/t.434f07d2/tile/0/28002" style={{width: '3vw', height: '3vw'}} /></li>
                <li style={{display: 'inline-block', verticalAlign: 'middle'}}>
                    <ul style={{listStyle: 'none', paddingLeft: '1em'}}>
                        <li><b>Yotam</b></li>
                        <li>Online</li>
                    </ul>
                </li>
            </ul>
        );
    }
}

export default TopMenuProfile;