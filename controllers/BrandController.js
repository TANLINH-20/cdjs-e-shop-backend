const Brand = require("../models/Brand");
const conn = require("../configs/dbmysql");
const convertSlug = require("../utils/convertSlug");
const BrandController = {
  index: (req, res) => {
    Brand.getAll((data) => {
      if (data == null) {
        return res.status(200).json({
          brand: null,
          status: false,
          message: "Không tìm thấy dữ liệu",
        });
      } else {
        return res.status(200).json({
          brand: data,
          status: true,
          message: "Lấy dữ liệu thành công",
        });
      }
    });
  },

  show_name: async (req, res) => {
    try {
      const slug = req.params.slug;
      await Brand.getBySlug(slug, function (brand) {
        if (brand == null) {
          const result = {
            brand: null,
            status: false,
            message: "Không tìm thấy dữ liệu!",
          };
          return res.status(200).json(result);
        } else {
          const result = {
            brand: brand,
            status: true,
            message: "Tải dữ liệu thành công!",
          };
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      const result = {
        brand: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  show: async (req, res) => {
    try {
      const id = req.params.id;
      await Brand.getById(id, function (brand) {
        if (brand == null) {
          const result = {
            brand: null,
            status: false,
            message: "Không tìm thấy dữ liệu!",
          };
          return res.status(200).json(result);
        } else {
          const result = {
            brand: brand,
            status: true,
            message: "Tải dữ liệu thành công!",
          };
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      const result = {
        brand: null,
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
      image.mv("./assets/images/brand/" + image.name, function (err, result) {
        if (err) throw err;
      });
      imageNameStore = image.name;
    }
    //Lấy dũ liệu form
    const brand = {
      name: formBody.name,
      sort_order: formBody.sort_order,
      image: imageNameStore,
      description: formBody.description,
      status: formBody.status,
      slug: convertSlug(formBody.name),
      created_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
    };
    Brand.store(brand, function (data, status) {
      //data thứ mà nó trả về
      if (status == true) {
        return res.status(200).json({
          brand: data,
          status: true,
          message: "Thêm thành công",
        });
      } else {
        return res.status(200).json({
          brand: null,
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
        image.mv("./assets/images/brand/" + image.name, function (err, result) {
          if (err) throw err;
        });
        imageName = image.name;
      }
      let d = new Date();
      //object data to store
      const data = {
        name: bodyData.name,
        slug: convertSlug(bodyData.name),
        description: bodyData.description,
        image: imageName,
        sort_order: bodyData.sort_order,
        status: bodyData.status,
        updated_by: 1,
        updated_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
      };
      await Brand.update(data, id, function (brand) {
        const result = {
          brand: brand,
          status: true,
          message: "Cập nhật dữ liệu thành công!",
        };
        return res.status(200).json(result);
      });
    } catch (error) {
      const result = {
        brand: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      await Brand.delete(id, function (brand) {
        const result = {
          brand: brand,
          status: true,
          message: "Xóa mẫu tin thành công!",
        };
        return res.status(200).json(result);
      });
    } catch (error) {
      const result = {
        brands: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },
};

module.exports = BrandController;
