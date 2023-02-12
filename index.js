const express = require('express');
const app = express();
const port = 8000;

//use express express routers
app.use('/', require('./routes'));
console.log('router loaded');

//set up view engine and confifure the views folder path
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
});
