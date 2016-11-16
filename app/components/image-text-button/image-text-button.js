import React, {Component} from 'react';
import styles from './styles.scss'; 

class ImageTextButton extends Component {

//backgroundImage: 'url(' + this.props.imgsrc + ')'

    render() {
        return (
            <div style={{marginBottom: '0.2vw'}}>
                <img src={this.props.imgsrc} className={styles.img}/>
                <div className={styles.shadow} style={{backgroundColor: this.props.shadowcolor}}>
                    <div className={styles.container}
                            style={{backgroundColor: this.props.bgcolor}}>
                            <div className={styles.whiteRect} />
                            <div style={{paddingLeft: '0.2vw', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>{this.props.text}</div>
                    </div>
                </div>
            </div>
        );
    }
}

ImageTextButton.propTypes = {
    text: React.PropTypes.string,
    imgsrc: React.PropTypes.string,
    bgcolor: React.PropTypes.string,
    shadowcolor: React.PropTypes.string
};

export default ImageTextButton;