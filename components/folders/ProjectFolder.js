export default {
    name:"projectfolder",
    template:`
    <div id="ProjectWindow" class="window-frame poppinsFont400" style="position:absolute;padding-top: 0;">
        <div>
            <div class="header-shell">
                <span class="whitespace" style="width:100%;">
                    <div style="color:gray;" class="shell-title"><i style="margin-right:5px;" class="fab fa-windows"></i> Projects</div>
                </span>
                <span class="minimize"></span>
                <span class="maximize"></span>
                <span class="close"></span>
            </div>
            <div class="inner-content">
                <div class="sidebar">
                    <div class="vertical-menu">
                        <p class="sidebarwords">Pinned</p>
                        <router-link tag="a" to="/cv/proread" class="active"><i class="far fa-folder-open verticalMenuIcons"></i>README</router-link>
                        <p class="sidebarwords" style="margin-top:15px;">Python</p>
                        <router-link tag="a" to="/cv/f1stats"><i class="fas fa-flag-checkered verticalMenuIcons"></i>F1自動化分析GUI</router-link>
                        <router-link tag="a" to="/cv/tips"><i class="fas fa-wallet verticalMenuIcons"></i>小費預測線性迴歸</router-link>
                        <router-link tag="a" to="/cv/stocks"><i class="fas fa-chart-line verticalMenuIcons"></i>股票趨勢繪圖</router-link>
                        <router-link tag="a" to="/cv/legos"><i class="fas fa-cubes verticalMenuIcons"></i>樂高資料分析</router-link>
                        <router-link tag="a" to="/cv/mvc"><i class="fas fa-network-wired verticalMenuIcons"></i>庫存清點 MVC</router-link>
                        <p class="sidebarwords" style="margin-top:15px;">Frontend</p>
                        <router-link tag="a" to="/cv/ecommerce"><i class="fas fa-shopping-cart verticalMenuIcons"></i>E-Commerce</router-link>
                        <router-link tag="a" to="/cv/projectcv"><i class="fas fa-laptop-house verticalMenuIcons"></i>CV Website</router-link>
                        <p class="sidebarwords" style="margin-top:15px;">Backend</p>
                        <router-link tag="a" to="/cv/tinder"><i class="fas fa-fingerprint verticalMenuIcons"></i>Tinder swipe</router-link>
                        <router-link tag="a" to="/cv/nodeapi"><i class="fas fa-server verticalMenuIcons"></i>Node API</router-link>
                    </div>
                </div>
                <router-view class="content"></router-view>
            </div>
        </div>    
    </div>
    `
}