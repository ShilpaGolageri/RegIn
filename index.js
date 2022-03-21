const express =require('express')
const app= express()
const port=process.env.PORT || 2000
require('dotenv').config()
//Db connection 
require('./config/db')
require('./models/user')

// body parser middleware
app.use( express.urlencoded( { extended: true } ) );
app.use(express.json())

// user Routes
const userRoutes = require('./routes/users')
// route middleware
app.use( '/', userRoutes )

// Error handling hardware
app.use( ( err, req, res, next ) => {
    res.status(500).json( {
        error: true,
        message: err.message,
        deta:null
    });
});
app.listen(port,()=>{
    console.log(`Server listen at ${port}`);
})