import React, {Component, PropTypes} from 'react';
import styles from './styles.scss';

class HorizontalProgressBar extends Component {

    constructor() {
        super();
        this.state = {
            level: 7,
            levelXp: 1550,
            userXp: 751
        };
    }

    render() {

        var level = this.state.level;
        var levelXp = this.state.levelXp;
        var userXp = this.state.userXp;

        var barWidth = userXp/levelXp * 100 + '%';

        return (
            <div className={styles.progressbarOuter}>
                <div className={styles.progressbarInner} style={{width: barWidth}}>
                    <img src="http://www.freeiconspng.com/uploads/fire-vector-icon-png-27.png" />
                </div>        
            </div>
        );
    }
}

HorizontalProgressBar.propTypes = {

};

export default HorizontalProgressBar;