const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'newDB'
});

const afterConnection = () => {
    connection.query('SELECT * FROM newtable', (err, res) => {
        if (err) throw err;
        console.table(res);
        connection.end();
    })
};

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected as id ${connection.threadId}`);
    afterConnection();
})