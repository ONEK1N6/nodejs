const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    datebase: 'bdnode'
});
connection.connect((err)=>{
    if(err){
        console.log("error de conexion a MYSQL: ",err);
        return;
    }else{
        console.log("conectado a BD mysql")
    }
});