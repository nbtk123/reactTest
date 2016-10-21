import React, {Component} from 'react';
import AbilitiesComponent from './abilities-component/abilities-component';
import LevelComponent from './level-component/level-component';
import ImageTextButton from 'components/image-text-button/image-text-button';

class ContentScreen extends Component {
    render() {
        return (
            <div style={{display: 'table', width: '100%'}}>
                <div style={{display: 'table-row'}}>
                    <div style={{display: 'table-cell'}}>
                        <AbilitiesComponent />
                    </div>
                    <div style={{display: 'table-cell'}}>
                        <div style={{marginBottom: '50px'}}><LevelComponent/></div>
                        <div style={{marginBottom: '20px'}}><ImageTextButton text="5 Crystals" imgsrc="http://downloadicons.net/sites/default/files/purple-crystal-icon-2105.png"/></div>
                        <div style={{marginBottom: '20px'}}><ImageTextButton text="100 Points" imgsrc="http://www.freeiconspng.com/uploads/coins-icon-finance-29.png"/></div>
                        <div style={{marginBottom: '20px'}}><ImageTextButton text="Return to my last task"/></div>
                    </div>
                </div>
                <div style={{display: 'table-row'}}>
                    <div style={{display: 'table-cell'}}>
                        BUY
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentScreen;