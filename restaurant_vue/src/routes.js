import homeComponent from './components/Home.vue'
import signupComponent from './components/signup.vue'
import addComponent from './components/add.vue'
import updateComponent from './components/update.vue'
import {createWebHistory, createRouter} from 'vue-router'
import loginComponent from './components/login.vue'


const routes=[
    {
        name:'homeComponent',
        path:'/',
        component:homeComponent
    },
    {
        name:'signupComponent',
        path:'/signup',
        component:signupComponent
    },
    {
        name:'loginComponent',
        path:'/login',
        component:loginComponent
    },
    {
        name:'addComponent',
        path:'/add',
        component:addComponent
    },
    {
        name:'updateComponent',
        path:'/update/:id',
        component:updateComponent
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router