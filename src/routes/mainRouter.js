const newsRouter = require('./news')
const coursesRouter = require('./courses')

function route(app){
    
    //news page 
    app.use('/news', newsRouter);

    //courses page 
    app.use('/courses', coursesRouter);

    app.get('/', (req, res) => {
        res.send('Hello World!');
      })
}

module.exports = route;