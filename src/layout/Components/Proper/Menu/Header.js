import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Header({ onBack, title }) {
    return (
        <header className={cx('header')}>
            <button className={cx('onBack-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronCircleLeft} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}

Header.propTypes = {
    onBack: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

export default Header;
