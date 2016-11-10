import React, {Component} from 'react';
import styles from './styles.scss';
import TextboxImageLeft from 'components/textbox-image-left/TextboxImageLeft.js';
import SignInUpButton from 'components/sign-in-up-button/SignInUpButton.js';
import CheckboxWithIcon from 'components/checkbox-with-icon/CheckboxWithIcon.js';
import RegistrationScreen1 from './registration-screen-1';
import RegistrationScreen2 from './registration-screen-2';
import RegistrationScreen3 from './registration-screen-3';

function getComponentByPhase(phase) {
    switch (phase) {
        default:
        case 1:
            return (<RegistrationScreen1 />);
        case 2:
            return (<RegistrationScreen2 />); 
        case 3:
            return (<RegistrationScreen3 />);
    }
}

class RegistrationScreen extends Component {    
    render() {

        var phase = 2;

        return (
            <div className={["container-fluid", styles.backgroundContainer].join(' ')}>
                <div className="col-xs-12">
                    {getComponentByPhase(phase)}
                </div>
            </div>
        );
    }
}

export default RegistrationScreen;