export default {
    name:"projectfolder",
    template:`
    <div id="LocalsWindow" class="window-frame poppinsFont400" style="position:absolute;padding-top: 0;">
        <div>
            <div class="header-shell">
                <span class="whitespace" style="width:100%;">
                    <div style="color:gray;" class="shell-title"><i style="margin-right:5px;" class="fab fa-windows"></i> Locals</div>
                </span>
                <span class="minimize"></span>
                <span class="maximize"></span>
                <span class="close"></span>
            </div>
            <div class="inner-content">
                <div class="sidebar">
                    <div class="vertical-menu">
                        <p class="sidebarwords">Pinned</p>
                        <router-link class="active" tag="a" to="/home/recread"><i class="far fa-folder-open" style="color:#0070fe;margin-right:10px;"></i>README</router-link>
                        <p class="sidebarwords" style="margin-top:15px;">Libraries</p>
                        <router-link tag="a" to="/home/curriculum"><i class="far fa-calendar-check" style="color:#0070fe;margin-right:10px;"></i>Curriculum</router-link>
                        <router-link tag="a" to="/home/issues"><i class="far fa-dot-circle" style="color:#0070fe;margin-right:10px;"></i>Issues</router-link>
                        <router-link tag="a" to="/home/blog"><i class="fab fa-blogger" style="color:#0070fe;margin-right:10px;"></i>Ml & Dl Blog</router-link>
                    </div>
                </div>
                <router-view class="content"></router-view>
            </div>
        </div>    
    </div>
    `
}