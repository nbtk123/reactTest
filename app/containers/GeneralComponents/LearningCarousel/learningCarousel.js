import React, {Component} from 'react';
import Styles from './learningCarousel.scss'
import LearningItem from './../LearningItem/learningItem'
import {Icon} from 'react-fa';
const fireIcon = require('./../../../images/fire.svg');
const calculatorIcon = require('./../../../images/calculator.svg');

class LearningCarousel extends Component {

  constructor(props) {
    super();
    this.state = {
      panelSize: 300,
      numberOfPanels: props.learningSubjects.length,
      rotationStep: -60,
      currentPanelRotationAngle: 0
    }
  }

  moveLeft() {
    this.setState({currentPanelRotationAngle: this.state.currentPanelRotationAngle - this.state.rotationStep})
  }

  moveRight() {
    this.setState({currentPanelRotationAngle: this.state.currentPanelRotationAngle + this.state.rotationStep})
  }

  getElementRotatingAngle(elementNumber) {
    let currentPosition = (elementNumber * this.state.rotationStep + this.state.currentPanelRotationAngle) % (this.state.rotationStep * this.props.learningSubjects.length);
    currentPosition = currentPosition > 0 ? (this.state.rotationStep * this.props.learningSubjects.length) + currentPosition : currentPosition;
    const numberOfRounds = Math.floor((elementNumber * this.state.rotationStep + this.state.currentPanelRotationAngle) / (this.state.rotationStep * this.props.learningSubjects.length));

    return currentPosition + numberOfRounds * -360;
  }
  getStyle(elementNumber) {
    return {
      transform: `rotateZ( ${this.getElementRotatingAngle(elementNumber)}deg`
    }
  }

  render() {

    return (
      <div className={`${Styles.container} `}>

          <Icon className={`${Styles.arrowShadow} ${Styles.left}`} name="angle-left" />
          <Icon className={Styles.arrow} name="angle-left" onClick={this.moveLeft.bind(this)}/>


        <div className={Styles.carousel}>
          <img src={this.props.centeredImage} className={Styles.dragonImage}></img>
            {this.props.learningSubjects.map((learningSubject, index) =>
              <div className={Styles.transformAnimation} key={learningSubject.metaphorTitle} style={this.getStyle(index)}>
                <LearningItem  {...learningSubject} rotatingAngle={this.getElementRotatingAngle(index)} />
              </div>)}
        </div>


          <Icon className={`${Styles.arrowShadow} ${Styles.right}`} name="angle-right" />
          <Icon className={`${Styles.arrow} ${Styles.right}`} name="angle-right" onClick={this.moveRight.bind(this)}/>

     
      </div>
    );
  }
}

LearningCarousel.porpTypes = {
  learningSubjects: React.PropTypes.object
};

LearningCarousel.defaultProps = {
  learningSubjects: [{
    level: 1,
    learningIconImage:  calculatorIcon,
    metaphorIconImage:  fireIcon,
    metaphorTitle: 'Fire Breath'
    },
    {
      level: 2,
      learningIconImage:  calculatorIcon,
      metaphorIconImage:  fireIcon,
      metaphorTitle: 'Kicking Ass'
    },
    {
      level: 3,
      learningIconImage:  calculatorIcon,
      metaphorIconImage:  fireIcon,
      metaphorTitle: 'Testing'
    },
    {
      level: 4,
      learningIconImage:  calculatorIcon,
      metaphorIconImage:  fireIcon,
      metaphorTitle: 'Testing 1'
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