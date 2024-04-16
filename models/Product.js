const conn = require("../configs/dbmysql");

const Product = {
  getAll: (result) => {
    const sql = `SELECT p.*, c.name as category_name, b.name as brand_name
    FROM db_Product p
    JOIN db_Category c ON p.category_id = c.id
    JOIN db_Brand b ON p.brand_id = b.id`;
    conn.query(sql, (err, product, field) => {
      if (err) {
        result(null);
      } else {
        result(product);
      }
    });
  },

  getById: (id, mycallback) => {
    const sql = `SELECT * FROM db_category WHERE id='${id}'`;
    conn.query(sql, function (err, product) {
      if (err || product.lenght == 0) {
        mycallback(null);
      } else {
        mycallback(product[0]);
      }
    });
  },

  store: (product, mycallback) => {
    const sql = "INSERT INTO db_product SET ?";
    conn.query(sql, product, function (err, result) {
      if (err) {
        mycallback(err, false);
      } else {
        mycallback(result, true);
      }
    });
  },

  update: (data, id, mycallback) => {
    const sql = `UPDATE db_product SET ? WHERE id='${id}'`;
    conn.query(sql, data, function (err, product) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(data);
      }
    });
  },

  delete: (id, mycallback) => {
    const sql = `DELETE FROM db_product WHERE id='${id}'`;
    conn.query(sql, function (err, product) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(`Xóa thành công ${id}`);
      }
    });
  },

  getListNew: (limit, mycallback) => {
    const sql = `SELECT * FROM db_product WHERE status='1' ORDER BY created_at DESC LIMIT ${limit}`;
    conn.query(sql, function (err, products) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(products);
      }
    });
  },

  getListSale: (limit, mycallback) => {
    const sql = `SELECT * FROM db_product WHERE pricesale > 0 AND status='1' LIMIT ${limit}`;
    conn.query(sql, function (err, products) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(products);
      }
    });
  },

  getListByCategory: (categoryid, mycallback) => {
    const sql = `SELECT * FROM db_product WHERE category_id ='${categoryid}' AND status='1' `;
    conn.query(sql, function (err, products) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(products);
      }
    });
  },

  getListByBrand: (brandid, mycallback) => {
    const sql = `SELECT * FROM db_product WHERE brand_id ='${brandid}' AND status='1' `;
    conn.query(sql, function (err, products) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(products);
      }
    });
  },

  getSearchAll: (keyword, mycallback) => {
    const sql = `SELECT * FROM db_product WHERE name LIKE '%${keyword}%' AND status='1' `;
    conn.query(sql, function (err, products) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(products);
      }
    });
  },

  getListProductSearch: async (keyword, limit, offset, mycallback) => {
    const sql = `SELECT * FROM db_product WHERE status='1' AND name LIKE '%${keyword}%' ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`;
    await conn.query(sql, function (err, products) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(products);
      }
    });
  },

  getList: async (limit, offset, mycallback) => {
    const sql = `SELECT * FROM db_product WHERE status='1' ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`;
    await conn.query(sql, function (err, products) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(products);
      }
    });
  },

  getListProductCategory: async (categoryid, limit, offset, mycallback) => {
    const sql = `SELECT * FROM db_product WHERE status='1' AND category_id IN (${categoryid}) ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`;
    await conn.query(sql, function (err, products) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(products);
      }
    });
  },


  getListProductBrand: async (brandid, limit, offset, mycallback) => {
    const sql = `SELECT * FROM db_product WHERE status='1' AND brand_id='${brandid}' ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`;
    await conn.query(sql, function (err, products) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(products);
      }
    });
  },

  getById: async (id, mycallback) => {
    const sql = `SELECT p.*, c.name as category_name, b.name as brand_name
    FROM db_product p
    JOIN db_brand b ON p.brand_id = b.id
    JOIN db_category c ON p.category_id = c.id
    WHERE p.id=${id}`;
    await conn.query(sql, function (err, product) {
      if (err || product.lenght == 0) {
        mycallback(null);
      } else {
        mycallback(product[0]);
      }
    });
  },

  getBySlug: async (slug, mycallback) => {
    const sql = `SELECT * FROM db_product WHERE slug='${slug}'`;
    await conn.query(sql, function (err, product) {
      if (err) {
        mycallback(err);
      } else {
        mycallback(product[0]);
      }
    });
  },
  getListProductOther: async (categoryid, id, limit, mycallback) => {
    const sql = `SELECT * FROM db_product WHERE category_id = '${categoryid}' AND status='1' AND id!='${id}'  ORDER BY created_at DESC LIMIT ${limit}`;
    // console.log(sql);
    await conn.query(sql, function (err, products) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(products);
      }
    });
  },
};

module.exports = Product;
