import React, {Component} from 'react';
import styles from './styles.scss';

class ViewMoreButton extends Component {
    render() {
        return (
            <div className={styles.shadow}>
                <div className={styles.content}>
                    View more
                </div>
            </div>
        );
    }
}

export default ViewMoreButton;