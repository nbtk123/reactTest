import React, {Component, PropTypes} from 'react';
import SignInUpButton from 'components/sign-in-up-button/SignInUpButton.js';
import TextboxImageLeft from 'components/textbox-image-left/TextboxImageLeft.js';
import styles from './styles.scss';

class RegistrationScreen3 extends Component {
    render() {
        return (
            <div className={["container-fluid", styles.backgroundContainer].join(' ')}>
                <div className="col-xs-8 col-xs-offset-2">
                    <div className={["container", styles.contentContainer].join(' ')}>
                        
                        <div className="row">
                            <div className="col-xs-8 col-xs-offset-2" style={{textAlign: 'center'}}>
                                <h1>Hey %USERNAME%!</h1>
                                <h2>Welcome to your kingdom</h2>
                            </div>
                        </div>

                        <div className="row" style={{display: 'flex', justifyContent: 'center', marginTop: '2vw'}}>
                            And give it a name
                        </div>

                        <div className="row">
                            <div className="col-xs-12" style={{display: 'flex', justifyContent: 'center', marginTop: '2vw'}}>
                                <img src="http://dragoncityguide.net/images/dragons/full/ace-dragon-egg.png" />
                            </div>
                        </div>

                        <div className="row" style={{display: 'flex', justifyContent: 'center', marginTop: '1vw'}}>
                            <div className="col-xs-3">
                                <TextboxImageLeft imgsrc="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/zoom-search-2-icon.png"
                                                    hint="Your dragon's name"
                                                    bgcolor="#BABC4E"
                                                    shadowcolor="#7F7317"/>
                                </div>
                        </div>

                        <div className="row" style={{display: 'flex', justifyContent: 'center', marginTop: '1.5vw'}}>
                            <div className="col-xs-2">
                                <SignInUpButton text="Finish" bgcolor="#FECC3B" shadowcolor="#B76E18" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

RegistrationScreen3.propTypes = {

};

export default RegistrationScreen3;