const app = require('./config/server');
const route = require('./routes/user');

//Starting the server
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});

app.use(route);