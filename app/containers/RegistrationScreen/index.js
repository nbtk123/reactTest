import React, {Component} from 'react';
import styles from './styles.scss';
import TextboxImageLeft from 'components/textbox-image-left/TextboxImageLeft.js';
import SignInUpButton from 'components/sign-in-up-button/SignInUpButton.js';
import CheckboxWithIcon from 'components/checkbox-with-icon/CheckboxWithIcon.js';

class RegistrationScreen extends Component {
    render() {
        return (
            <div className={["container-fluid", styles.backgroundContainer].join(' ')}>
                <div className="col-xs-8 col-xs-offset-2">
                    <div className={["container", styles.contentContainer].join(' ')}>
                        
                        <div className="row" style={{marginBottom: '2vw'}}>
                            <div className={['col-xs-8', 'col-xs-offset-2', styles.title].join(' ')}>
                                Schoolplay
                            </div>
                        </div>

                        <div className="row" style={{marginBottom: '0.7vw', display: 'flex', justifyContent: 'center'}}>
                            <div className={['col-xs-4'].join(' ')}>
                                <TextboxImageLeft imgsrc="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/zoom-search-2-icon.png"
                                                    hint="First name"
                                                    bgcolor="#BABC4E"
                                                    shadowcolor="#7F7317"/>
                            </div>
                            <div className={['col-xs-4'].join(' ')}>
                                <TextboxImageLeft imgsrc="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/zoom-search-2-icon.png"
                                                    hint="Last name"
                                                    bgcolor="#BABC4E"
                                                    shadowcolor="#7F7317"/>
                            </div>
                        </div>

                        <div className="row" style={{marginBottom: '0.7vw', display: 'flex', justifyContent: 'center'}}>
                            <div className={['col-xs-4'].join(' ')}>
                                <TextboxImageLeft imgsrc="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/zoom-search-2-icon.png"
                                                    hint="School"
                                                    bgcolor="#BABC4E"
                                                    shadowcolor="#7F7317"/>
                            </div>
                            <div className={['col-xs-4'].join(' ')}>
                                <TextboxImageLeft imgsrc="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/zoom-search-2-icon.png"
                                                    hint="Class"
                                                    bgcolor="#BABC4E"
                                                    shadowcolor="#7F7317"/>
                            </div>
                        </div>

                        <div className="row" style={{marginBottom: '0.7vw', display: 'flex', justifyContent: 'center'}}>
                            <div className={['col-xs-2'].join(' ')}>
                                <CheckboxWithIcon id="option1" name="gender"
                                                    imgsrc="http://www.iconsdb.com/icons/preview/purple/female-3-xl.png"/>
                            </div>
                            <div className={['col-xs-2'].join(' ')}>
                                <CheckboxWithIcon id="option2" name="gender"
                                                    imgsrc="http://www.iconsdb.com/icons/preview/purple/male-3-xl.png"/>
                            </div>
                            <div className={['col-xs-4'].join(' ')}>
                                <TextboxImageLeft imgsrc="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/zoom-search-2-icon.png"
                                                    hint="Email"
                                                    bgcolor="#BABC4E"
                                                    shadowcolor="#7F7317"/>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-xs-3 col-xs-offset-2" style={{position: 'relative', left: '1vw'}}>
                                <SignInUpButton text="Continue" bgcolor="#FECC3B" shadowcolor="#B76E18" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default RegistrationScreen;