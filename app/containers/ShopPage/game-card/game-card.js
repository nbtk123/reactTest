import React, {Component, PropTypes} from 'react';
import styles from './styles.scss';
import GameProductButton from 'components/game-product-button/game-product-button.js';
import ViewMoreButton from 'containers/ShopPage/game-card/view-more-button/view-more-button';

class GameCard extends Component {
    render() {

        var items = [
            {imgsrc: require('images/rocket.png'), price: 25, btnEnabled: true, gameName: "Minecraft", productName: "New Island", id:1},
            {imgsrc: require('images/rocket.png'), price: 25, btnEnabled: true, gameName: "Minecraft", productName: "New Island", id:1},
            {imgsrc: require('images/rocket.png'), price: 25, btnEnabled: true, gameName: "Minecraft", productName: "New Island", id:1},
            {imgsrc: require('images/rocket.png'), price: 25, btnEnabled: true, gameName: "Minecraft", productName: "New Island", id:1},
            {imgsrc: require('images/rocket.png'), price: 25, btnEnabled: true, gameName: "Minecraft", productName: "New Island", id:1},
            {imgsrc: require('images/rocket.png'), price: 25, btnEnabled: true, gameName: "Minecraft", productName: "New Island", id:1},
        ];

        return (
            <div className={["container-fluid", styles.background].join(' ')}>
                <div className="row" style={{display:'flex', justifyContent:'center', paddingTop:'1vw'}}>
                    <img src={this.props.gameImgSrc} style={{width: '7vw', height:'8vw'}}/>
                </div>
                <div className={["row", styles.gameTitle].join(' ')} style={{display:'flex', justifyContent:'center', paddingTop:'1vw'}}>
                    {this.props.gameName}
                </div>
                <div className="row" style={{display:'flex', justifyContent:'center', marginTop:'2vw', marginBottom:'1vw'}}>
                    <div className="col-xs-7">
                        {
                            items.map(function(item) {
                                return (
                                    <div className="col-xs-4" style={{paddingBottom:'1vw'}}>
                                        <GameProductButton showGameTitle="false" {... item}/>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="row">
                    <ViewMoreButton />
                </div>
            </div>
        );
    }
}

GameCard.propTypes = {
    gameImgSrc: React.PropTypes.string,
    gameName: React.PropTypes.string,
};

export default GameCard;