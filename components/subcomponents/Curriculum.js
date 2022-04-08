export default{
    name:"curriculum",
    template:`
    <div>
        <table id="subjects" class="curritable">
            <thead>
                <tr>
                    <th width="60%">Name<div class="vl"></div></th>
                    <th width="25%">Date Modified<div class="vl"></div></th>
                    <th width="15%">Tchr<div class="novl"></div></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in this.$store.getters.getClasses">
                    <td><span>{{ item['name'] }}</span></td>
                    <td>{{ item['date'] }}</td>
                    <td><span>{{ item['teacher'] }}</span></td>
                </tr>
            </tbody>
        </table>
    </div>
    `
}