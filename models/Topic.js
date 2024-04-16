const conn = require('../configs/dbmysql');

const Topic ={
    getAll: (result) => {
        conn.query("select * from db_Topic", (err, topic, field) => {
            if (err) {
                result(null);
            }
            else{
                result(topic);
            }
        })
    },

    getBySlug: async (slug, mycallback) => {
      const sql = `SELECT * FROM db_topic WHERE slug='${slug}'`;
      await conn.query(sql, function (err, post) {
        if (err) {
          mycallback(err);
        } else {
          mycallback(post[0]);
        }
      });
    },

    getById: (id, mycallback) => {
        const sql = `SELECT * FROM db_topic WHERE id='${id}'`;
        conn.query(sql, function (err, topic) {
          if (err || topic.lenght == 0) {
            mycallback(null);
          } else {
            mycallback(topic[0]);
          }
        });
      },
    
      store: (topic, mycallback) => {
        const sql = "INSERT INTO db_topic SET ?";
        conn.query(sql, topic, function (err, result) {
          if (err) {
            mycallback(err, false);
          } else {
            mycallback(result, true);
          }
        });
      },
    
      update: (data, id, mycallback) => {
        const sql = `UPDATE db_topic SET ? WHERE id='${id}'`;
        conn.query(sql, data, function (err, topic) {
          if (err) {
            mycallback(null);
          } else {
            mycallback(data);
          }
        });
      },
    
      delete: (id, mycallback) => {
        const sql = `DELETE FROM db_topic WHERE id='${id}'`;
        conn.query(sql, function (err, topic) {
          if (err) {
            mycallback(null);
          } else {
            mycallback(`Xóa thành công ${id}`);
          }
        });
      },
      
}

module.exports = Topic;