const conn = require('../configs/dbmysql');

const OrderDetail ={
    getAll: (result) => {
        conn.query("select * from db_orderdetail", (err, orderdetail, field) => {
            if (err) {
                result(null);
            }
            else{
                result(orderdetail);
            }
        })
    },

    getById: (id, mycallback) => {
        const sql = `SELECT od.*, p.name as product_name
        FROM db_orderdetail od
        JOIN db_product p ON od.product_id = p.id
        WHERE order_id='${id}'`;
        conn.query(sql, function (err, orderdetail) {
          if (err || orderdetail.lenght == 0) {
            mycallback(null);
          } else {
            mycallback(orderdetail[0]);
          }
        });
      },
    
      store: (orderdetail, mycallback) => {
        const sql = "INSERT INTO db_orderdetail SET ?";
        conn.query(sql, orderdetail, function (err, result) {
          if (err) {
            mycallback(err, false);
          } else {
            mycallback(result, true);
          }
        });
      },
    
      update: (data, id, mycallback) => {
        const sql = `UPDATE db_orderdetail SET ? WHERE id='${id}'`;
        conn.query(sql, data, function (err, orderdetail) {
          if (err) {
            mycallback(null);
          } else {
            mycallback(data);
          }
        });
      },
    
      delete: (id, mycallback) => {
        const sql = `DELETE FROM db_orderdetail WHERE id='${id}'`;
        conn.query(sql, function (err, orderdetail) {
          if (err) {
            mycallback(null);
          } else {
            mycallback(`Xóa thành công ${id}`);
          }
        });
      },
}

module.exports = OrderDetail;