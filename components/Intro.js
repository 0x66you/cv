export default {
    name:'Intro',
    template:`
    <div style="height:592px;">
        <div class="mx-auto" style="width:fit-content;">
            <img class="img-fluid stopdrag avatar" style="width:295px;border-radius:50%;" src="img/me.png">
            <div class="profileName" style="font-size:32px;margin-bottom:18px;">
                <p class="sansFont700" style="margin-top:15px;margin-bottom:0;color:#000;display:inline-block;">葉駿成</p>
                <span class="serifFont600 Label Label--purple">
                    Python工程師
                </span>
                <span class="serifFont600 Label Label--purple">
                    全端工程師
                </span>
            </div>
            <div>
                <picture v-for="icon in this.$store.getters.getIntroIcons">
                    <source :srcset="icon['webp']" type="image/webp">
                    <img   :src="icon['png']" 
                        height="32" 
                        :width="icon['width']" 
                        style=" padding:2px;
                                margin:0 5px 0 0;
                                border-radius:6px;"
                        class="stopdrag avatar">
                </picture>  
            </div>
            <div class="profileList serifFont600"
                style=" line-height:1.3;
                        margin-top:20px;
                        font-size:14px;">
                <div v-for="(item,index) in this.$store.getters.getInfoDesc">
                    <p>
                        <div :style="{color:item['color']}"
                                style="padding-left:10px;
                                border-radius:5px;
                                ">
                            <div>
                                <svg style="margin-bottom:2px;" class="octicon" width="16"
                                    height="16" aria-hidden="true">
                                    <path 
                                        fill-rule="evenodd"
                                        :d="item['svgD']">
                                    </path>
                                </svg>
                                <span style="margin-left:5px;">
                                    {{ item['word'] }}
                                </span>                
                            </div>  
                        </div>
                    </p>
                </div>
            </div>
        </div>
    </div>        
    `
}

