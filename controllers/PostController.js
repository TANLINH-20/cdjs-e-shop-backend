const Post = require("../models/Post");
const conn = require("../configs/dbmysql");
const convertSlug = require("../utils/convertSlug");
const PostController = {
  index: (req, res) => {
    Post.getAll((data) => {
      if (data == null) {
        return res.status(200).json({
          post: null,
          status: false,
          message: "Không tìm thấy dữ liệu",
        });
      } else {
        return res.status(200).json({
          post: data,
          status: true,
          message: "Lấy dữ liệu thành công",
        });
      }
    });
  },

  listbytype: async (req, res) => {
    try {
      const type = req.params.type;
      await Post.getListByType(type, function (post) {
        if (post == null) {
          const result = {
            post: null,
            status: false,
            message: "Không tìm thấy thông tin!",
          };
          return res.status(200).json(result);
        } else {
          const result = {
            post: post,
            status: true,
            message: "Tải dữ liệu thành công!",
          };
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      const result = {
        post: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  list: async (req, res) => {
    try {
      const type = req.params.type;
      const page = req.params.page;
      const limit = req.params.limit;
      //Xử lý page
      let offset = (page - 1) * limit;
      //
      await Post.getList(type,limit, offset, function (post) {
        if (post == null) {
          const result = {
            post: null,
            status: false,
            message: "Không tìm thấy thông tin!",
          };
          return res.status(200).json(result);
        } else {
          const result = {
            post: post,
            status: true,
            message: "Tải dữ liệu thành công!",
          };
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      const result = {
        post: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  postdetail: async (req, res) => {
    try {
      const slug = req.params.slug;
      const limit = req.params.limit;
      await Post.getBySlug(slug, function (post) {
        if (post == null) {
          const result = {
            post: null,
            status: false,
            message: "Không tìm thấy thông tin!",
          };
          return res.status(200).json(result);
        } else {
          Post.getListPostOther(
            post.topic_id,
            post.id,
            limit,
            function (posts) {
              const result = {
                post: post,
                posts: posts,
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

  listbytopicid: async (req, res) => {
    try {
      const topicid = req.params.topicid;
      await Post.getByTopicId(topicid, function (post) {
        if (post == null) {
          const result = {
            post: null,
            status: false,
            message: "Không tìm thấy thông tin!",
          };
          return res.status(200).json(result);
        }else {
          const result = {
            post: post,
            status: true,
            message: "Tải dữ liệu thành công!",
          };
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      const result = {
        post: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  
  listpostpage: async (req, res) => {
    try {
      const topicid = req.params.topicid;
      const page = req.params.page;
      const limit = req.params.limit;
      //Xử lý page
      let offset = (page - 1) * limit;
      //
      await Post.getpostpage(
        topicid,
        limit,
        offset,
        function (post) {
          if (post == null) {
            const result = {
              post: null,
              status: false,
              message: "Không tìm thấy thông tin!",
            };
            return res.status(200).json(result);
          } else {
            const result = {
              post: post,
              status: true,
              message: "Tải dữ liệu thành công!",
            };
            return res.status(200).json(result);
          }
        }
      );
    } catch (error) {
      const result = {
        post: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  pagedetail: async (req, res) => {
    try {
      const slug = req.params.slug;
      await Post.getBySlug(slug, function (post) {
        if (post == null) {
          const result = {
            post: null,
            status: false,
            message: "Không tìm thấy thông tin!",
          };
          return res.status(200).json(result);
        }else {
          const result = {
            post: post,
            status: true,
            message: "Tải dữ liệu thành công!",
          };
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      const result = {
        post: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  listnew: async (req, res) => {
    try {
      const type = req.params.type;
      const limit = req.params.limit;
      //
      await Post.getListNew(type,limit, function (post) {
        if (post == null) {
          const result = {
            post: null,
            status: false,
            message: "Không tìm thấy thông tin!",
          };
          return res.status(200).json(result);
        } else {
          const result = {
            post: post,
            status: true,
            message: "Tải dữ liệu thành công!",
          };
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      const result = {
        post: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  show: async (req, res) => {
    try {
      const id = req.params.id;
      await Post.getById(id, function (post) {
        if (post == null) {
          const result = {
            post: null,
            status: false,
            message: "Không tìm thấy dữ liệu!",
          };
          return res.status(200).json(result);
        } else {
          const result = {
            post: post,
            status: true,
            message: "Tải dữ liệu thành công!",
          };
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      const result = {
        post: null,
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
      image.mv("./assets/images/post/" + image.name, function (err, result) {
        if (err) throw err;
      });
      imageNameStore = image.name;
    }
    //Lấy dũ liệu form
    const post = {
      title: formBody.title,
      topic_id: formBody.topic_id,
      image: imageNameStore,
      detail: formBody.detail,
      type: formBody.type,
      description: formBody.description,
      status: formBody.status,
      slug: convertSlug(formBody.title),
      created_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
    };
    Post.store(post, function (data, status) {
      //data thứ mà nó trả về
      if (status == true) {
        return res.status(200).json({
          post: data,
          status: true,
          message: "Thêm thành công",
        });
      } else {
        return res.status(200).json({
          post: null,
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
        image.mv("./assets/images/post/" + image.name, function (err, result) {
          if (err) throw err;
        });
        imageName = image.name;
      }
      let d = new Date();
      //object data to store
      const data = {
        title: bodyData.title,
        topic_id: bodyData.topic_id,
        image: imageName,
        detail: bodyData.detail,
        type: bodyData.type,
        description: bodyData.description,
        status: bodyData.status,
        slug: convertSlug(bodyData.title),
        updated_by: 1,
        updated_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
      };
      await Post.update(data, id, function (post) {
        const result = {
          post: post,
          status: true,
          message: "Cập nhật dữ liệu thành công!",
        };
        return res.status(200).json(result);
      });
    } catch (error) {
      const result = {
        post: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      await Post.delete(id, function (post) {
        const result = {
          post: post,
          status: true,
          message: "Xóa mẫu tin thành công!",
        };
        return res.status(200).json(result);
      });
    } catch (error) {
      const result = {
        post: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },
};

module.exports = PostController;
