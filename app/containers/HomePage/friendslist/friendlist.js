import React, {Component} from 'react';
import Styles from './friendlist.scss';
import FriendBoxImport from './friendBox/friendBox';
import {sortBy} from 'lodash';

class FriendList extends Component {

    constructor() {
      super();
      this.state = {friends: [{
        name: 'Omri',
        img: 'http://static.giantbomb.com/uploads/original/17/174460/2638131-3083711486-south.jpg',
        level:1,
        id: 1
      },
        {
          name: 'Nir',
          img: 'http://static.giantbomb.com/uploads/original/17/174460/2638131-3083711486-south.jpg',
          level: 2,
          id: 2
        }]
      }
    }

    render() {
        return (
           <ul style={{listStyle: 'none', paddingLeft: '0', textAlign:'center'}}>
             {sortBy(this.state.friends, [(friend) =>  -1 * friend.level])
               .map((friend, index) => <FriendBoxImport crown={index === 1}  key={friend.id} name={friend.name} img={friend.img} level={friend.level}/>)}
           </ul>
        );
    }
}

export default FriendList;