const conn = require("../configs/dbmysql");

const Category = {
  getAll: (mycallback) => {
    const sql = `SELECT * FROM db_category`;
    conn.query(sql, function (err, category) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(category);
      }
    });
  },

  getList: (parentid, mycallback) => {
    const sql = `SELECT * FROM db_category WHERE parent_id ='${parentid}' AND status='1'`;
    conn.query(sql, function (err, categorys) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(categorys);
      }
    });
  },

  getBySlug: (slug, mycallback) => {
    const sql = `SELECT * FROM db_category WHERE slug='${slug}'`;
    conn.query(sql, function (err, category) {
      if (err || category.lenght == 0) {
        mycallback(null);
      } else {
        mycallback(category[0]);
      }
    });
  },

  getById: (id, mycallback) => {
    const sql = `SELECT * FROM db_category WHERE id='${id}'`;
    conn.query(sql, function (err, category) {
      if (err || category.lenght == 0) {
        mycallback(null);
      } else {
        mycallback(category[0]);
      }
    });
  },

  store: (category, mycallback) => {
    const sql = "INSERT INTO db_category SET ?";
    conn.query(sql, category, function (err, result) {
      if (err) {
        mycallback(err, false);
      } else {
        mycallback(result, true);
      }
    });
  },

  update: (data, id, mycallback) => {
    const sql = `UPDATE db_category SET ? WHERE id='${id}'`;
    conn.query(sql, data, function (err, category) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(data);
      }
    });
  },

  delete: (id, mycallback) => {
    const sql = `DELETE FROM db_category WHERE id='${id}'`;
    conn.query(sql, function (err, category) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(`Xóa thành công ${id}`);
      }
    });
  },
};

module.exports = Category;
