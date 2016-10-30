/*
 *
 * LearningSubjects reducer
 *
 */

import { fromJS } from 'immutable';
const fireIcon = require('./../../../images/fire.svg');
const calculatorIcon = require('./../../../images/calculator.svg');

const initialState = [{
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
  ];

function learningSubjectsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default learningSubjectsReducer;
