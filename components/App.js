import store from './Store.js'
import router from './Router.js'
import intro from './Intro.js'
export default{
    name:'App',
    store,
    router,
    components:{
        intro,
    },
    template:'#appUI'
}