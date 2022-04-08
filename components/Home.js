import intro from './Intro.js'
import mainpart from './Mainpart.js'
export default{
    name:'Home',
    components:{
        intro,
        mainpart
    },
    template:`
    <div>
        <mainpart></mainpart>
    </div>
    `
}