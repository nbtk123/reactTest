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
import TopMenu from './topmenu/top-menu';
import ContentScreen from './contentscreen/contentscreen';
import FriendList from './friendslist/friendlist';
import Styles from './index.scss';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div style={{height: '100%'}}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12" style={{background: '#A9C147', zIndex: '1', height: '4vw'}}>
              <TopMenu />
            </div>
          </div>
        </div>
          <div className={Styles.container}>
            <div className={Styles.row}>
              <div className={["col-xs-11", Styles.noFloat].join(' ')} style={{background: '#D0F1F1'}}>
                <ContentScreen />
              </div>
              <div className={["col-xs-1", Styles.noFloat].join(' ')} style={{background: '#2D3C56'}}>
                <FriendList />
              </div>
            </div>
           </div>
     </div>
    );
  }
}
