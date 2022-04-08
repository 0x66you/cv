export default{
    name:"proread",
    mounted(){
        $(document).ready(function(){
            $("#mask1 rect").attr("rx","5");
        });
    },
    template:`
    <div style="padding:10px 10px 0;" class="flextrio">
        <div>
            <h3 style="margin-bottom:20px;text-align:center;">🚀<span class="serifFont600"> 作品集 </span>Portfolio</h3>
            <section style="width:fit-content;margin-bottom:15px;">
                <div style="color:#0366d6;margin-bottom:10px;font-size:13px;">
                    <svg viewBox="0 0 16 16" width="16" height="16" style="margin-right:5px;vertical-align:text-top;">
                                    <path fill-rule="evenodd" d="M2.5 1.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v7.736a.75.75 0 101.5 0V1.75A1.75 1.75 0 0011.25 0h-8.5A1.75 1.75 0 001 1.75v11.5c0 .966.784 1.75 1.75 1.75h3.17a.75.75 0 000-1.5H2.75a.25.25 0 01-.25-.25V1.75zM4.75 4a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM4 7.75A.75.75 0 014.75 7h2a.75.75 0 010 1.5h-2A.75.75 0 014 7.75zm11.774 3.537a.75.75 0 00-1.048-1.074L10.7 14.145 9.281 12.72a.75.75 0 00-1.062 1.058l1.943 1.95a.75.75 0 001.055.008l4.557-4.45z"/>
                    </svg>
                    10 Projects
                </div>
                <div style="color:#0366d6;font-size:13px;margin-bottom:10px;">
                    <svg viewBox="0 0 16 16" width="16" height="16" style="margin-right:5px;vertical-align:text-top;">
                        <path fill-rule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"/>
                    </svg>
                    Prefers MIT license
                </div>
                <div style="color:#0366d6;font-size:13px;">
                    <svg viewBox="0 0 16 16" width="16" height="16" style="margin-right:5px;vertical-align:text-top;">
                        <path fill-rule="evenodd" d="M1.5 2.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v8.5a.25.25 0 01-.25.25h-6.5a.75.75 0 00-.53.22L4.5 14.44v-2.19a.75.75 0 00-.75-.75h-2a.25.25 0 01-.25-.25v-8.5zM1.75 1A1.75 1.75 0 000 2.75v8.5C0 12.216.784 13 1.75 13H3v1.543a1.457 1.457 0 002.487 1.03L8.061 13h6.189A1.75 1.75 0 0016 11.25v-8.5A1.75 1.75 0 0014.25 1H1.75zm5.03 3.47a.75.75 0 010 1.06L5.31 7l1.47 1.47a.75.75 0 01-1.06 1.06l-2-2a.75.75 0 010-1.06l2-2a.75.75 0 011.06 0zm2.44 0a.75.75 0 000 1.06L10.69 7 9.22 8.47a.75.75 0 001.06 1.06l2-2a.75.75 0 000-1.06l-2-2a.75.75 0 00-1.06 0z"/>
                    </svg>
                    8 Languages
                </div>
            </section>
            <section class="column">
                <h3 style="color:#0366d6;font-size:16px;margin:10px 0 5px;" class="field">Most used languages</h3>
                <svg xmlns="http://www.w3.org/2000/svg" class="bar" width="370" height="8">
                    <mask id="mask1">
                        <rect x="0" y="0" width="370" height="8" fill="white" rx="5"></rect>
                    </mask>
                    <rect mask="url(#mask1)" x="0" y="0" width="0" height="8" fill="#d1d5da"></rect>
                    <rect rx="5" mask="url(#mask1)" x="0" y="0" width="146.9" height="8" fill="#ac3b61"></rect>
                    <rect mask="url(#mask1)" x="136.9" y="0" width="92.5" height="8" fill="#00ADD8"></rect>
                    <rect mask="url(#mask1)" x="229.4" y="0" width="66.6" height="8" fill="#ffde57"></rect>
                    <rect mask="url(#mask1)" x="296" y="0" width="44.4" height="8" fill="#89e051"></rect>
                    <rect mask="url(#mask1)" x="340.4" y="0" width="14.8" height="8" fill="#384d54"></rect>
                    <rect mask="url(#mask1)" x="355.2" y="0" width="7.4" height="8" fill="#244776"></rect>
                    <rect rx="5" mask="url(#mask1)" x="362.6" y="0" width="7.4" height="8" fill="#C1F12E"></rect>
                    <rect mask="url(#mask1)" x="362.6" y="0" width="3.7" height="8" fill="#701516"></rect>
                </svg>
                <div class="field center horizontal-wrap">
                    <div class="field center no-wrap language">
                        <svg viewBox="0 0 16 16" width="16" height="16">
                            <path fill="#ac3b61" fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"/>
                        </svg>
                        Python
                    </div>
                    <div class="field center no-wrap language">
                        <svg viewBox="0 0 16 16" width="16" height="16">
                            <path fill="#00ADD8" fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"/>
                        </svg>
                        Vue
                    </div>
                    <div class="field center no-wrap language">
                        <svg viewBox="0 0 16 16" width="16" height="16">
                            <path fill="#ffde57" fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"/>
                        </svg>
                        Node
                    </div>
                    <div class="field center no-wrap language">
                        <svg viewBox="0 0 16 16" width="16" height="16">
                            <path fill="#89e051" fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"/>
                        </svg>
                        PHP
                    </div>
                    <div class="field center no-wrap language">
                        <svg viewBox="0 0 16 16" width="16" height="16">
                            <path fill="#384d54" fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"/>
                        </svg>
                        JavaScript
                    </div>
                    <div class="field center no-wrap language">
                        <svg viewBox="0 0 16 16" width="16" height="16">
                            <path fill="#244776" fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"/>
                        </svg>
                        Dockerfile
                    </div>
                    <div class="field center no-wrap language">
                        <svg viewBox="0 0 16 16" width="16" height="16">
                            <path fill="#701516" fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"/>
                        </svg>
                        Java
                    </div>
                    <div class="field center no-wrap language">
                        <svg viewBox="0 0 16 16" width="16" height="16">
                            <path fill="#C1F12E" fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"/>
                        </svg>
                        SQL
                    </div>
                </div>
            </section>
            <footer id="metric">
                <span>* These metrics reflect experience in different fields</span>
            </footer>
        </div>
    </div>
    `
}