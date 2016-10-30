import React, {Component} from 'react';
import Styles from './learningItem.scss'

class LearningItem extends Component {

  render() {
    return (
      <div className={Styles.container} style={{transform:  `rotateZ( ${this.props.rotatingAngle * -1}deg`}}>
        <div className={Styles.circleShadow}> </div>
        <div className={Styles.circle}>
          <TopHalfCircle level={this.props.level} learningIconImage={this.props.learningIconImage}/>
          <BotHalfCircle metaphorIconImage={this.props.metaphorIconImage} />
        </div>
        <h2 className={Styles.metaphorTitle}> {this.props.metaphorTitle} </h2>
      </div>
    );
  }
}

LearningItem.porpTypes = {
  level: React.PropTypes.number.isRequired,
  learningIconImage:  React.PropTypes.string.isRequired,
  metaphorIconImage:  React.PropTypes.string.isRequired,
  metaphorTitle:  React.PropTypes.string.isRequired,
  rotatingAngle: React.PropTypes.number
};

LearningItem.defaultProps = {
  level: 1,
  rotatingAngle: 0
};


const TopHalfCircle = (props) => {
  return (
    <div className={Styles.halfCircle}>
      <span className={Styles.innerTxt}> {props.level} </span>
      <img  className={Styles.innerIcon} src={props.learningIconImage} />
      <div className={Styles.circleHider}></div>
    </div>
  )
};


const BotHalfCircle = (props) => {
  return (
    <img className={Styles.bottomIcon} src={props.metaphorIconImage} />
  )
};

export default LearningItem;