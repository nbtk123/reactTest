import React, {Component} from 'react';
import styles from './styles.scss';

class TopMenuSearch extends Component {
    render() {
        return (
            <div>
                <input  type="text"
                        className={`${styles.topMenuSearch} ${styles.roundedCorners}`} />
            </div>
        );
    }
}

export default TopMenuSearch;