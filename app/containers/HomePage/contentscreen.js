import React, {Component} from 'react';
import LearningCarousle from '../GeneralComponents/LearningCarousel/learningCarousel'
class ContentScreen extends Component {
    render() {
        return (
            <div style={{paddingLeft: '100px', paddingTop:'100px', width: '100%', height: '100%', position: 'absolute'}} className="row">
                <LearningCarousle />
            </div>
        );
    }
}

export default ContentScreen;