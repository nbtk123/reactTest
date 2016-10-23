import React, {Component} from 'react';
import GameProductButton from 'components/game-product-button/game-product-button';

class GameProductList extends Component {
    render() {

        var products = [
            {imgsrc: "http://downloadicons.net/sites/default/files/roller-brush-icon-61533.png", text: "25 pts", enabled: true},
            {imgsrc: "http://downloadicons.net/sites/default/files/roller-brush-icon-61533.png", text: "25 pts", enabled: true},
            {imgsrc: "http://downloadicons.net/sites/default/files/roller-brush-icon-61533.png", text: "25 pts", enabled: true}
        ];

        return (
            <div style={{display: 'table', width: '100%'}}>
                <div style={{display: 'table-row'}}>
                    <div style={{display: 'table-cell'}}>
                        {products.map(function(product) {
                            return <GameProductButton imgsrc={product.imgsrc} text={product.text} enabled={product.enabled}/>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default GameProductList;