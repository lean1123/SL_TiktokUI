import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/componets/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://didongviet.vn/dchannel/wp-content/uploads/2022/12/avatar-tet-dep-avatar-tet-didongviet.jpg"
                    alt="Gai xinh"
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </header>

            <div className={cx('body')}>
                <p className={cx('nick-name')}>
                    <strong>lethanhan1123</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Le Thanh An</p>
                <p className={cx('analystics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {};

export default AccountPreview;
