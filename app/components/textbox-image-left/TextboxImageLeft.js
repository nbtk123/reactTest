import React, {Component} from 'react';
import styles from './styles.scss'; 

class TextboxImageLeft extends Component {

//backgroundImage: 'url(' + this.props.imgsrc + ')'

    render() {
        return (
            <div style={{marginBottom: '0.2vw'}}>
                <div className={styles.shadow} style={{backgroundColor: this.props.shadowcolor}}>
                    <div className={styles.container}
                            style={{backgroundColor: this.props.bgcolor}}>
                        <input type="text"
                                className={styles.roundedTextbox}
                                placeholder={this.props.hint}/>
                    </div>
                </div>
            </div>
        );
    }
}

TextboxImageLeft.propTypes = {
    hint: React.PropTypes.string,
    imgsrc: React.PropTypes.string,
    bgcolor: React.PropTypes.string,
    shadowcolor: React.PropTypes.string
};

export default TextboxImageLeft;