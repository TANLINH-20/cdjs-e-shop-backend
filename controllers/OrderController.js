const Order = require('../models/Order');
const conn = require("../configs/dbmysql");
const OrderController = {
    index: (req, res) => {
      Order.getAll((data) => {
         if (data == null) {
           return res.status(200).json({
             order: null,
             status: false,
             message: "Không tìm thấy dữ liệu",
           });
         } else {
           return res.status(200).json({
             order: data,
             status: true,
             message: "Lấy dữ liệu thành công",
           });
         }
       });
    },

    showlatest: (req, res) => {
      Order.getlatest((data) => {
         if (data == null) {
           return res.status(200).json({
             order: null,
             status: false,
             message: "Không tìm thấy dữ liệu",
           });
         } else {
           return res.status(200).json({
             order: data,
             status: true,
             message: "Lấy dữ liệu thành công",
           });
         }
       });
    },

    show: async (req, res) => {
      try {
        const id = req.params.id;
        await Order.getById(id, function (order) {
          if (order == null) {
            const result = {
              order: null,
              status: false,
              message: "Không tìm thấy dữ liệu!",
            };
            return res.status(200).json(result);
          } else {
            const result = {
              order: order,
              status: true,
              message: "Tải dữ liệu thành công!",
            };
            return res.status(200).json(result);
          }
        });
      } catch (error) {
        const result = {
          order: null,
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
      const order = {
        user_id: formBody.user_id,
        deliveryaddress: formBody.deliveryaddress,
        deliveryname: formBody.deliveryname,
        deliveryphone: formBody.deliveryphone,
        deliveryemail: formBody.deliveryemail,
        note: formBody.note,
        status: formBody.status,
        created_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
      };
      Order.store(order, function (data, status) {
        //data thứ mà nó trả về
        if (status == true) {
          return res.status(200).json({
            order: data,
            status: true,
            message: "Thêm thành công",
          });
        } else {
          return res.status(200).json({
            order: null,
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
      //   await Order.update(data, id, function (order) {
      //     const result = {
      //       order: order,
      //       status: true,
      //       message: "Cập nhật dữ liệu thành công!",
      //     };
      //     return res.status(200).json(result);
      //   });
      // } catch (error) {
      //   const result = {
      //     order: null,
      //     status: false,
      //     message: error.message,
      //   };
      //   return res.status(200).json(result);
      // }
    },

    delete: async (req, res) => {
      try {
        const id = req.params.id;
        await Order.delete(id, function (order) {
          const result = {
            order: order,
            status: true,
            message: "Xóa mẫu tin thành công!",
          };
          return res.status(200).json(result);
        });
      } catch (error) {
        const result = {
          order: null,
          status: false,
          message: error.message,
        };
        return res.status(200).json(result);
      }
    },
    
 }; 

module.exports = OrderController;