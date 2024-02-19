import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/layout/Components/Proper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
                ;
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://didongviet.vn/dchannel/wp-content/uploads/2022/12/avatar-tet-dep-avatar-tet-didongviet.jpg"
                        alt="Gai xinh"
                    />

                    <div className={cx('account-info')}>
                        <p className={cx('nick-name')}>
                            <strong>lethanhan1123</strong>
                            <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Le Thanh An</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
