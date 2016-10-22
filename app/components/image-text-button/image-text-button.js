import React, {Component, PropTypes} from 'react';
import styles from './styles.css';

class ImageTextButton extends Component {
    render() {
        return (
            <div className={styles.container} style={{display: 'table'}}>
                <div style={{display: 'table-row'}}>
                    <div className={styles.whiteRectangle} style={{display: 'table-cell'}}>
                        <img className={styles.image} src={this.props.imgsrc}/>
                    </div>
                    <div style={{display:'table-cell', paddingRight: '15px', paddingLeft: '10px', verticalAlign: 'middle'}}>
                        {this.props.text}
                    </div>
                </div>
            </div>
        );
    }
}

ImageTextButton.propTypes = {
    text: React.PropTypes.string,
    imgsrc: React.PropTypes.string
};

export default ImageTextButton;