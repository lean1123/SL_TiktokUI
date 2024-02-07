import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faRightFromBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import Button from '~/componets/Button';
import Menu from '../Proper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/componets/Icons/Icons';
import Image from '~/componets/Image/Image';
import Search from '../Search/Search';

const cx = classNames.bind(styles);

const items = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                { parent: 'language', code: 'en', title: 'English' },
                { parent: 'language', code: 'vi', title: 'Tiếng Việt' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard',
    },
];

function Header() {
    const isCurrentUser = true;

    const userMenuItems = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@user',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coin',
            to: '/getcoins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...items,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Log Out',
            to: '/',
            separate_line: true,
        },
    ];

    const handleMenuChange = (item) => {
        switch (item.parent) {
            case 'language':
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />

                <Search />

                <div className={cx('actions')}>
                    {isCurrentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom" delay={[0, 200]}>
                                <button className={cx('actions-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Message" placement="bottom" delay={[0, 200]}>
                                <button className={cx('actions-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Inbox message" placement="bottom" delay={[0, 200]}>
                                <button className={cx('actions-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={isCurrentUser ? userMenuItems : items} onChange={handleMenuChange}>
                        {isCurrentUser ? (
                            <Image
                                className={cx('user-avartar')}
                                src="https://cdn.alongwalk.info/info/wp-content/uploads/2022/11/16190605/image-99-hinh-avatar-cute-ngau-ca-tinh-de-thuong-nhat-cho-nam-nu-0096fcffd35002f7d89daff94d95ab6b.jpg"
                                alt="Le Thanh An"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
