const conn = require("../configs/dbmysql");

const Banner = {
  getAll: (result) => {
    conn.query("select * from db_banner", (err, banner, field) => {
      if (err) {
        result(null);
      } else {
        result(banner);
      }
    });
  },

  getList: (position, mycallback) => {
    const sql = `SELECT * FROM db_banner WHERE position ='${position}' AND status='1'`;
    conn.query(sql, function (err, banners) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(banners);
      }
    });
  },

  getById: (id, mycallback) => {
    const sql = `SELECT * FROM db_banner WHERE id='${id}'`;
    conn.query(sql, function (err, banner) {
      if (err || banner.lenght == 0) {
        mycallback(null);
      } else {
        mycallback(banner[0]);
      }
    });
  },

  store: (banner, mycallback) => {
    const sql = "INSERT INTO db_banner SET ?";
    conn.query(sql, banner, function (err, result) {
      if (err) {
        mycallback(err, false);
      } else {
        mycallback(result, true);
      }
    });
  },

  update: (data, id, mycallback) => {
    const sql = `UPDATE db_banner SET ? WHERE id='${id}'`;
    conn.query(sql, data, function (err, banner) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(data);
      }
    });
  },

  delete: (id, mycallback) => {
    const sql = `DELETE FROM db_banner WHERE id='${id}'`;
    conn.query(sql, function (err, banner) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(`Xóa thành công ${id}`);
      }
    });
  },
};

module.exports = Banner;
