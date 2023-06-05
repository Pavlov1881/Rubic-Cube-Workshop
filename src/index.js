const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

// настройка на handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './src/views'); 

// всяка заявка към "static" се да се насочва към "public"
app.use('/static', express.static('public'));
app.use('/images', express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(5000, () => console.log('App is listening on port 5000...'));

