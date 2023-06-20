// Page
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
// public routes
const publicRoutes = [
    { path: '/', components: Home },
    { path: '/login', components: Login },
    { path: '/profile', components: Profile },
    { path: '/search', components: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
