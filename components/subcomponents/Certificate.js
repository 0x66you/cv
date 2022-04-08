export default{
    name:"certificate",
    template:`
<div style="padding:10px 0 0;">
<div style="width:400px;margin:0 auto;">
<h3 class="serifFont600" style="margin:0;padding-bottom:5px;text-align:center;border-bottom:1px solid #f1f1f1;">程式證照</h3>
<table id="certi" class="curritable" style="margin-bottom:20px;">
    <thead>
        <tr>
            <th width="60%">Name<div class="vl"></div></th>
            <th width="25%">Date Modified<div class="vl"></div></th>
            <th width="15%">Score<div class="novl"></div></th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in this.$store.getters.getCerti">
            <td><span>{{ item['name'] }}</span></td>
            <td>{{ item['date'] }}</td>
            <td><span>{{ item['score'] }}</span></td>
        </tr>
    </tbody>
</table>
<div class="badge flextrio" style="margin:0 auto;width:100%;">
    <picture>
        <source srcset="../../img/py.webp" type="image/webp">
        <img class="stopdrag" src="../../img/py.jpeg" style="height:40px;display:inline-block;">
    </picture>
    <div class="btn__text" style="font-size:11px;">Completed certification requirements<br><span class="btn__storename" style="font-size:16px;">TQC⁺ Python Data Analyst Expert</span></div> 
</div>
<div class="badge flextrio" style="width:100%;margin:0 auto;">
    <picture>
        <source srcset="../../img/mtabadge.webp" type="image/webp">
        <img class="stopdrag" src="../../img/mtabadge.jpeg" style="height:42px;display:inline-block;">
    </picture>
    <div class="btn__text" style="font-size:10px;">Introduction to Programming Using Python<br><span class="btn__storename" style="font-size:16px;">Microsoft Technology Associate</span></div> 
</div>
</div>
</div>

    `
}