import Menu from './components/menu/Menu.vue';
import Login from './components/login/Login.vue';

export const routes = [
    {path:'', name: 'login', component: Login, title: 'login', inMenu: false},
    {path:'/menu', name:"menu", component: Menu, title: 'menu', inMenu: false},
    {path:'*', component: Login}
];