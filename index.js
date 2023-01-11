const sql = require("mssql/msnodesqlv8");
var config ={
    server :"WIN-T1K9LSOB69C\\",
    database:"800_Save",
    driver:"msnodesqlv8",
    user:"sa",
    password:"OPMserver1",
    options:{
        //trustedConnection:true
    }
}

sql.connect(config,function(err){
    if(err)console.log(err);
    var request = new sql.Request();
    request.query("select * from Client",function(err,records){
        if(err)console.log(err);
        else console.log(records);
    })

})