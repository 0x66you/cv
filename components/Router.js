import home from './Home.js';
import recommondations from './subcomponents/Recommondations.js'
import autobio from './subcomponents/Autobio.js'
import skills from './subcomponents/Skills.js'
import language from './subcomponents/Language.js'
import education from './subcomponents/Education.js'
import certificate from './subcomponents/Certificate.js'
import contact from './subcomponents/Contact.js'
import curriculum from './subcomponents/Curriculum.js'
import issues from './subcomponents/Issues.js'
import blog from './subcomponents/Blog.js'
import recread from './subcomponents/Recread.js'
import proread from './subcomponents/Proread.js'
import mvc from './subcomponents/Projects/PythonMVC.js'
import f1stats from './subcomponents/Projects/F1stats.js'
import ecommerce from './subcomponents/Projects/Ecommerce.js'
import cv from './subcomponents/Projects/Cvwebsite.js'
import tinder from './subcomponents/Projects/Tinder.js'
import nodeapi from './subcomponents/Projects/Nodeapi.js'
import tips from './subcomponents/Projects/Tips.js'
import legos from './subcomponents/Projects/Legos.js'
import stocks from './subcomponents/Projects/Stocks.js'
const routes = [
    {
        path:'/home/recommondations',
        name:'home',
        alias:['/home','*','/'],
        component:home,
        children:[
            {
                path:'recommondations',component: recommondations
            },
            {
                path:'autobio',component: autobio
            },
            {
                path:'skills',component:skills
            },
            {
                path:'language',component:language
            },
            {
                path:'education',component:education
            },
            {
                path:'certificate',component:certificate
            },
            {
                path:'contact',component:contact
            },
            {
                path:'curriculum',component:curriculum
            },
            {
                path:'issues',component:issues
            },
            {
                path:'blog',component:blog
            },
            {
                path:'recread',component:recread
            },
            {
                path:'proread',component:proread
            },
            {
                path:'mvc',component:mvc
            },
            {
                path:'f1stats',component:f1stats
            },
            {
                path:'ecommerce',component:ecommerce
            },
            {
                path:"cv",component:cv
            },
            {
                path:"tinder",component:tinder
            },
            {
                path:'nodeapi',component:nodeapi
            },
            {
                path:'tips',component:tips
            },
            {
                path:'legos',component:legos
            },
            {
                path:'stocks',component:stocks
            }
        ]
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router;