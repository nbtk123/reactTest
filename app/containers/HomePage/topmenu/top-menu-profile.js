import React, {Component} from 'react';
import styles from './styles.scss';

class TopMenuProfile extends Component {
    render() {
        return (
            <ul>
                <li style={{display: 'inline', verticalAlign: 'middle'}}><img className={styles.profileImage} src="http://image.xboxlive.com/global/t.434f07d2/tile/0/28002" /></li>
                <li style={{display: 'inline-block', verticalAlign: 'middle'}}>
                    <ul style={{listStyle: 'none', paddingLeft: '0.5vw'}}>
                        <li style={{position: 'relative', top: '0.5vw'}}><b>Yotam</b></li>
                        <li className={styles.statusOnlineCircle}></li>
                        <li style={{fontSize: '0.75vw', display: 'inline-block'}}>Online</li>
                        <li style={{display: 'inline-block', color: '#617009'}}>
                            <i className="fa fa-angle-down" aria-hidden="true" style={{position: 'relative', top:'0.7vw', fontSize:'1.75vw'}}></i>
                        </li>
                    </ul>
                </li>
            </ul>
        );
    }
}

export default TopMenuProfile;