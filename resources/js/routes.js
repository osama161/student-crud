import Wellcome from './components/Welcome.vue';
import AllStudent from './components/AllStudent.vue';
import CreateStudent from './components/CreateStudent.vue';
import EditStudent from './components/EditStudent.vue';
 
export const routes = [
    {
        name: 'home',
        path: '/',
        component: Wellcome
    },
    {
        name: 'list',
        path: '/list',
        component: AllStudent
    },
    {
        name: 'create',
        path: '/create',
        component: CreateStudent
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditStudent
    }
];