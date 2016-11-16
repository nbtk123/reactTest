import React, {Component} from 'react';
import styles from './styles.scss';
import ImageTextButton from 'components/image-text-button/image-text-button';
import HorizontalProgressBar from 'components/horizontal-progress-bar/horizontal-progress-bar';
import CircleImage from 'components/circle-image/circle-image';
import LevelTable from './level-table/level-table';

class FriendPage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="col-xs-8 col-xs-offset-2">
                    <div className={["container", styles.contentContainer].join(' ')}>

                        <div className="row">
                            
                            <div className="col-xs-6">
                                <div classame="container-fluid">
                                    <div className="row">
                                        <ul className={styles.ulinline}>
                                            <li className={[styles.liinline, styles.dragonName].join(' ')}>Grandeeney</li>
                                            <li className={styles.liinline} style={{paddingLeft: '1vw'}}><CircleImage /></li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <ul className={styles.ulinline}>
                                            <li className={[styles.liinline, styles.subTitle].join(' ')}>Water dragon</li>
                                            <li className={styles.liinline}><img src="https://iconscout.com/images/icon/free/png-32/rain-drop-water-weather-30bb2057485beef3-32x32.png"/></li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <img src="http://vignette4.wikia.nocookie.net/quiz-rpg-the-world-of-mystic-wiz/images/8/8e/Ignite_(Flame_Dragon)_transparent.png/revision/latest?cb=20140917073730" style={{width: '240px', height: '320px'}}/>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-4">
                                            <div style={{marginBottom: '20px'}}>
                                                <ImageTextButton text="Give 5 Crystals"
                                                                imgsrc="http://downloadicons.net/sites/default/files/purple-crystal-icon-2105.png"
                                                                bgcolor='#A9C147'
                                                                shadowcolor='#707F17' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row" style={{position: 'relative'}}>
                                        <div className={styles.level}>LV.2</div>
                                        <div style={{position: 'relative', top: '1vw'}}><HorizontalProgressBar /></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-3">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className={styles.subTitle}>Friends 13</div>
                                    </div>
                                    <div className="row">
                                        <div><img src="https://upload.wikimedia.org/wikipedia/en/b/bc/Windows_Messenger_XP_Icon.png"/></div>
                                        <div>View more</div>
                                    </div>
                                    <div className="row">
                                        <div className={styles.subTitle}>Strength</div>
                                        <div>Evasion</div>
                                    </div>

                                    <div className="row">
                                        <div className={styles.subTitle}>Level</div>
                                        <LevelTable />
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-3">
                                <div>Source</div>
                                <div>egg</div>

                                <div>Size</div>
                                <div>0.7m 6.9kg</div>

                                <div>Evolution</div>
                                <div>evolution levels</div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default FriendPage;