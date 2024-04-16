const conn = require("../configs/dbmysql");

const User = {
  getAll: (result) => {
    conn.query("select * from db_user", (err, user, field) => {
      if (err) {
        result(null);
      } else {
        result(user);
      }
    });
  },

  getById: (id, mycallback) => {
    const sql = `SELECT * FROM db_user WHERE id='${id}'`;
    conn.query(sql, function (err, user) {
      if (err || user.lenght == 0) {
        mycallback(null);
      } else {
        mycallback(user[0]);
      }
    });
  },

  store: (user, mycallback) => {
    const sql = "INSERT INTO db_user SET ?";
    conn.query(sql, user, function (err, result) {
      if (err) {
        mycallback(err, false);
      } else {
        mycallback(result, true);
      }
    });
  },

  update: (data, id, mycallback) => {
    const sql = `UPDATE db_user SET ? WHERE id='${id}'`;
    conn.query(sql, data, function (err, user) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(data);
      }
    });
  },

  delete: (id, mycallback) => {
    const sql = `DELETE FROM db_user WHERE id='${id}'`;
    conn.query(sql, function (err, user) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(`Xóa thành công ${id}`);
      }
    });
  },
};

module.exports = User;
