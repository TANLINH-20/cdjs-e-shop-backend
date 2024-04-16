const Menu = require('../models/Menu');
const conn = require("../configs/dbmysql");
const MenuController = {
    index: (req, res) => {
      Menu.getAll((data) => {
         if (data == null) {
           return res.status(200).json({
             menu: null,
             status: false,
             message: "Không tìm thấy dữ liệu",
           });
         } else {
           return res.status(200).json({
             menu: data,
             status: true,
             message: "Lấy dữ liệu thành công",
           });
         }
       });
    },

    list: async (req, res) => {
      try {
         const parentid = req.params.parentid;
         const position = req.params.position;
         const level = req.params.level;
         await Menu.getList(parentid, position,level, function (menus) {
            if (menus == null) {
               const result = {
                  menus: null,
                  status: false,
                  message: "Không tìm thấy thông tin!",
               };
               return res.status(200).json(result);
            } else {
               const result = {
                  menus: menus,
                  status: true,
                  message: "Tải dữ liệu thành công!",
               };
               return res.status(200).json(result);
            }
         });
      } catch (error) {
         const result = {
            menus: null,
            status: false,
            message: error.message,
         };
         return res.status(200).json(result);
      }
   },

   show: async (req, res) => {
      try {
        const id = req.params.id;
        await Menu.getById(id, function (menu) {
          if (menu == null) {
            const result = {
              menu: null,
              status: false,
              message: "Không tìm thấy dữ liệu!",
            };
            return res.status(200).json(result);
          } else {
            const result = {
              menu: menu,
              status: true,
              message: "Tải dữ liệu thành công!",
            };
            return res.status(200).json(result);
          }
        });
      } catch (error) {
        const result = {
          menu: null,
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
      const menu = {
        name: formBody.name,
        link: formBody.link,
        type: formBody.type,
        position: formBody.position,
        level: formBody.level,
        parent_id: formBody.parent_id,
        sort_order: formBody.sort_order,
        status: formBody.status,
        created_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
      };
      Menu.store(menu, function (data, status) {
        //data thứ mà nó trả về
        if (status == true) {
          return res.status(200).json({
            menu: data,
            status: true,
            message: "Thêm thành công",
          });
        } else {
          return res.status(200).json({
            menu: null,
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
         link: bodyData.link,
         type: bodyData.type,
         position: bodyData.position,
         level: bodyData.level,
         parent_id: bodyData.parent_id,
         sort_order: bodyData.sort_order,
         status: bodyData.status,
          updated_by: 1,
          updated_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
        };
        await Menu.update(data, id, function (menu) {
          const result = {
            menu: menu,
            status: true,
            message: "Cập nhật dữ liệu thành công!",
          };
          return res.status(200).json(result);
        });
      } catch (error) {
        const result = {
          menu: null,
          status: false,
          message: error.message,
        };
        return res.status(200).json(result);
      }
    },
  
    delete: async (req, res) => {
      try {
        const id = req.params.id;
        await Menu.delete(id, function (menu) {
          const result = {
            menu: menu,
            status: true,
            message: "Xóa mẫu tin thành công!",
          };
          return res.status(200).json(result);
        });
      } catch (error) {
        const result = {
          menu: null,
          status: false,
          message: error.message,
        };
        return res.status(200).json(result);
      }
    },
 }; 

module.exports = MenuController;