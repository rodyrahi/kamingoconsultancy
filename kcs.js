const express = require('express')
const app = express()
const con = require('./database.js')


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

  const {name , email,comment} = req.body

  await executeQuery(`INSERT INTO clients (name, email, comment)
  VALUES ('${name}', '${email}', '${comment}');`)
  res.redirect('/')
})

app.get('/create', (req, res) => {
  res.render('create')
})
app.listen(9999)