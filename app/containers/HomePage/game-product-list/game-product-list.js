import React, {Component} from 'react';
import GameProductButton from 'components/game-product-button/game-product-button';
import rockedIcon from './rocket.png'
import {Icon} from 'react-fa';
import styles from './styles.scss';

class GameProductList extends Component {
    render() {

        var products = [
            {imgsrc: rockedIcon, price: 25, btnEnabled: false, gameName: "Minecraft", productName: "New Island", id:1},
            {imgsrc: rockedIcon, price: 25, btnEnabled: true, gameName: "Minecraft", productName: "New Island", id:2},
            {imgsrc: rockedIcon, price: 25, btnEnabled: false, gameName: "Minecraft", productName: "New Island", id:3},
            {imgsrc: rockedIcon, price: 25, btnEnabled: true, gameName: "Minecraft", productName: "New Island", id:4},
            {imgsrc: rockedIcon, price: 25, btnEnabled: true, gameName: "Minecraft", productName: "New Island", id:5},
        ];

        return (
                    <ul style={{listStyle: 'none', textAlign: 'center'}} className="list-inline">
                        {products.map((product) => <GameProductButton key={product.id} {...product}/> )}
                      <AddMoreBtn />
                    </ul>

        );
    }
}

const AddMoreBtn = (props) => {
  return (
    <li style={{verticalAlign: 'top'}}>
        <div className={styles.container}>
            View more
          <Icon className={styles.icon} name="plus"  />
        </div>
     </li>
   )
};

export default GameProductList;