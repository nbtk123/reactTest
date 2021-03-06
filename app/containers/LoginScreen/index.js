import React, {Component} from 'react';
import styles from './styles.scss'; 
import TextboxImageLeft from 'components/textbox-image-left/TextboxImageLeft.js';
import SignInUpButton from 'components/sign-in-up-button/SignInUpButton.js';

class LoginScreen extends Component {
    render() {
        return (
            <div className={["container-fluid", styles.backgroundContainer].join(' ')}>
                <div className="col-xs-8 col-xs-offset-2">
                    <div className={["container-fluid", styles.contentContainer].join(' ')}>
                        <div className="row" style={{marginBottom: '2vw'}}>
                            <div className={['col-xs-8', 'col-xs-offset-2', styles.title].join(' ')}>
                                Log in to<br/> your kingdom
                            </div>
                        </div>
                        <div className="row" style={{marginBottom: '0.7vw', display: 'flex', justifyContent: 'center'}}>
                            <div className={['col-xs-4'].join(' ')}>
                                <TextboxImageLeft imgsrc="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/zoom-search-2-icon.png"
                                                    hint="Username"
                                                    bgcolor="#BABC4E"
                                                    shadowcolor="#7F7317"/>
                            </div>
                        </div>
                        <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
                            <div className={['col-xs-4'].join(' ')}>
                                <TextboxImageLeft imgsrc="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/zoom-search-2-icon.png" 
                                                    hint="Password"
                                                    bgcolor="#BABC4E"
                                                    shadowcolor="#7F7317"/>
                            </div>
                        </div>
                        <div className="row" style={{marginBottom: '1.5vw', marginTop: '0.4vw'}}>
                            <div className={['col-xs-3 col-xs-offset-5'].join(' ')} style={{textAlign: 'right'}}>
                                <div style={{fontSize: '0.7vw'}}>Forgot your password/username?</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-xs-2 col-xs-offset-4">
                                        <SignInUpButton text="Sign in" bgcolor="#FECC3B" shadowcolor="#B76E18" />
                                    </div>
                                    <div className="col-xs-2">
                                        <SignInUpButton text="Sign up" bgcolor="#FECC3B" shadowcolor="#B76E18" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginScreen;