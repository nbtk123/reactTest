import React, {Component} from 'react';
import styles from './styles.scss'; 

class TextboxImageLeft extends Component {
    render() {
        return (
            <input type="text"
                    className={styles.roundedTextbox}
                    style={{backgroundImage: 'url(' + this.props.imgsrc + ')'}}
                    placeholder={this.props.hint}/>
        );
    }
}

TextboxImageLeft.propTypes = {
    hint: React.PropTypes.string,
    imgsrc: React.PropTypes.string
};

export default TextboxImageLeft;