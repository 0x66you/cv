const debugrecord = [
    {
        question:"Failed to load resource: net::ERR_HTTP2_PROTOCOL_ERROR",
        answer:"webp -q 75 XXX.png -o XXX.webp",
        link:"https://medium.com/@mingjunlu/image-optimization-using-webp-72d5641213c9"
    },
    {
        question:"Something is already running on port 3000",
        answer:"npx kill-port 3000",
        link:"https://stackoverflow.com/questions/39322089/node-js-port-3000-already-in-use-but-it-actually-isnt"
    },
    {
        question:"UnhandledPromiseRejectionWarning: MongoParseError: option usecreateindex is not supported",
        answer:"mongoose v5版本問題，下載v6版本即可(2021.8.24發行)",
        link:"https://stackoverflow.com/questions/68958221/mongoparseerror-options-usecreateindex-usefindandmodify-are-not-supported"
    },
    {
        question:"Error [ERR_STREAM_WRITE_AFTER_END]: write after end",
        answer:"不要用多個if敘述，改用單一組if else if 跟else",
        link:"https://stackoverflow.com/questions/60714212/error-err-stream-write-after-end-write-after-end"
    },
    {
        question:"設定SSH連接 Git clone檔案",
        answer:"ssh-keygen -> cat ~/.ssh/id_rsa.pub 取得公開金鑰的內容",
        link:"https://backlog.com/git-tutorial/tw/reference/ssh.html"
    },
    {
        question:"TypeError: Cannot read property 'then' of undefined",
        answer:"return new Promise((done, err) => {......})",
        link:"https://stackoverflow.com/questions/24788171/typeerror-cannot-read-property-then-of-undefined"
    },
    {
        question:"(nodejs)Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client",
        answer:"already sent response to client after request is made",
        link:"https://poopcode.com/error-err_http_headers_sent-cannot-set-headers-after-they-are-sent-to-the-client-how-to-fix/"
    },
    {
        question:"MongooseError: The `uri` parameter to `openUri()` must be a string, got 'undefined'.",
        answer:".env 跟app.js 並不在同層資料夾，移入後即解決",
        link:"https://stackoverflow.com/questions/55267494/the-uri-parameter-to-openuri-must-be-a-string-got-undefined"
    },
    {
        question:"在mac中寫php無法用mkdir創建目錄",
        answer:"sudo chmod -R 777 /path/to/your/directory",
        link:"https://www.twblogs.net/a/5eebea7633e47b02063c1518"
    },
    {
        question:"VS Code php tag autocomplete",
        answer:"File>Preferences>User Snippets>html.json & paste code",
        link:"https://stackoverflow.com/questions/43705471/vs-code-php-tag-autocomplete"
    },
    {
        question:"Display All PHP Errors",
        answer:"add these lines to your PHP code file",
        link:"https://stackify.com/display-php-errors/"
    },
    {
        question:"Uncaught TypeError: call_user_func(): Argument #1 ($callback) must be a valid callback, non-static method",
        answer:"AboutController::class  改成 new AboutController()",
        link:"https://github.com/thecodeholic/php-mvc-framework/issues/3"
    },
    {
        question:"SQLSTATE[HY000] [2002] No such file or directory",
        answer:"$host 由 localhost 改成 127.0.0.1",
        link:"https://blog.csdn.net/JoeChao1003/article/details/60633271"
    },
    {
        question:"template中不能使用script標籤 ",
        answer:"寫在vue component中的mounted(){ }屬性中",
        link:"https://stackoverflow.com/questions/45047126/how-to-add-external-js-scripts-to-vuejs-components"
    },
    {
        question:"site.webmanifest 404",
        answer:"rename site.webmanifest  to manifest.json",
        link:"https://devanswers.co/site-webmanifest-error-404-401/"
    },
    {
        question:"DevTools failed to load SourceMap: Could not load content",
        answer:"定位到“Source”的“Enable javascript source maps”，取消勾選",
        link:"https://www.uj5u.com/qiye/76830.html"
    },
];
export default debugrecord;