const Product = require("../models/Product");
const conn = require("../configs/dbmysql");
const convertSlug = require("../utils/convertSlug");
const ProductController = {
  index: (req, res) => {
    Product.getAll((data) => {
      if (data == null) {
        return res.status(200).json({
          products: null,
          status: false,
          message: "Không tìm thấy dữ liệu",
        });
      } else {
        return res.status(200).json({
          products: data,
          status: true,
          message: "Lấy dữ liệu thành công",
        });
      }
    });
  },

  show: async (req, res) => {
    try {
      const id = req.params.id;
      await Product.getById(id, function (product) {
        if (product == null) {
          const result = {
            product: null,
            status: false,
            message: "Không tìm thấy dữ liệu!",
          };
          return res.status(200).json(result);
        } else {
          const result = {
            product: product,
            status: true,
            message: "Tải dữ liệu thành công!",
          };
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      const result = {
        product: null,
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
      image.mv(
        "./assets/images/products/" + image.name,
        function (err, result) {
          if (err) throw err;
        }
      );
      imageNameStore = image.name;
    }
    //Lấy dũ liệu form
    const product = {
      category_id: formBody.category_id,
      brand_id: formBody.brand_id,
      name: formBody.name,
      image: imageNameStore,
      detail: formBody.detail,
      qty: formBody.qty,
      price: formBody.price,
      pricesale: formBody.pricesale,
      description: formBody.description,
      status: formBody.status,
      slug: convertSlug(formBody.name),
      created_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
    };
    Product.store(product, function (data, status) {
      //data thứ mà nó trả về
      if (status == true) {
        return res.status(200).json({
          products: data,
          status: true,
          message: "Thêm thành công",
        });
      } else {
        return res.status(200).json({
          products: null,
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
        image.mv(
          "./assets/images/products/" + image.name,
          function (err, result) {
            if (err) throw err;
          }
        );
        imageName = image.name;
      }
      let d = new Date();
      //object data to store
      const data = {
        category_id: bodyData.category_id,
        brand_id: bodyData.brand_id,
        name: bodyData.name,
        image: imageName,
        detail: bodyData.detail,
        qty: bodyData.qty,
        price: bodyData.price,
        pricesale: bodyData.pricesale,
        description: bodyData.description,
        status: bodyData.status,
        slug: convertSlug(bodyData.name),
        updated_by: 1,
        updated_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
      };
      await Product.update(data, id, function (product) {
        const result = {
          products: product,
          status: true,
          message: "Cập nhật dữ liệu thành công!",
        };
        return res.status(200).json(result);
      });
    } catch (error) {
      const result = {
        products: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      await Product.delete(id, function (product) {
        const result = {
          products: product,
          status: true,
          message: "Xóa mẫu tin thành công!",
        };
        return res.status(200).json(result);
      });
    } catch (error) {
      const result = {
        products: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },
  

  listnew: async (req, res) => {
    try {
      const limit = req.params.limit;
      //
      await Product.getListNew(limit, function (products) {
        if (products == null) {
          const result = {
            products: null,
            status: false,
            message: "Không tìm thấy thông tin!",
          };
          return res.status(200).json(result);
        } else {
          const result = {
            products: products,
            status: true,
            message: "Tải dữ liệu thành công!",
          };
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      const result = {
        products: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  listsale: async (req, res) => {
    try {
      const limit = req.params.limit;
      //
      await Product.getListSale(limit, function (products) {
        if (products == null) {
          const result = {
            products: null,
            status: false,
            message: "Không tìm thấy thông tin!",
          };
          return res.status(200).json(result);
        } else {
          const result = {
            products: products,
            status: true,
            message: "Tải dữ liệu thành công!",
          };
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      const result = {
        products: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  list_category: async (req, res) => {
    try {
      const categoryid = req.params.categoryid;
      await Product.getListByCategory(categoryid, function (products) {
        if (products == null) {
          const result = {
            products: null,
            status: false,
            message: "Không tìm thấy thông tin!",
          };
          return res.status(200).json(result);
        } else {
          const result = {
            products: products,
            status: true,
            message: "Tải dữ liệu thành công!",
          };
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      const result = {
        products: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  list_product_search: async (req, res) => {
    try {
      const keyword = req.params.keyword;
      await Product.getSearchAll(keyword, function (products) {
        if (products == null) {
          const result = {
            products: null,
            status: false,
            message: "Không tìm thấy thông tin!",
          };
          return res.status(200).json(result);
        } else {
          const result = {
            products: products,
            status: true,
            message: "Tải dữ liệu thành công!",
          };
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      const result = {
        products: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  list_product_search_by_page: async (req, res) => {
    try {
      const keyword = req.params.keyword;
      const page = req.params.page;
      const limit = req.params.limit;
      //Xử lý page
      let offset = (page - 1) * limit;
      //
      await Product.getListProductSearch(
        keyword,
        limit,
        offset,
        function (products) {
          if (products == null) {
            const result = {
              products: null,
              status: false,
              message: "Không tìm thấy thông tin!",
            };
            return res.status(200).json(result);
          } else {
            const result = {
              products: products,
              status: true,
              message: "Tải dữ liệu thành công!",
            };
            return res.status(200).json(result);
          }
        }
      );
    } catch (error) {
      const result = {
        products: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  list_brand: async (req, res) => {
    try {
      const brandid = req.params.brandid;
      await Product.getListByBrand(brandid, function (products) {
        if (products == null) {
          const result = {
            products: null,
            status: false,
            message: "Không tìm thấy thông tin!",
          };
          return res.status(200).json(result);
        } else {
          const result = {
            products: products,
            status: true,
            message: "Tải dữ liệu thành công!",
          };
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      const result = {
        products: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  list: async (req, res) => {
    try {
      const page = req.params.page;
      const limit = req.params.limit;
      //Xử lý page
      let offset = (page - 1) * limit;
      //
      await Product.getList(limit, offset, function (products) {
        if (products == null) {
          const result = {
            products: null,
            status: false,
            message: "Không tìm thấy thông tin!",
          };
          return res.status(200).json(result);
        } else {
          const result = {
            products: products,
            status: true,
            message: "Tải dữ liệu thành công!",
          };
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      const result = {
        products: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  list_product_category: async (req, res) => {
    try {
      const categoryid = req.params.categoryid;
      const page = req.params.page;
      const limit = req.params.limit;
      //Xử lý page
      let offset = (page - 1) * limit;
      //
      await Product.getListProductCategory(
        categoryid,
        limit,
        offset,
        function (products) {
          if (products == null) {
            const result = {
              products: null,
              status: false,
              message: "Không tìm thấy thông tin!",
            };
            return res.status(200).json(result);
          } else {
            const result = {
              products: products,
              status: true,
              message: "Tải dữ liệu thành công!",
            };
            return res.status(200).json(result);
          }
        }
      );
    } catch (error) {
      const result = {
        products: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  list_product_brand: async (req, res) => {
    try {
      const brandid = req.params.brandid;
      const page = req.params.page;
      const limit = req.params.limit;
      //Xử lý page
      let offset = (page - 1) * limit;
      //
      await Product.getListProductBrand(
        brandid,
        limit,
        offset,
        function (products) {
          if (products == null) {
            const result = {
              products: null,
              status: false,
              message: "Không tìm thấy thông tin!",
            };
            return res.status(200).json(result);
          } else {
            const result = {
              products: products,
              status: true,
              message: "Tải dữ liệu thành công!",
            };
            return res.status(200).json(result);
          }
        }
      );
    } catch (error) {
      const result = {
        products: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  productdetail: async (req, res) => {
    try {
      const slug = req.params.slug;
      const limit = req.params.limit;
      await Product.getBySlug(slug, function (product) {
        if (product == null) {
          const result = {
            product: null,
            status: false,
            message: "Không tìm thấy thông tin!",
          };
          return res.status(200).json(result);
        } else {
          Product.getListProductOther(
            product.category_id,
            product.id,
            limit,
            function (products) {
              const result = {
                product: product,
                products: products,
                status: true,
                message: "Tải dữ liệu thành công!",
              };
              return res.status(200).json(result);
            }
          );
        }
      });
    } catch (error) {
      const result = {
        products: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },
};

module.exports = ProductController;
