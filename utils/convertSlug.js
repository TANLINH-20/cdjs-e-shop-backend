const unidecode = require('unidecode');
function convertSlug(name) {
  name = unidecode(name); // chuyển Tiếng Việt có dấu thành không dấu
  // Đổi chữ hoa thành chữ thường
  let slug = name.toLowerCase();

  // Đổi khoảng trắng thành ký tự gạch ngang
  slug = slug.replace(/ /g, "-");

  // Xóa các ký tự đặc biệt khác
  slug = slug.replace(/[^a-z0-9-]/g, "");

  return slug;
}

module.exports = convertSlug;
