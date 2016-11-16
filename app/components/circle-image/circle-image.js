import React, {Component, PropTypes} from 'react';
import styles from './styles.scss';

class CircleImage extends Component {
    render() {
        return (
            <div className={styles.container} style={{backgroundColor: '#606F0A'}}>
                <div className={styles.container} style={{backgroundColor: '#A9C147'}}>
                    <img src="http://simpleicon.com/wp-content/uploads/pencil-64x64.png" />
                </div>
            </div>
        );
    }
}

CircleImage.propTypes = {
    imgsrc: React.PropTypes.string,
    bgcolor: React.PropTypes.string,
    shadowcolor: React.PropTypes.string
};

export default CircleImage;