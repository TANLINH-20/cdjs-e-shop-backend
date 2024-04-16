const Topic = require("../models/Topic");
const conn = require("../configs/dbmysql");
const convertSlug = require("../utils/convertSlug");
const TopicController = {
  index: (req, res) => {
    Topic.getAll((data) => {
      if (data == null) {
        return res.status(200).json({
          topic: null,
          status: false,
          message: "Không tìm thấy dữ liệu",
        });
      } else {
        return res.status(200).json({
          topic: data,
          status: true,
          message: "Lấy dữ liệu thành công",
        });
      }
    });
  },

  show: async (req, res) => {
    try {
      const id = req.params.id;
      await Topic.getById(id, function (topic) {
        if (topic == null) {
          const result = {
            topic: null,
            status: false,
            message: "Không tìm thấy dữ liệu!",
          };
          return res.status(200).json(result);
        } else {
          const result = {
            topic: topic,
            status: true,
            message: "Tải dữ liệu thành công!",
          };
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      const result = {
        topic: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  topicdetail: async (req, res) => {
    try {
      const slug = req.params.slug;
      await Topic.getBySlug(slug, function (topic) {
        if (topic == null) {
          const result = {
            topic: null,
            status: false,
            message: "Không tìm thấy thông tin!",
          };
          return res.status(200).json(result);
        }else {
          const result = {
            topic: topic,
            status: true,
            message: "Tải dữ liệu thành công!",
          };
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      const result = {
        topic: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  store: (req, res) => {
    const formBody = req.body;
    let d = new Date();
    //Lấy dũ liệu form
    const topic = {
      name: formBody.name,
      parent_id: formBody.parent_id,
      sort_order: formBody.sort_order,
      metakey: formBody.metakey,
      metadesc: formBody.metadesc,
      status: formBody.status,
      slug: convertSlug(formBody.name),
      created_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
    };
    Topic.store(topic, function (data, status) {
      //data thứ mà nó trả về
      if (status == true) {
        return res.status(200).json({
          topic: data,
          status: true,
          message: "Thêm thành công",
        });
      } else {
        return res.status(200).json({
          topic: null,
          status: false,
          message: "Thêm thất bại",
        });
      }
    });
  },

  edit: async (req, res) => {
    try {
      const id = req.params.id;
      let bodyData = req.body;
      let d = new Date();
      //object data to store
      const data = {
        name: bodyData.name,
        parent_id: bodyData.parent_id,
        sort_order: bodyData.sort_order,
        metakey: bodyData.metakey,
        metadesc: bodyData.metadesc,
        status: bodyData.status,
        slug: convertSlug(bodyData.name),
        updated_by: 1,
        updated_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
      };
      await Topic.update(data, id, function (topic) {
        const result = {
          topic: topic,
          status: true,
          message: "Cập nhật dữ liệu thành công!",
        };
        return res.status(200).json(result);
      });
    } catch (error) {
      const result = {
        topic: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      await Topic.delete(id, function (topic) {
        const result = {
          topic: topic,
          status: true,
          message: "Xóa mẫu tin thành công!",
        };
        return res.status(200).json(result);
      });
    } catch (error) {
      const result = {
        topic: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },
};

module.exports = TopicController;
