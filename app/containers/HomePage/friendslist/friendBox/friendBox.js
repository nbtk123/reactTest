import React, {Component} from 'react';
import Styles from './friendBox.scss';
const img = require('./crown.png');
class FriendBox extends Component {
  render() {
    return (
      <li style={{display:'inline-block'  ,marginTop:'40px'}}>
        {this.props.crown ? crown() : ''}
        <figure className={Styles.ProfileImageContainer}>
          <img src={this.props.img} className={Styles.profileImage}></img>
        </figure>
        <h2 className={Styles.nameText}>{this.props.name}</h2>
        <h3 className={Styles.levelText}>Lv.{this.props.level}</h3>
      </li>
    );
  }
}

const crown = (prop) => {
  return (
    <img className={Styles.crown} src={img}>
    </img>
  )

}

export default FriendBox;