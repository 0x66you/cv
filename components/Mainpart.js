import homefolder from './folders/HomeFolder.js'
import projectfolder from './folders/ProjectFolder.js'
import recordsfolder from './folders/RecordsFolder.js'
export default {
    name:"mainpart",
    components:{
        homefolder,
        projectfolder,
        recordsfolder,
    },
    mounted(){
        function removeClickEffect(){
            $('.folder-container img').removeClass("after-click");
            $('.folder-container div').removeClass("after-click-text");
        }
        function clickOnIcon(classname,id){
            $(`img.${classname}`).addClass("after-click");
            $(`div.${classname}`).addClass("after-click-text");
            $(`${id}`).css("display", "block");
            $(`${id}`).css("left","initial");
            $(`${id}`).css("top","initial");
            $(`.window-frame:not(${id})`).css("display","none");
            $('.vertical-menu a:not(.greyed)').removeClass('active');
            $('.vertical-menu a:not(.greyed):first-child').addClass('active');
            $(`${id} > div > div.inner-content > div.sidebar > div > a`)[0].click();
        }
        $( function() {
            $(".window-frame").draggable({ handle: "span.shell-title,span.whitespace", containment: "parent" });
        });
        $('.close').click(function() {
            $(".window-frame").css("display", "none");
            removeClickEffect();
        });  

        /* Add class to folder when clicked */
        $('.folder-container').click(function(e){
            e.stopPropagation();
            $(".window-frame").css("width", "600px");
            if($(e.target).hasClass("Home")){
                removeClickEffect();
                clickOnIcon("Home","#HomeWindow");   
            }
            if($(e.target).hasClass("Projects")){
                removeClickEffect();
                clickOnIcon("Projects","#ProjectWindow");
            }
            if($(e.target).hasClass("Locals")){
                removeClickEffect();
                clickOnIcon("Locals","#LocalsWindow");
            }
        });

        $(document).ready(function () {
            $('.folder-container img.Home').addClass("after-click");
            $('.folder-container div.Home').addClass("after-click-text");
            $('#ProjectWindow').css("display", "none");
            $('#LocalsWindow').css("display", "none");
            $('.vertical-menu a:not(.greyed)').click(function(e) {
                $('.vertical-menu a:not(.greyed)').removeClass('active');
                var $this = $(this);
                if (!$this.hasClass('active')) {
                    $this.addClass('active');
                }
            });
        });
    },
    template:`
<div>   
    <div class="card Box flextrio" style="width:890px;">
        <img class="stopdrag" src="img/windows.jpeg" style="width:100%;border-radius: 6px;">
        <div v-for="folder in this.$store.getters.getFolders" 
             class="folder-container" 
             :style="{right:folder['right'],bottom:folder['bottom']}">
            <picture>
                <source :srcset="folder['webp']">
                <img :class="folder['classname']" class="stopdrag" width="50px" :src="folder['webp']">
            </picture>
            <div :class="folder['classname']" class="folder-text poppinsFont400">{{ folder['title']}}</div>
        </div>
        <homefolder></homefolder>
        <projectfolder></projectfolder>
        <recordsfolder></recordsfolder>
    </div>

        <img href="img/f1.gif">
        <img href="img/f1.webp">

</div>
    `
}
