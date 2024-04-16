const conn = require("../configs/dbmysql");

const Contact = {
  getAll: (result) => {
    conn.query("select * from db_Contact", (err, contact, field) => {
      if (err) {
        result(null);
      } else {
        result(contact);
      }
    });
  },

  getById: (id, mycallback) => {
    const sql = `SELECT * FROM db_contact WHERE id='${id}'`;
    conn.query(sql, function (err, contact) {
      if (err || contact.lenght == 0) {
        mycallback(null);
      } else {
        mycallback(contact[0]);
      }
    });
  },

  store: (contact, mycallback) => {
    const sql = "INSERT INTO db_contact SET ?";
    conn.query(sql, contact, function (err, result) {
      if (err) {
        mycallback(err, false);
      } else {
        mycallback(result, true);
      }
    });
  },

  update: (data, id, mycallback) => {
    const sql = `UPDATE db_contact SET ? WHERE id='${id}'`;
    conn.query(sql, data, function (err, contact) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(data);
      }
    });
  },

  delete: (id, mycallback) => {
    const sql = `DELETE FROM db_contact WHERE id='${id}'`;
    conn.query(sql, function (err, contact) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(`Xóa thành công ${id}`);
      }
    });
  },
  
};

module.exports = Contact;
