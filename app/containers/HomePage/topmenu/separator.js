import React, {Component, PropTypes} from 'react';

class Separator extends Component {
    render() {
        if(this.props.isShown) {
            return (
                <div style={{width: '1px', height: '2.5vw', background: '#617009', display: 'inline-block', position: 'absolute'}}></div>
            );
        } else {
            return null;
        }
    }
}

Separator.propTypes = {
    
};

export default Separator;