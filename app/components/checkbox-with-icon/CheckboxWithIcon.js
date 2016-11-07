import React, {Component, PropTypes} from 'react';
import styles from './styles.scss';

class CheckboxWithIcon extends Component {
    render() {
        return (
            <div style={{position: 'relative'}}>
                <input id={this.props.id} type="radio" name={this.props.name}/>
                <label htmlFor={this.props.id}><img src={this.props.imgsrc}/></label>
                <div className={styles.check}></div>
            </div>
        );
    }
}

CheckboxWithIcon.propTypes = {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    imgsrc: React.PropTypes.string
};

export default CheckboxWithIcon;