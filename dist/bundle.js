(()=>{var e={38:(e,t,n)=>{const r="127.0.0.1"===process.platform?"win32":"165.232.151.6";var s=n(744).createConnection({host:r,user:"raj",password:"Kamingo@11",database:"kcs",charset:"utf8mb4",timeout:6e4});s.connect((e=>{e&&console.log(e)})),e.exports=s},871:(e,t,n)=>{const r=new(n(890))("../database/kcs/clients.db");r.exec("\n  CREATE TABLE IF NOT EXISTS client (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    name TEXT,\n    company TEXT,\n    email TEXT,\n    phone TEXT,\n    subject TEXT,\n    message TEXT,\n    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP\n  )\n"),console.log("Connected to the database"),e.exports={db:r}},890:e=>{"use strict";e.exports=require("better-sqlite3")},860:e=>{"use strict";e.exports=require("express")},744:e=>{"use strict";e.exports=require("mysql")}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}(()=>{const e=n(860),t=e(),{db:r}=(n(38),n(871));t.use(e.static("public")),t.set("view engine","ejs"),t.use(e.urlencoded({extended:!0})),t.get("/",((e,t)=>{t.render("home")})),t.get("/contactus",((e,t)=>{t.render("contactus")})),t.post("/contactus",(async(e,t)=>{console.log(e.body);const{name:n,email:s,company:a,phone:o,subject:c,message:i}=e.body;r.prepare("INSERT INTO client (name,company,email,phone,subject,message) VALUES(?,?,?,?,?,?)").run(n,a,s,o,c,i),t.redirect("/")})),t.get("/create",((e,t)=>{t.render("create")})),t.get("/privacy",((e,t)=>{t.render("partials/privacy")})),t.get("/terms",((e,t)=>{t.render("partials/terms")})),t.get("/contentcreation",((e,t)=>{t.render("partials/contentcreation")})),t.get("/digitalmarketing",((e,t)=>{t.render("partials/digitalmarketing")})),t.get("/development",((e,t)=>{t.render("partials/development")})),t.get("/dataanalytics",((e,t)=>{t.render("partials/dataanalytics")})),t.get("/blog",((e,t)=>{t.render("partials/blog")})),t.get("/sitemap.xml",((e,t)=>{t.sendFile(path.join(__dirname,"public","sitemap.xml"))})),t.listen(9999,(()=>{console.log("http://localhost:9999")}))})()})();