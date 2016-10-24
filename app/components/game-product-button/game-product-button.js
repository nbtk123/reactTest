import React, {Component, PropTypes} from 'react';
import styles from './styles.scss';
class GameProductButton extends Component {

    render() {
      let enabled = this.props.btnEnabled;
      let boxClass = enabled ? styles.enabled : styles.disabled;
        return (
          <li className={styles.container}>
            <div className={[styles.boxContainer, boxClass].join(' ')}>
                <div className={styles.header}>
                  {this.props.price} pts
                </div>
                <img src={this.props.imgsrc} style={{width: '2vw', height: '2vw', margin:'5% 0'}} />
            </div>
            <div className={styles.productDescription}>{this.props.productName} </div>
            <div className={styles.gameTitle}>{this.props.gameName} </div>
          </li>
        );
    }
}

GameProductButton.propTypes = {
  btnEnabled: React.PropTypes.bool,
  price: React.PropTypes.number,
  imgsrc: React.PropTypes.string,
  gameName: React.PropTypes.string,
  productName: React.PropTypes.string
};

export default GameProductButton;