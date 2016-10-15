/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      // <h1>
      //   <FormattedMessage {...messages.header} />
      // </h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12" style={{background: '#ff0000'}}>
            TOP MENU COMPONENT
          </div>
        </div>
        <div className="row">
          <div className="col-md-11" style={{background: '#00ff00'}}>
            DRAGON COMPONENT
          </div>
          <div className="col-md-1" style={{background: '#0000ff'}}>
            FRIENDS LIST COMPONENT
          </div>
        </div>
      </div>
    );
  }
}
