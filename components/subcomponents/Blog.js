export default{
    name:"blog",
    template:`
    <div style="color:#000;padding:0;">
        <table class="curritable">
            <thead>
                <tr>
                    <th width="90%">Name<div class="vl"></div></th>
                    <th width="10%">Link<div class="novl"></div></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in this.$store.getters.getBlogPosts">
                    <td>{{ item['title'] }}</td>
                    <td><a href="item['link']">連結</a></td>
                </tr>
            </tbody>
        </table>
    </div>
    `
}