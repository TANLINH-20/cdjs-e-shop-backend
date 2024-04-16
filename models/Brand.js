const conn = require("../configs/dbmysql");

const Brand = {
  getAll: (result) => {
    conn.query("select * from db_brand", (err, brand, field) => {
      if (err) {
        result(null);
      } else {
        result(brand);
      }
    });
  },

  getById: (id, mycallback) => {
    const sql = `SELECT * FROM db_brand WHERE id='${id}'`;
    conn.query(sql, function (err, brand) {
      if (err || brand.lenght == 0) {
        mycallback(null);
      } else {
        mycallback(brand[0]);
      }
    });
  },

  getBySlug: (slug, mycallback) => {
    const sql = `SELECT * FROM db_brand WHERE slug='${slug}'`;
    conn.query(sql, function (err, brand) {
      if (err || brand.lenght == 0) {
        mycallback(null);
      } else {
        mycallback(brand[0]);
      }
    });
  },

  store: (brand, mycallback) => {
    const sql = "INSERT INTO db_brand SET ?";
    conn.query(sql, brand, function (err, result) {
      if (err) {
        mycallback(err, false);
      } else {
        mycallback(result, true);
      }
    });
  },

  update: (data, id, mycallback) => {
    const sql = `UPDATE db_brand SET ? WHERE id='${id}'`;
    conn.query(sql, data, function (err, brand) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(data);
      }
    });
  },

  delete: (id, mycallback) => {
    const sql = `DELETE FROM db_brand WHERE id='${id}'`;
    conn.query(sql, function (err, brand) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(`Xóa thành công ${id}`);
      }
    });
  },
};

module.exports = Brand;
