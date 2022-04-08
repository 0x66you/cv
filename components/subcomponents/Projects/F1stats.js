export default {
    name:"f1stats",
    template:`
    <div style="padding:10px 10px 0;">
<div style="text-align:center;">
    <div class="serifFont600" style="margin-bottom:10px;">
        <h3>F1自動化分析GUI</h3>
        <span class="highlighter" style="font-size:14px;">自動化、視覺化、視窗化 整合專題</span>
        <p style="margin:8px auto;font-size:14px;"><span class="serifFont600">程式碼公開於此</span> <a target="_blank" href="https://github.com/0x66you/get-Formula1-stats">Github</a></p>
    </div>
    <picture>
        <source srcset="../../../img/f1.webp" type="image/webp">
        <img src="../../../img/f1.gif" style="width:100%;">
    </picture>
</div>
<div>
<table class="curritable serifFont600" style="margin-top:20px;">
    <thead>
        <tr>
            <th width="25%">步驟<div class="vl"></div></th>
            <th width="25%">使用模組<div class="vl"></div></th>
            <th width="50%">補充說明<div class="vl"></div></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1 擷取</td>
            <td>selenium webdriver</td>
            <td>chromedriver 需另外下載<br>macos 可用brew</td>
        </tr>
        <tr>
            <td>2 解析</td>
            <td>BeautifulSoup</td>
            <td></td>
        </tr>
        <tr>
            <td>3 轉成csv</td>
            <td>pandas csv</td>
            <td>pandas to_csv 抓 table</td>
        </tr>
        <tr>
            <td>4 存進資料庫</td>
            <td>sqlite3</td>
            <td></td>
        </tr>
        <tr>
            <td>5 視覺化</td>
            <td>matplotlib</td>
            <td>產生 "chart.png" 圖檔</td>
        </tr>
        <tr>
            <td>6 視窗化</td>
            <td>tkinter</td>
            <td></td>
        </tr>
    </tbody>
</table>
<table class="curritable serifFont600" style="margin-top:20px;">
    <thead>
        <tr>
            <th width="20%">按鈕<div class="vl"></div></th>
            <th width="80%">功能說明<div class="vl"></div></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Search</td>
            <td>執行上表步驟 1~5 自動刪除".csv"與".db"檔案</td>
        </tr>
        <tr>
            <td>Delete</td>
            <td>刪除右側目前圖表</td>
        </tr>
        <tr>
            <td>Close</td>
            <td>關閉視窗，自動刪除"chart.png"圖檔</td>
        </tr>
    </tbody>
</table>
</div>
    </div>
    `
}