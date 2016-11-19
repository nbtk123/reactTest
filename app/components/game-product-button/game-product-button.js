import React, {Component, PropTypes} from 'react';
import styles from './styles.scss';
class GameProductButton extends Component {

    showGameTitle() {
        if (this.props.isShowGameTitle) {
          return (<div className={styles.gameTitle}>{this.props.gameName} </div>);
        } else {
          return null;
        }
    }

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
              {this.showGameTitle()}
          </li>
        );
    }
}

GameProductButton.propTypes = {
  btnEnabled: React.PropTypes.bool,
  price: React.PropTypes.number,
  imgsrc: React.PropTypes.string,
  gameName: React.PropTypes.string,
  productName: React.PropTypes.string,
  isShowGameTitle: React.PropTypes.string,
};

export default GameProductButton;