export default {
    name:"tinder",
    template:`
    <div style="padding:10px 10px 0;">
        <div style="text-align:center;">
            <div class="serifFont600" style="margin-bottom:10px;">
                <h3><span class="poppinsFont400">Tinder</span> 左滑右滑</h3>
                <span class="highlighter" style="font-size:14px;">MERN 全棧應用程式</span>
                <p style="margin:8px auto;font-size:14px;"><span class="serifFont600">程式碼公開於此</span> <a target="_blank" href="https://github.com/0x66you/tinder-clone">Github</a></p>
            </div>
            <picture>
                <source srcset="../../../img/tinder.webp" type="image/webp">
                <img src="../../../img/tinder.gif" style="width:100%;">
            </picture>
        </div>
<div style="margin-top:20px;">
<h5 style="display:inline-block;margin-right:15px;margin-bottom:0;">Content</h5>
<hr style="margin:0 auto 10px;"/>
<ul>
<li>使用者介面 : React</li>
<li>資料庫 : MongoDB</li>
<li>路由處理 : Express</li>
<li>開發框架 : Node</li>
</ul>
<p>簡單的 tinder clone，前端網頁能讓使用者向左滑、向右滑，
使用 npm 下載的 "react-tinder-card" react元件。
照片網址和姓名存放在後端資料庫中。
使用 <span class="highlighter">Postman</span> 測試 API 請求、新增資料功能。
最後將 nodejs 後端部署到 <span class="highlighter">Heroku</span> 上。
</p>
        </div>
    </div>
    `
}