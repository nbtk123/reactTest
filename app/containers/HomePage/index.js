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
import TopMenu from './topmenu/top-menu';
import ContentScreen from './contentscreen/contentscreen';
import FriendList from './friendslist/friendlist';
import Styles from './index.scss';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  getContentComponent() {
    if (this.props.children) {
      return this.props.children;
    } else {
      return (<ContentScreen />);
    }
  }

  render() {
    console.log("BLAT");
    console.log(this.props.children);

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
                {this.getContentComponent()}
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