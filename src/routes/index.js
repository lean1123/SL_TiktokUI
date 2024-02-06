import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/layout';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },

    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
