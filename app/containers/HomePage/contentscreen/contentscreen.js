import React, {Component} from 'react';
import LevelComponent from './level-component/level-component';
import ImageTextButton from 'components/image-text-button/image-text-button';
import LearningCarousle from './../../GeneralComponents/LearningCarousel/learningCarousel';
import GameProductList from './../game-product-list/game-product-list';

class ContentScreen extends Component {
    render() {
        return (
          <div className="container-fluid">
            <div className="row" style={{marginTop: '100px', marginBottom: '2%'}}>
                <div className="col-xs-9"  style={{height: '30.438vw', overflow:'hidden'}}>
                    <LearningCarousle />
                </div>
                <div className="col-xs-2 col-xs-offset-1">
                    <div style={{marginBottom: '50px'}}><LevelComponent/></div>
                    <div style={{marginBottom: '20px'}}><ImageTextButton text="5 Crystals" imgsrc="http://downloadicons.net/sites/default/files/purple-crystal-icon-2105.png"/></div>
                    <div style={{marginBottom: '20px'}}><ImageTextButton text="100 Points" imgsrc="http://www.freeiconspng.com/uploads/coins-icon-finance-29.png"/></div>
                    <div style={{marginBottom: '20px'}}><ImageTextButton text="Return to my last task"/></div>
                </div>
            </div>
            <div className="row">
              <div  className="col-xs-5 col-xs-offset-2">
                <GameProductList />
              </div>
            </div>
          </div>
        );
    }
}
export default ContentScreen;