const conn = require("../configs/dbmysql");

const Order = {
  getAll: (result) => {
    const sql = `
      SELECT o.*, u.name
      FROM db_order o
      JOIN db_user u ON o.user_id = u.id
    `;

    conn.query(sql, (err, order) => {
      if (err) {
        result(null);
      } else {
        result(order);
      }
    });
  },

  getlatest: (result) => {
    const sql = `
      SELECT *
      FROM db_order 
      ORDER BY id DESC
    `;
    conn.query(sql, (err, order) => {
      if (err) {
        result(null);
      } else {
        result(order[0]);
      }
    });
  },

  getById: (id, mycallback) => {
    const sql = `SELECT * FROM db_order WHERE id='${id}'`;
    conn.query(sql, function (err, order) {
      if (err || order.lenght == 0) {
        mycallback(null);
      } else {
        mycallback(order[0]);
      }
    });
  },

  store: (order, mycallback) => {
    const sql = "INSERT INTO db_order SET ?";
    conn.query(sql, order, function (err, result) {
      if (err) {
        mycallback(err, false);
      } else {
        mycallback(result, true);
      }
    });
  },

  update: (data, id, mycallback) => {
    const sql = `UPDATE db_order SET ? WHERE id='${id}'`;
    conn.query(sql, data, function (err, order) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(data);
      }
    });
  },

  delete: (id, mycallback) => {
    const sql = `DELETE FROM db_order WHERE id='${id}'`;
    conn.query(sql, function (err, order) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(`Xóa thành công ${id}`);
      }
    });
  },
};

module.exports = Order;
