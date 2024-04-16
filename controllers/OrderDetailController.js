const OrderDetail = require('../models/OrderDetail');
const conn = require("../configs/dbmysql");
const OrderDetailController = {
    index: (req, res) => {
      OrderDetail.getAll((data) => {
         if (data == null) {
           return res.status(200).json({
             orderdetail: null,
             status: false,
             message: "Không tìm thấy dữ liệu",
           });
         } else {
           return res.status(200).json({
             orderdetail: data,
             status: true,
             message: "Lấy dữ liệu thành công",
           });
         }
       });
    },

    show: async (req, res) => {
      try {
        const id = req.params.id;
        await OrderDetail.getById(id, function (orderdetail) {
          if (orderdetail == null) {
            const result = {
              orderdetail: null,
              status: false,
              message: "Không tìm thấy dữ liệu!",
            };
            return res.status(200).json(result);
          } else {
            const result = {
              orderdetail: orderdetail,
              status: true,
              message: "Tải dữ liệu thành công!",
            };
            return res.status(200).json(result);
          }
        });
      } catch (error) {
        const result = {
          orderdetail: null,
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
      const orderdetail = {
        order_id: formBody.	order_id,
        product_id: formBody.product_id,
        price: formBody.price,
        qty: formBody.qty,
        amount: formBody.amount,
        created_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
      };
      OrderDetail.store(orderdetail, function (data, status) {
        //data thứ mà nó trả về
        if (status == true) {
          return res.status(200).json({
            orderdetail: data,
            status: true,
            message: "Thêm thành công",
          });
        } else {
          return res.status(200).json({
            orderdetail: null,
            status: false,
            message: "Thêm thất bại",
          });
        }
      });
    },
  
    edit: async (req, res) => {
      // try {
      //   const id = req.params.id;
      //   let bodyData = req.body;
      //   let imageName = null;
      //   if (req.files && req.files.image) {
      //     let image = req.files.image;
      //     image.mv(
      //       "./assets/images/categories/" + image.name,
      //       function (err, result) {
      //         if (err) throw err;
      //       }
      //     );
      //     imageName = image.name;
      //   }
      //   let d = new Date();
      //   //object data to store
      //   const data = {
      //     name: bodyData.name,
      //     slug: convertSlug(bodyData.name),
      //     description: bodyData.description,
      //     image: image.name,
      //     sort_order: bodyData.sort_order,
      //     parent_id: bodyData.parent_id,
      //     status: bodyData.status,
      //     updated_by: 1,
      //     updated_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
      //   };
      //   await orderdetail.update(data, id, function (orderdetail) {
      //     const result = {
      //       orderdetail: orderdetail,
      //       status: true,
      //       message: "Cập nhật dữ liệu thành công!",
      //     };
      //     return res.status(200).json(result);
      //   });
      // } catch (error) {
      //   const result = {
      //     orderdetail: null,
      //     status: false,
      //     message: error.message,
      //   };
      //   return res.status(200).json(result);
      // }
    },
  
    delete: async (req, res) => {
      try {
        const id = req.params.id;
        await OrderDetail.delete(id, function (orderdetail) {
          const result = {
            orderdetail: orderdetail,
            status: true,
            message: "Xóa mẫu tin thành công!",
          };
          return res.status(200).json(result);
        });
      } catch (error) {
        const result = {
          orderdetail: null,
          status: false,
          message: error.message,
        };
        return res.status(200).json(result);
      }
    },
    
 }; 

module.exports = OrderDetailController;