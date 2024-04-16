const conn = require("../configs/dbmysql");
const User = require("../models/User");
const UserController = {
  index: (req, res) => {
    User.getAll((data) => {
      if (data == null) {
        return res.status(200).json({
          user: null,
          status: false,
          message: "Không tìm thấy dữ liệu",
        });
      } else {
        return res.status(200).json({
          user: data,
          status: true,
          message: "Lấy dữ liệu thành công",
        });
      }
    });
  },

  show: async (req, res) => {
    try {
      const id = req.params.id;
      await User.getById(id, function (user) {
        if (user == null) {
          const result = {
            user: null,
            status: false,
            message: "Không tìm thấy dữ liệu!",
          };
          return res.status(200).json(result);
        } else {
          const result = {
            user: user,
            status: true,
            message: "Tải dữ liệu thành công!",
          };
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      const result = {
        user: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  store: (req, res) => {
    const formBody = req.body;
    let d = new Date();
    let imageNameStore = null;
    if (req.files && req.files.image) {
      let image = req.files.image;
      image.mv("./assets/images/user/" + image.name, function (err, result) {
        if (err) throw err;
      });
      imageNameStore = image.name;
    }
    //Lấy dũ liệu form
    const user = {
      username: formBody.username,
      password: formBody.password,
      email: formBody.email,
      phone: formBody.phone,
      name: formBody.name,
      gender: formBody.gender,
      roles: formBody.roles,
      address: formBody.address,
      image: imageNameStore,
      status: formBody.status,
      created_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
    };
    User.store(user, function (data, status) {
      //data thứ mà nó trả về
      if (status == true) {
        return res.status(200).json({
          user: data,
          status: true,
          message: "Thêm thành công",
        });
      } else {
        return res.status(200).json({
          user: null,
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
      let imageName = bodyData.image;
      if (req.files && req.files.image) {
        let image = req.files.image;
        image.mv("./assets/images/user/" + image.name, function (err, result) {
          if (err) throw err;
        });
        imageName = image.name;
      }
      let d = new Date();
      //object data to store
      const data = {
        name: bodyData.name,
        username: bodyData.username,
        password: bodyData.password,
        email: bodyData.email,
        gender: bodyData.gender,
        phone: bodyData.phone,
        roles: bodyData.roles,
        address: bodyData.address,
        image: imageName,
        status: bodyData.status,
        updated_by: 1,
        updated_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
      };
      await User.update(data, id, function (user) {
        const result = {
          user: user,
          status: true,
          message: "Cập nhật dữ liệu thành công!",
        };
        return res.status(200).json(result);
      });
    } catch (error) {
      const result = {
        user: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      await User.delete(id, function (user) {
        const result = {
          user: user,
          status: true,
          message: "Xóa mẫu tin thành công!",
        };
        return res.status(200).json(result);
      });
    } catch (error) {
      const result = {
        user: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },
};

module.exports = UserController;
