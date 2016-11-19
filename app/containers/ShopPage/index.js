import React, {Component} from 'react';
import styles from './styles.scss';
import GameCard from './game-card/game-card';

class ShopPage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row" style={{paddingTop: '2vw', paddingBottom: '2vw'}}>
                    <div className={[styles.pageTitle, "col-xs-12"].join(' ')}>
                        Shop
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-4">
                        <GameCard gameImgSrc={require('images/minecraft-shoppage.png')}
                                    gameName="Minecraft"/>
                    </div>
                    <div className="col-xs-4">
                        <GameCard gameImgSrc={require('images/minecraft-shoppage.png')}
                                    gameName="Minecraft"/>
                    </div>
                    <div className="col-xs-4">
                        <GameCard gameImgSrc={require('images/minecraft-shoppage.png')}
                                    gameName="Minecraft"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopPage;