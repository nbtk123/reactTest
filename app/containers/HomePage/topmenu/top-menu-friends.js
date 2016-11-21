import React, {Component} from 'react';
import TextButton from 'components/text-button/text-button.js';

class ListItem extends Component {
    render() {
        return (
            <div className="container-fluid" style={{paddingTop:'1vw'}}>
                <div className="row">
                    <div className="col-xs-3">
                        <img src={this.props.imgsrc} style={{width: '3vw', height: '3vw'}} />
                    </div>
                    <div className="col-xs-8">
                        <div className="container-fluid">
                            <div className="row">
                                <div style={{color:'#DB5691', fontWeight:'bold', fontSize:'0.9vw'}}>{this.props.name}</div>
                            </div>
                            <div className="row">
                                <div className="col-xs-6" style={{paddingLeft:0}}>
                                    <div><TextButton text="Accept" textcolor="white" bgcolor="#374356" shadowcolor="#1A273A" /></div>
                                </div>
                                <div className="col-xs-6" style={{paddingLeft:0}}>
                                    <div><TextButton text="Deny" textcolor="white" bgcolor="#374356" shadowcolor="#1A273A" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
ListItem.propTypes = {
    imgsrc: React.PropTypes.string,
    name: React.PropTypes.string,
};

class TopMenuFriends extends Component {

    render() {

        var friendRequests = [
            {name: 'Sharon', imgsrc: require('images/friendicon_online.png')},
            {name: 'Sharon', imgsrc: require('images/friendicon_online.png')},
            {name: 'Sharon', imgsrc: require('images/friendicon_online.png')},
        ];

        var friends = [
            {}
        ]

        return (
            <div>
                <div>
                <img src="http://downloadicons.net/sites/default/files/msn-messenger-icon-48097.png" style={{width: '3vw', height: '3vw'}}/>
                13
                </div>
                <ul style={{backgroundColor:'#FED639', listStyleType:'none', paddingLeft: 0}}>
                    {
                        friendRequests.map((fr) => {
                            return (
                                <li><ListItem {... fr} /></li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TopMenuFriends;