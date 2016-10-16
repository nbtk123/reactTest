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
import TopMenu from './top-menu';
import ContentScreen from './contentscreen';
import FriendList from './friendlist';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12" style={{background: '#ff0000'}}>
            <TopMenu />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-11" style={{background: '#00ff00'}}>
            <ContentScreen />
          </div>
          <div className="col-xs-1" style={{background: '#0000ff'}}>
            <FriendList />
          </div>
        </div>
      </div>
    );
  }
}
