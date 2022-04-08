import blogposts from './json/Blogposts.js';
import icons from './json/Icons.js';
import info from './json/Info.js';
import folders from './json/Folder.js';
import classes from './json/Class.js';
import debugjson from './json/Debugjson.js';
import certi from './json/Certi.js';
const store = new Vuex.Store({
    state:{
        blogposts,
        icons,
        info,
        folders,
        classes,
        debugjson,
        certi,
    },
    getters:{
        getBlogPosts(state){
            return state.blogposts;
        },
        getIntroIcons(state){
            return state.icons;
        },
        getInfoDesc(state){
            return state.info;
        },
        getFolders(state){
            return state.folders;
        },
        getClasses(state){
            return state.classes;
        },
        getDebugJson(state){
            return state.debugjson;
        },
        getCerti(state){
            return state.certi;
        },
    }
})

export default store;