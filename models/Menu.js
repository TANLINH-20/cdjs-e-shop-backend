const conn = require("../configs/dbmysql");

const Menu = {
  getAll: (result) => {
    conn.query("select * from db_Menu", (err, menu, field) => {
      if (err) {
        result(null);
      } else {
        result(menu);
      }
    });
  },

  getList: (parentid,position,level, mycallback) => {
    const sql = `SELECT *
    FROM db_menu
    WHERE parent_id ='${parentid}' AND position='${position}' AND level='${level}' AND status=1
    ORDER BY sort_order`;
    conn.query(sql, function (err, menu) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(menu);
      }
    });
  },

  getById: (id, mycallback) => {
    const sql = `SELECT * FROM db_menu WHERE id='${id}'`;
    conn.query(sql, function (err, menu) {
      if (err || menu.lenght == 0) {
        mycallback(null);
      } else {
        mycallback(menu[0]);
      }
    });
  },

  store: (menu, mycallback) => {
    const sql = "INSERT INTO db_menu SET ?";
    conn.query(sql, menu, function (err, result) {
      if (err) {
        mycallback(err, false);
      } else {
        mycallback(result, true);
      }
    });
  },

  update: (data, id, mycallback) => {
    const sql = `UPDATE db_menu SET ? WHERE id='${id}'`;
    conn.query(sql, data, function (err, menu) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(data);
      }
    });
  },

  delete: (id, mycallback) => {
    const sql = `DELETE FROM db_menu WHERE id='${id}'`;
    conn.query(sql, function (err, menu) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(`Xóa thành công ${id}`);
      }
    });
  },
  
};

module.exports = Menu;
