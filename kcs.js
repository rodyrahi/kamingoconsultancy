const express = require('express')
const app = express()
const con = require('./database.js')
const {db} = require('./db');


app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

function executeQuery(query) {
  return new Promise((resolve, reject) => {
    con.query(query, (err, result, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/contactus', (req, res) => {
  res.render('contactus')
})

app.post('/contactus', async(req, res) => {
  console.log(req.body);

  const {name , email,company , phone,subject,message} = req.body
  db.prepare('INSERT INTO client (name,company,email,phone,subject,message) VALUES(?,?,?,?,?,?)').run(name,company,email,phone,subject,message);

  // await executeQuery(`INSERT INTO clients (name, email, comment)
  // VALUES ('${name}', '${email}', '${comment}');`)
  res.redirect('/')
})

app.get('/create', (req, res) => {
  res.render('create')
})



app.get('/privacy', (req, res) => {
  res.render('partials/privacy')
})

app.get('/terms', (req, res) => {
  res.render('partials/terms')
})

app.get('/contentcreation', (req, res) => {
  res.render('partials/contentcreation')
})

app.get('/digitalmarketing', (req, res) => {
  res.render('partials/digitalmarketing')
})

app.get('/development', (req, res) => {
  res.render('partials/development')
})

app.get('/dataanalytics', (req, res) => {
  res.render('partials/dataanalytics')
})

app.get('/blog', (req, res) => {
  res.render('partials/blog')
})
app.get('/sitemap.xml', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sitemap.xml'));
});
app.listen(9999,()=> {
  console.log('http://localhost:9999');
})

