import React, {Component} from 'react';
import Styles from './LearningCarousel.scss'
import LearningItem from './../LearningItem/learningItem'
const fireIcon = require('./../../../images/fire.svg');
const calculatorIcon = require('./../../../images/calculator.svg');
class LearningCarousel extends Component {

  render() {

    return (
      <div>
        {this.props.learningSubjects.map((learningSubject) => <LearningItem key={learningSubject.metaphorTitle} {...learningSubject} />)}
      </div>
    );
  }
}

LearningCarousel.porpTypes = {
  learningSubjects: React.PropTypes.object
};

LearningCarousel.defaultProps = {
  learningSubjects: [{
    level: 4,
    learningIconImage:  calculatorIcon,
    metaphorIconImage:  fireIcon,
    metaphorTitle: 'Fire Breath'
    }
  ]
};

const TopHalfCircle = (props) => {
  return (
    <div className={Styles.halfCircle}>
      <span className={Styles.innerTxt}> {props.level} </span>
      <img  className={Styles.innerIcon} src={calculatorIcon} />
      <div className={Styles.circleHider}></div>
    </div>
  )
};


const BotHalfCircle = (props) => {
  return (
    <img className={Styles.bottomIcon} src={fireIcon} />
  )
};

export default LearningCarousel;