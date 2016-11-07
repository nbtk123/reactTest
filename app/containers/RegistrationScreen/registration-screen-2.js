import React, {Component} from 'react';
import styles from './styles.scss';
import SignInUpButton from 'components/sign-in-up-button/SignInUpButton.js';
import CheckboxWithIcon from 'components/checkbox-with-icon/CheckboxWithIcon.js';

class RegistrationScreen2 extends Component {
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

                        <div className="row" style={{display: 'flex', justifyContent: 'center', paddingLeft: '5vw', marginTop: '2vw'}}>
                            <div className="col-xs-2" style={{}}>
                                <CheckboxWithIcon id="option1" name="element"
                                                    imgsrc="http://www.iconsdb.com/icons/preview/purple/male-3-xl.png"/>
                            </div>
                            <div className="col-xs-2" style={{}}>
                                <CheckboxWithIcon id="option2" name="element"
                                                    imgsrc="http://www.iconsdb.com/icons/preview/purple/male-3-xl.png"/>
                            </div>
                            <div className="col-xs-2" style={{}}>
                                <CheckboxWithIcon id="option3" name="element"
                                                    imgsrc="http://www.iconsdb.com/icons/preview/purple/male-3-xl.png"/>
                            </div>
                            <div className="col-xs-2" style={{}}>
                                <CheckboxWithIcon id="option4" name="element"
                                                    imgsrc="http://www.iconsdb.com/icons/preview/purple/male-3-xl.png"/>
                            </div>
                        </div>
                    
                        <div className="row" style={{marginTop: '2vw'}}>
                            <div className="col-xs-8 col-xs-offset-2" style={{textAlign: 'center'}}>
                                Now, choose an egg to hatch
                            </div>
                        </div>

                        <div className="row">
                            Another carousel
                        </div>

                        <div className="row">
                            <div className="col-xs-2 col-xs-offset-5">
                                <SignInUpButton text="Continue" bgcolor="#FECC3B" shadowcolor="#B76E18" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegistrationScreen2;