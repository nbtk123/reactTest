import React, {Component, PropTypes} from 'react';
import styles from './styles.scss';

class TextButton extends Component {
    render() {
        return (
            <div className={styles.shadow} style={{backgroundColor: this.props.shadowcolor}}>
                <div className={styles.container}
                        style={{backgroundColor: this.props.bgcolor,
                                color: this.props.textcolor}}>
                    {this.props.text}
                </div>
            </div>
        );
    }
}

TextButton.propTypes = {
    text: React.PropTypes.string,
    textcolor: React.PropTypes.string,
    bgcolor: React.PropTypes.string,
    shadowcolor: React.PropTypes.string
};

export default TextButton;