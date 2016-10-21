import React, {Component} from 'react';
import AbilitiesComponent from './abilities-component/abilities-component'
import LevelComponent from './level-component/level-component'

class ContentScreen extends Component {
    render() {
        return (
            <div style={{display: 'table', width: '100%'}}>
                <div style={{display: 'table-row'}}>
                    <div style={{display: 'table-cell'}}>
                        <AbilitiesComponent />
                    </div>
                    <div style={{display: 'table-cell'}}>
                        <LevelComponent />
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