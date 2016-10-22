import React, {Component, PropTypes} from 'react';
import styles from './styles.css';

class GameProductButton extends Component {

    render() {
        return (
            <div className={styles.containerEnabled}>
                <div className={styles.headerTextContainerEnabled}>
                    {this.props.text}
                </div>
                <div className={styles.imgContainerEnabled}>
                    <img src={this.props.imgsrc} style={{width: '48px', height: '48px'}} />
                </div>
            </div>
        );
    }
}

GameProductButton.propTypes = {
    text: React.PropTypes.string,
    imgsrc: React.PropTypes.string,
    enabled: React.PropTypes.boolean
};

export default GameProductButton;