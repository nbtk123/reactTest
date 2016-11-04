import React, {Component, PropTypes} from 'react';
import styles from './styles.scss';

class SignInOutButton extends Component {
    render() {
        return (
            <div className={styles.shadow} style={{backgroundColor: this.props.shadowcolor}}>
                <div className={styles.container}
                        style={{backgroundColor: this.props.bgcolor}}>
                    {this.props.text}
                </div>
            </div>
        );
    }
}

SignInOutButton.propTypes = {
    text: React.PropTypes.string,
    bgcolor: React.PropTypes.string,
    shadowcolor: React.PropTypes.string
};

export default SignInOutButton;