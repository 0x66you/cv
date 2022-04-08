export default{
    name:"mvc",
    template:`
    <div style="padding:10px 10px 0;">
        <div style="text-align:center;">
            <div class="serifFont600" style="margin-bottom:10px;">
                <h3>庫存清點程式</h3>
                <span class="highlighter" style="font-size:14px;">用 Python 寫 MVC 架構</span>
                <p style="margin:8px auto;font-size:14px;"><span class="serifFont600">程式碼公開於此</span> <a target="_blank" href="https://github.com/0x66you/productMVC">Github</a></p>
            </div>
            <picture>
                <source srcset="../../../img/mvc.webp" type="image/webp">
                <img src="../../../img/mvc.jpeg" style="width:100%;">
            </picture>
        </div>
        <div style="margin-top:20px;">
            <h5 style="display:inline-block;margin-right:15px;margin-bottom:0;">Content</h5>
            <hr style="margin:0 auto 10px;" />
            <ul>
                <li>setup.py - run first to create database marketplace.db and table called product</li>
                <li>toydata.py - (optional) generate five prescripted toy datasets indexed 1 through 5</li>
                <li>main.py - calls on the controller module</li>
                <li>model.py - defines product information, id, name, price, etc..</li>
                <li>view.py - handles everything on user's screen</li>
                <li>dao.py - stores and retrieves data in SQLite</li>
                <li>controller.py - combines module method into bundles</li>
                <li>project.uxf - uml diagram</li>
            </ul>
        </div>
        <div>
            <picture>
                <source srcset="../../../img/mvcuxf.webp" type="image/webp">
                <img src="../../../img/mvcuxf.jpeg" style="width:100%;">
            </picture>
        </div>
    </div>
    `
}