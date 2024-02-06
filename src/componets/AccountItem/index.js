import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://i1.sndcdn.com/artworks-iu2V4IDbvbr4-0-t500x500.jpg" alt="M-TP" />

            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Le Thanh An</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>thanhan1123</span>
            </div>
        </div>
    );
}

export default AccountItem;
