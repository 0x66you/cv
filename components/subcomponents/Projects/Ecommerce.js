export default  {
    name:"ecommerce",
    template:`
<div style="padding:10px 10px 0;">
    <div style="text-align:center;">
        <div class="serifFont600" style="margin-bottom:10px;">
            <h3><span class="poppinsFont400">Vue</span> 電商平台</h3>
            <span class="highlighter" style="font-size:14px;">結合後端 Firebase 資料庫</span>
            <p style="margin:8px auto;font-size:14px;"><span class="serifFont600">程式碼公開於此</span> <a target="_blank" href="https://github.com/0x66you/Scrafix-ecommerceWebsite">Github</a></p>
        </div>
        <picture>
            <source srcset="../../../img/scrafix.webp" type="image/webp">
            <img src="../../../img/scrafix.gif" style="width:100%;">
        </picture>
    </div>
    <div style="margin-top:20px;">
        <h5 style="display:inline-block;margin-right:15px;margin-bottom:0;">Description</h5>
        <hr style="margin:0 auto 10px;"/>
<p>Scrafix 是我在 2021 年 11 月中完成的購物網站。
我的目標是利用 Vue 框架寫出一個分工明確的網頁，
每個 Vue 元件要可以被重複利用，
或是有某個特定功能因此必須獨立出來一個.js檔。
設計上，商品展示列部分參考 pchome 設計。</p>
<pre>
root/
├─ components/
│  ├─ App.js
│  ├─ Home.js
│  ├─ Firebase.js
│  ├─ Router.js
│  ├─ Mainpart.js
│  ├─ Login.js
│  ├─ SideRight.js
│  ├─ Store.js
│  ├─ ShoppingCart.js
│  ├─ Signup.js
│  ├─ Shop/
│  │  ├─ Acer.js
│  │  ├─ Apple.js
│  │  ├─ Asus.js
│  │  ├─ Lenovo.js
│  │  ├─ Microsoft.js
│  │  ├─ Msi.js
│  │  ├─ Razer.js
│  ├─ SideRight2.js
│  ├─ SideLeft.js
├─ main.js
├─ style.css
├─ favicon_io/
├─ index.html
</pre>
    <div style="margin-top:20px;">
        <h5 style="display:inline-block;margin-right:15px;margin-bottom:0;">Content</h5>
        <hr style="margin:0 auto 10px;" />
        <ul>
            <li>首頁圖示隨滾輪捲動開合，字體淡入與淡出</li>
            <li>RWD 設計，隨裝置不同版面配置跟著改變</li>
            <li>結合前端與後端技術(Vue + Firebase)</li>
            <li>使用者登入登出</li>
            <li>商品加入購物車</li>
            <li>Vuex 集中管理元件 data</li>
            <li>vue-router 切換頁面(SPA)</li>
        </ul>
    </div>
    </div>
</div>
    `
}