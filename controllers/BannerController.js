const Banner = require("../models/Banner");
const conn = require("../configs/dbmysql");
const BannerController = {
  index: (req, res) => {
    Banner.getAll((data) => {
      if (data == null) {
        return res.status(200).json({
          banner: null,
          status: false,
          message: "Không tìm thấy dữ liệu",
        });
      } else {
        return res.status(200).json({
          banner: data,
          status: true,
          message: "Lấy dữ liệu thành công",
        });
      }
    });
  },

  list: async (req, res) => {
    try {
      const position = req.params.position;
      await Banner.getList(position, function (banners) {
        if (banners == null) {
          const result = {
            banners: null,
            status: false,
            message: "Không tìm thấy thông tin!",
          };
          return res.status(200).json(result);
        } else {
          const result = {
            banners: banners,
            status: true,
            message: "Tải dữ liệu thành công!",
          };
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      const result = {
        banners: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  show: async (req, res) => {
    try {
      const id = req.params.id;
      await Banner.getById(id, function (banner) {
        if (banner == null) {
          const result = {
            banner: null,
            status: false,
            message: "Không tìm thấy dữ liệu!",
          };
          return res.status(200).json(result);
        } else {
          const result = {
            banner: banner,
            status: true,
            message: "Tải dữ liệu thành công!",
          };
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      const result = {
        banner: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  store: async (req, res) => {
    const formBody = req.body;
    let d = new Date();
    let imageNameStore = null;
    if (req.files && req.files.image) {
      let image = req.files.image;
      image.mv(
        "./assets/images/banners/" + image.name,
        function (err, result) {
          if (err) throw err;
        }
      );
      imageNameStore = image.name;
    }
    //Lấy dũ liệu form
    const banner = {
      name: formBody.name,
      link: formBody.link,
      sort_order: formBody.sort_order,
      image: imageNameStore,
      position: formBody.position,
      status: formBody.status,
      created_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
    };
    await Banner.store(banner, function (data, status) {
      //data thứ mà nó trả về
      if (status == true) {
        return res.status(200).json({
          banner: data,
          status: true,
          message: "Thêm thành công",
        });
      } else {
        return res.status(200).json({
          banner: null,
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
      image.mv("./assets/images/banners/" + image.name, function (err, result) {
        if (err) throw err;
      });
      imageName = image.name;
    }
      let d = new Date();
      //object data to store
      const data = {
        name: bodyData.name,
        link: bodyData.link,
        sort_order: bodyData.sort_order,
        image: imageName,
        position: bodyData.position,
        status: bodyData.status,
        updated_by: 1,
        updated_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
      };
      await Banner.update(data, id, function (banner) {
        const result = {
          banner: banner,
          status: true,
          message: "Cập nhật dữ liệu thành công!",
        };
        return res.status(200).json(result);
      });
    } catch (error) {
      const result = {
        banner: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },


  delete: async (req, res) => {
    try {
      const id = req.params.id;
      await Banner.delete(id, function (banner) {
        const result = {
          banner: banner,
          status: true,
          message: "Xóa mẫu tin thành công!",
        };
        return res.status(200).json(result);
      });
    } catch (error) {
      const result = {
        banner: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },
  
};

module.exports = BannerController;
