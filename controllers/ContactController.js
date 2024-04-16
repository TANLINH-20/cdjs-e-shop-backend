const Contact = require("../models/Contact");
const conn = require("../configs/dbmysql");
const ContactController = {
  index: (req, res) => {
    Contact.getAll((data) => {
      if (data == null) {
        return res.status(200).json({
          contact: null,
          status: false,
          message: "Không tìm thấy dữ liệu",
        });
      } else {
        return res.status(200).json({
          contact: data,
          status: true,
          message: "Lấy dữ liệu thành công",
        });
      }
    });
  },

  show: async (req, res) => {
    try {
      const id = req.params.id;
      await Contact.getById(id, function (contact) {
        if (contact == null) {
          const result = {
            contact: null,
            status: false,
            message: "Không tìm thấy dữ liệu!",
          };
          return res.status(200).json(result);
        } else {
          const result = {
            contact: contact,
            status: true,
            message: "Tải dữ liệu thành công!",
          };
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      const result = {
        contact: null,
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
    const contact = {
      name: formBody.name,
      phone: formBody.phone,
      email: formBody.email,
      content: formBody.content,
      title: formBody.title,
      replay_id: formBody.replay_id,
      status: formBody.status,
      created_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
    };
    Contact.store(contact, function (data, status) {
      //data thứ mà nó trả về
      if (status == true) {
        return res.status(200).json({
          contact: data,
          status: true,
          message: "Thêm thành công",
        });
      } else {
        return res.status(200).json({
          contact: null,
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
        phone: bodyData.phone,
        email: bodyData.email,
        content: bodyData.content,
        title: bodyData.title,
        replay_id: bodyData.replay_id,
        status: bodyData.status,
        updated_by: 1,
        updated_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
      };
      await Contact.update(data, id, function (contact) {
        const result = {
          contact: contact,
          status: true,
          message: "Cập nhật dữ liệu thành công!",
        };
        return res.status(200).json(result);
      });
    } catch (error) {
      const result = {
        contact: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      await Contact.delete(id, function (contact) {
        const result = {
          contact: contact,
          status: true,
          message: "Xóa mẫu tin thành công!",
        };
        return res.status(200).json(result);
      });
    } catch (error) {
      const result = {
        contact: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },
};

module.exports = ContactController;
