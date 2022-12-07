const sql = require('mssql/msnodesqlv8');
//database configuration
var config={
    user: 'sa',
    password:'OPMserver1', 
    database: '800_Save', // name of database 
    server: 'WIN-T1K9LSOB69C',
    driver: 'msnodesqlv8',
    options:{
        trustedConnection: true,
        userName: 'Administrator',
        password: 'OPMserver2'
    }
};


// connect to database 

sql.connect(config, function(err){
    if (err){
        console.log(err);
    }
    // create the request object 
    var request = new sql.Request();
    // database query
    request .query('select * from Client', function(err,recordSet){
       if(err){
        console.log(err)
       }else{
        console.log(recordSet)
       }
    });  
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});


