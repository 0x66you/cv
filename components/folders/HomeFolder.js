export default {
    name:"homefolder",
    template:`
    <div id="HomeWindow" class="window-frame poppinsFont400" style="position:absolute;padding-top: 0;">
        <div>
            <div class="header-shell">
                <span class="whitespace" style="width:100%;">
                    <div style="color:gray;" class="shell-title"><i style="margin-right:5px;" class="fab fa-windows"></i> Home Explorer</div>
                </span>
                <span class="minimize"></span>
                <span class="maximize"></span>
                <span class="close"></span>
            </div>
            <div class="inner-content">
                <div class="sidebar">
                    <div class="vertical-menu">
                        <p class="sidebarwords">Pinned</p>
                        <router-link tag="a" to="/" class="active"><i class="far fa-folder-open" style="color:#0070fe;margin-right:10px;"></i>README</router-link>
                        <p class="sidebarwords" style="margin-top:15px;">Favorites</p>
                        <router-link tag="a" to="/home/autobio"><i class="far fa-keyboard" style="color:#0070fe;margin-right:10px;"></i>Autobio</router-link>
                        <router-link tag="a" to="/home/skills"><i class="fas fa-capsules" style="color:#0070fe;margin-right:10px;"></i>Skills</router-link>
                        <router-link tag="a" to="/home/language"><i class="far fa-paper-plane" style="color:#0070fe;margin-right:10px;"></i>Language</router-link>
                        <router-link tag="a" to="/home/education"><i class="fas fa-university" style="color:#0070fe;margin-right:10px;"></i>Education</router-link>
                        <router-link tag="a" to="/home/certificate"><i class="fas fa-list" style="color:#0070fe;margin-right:10px;"></i>Certificate</router-link>                            
                        <p class="sidebarwords" style="margin-top:15px;">Others</p>
                        <router-link tag="a" to="/home/contact"><i class="far fa-envelope" style="color:#0070fe;margin-right:10px;"></i>Contact Info</router-link>
                    </div>
                </div>
                <router-view class="content"></router-view>
            </div>
        </div>    
    </div>
    `
}