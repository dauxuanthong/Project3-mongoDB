
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;


//static file 
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// handlebar template
app.engine('.hbs', handlebars({
  extname: '.hbs'  // config file
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'))



app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})