export default {
    name:"cv",
    template:`
    <div style="padding:10px 10px 0;">
        <div style="text-align:center;">
            <div class="serifFont600" style="margin-bottom:10px;">
                <h3><span class="poppinsFont400">Vue</span> 履歷網頁</h3>
                <span class="highlighter" style="font-size:14px;">單頁面應用程式 SPA</span>
                <p style="margin:8px auto;font-size:14px;"><span class="serifFont600">程式碼公開於此</span> <a target="_blank" href="https://github.com/0x66you/cv">Github</a></p>
            </div>
        </div>
<p class="serifFont600" style="margin:20px 0;font-size:14px;">點選桌面圖示，可以切換視窗主題。</p>
<p style="margin:15px 0 0;"><strong>注意事項：</strong><br>本網站包含個人隱私資訊，未經過本人許可請勿擅自轉載於網路上。</p>
<h5 style="display:inline-block;margin:15px 15px 0 0;">ASCII Tree</h5>
<hr style="margin:0 auto 10px;"/>
<pre>Vue履歷網頁/
┣ components/
┃ ┣ folders/
┃ ┃ ┣ HomeFolder.js
┃ ┃ ┣ ProjectFolder.js
┃ ┃ ┗ RecordsFolder.js
┃ ┣ json/
┃ ┃ ┣ Blogposts.js
┃ ┃ ┣ Certi.js
┃ ┃ ┣ Class.js
┃ ┃ ┣ Debugjson.js
┃ ┃ ┣ Folder.js
┃ ┃ ┣ Icons.js
┃ ┃ ┣ Info.js
┃ ┃ ┣ Photojson.js
┃ ┃ ┗ School.js
┃ ┣ subcomponents/
┃ ┃ ┣ Projects/
┃ ┃ ┃ ┣ Cvwebsite.js
┃ ┃ ┃ ┣ Ecommerce.js
┃ ┃ ┃ ┣ F1stats.js
┃ ┃ ┃ ┗ PythonMVC.js
┃ ┃ ┣ Album.js
┃ ┃ ┣ Blog.js
┃ ┃ ┣ Certificate.js
┃ ┃ ┣ Contact.js
┃ ┃ ┣ Curriculum.js
┃ ┃ ┣ Education.js
┃ ┃ ┣ Issues.js
┃ ┃ ┣ Language.js
┃ ┃ ┣ Position.js
┃ ┃ ┣ Proread.js
┃ ┃ ┣ Recommondations.js
┃ ┃ ┣ Recread.js
┃ ┃ ┗ Skills.js
┃ ┣ App.js
┃ ┣ Home.js
┃ ┣ Intro.js
┃ ┣ Mainpart.js
┃ ┣ Router.js
┃ ┗ Store.js
┣ favicon/
┃ ┣ android-chrome-192x192.png
┃ ┣ android-chrome-384x384.png
┃ ┣ apple-touch-icon.png
┃ ┣ browserconfig.xml
┃ ┣ favicon-16x16.png
┃ ┣ favicon-32x32.png
┃ ┣ favicon.ico
┃ ┣ manifest.json
┃ ┣ mstile-150x150.png
┃ ┗ safari-pinned-tab.svg
┣ img/
┃ ┣ gallery/
┃ ┃ ┣ 1.jpg
┃ ┃ ┣ 10.jpg
┃ ┃ ┣ 2.jpg
┃ ┃ ┣ 3.jpg
┃ ┃ ┣ 4.jpg
┃ ┃ ┣ 5.jpg
┃ ┃ ┣ 6.jpg
┃ ┃ ┣ 7.jpg
┃ ┃ ┣ 8.jpg
┃ ┃ ┗ 9.jpg
┃ ┣ badge.svg
┃ ┣ disk.png
┃ ┣ disk.webp
┃ ┣ docker.png
┃ ┣ docker.webp
┃ ┣ f1.gif
┃ ┣ f1.webp
┃ ┣ helmet.png
┃ ┣ helmet.webp
┃ ┣ java.webp
┃ ┣ js.png
┃ ┣ js.webp
┃ ┣ macwallpaper.jpeg
┃ ┣ macwallpaper.webp
┃ ┣ me.png
┃ ┣ monitor.png
┃ ┣ monitor.webp
┃ ┣ mta.webp
┃ ┣ mtabadge.png
┃ ┣ mtabadge.webp
┃ ┣ mvc.jpeg
┃ ┣ mvc.webp
┃ ┣ mvcuxf.jpeg
┃ ┣ mvcuxf.webp
┃ ┣ node.png
┃ ┣ node.webp
┃ ┣ ntulogo.png
┃ ┣ ntulogo.webp
┃ ┣ php.png
┃ ┣ php.webp
┃ ┣ project.png
┃ ┣ project.webp
┃ ┣ py.jpeg
┃ ┣ py.webp
┃ ┣ python.png
┃ ┣ python.webp
┃ ┣ python3.jpeg
┃ ┣ python3.webp
┃ ┣ school.jpeg
┃ ┣ school.webp
┃ ┣ scr.gif
┃ ┣ scrafix.gif
┃ ┣ scrafix.webp
┃ ┣ tinder.gif
┃ ┣ tinder.webp
┃ ┣ toefl.png
┃ ┣ toefl.webp
┃ ┣ toeic.jpeg
┃ ┣ toeic.webp
┃ ┣ vs.png
┃ ┣ vs.webp
┃ ┣ vue.png
┃ ┗ vue.webp
┣ bootstrap.bundle.min.js
┣ bootstrap.min.css
┣ gsap.min.js
┣ index.html
┣ jquery-3.6.0.js
┣ jquery-ui.min.js
┣ main.js
┣ style.css
┣ vue-router.js
┣ vue.js
┗ vuex.js
</pre>
    </div>
    `
}