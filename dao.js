const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    user:'root',
    password: 'rootnoot',
    connectionLimit: 5,
    database: 'omatprojektit'
});
async function asyncFunction() {
    let conn;
    let data = {};
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * from post");
        console.log(rows);
        data = rows;//[ {val: 1}, meta: ... ]

    } finally {
        if (conn) {
            conn.end();
            // eslint-disable-next-line no-unsafe-finally
            return data;
        }
        // eslint-disable-next-line no-unsafe-finally
        return data;
    }
}

module.exports = {
    asyncFunction
};