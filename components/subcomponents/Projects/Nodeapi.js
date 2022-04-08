export default {
    name:"nodeapi",
    template:`
    <div style="padding:10px 10px 0;">
        <div style="text-align:center;">
            <div class="serifFont600" style="margin-bottom:10px;">
                <h3><span class="poppinsFont400">Node API</h3>
                <p style="margin:8px auto;font-size:14px;"><span class="serifFont600">程式碼公開於此</span> <a target="_blank" href="https://github.com/0x66you/jobs-api">Github</a></p>
            </div>
            <picture>
                <source srcset="../../../img/nodeapi.webp" type="image/webp">
                <img src="../../../img/nodeapi.gif" style="width:100%;">
            </picture>
        </div>
<h6 style="margin:5px 0;">1) Setup</h6>
<code>npm install && npm start</code>
<h6 style="margin:10px 0;">2) Database Connection</h6>
<ol style="font-size:14px;">
    <li>Import connect.js</li>
    <li>Invoke in start()</li>
    <li>Setup .env in the root</li>
    <li>Add MONGO_URI with correct value</li>
</ol>
<h6 style="margin:10px 0;">3) Routers</h6>
<ul style="font-size:14px;">
<li>auth.js</li>
<li>jobs.js</li>
</ul>
<h6 style="margin:10px 0;">4) User Model</h6>
<p style="font-size:14px;margin-bottom:5px;">Email Validation Regex</p>
<code>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/</code>
<h6 style="margin:10px 0;">5) Register User</h6>
<ul style="font-size:14px;">
<li>Validate - name, email, password - with Mongoose</li>
<li>Hash Password (with bcryptjs)</li>
<li>Save User</li>
<li>Generate Token</li>
<li>Send Response with Token</li>
</ul>
<h6 style="margin:10px 0;">6) Login User</h6>
<ul style="font-size:14px;">
<li>Validate - email, password - in controller</li>
<li>If email or password is missing, throw BadRequestError</li>
<li>Find User</li>
<li>Compare Passwords</li>
<li>If no user or password does not match, throw UnauthenticatedError</li>
<li>If correct, generate Token</li>
<li>Send Response with Token</li>
</ul>
<h6 style="margin:10px 0;">7) Mongoose Errors</h6>
<ul style="font-size:14px;">
<li>Validation Errors</li>
<li>Duplicate (Email)</li>
<li>Cast Error</li>
</ul>
<h6 style="margin:10px 0;">8) Security</h6>
<ul style="font-size:14px;">
<li>helmet</li>
<li>cors</li>
<li>xss-clean</li>
<li>express-rate-limit</li>
</ul>
<h6 style="margin:10px 0;">9) Swagger UI</h6>
<code>
/jobs/{id}:
  parameters:
    - in: path
      name: id
      schema:
        type: string
      required: true
      description: the job id
</code>
</div>
    `
}