import React, {Component} from 'react';
import styles from './styles.scss'; 
import TextboxImageLeft from 'components/textbox-image-left/TextboxImageLeft.js';

class LoginScreen extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className={['col-xs-8', 'col-xs-offset-2', styles.title].join(' ')}>
                        Log in to<br/> your kingdom
                    </div>
                </div>
                <div className="row">
                    <div className={['col-xs-8', 'col-xs-offset-2'].join(' ')} style={{textAlign: 'center'}}>
                        <TextboxImageLeft imgsrc="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/zoom-search-2-icon.png" hint="Username"/>
                    </div>
                </div>
                <div className="row">
                    <div className={['col-xs-8', 'col-xs-offset-2'].join(' ')} style={{textAlign: 'center'}}>
                        <TextboxImageLeft imgsrc="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/zoom-search-2-icon.png" hint="Password"/>
                    </div>
                </div>
                <div className="row">
                    <div className={['col-xs-6'].join(' ')} style={{textAlign: 'left'}}>
                        <div style={{fontSize: '0.7vw'}}>Forgot your password/username?</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-4" style={{textAlign: 'center'}}>
                        Sign in
                    </div>
                    <div className="col-xs-2" style={{textAlign: 'center'}}>
                        Sign up
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginScreen;