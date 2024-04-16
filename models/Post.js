const conn = require("../configs/dbmysql");

const Post = {
  getAll: (result) => {
    conn.query("select * from db_Post", (err, post, field) => {
      if (err) {
        result(null);
      } else {
        result(post);
      }
    });
  },

  getListByType: async (type, mycallback) => {
    const sql = `SELECT * FROM db_post WHERE status='1' AND type='${type}'`;
    await conn.query(sql, function (err, post) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(post);
      }
    });
  },

  getList: async (type,limit, offset, mycallback) => {
    const sql = `SELECT * FROM db_post WHERE status='1' AND type = '${type}' ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`;
    await conn.query(sql, function (err, post) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(post);
      }
    });
  },

  getListNew: (type,limit, mycallback) => {
    const sql = `SELECT * FROM db_post 
    WHERE status='1' AND type='${type}'
    ORDER BY created_at DESC LIMIT ${limit}`;
    conn.query(sql, function (err, post) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(post);
      }
    });
  },

  getByTopicId: async (topicid, mycallback) => {
    const sql = `SELECT * FROM db_post WHERE topic_id='${topicid}' AND status='1'`;
    await conn.query(sql, function (err, post) {
      if (err) {
        mycallback(err);
      } else {
        mycallback(post);
      }
    });
  },

  getpostpage: async (topicid, limit, offset, mycallback) => {
    const sql = `SELECT * FROM db_post WHERE status='1' AND topic_id = (${topicid}) ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`;
    await conn.query(sql, function (err, post) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(post);
      }
    });
  },

  getBySlug: async (slug, mycallback) => {
    const sql = `SELECT * FROM db_post WHERE slug='${slug}'`;
    await conn.query(sql, function (err, post) {
      if (err) {
        mycallback(err);
      } else {
        mycallback(post[0]);
      }
    });
  },

  getListPostOther: async (topicid, id, limit, mycallback) => {
    const sql = `SELECT * FROM db_post WHERE topic_id = '${topicid}' AND status='1' AND id!='${id}' ORDER BY created_at DESC LIMIT ${limit}`;
    // console.log(sql);
    await conn.query(sql, function (err, products) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(products);
      }
    });
  },

  getById: (id, mycallback) => {
    const sql = `SELECT p.*, t.name as topic_name 
    FROM db_post p
    JOIN db_topic t ON p.topic_id = t.id
    WHERE p.id='${id}'`;
    conn.query(sql, function (err, post) {
      if (err || post.lenght == 0) {
        mycallback(null);
      } else {
        mycallback(post[0]);
      }
    });
  },

  store: (post, mycallback) => {
    const sql = "INSERT INTO db_post SET ?";
    conn.query(sql, post, function (err, result) {
      if (err) {
        mycallback(err, false);
      } else {
        mycallback(result, true);
      }
    });
  },

  update: (data, id, mycallback) => {
    const sql = `UPDATE db_post SET ? WHERE id='${id}'`;
    conn.query(sql, data, function (err, post) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(data);
      }
    });
  },

  delete: (id, mycallback) => {
    const sql = `DELETE FROM db_post WHERE id='${id}'`;
    conn.query(sql, function (err, post) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(`Xóa thành công ${id}`);
      }
    });
  },
};

module.exports = Post;
