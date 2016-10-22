import React, {Component} from 'react';
import styles from './styles.css';

class LevelComponent extends Component {

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

        var barHeight = userXp/levelXp * 100 + '%';

        return (
            <div className={styles.whiteContainer} style={{display: 'table'}}>
                <div style={{display: 'table-row'}}>
                    <div style={{display: 'table-cell', verticalAlign: 'middle', textAlign: 'center', paddingRight: '1em'}}>
                        LV.{level}<br/>
                        {userXp}/{levelXp}<br/>
                    </div>
                    <div style={{display: 'table-cell'}}>
                        <div className={styles.progressbarOuter}>
                            <div className={styles.progressbarInner} style={{height: barHeight}}>
                                <img src="http://www.freeiconspng.com/uploads/fire-vector-icon-png-27.png" />
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LevelComponent;