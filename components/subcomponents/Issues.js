export default{
    name:"debugrecord",
    template:`
    <div style="padding:10px 10px 0;">
        <div style="margin-bottom:10px;" v-for="(item,index) in this.$store.getters.getDebugJson">
            <div style="font-size:12px;;">
                {{ index }}) {{ item['question'] }}
                <a :href="item['link']" style="font-size:10px;">參考資料</a>
            </div>
            <div style="font-size:10px;color:#1f1f1f;">
                <code>{{ item['answer'] }}</code>
            </div>
        </div>
        
    </div>
    `
}