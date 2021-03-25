const pool = require('../database');

module.exports = {
    async guardarUsuario(user) {
        const exist = await pool.query("select count(username) exite from users where username = ?", [user.username]);
        if (exist[0].exite == 0) {
            await pool.query("insert into users set ?", user)
        } else {
            user.token = "value token";
            await pool.query('UPDATE users set ? WHERE username = ?', [user, user.username]);
        }
    },
    async getUser(username) {
        return await pool.query("select * from users where email = ?", [username]);
    }
}