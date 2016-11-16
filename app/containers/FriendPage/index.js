import React, {Component} from 'react';
import styles from './styles.scss';
import ImageTextButton from 'components/image-text-button/image-text-button';
import HorizontalProgressBar from 'components/horizontal-progress-bar/horizontal-progress-bar';

class FriendPage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="col-xs-8 col-xs-offset-2">
                    <div className={["container", styles.contentContainer].join(' ')}>

                        <div className="row">
                            
                            <div className="col-xs-6">
                                <div>
                                    <ul className={styles.ulinline}>
                                        <li className={styles.liinline}>Grandeeney</li>
                                        <li className={styles.liinline}><img src=""/>&nbsp;image</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className={styles.ulinline}>
                                        <li className={styles.liinline}>Water dragon</li>
                                        <li className={styles.liinline}><img src=""/>&nbsp;image</li>
                                    </ul>
                                </div>
                                <div>
                                    <img src="http://vignette4.wikia.nocookie.net/quiz-rpg-the-world-of-mystic-wiz/images/8/8e/Ignite_(Flame_Dragon)_transparent.png/revision/latest?cb=20140917073730" style={{width: '240px', height: '320px'}}/>
                                </div>
                                <div>
                                    <div style={{marginBottom: '20px'}}><ImageTextButton text="Give 5 Crystals" imgsrc="http://downloadicons.net/sites/default/files/purple-crystal-icon-2105.png"/></div>
                                </div>
                                <div>
                                    LV.2
                                </div>
                                <div>
                                    <HorizontalProgressBar />
                                </div>
                            </div>

                            <div className="col-xs-3">
                                    <div>Friends 13</div>
                                    <div>View more</div>
                                    
                                    <div>Strength</div>
                                    <div>Evasion</div>

                                    <div>Level</div>
                                    
                                    <div style={{display: 'table'}}>
                                        LEVEL TABLE COMPONENT
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