-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 16, 2024 at 07:47 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ccq2211k_cdjs`
--

-- --------------------------------------------------------

--
-- Table structure for table `db_banner`
--

CREATE TABLE `db_banner` (
  `id` int(10) UNSIGNED NOT NULL COMMENT 'Mã Slider',
  `name` varchar(255) NOT NULL COMMENT 'Tên Slider',
  `link` varchar(255) NOT NULL COMMENT 'Liên kết',
  `position` varchar(100) NOT NULL COMMENT 'Vị trí',
  `image` varchar(100) NOT NULL COMMENT 'Hình ảnh',
  `sort_order` int(10) UNSIGNED NOT NULL COMMENT 'Thứ tự',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT 'Ngày tạo',
  `created_by` tinyint(3) UNSIGNED NOT NULL DEFAULT 1 COMMENT 'Người tạo',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT 'Ngày sửa',
  `updated_by` tinyint(3) UNSIGNED NOT NULL DEFAULT 1 COMMENT 'Người sửa',
  `status` tinyint(3) UNSIGNED DEFAULT 2 COMMENT 'Trạng thái'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `db_banner`
--

INSERT INTO `db_banner` (`id`, `name`, `link`, `position`, `image`, `sort_order`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(1, 'Khuyễn mãi hè 2020', '', 'slideshow', '1.jpg', 1, '2020-06-30 17:12:13', 1, '2024-03-04 06:32:38', 1, 1),
(2, 'Khuyễn mãi mùa khai giảng', '', 'slideshow', '2.jpg', 2, '2020-06-30 17:12:13', 1, '2024-03-04 06:40:21', 1, 1),
(3, 'Khuyễn mãi giáng sinh', '', 'slideshow', '3.jpg', 3, '2020-06-30 17:12:13', 1, '2024-03-04 06:45:01', 1, 1),
(4, 'Khuyễn mãi Covid', '', 'slideshow', 'slider_1.webp', 4, '2020-06-30 17:12:13', 1, '2024-03-04 14:33:19', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `db_brand`
--

CREATE TABLE `db_brand` (
  `id` int(11) NOT NULL COMMENT 'Mã Loại',
  `name` varchar(255) NOT NULL COMMENT 'Tên loại SP',
  `slug` varchar(255) NOT NULL COMMENT 'SLug Loại SP',
  `sort_order` int(11) NOT NULL DEFAULT 1 COMMENT 'Thứ tự',
  `image` varchar(255) DEFAULT '' COMMENT 'Hình đại diện',
  `description` varchar(255) DEFAULT NULL COMMENT 'Từ khóa SEO',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT 'Ngày tạo',
  `created_by` tinyint(4) NOT NULL DEFAULT 0 COMMENT 'Người tạo',
  `updated_at` timestamp NULL DEFAULT NULL COMMENT 'Ngày sửa',
  `updated_by` tinyint(4) DEFAULT NULL COMMENT 'Người sửa',
  `status` tinyint(4) NOT NULL DEFAULT 2 COMMENT 'Trạng thái'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `db_brand`
--

INSERT INTO `db_brand` (`id`, `name`, `slug`, `sort_order`, `image`, `description`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(1, 'Việt Nam', 'viet-nam', 0, '', 'Từ khóa SEO', '2023-10-29 13:03:59', 1, '2023-10-29 13:47:50', 7, 1),
(2, 'Hàn Quốc', 'han-quoc', 0, '', 'Từ khóa SEO', '2023-10-29 13:04:02', 1, '2023-10-29 13:06:49', 1, 1),
(3, 'Thái Lan', 'thai-lan', 0, '', 'Từ khóa SEO', '2023-10-29 13:03:07', 1, '2023-11-14 05:26:08', 7, 0),
(4, 'Nhật Bản', 'nhat-ban', 0, '', 'Từ khóa SEO', '2023-10-29 13:00:56', 1, '2023-11-14 05:26:14', 7, 0),
(5, 'Quảng Châu', 'quang-chau', 0, '', 'Từ khóa SEO', '2020-07-03 02:06:19', 1, '2023-11-14 05:26:12', 7, 0);

-- --------------------------------------------------------

--
-- Table structure for table `db_category`
--

CREATE TABLE `db_category` (
  `id` int(11) NOT NULL COMMENT 'Mã Loại',
  `name` varchar(255) NOT NULL COMMENT 'Tên loại SP',
  `slug` varchar(255) NOT NULL COMMENT 'SLug Loại SP',
  `parent_id` int(11) NOT NULL DEFAULT 0 COMMENT 'Mã cấp cha',
  `sort_order` int(11) NOT NULL COMMENT 'Thứ tự',
  `image` varchar(255) DEFAULT NULL COMMENT 'Hình đại diện',
  `description` varchar(255) NOT NULL COMMENT 'Từ khóa SEO',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT 'Ngày tạo',
  `created_by` tinyint(4) NOT NULL DEFAULT 0 COMMENT 'Người tạo',
  `updated_at` datetime DEFAULT current_timestamp() COMMENT 'Ngày sửa',
  `updated_by` tinyint(4) DEFAULT 0 COMMENT 'Người sửa',
  `status` tinyint(4) NOT NULL DEFAULT 2 COMMENT 'Trạng thái'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `db_category`
--

INSERT INTO `db_category` (`id`, `name`, `slug`, `parent_id`, `sort_order`, `image`, `description`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(1, 'Đồ nam', 'do-nam', 0, 0, 'thoi-trang-nam.png', 'Đồ nam', '2022-11-22 18:17:31', 1, '2023-10-29 22:08:52', 7, 1),
(2, 'Đồ nữ', 'do-nu', 0, 0, 'thoi-trang-nu.png', 'Đồ nữ', '2022-11-22 18:18:00', 1, '2022-11-22 18:18:00', 0, 1),
(3, 'Áo thun nam', 'ao-thun-nam', 1, 0, NULL, 'Áo thun nam', '2022-11-22 18:18:27', 1, '2022-11-22 18:18:27', 0, 1),
(4, 'Áo sơ mi nam', 'ao-so-mi-nam', 1, 0, NULL, 'Áo sơ mi nam', '2022-11-22 18:18:53', 1, '2022-11-22 18:18:53', 0, 1),
(5, 'Quần short nam', 'quan-short-nam', 1, 0, NULL, 'Quần short nam', '2022-11-22 18:19:32', 1, '2022-11-22 18:19:32', 0, 1),
(6, 'Quần dài nam', 'quan-dai-nam', 1, 0, NULL, 'Quần dài nam', '2022-11-22 18:19:57', 1, '2022-11-22 18:19:57', 0, 1),
(7, 'Áo thun nữ', 'ao-thun-nu', 2, 0, NULL, 'Áo thun nữ', '2022-11-22 18:21:27', 1, '2022-11-22 18:21:27', 0, 1),
(8, 'Áo sơ mi nữ', 'ao-so-mi-nu', 2, 0, NULL, 'Áo sơ mi nữ', '2022-11-22 18:21:43', 1, '2022-11-22 18:21:43', 0, 1),
(9, 'Áo kiểu', 'ao-kieu', 2, 0, NULL, 'Áo kiểu', '2022-11-22 18:22:00', 1, '2022-11-22 18:22:00', 0, 1),
(10, 'Quần short nữ', 'quan-short-nu', 2, 0, NULL, 'Quần short nữ', '2022-11-22 18:22:14', 1, '2022-11-22 18:22:14', 0, 1),
(11, 'Quần dài nữ', 'quan-dai-nu', 2, 0, NULL, 'Quần dài nữ', '2022-11-22 18:22:48', 1, '2022-11-22 18:22:48', 0, 1),
(12, 'Chân váy', 'chan-vay', 2, 0, NULL, 'Chân váy', '2022-11-22 18:23:07', 1, '2024-04-10 12:05:54', 1, 1),
(13, 'Đầm', 'dam', 2, 0, NULL, 'Đầm', '2022-11-22 18:23:20', 1, '2024-03-04 15:21:04', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_contact`
--

CREATE TABLE `db_contact` (
  `id` int(11) NOT NULL COMMENT 'Mã liên hệ',
  `name` varchar(255) NOT NULL COMMENT 'Họ và tên',
  `email` varchar(100) NOT NULL COMMENT 'Email',
  `phone` varchar(100) NOT NULL COMMENT 'Điện thoại',
  `title` varchar(255) NOT NULL COMMENT 'Tiêu đề',
  `content` mediumtext NOT NULL COMMENT 'Chi tiết',
  `replay_id` int(10) UNSIGNED DEFAULT NULL COMMENT 'Nội dung liên hệ',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT 'Ngày liên hệ',
  `updated_at` timestamp NULL DEFAULT current_timestamp() COMMENT 'Ngày trả lời',
  `updated_by` tinyint(4) DEFAULT 0 COMMENT 'Người trả lời',
  `status` tinyint(4) NOT NULL DEFAULT 0 COMMENT 'Tráng thái'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `db_contact`
--

INSERT INTO `db_contact` (`id`, `name`, `email`, `phone`, `title`, `content`, `replay_id`, `created_at`, `updated_at`, `updated_by`, `status`) VALUES
(8, 'Tấn Lĩnh', 'linhnguyentan24@gmail.com', '0343970915', '', 'Hàng lỗi', NULL, '2024-04-11 08:36:19', '2024-04-11 08:36:19', 0, 1),
(9, 'Tấn Lĩnh', 'linhnguyentan24@gmail.com', '0343970915', '', 'Hàng lỗi', NULL, '2024-04-11 08:36:33', '2024-04-11 08:36:33', 0, 1),
(11, 'aa bb cc', 'linhnguyentan24@gmail.com', '0343970915', '', 'test', NULL, '2024-03-01 13:22:16', '2024-04-15 13:22:16', 0, 1),
(13, 'aa bb cc', 'linhnguyentan24@gmail.com', '0343970915', '', 'test', NULL, '2024-03-01 13:24:01', '2024-04-15 13:24:01', 0, 1),
(14, 'tấn lĩnh', 'linhnguyentan@gmail.com', '0343970915', '', 'test lần 2', NULL, '2024-03-01 13:26:01', '2024-04-15 13:26:01', 0, 1),
(15, 'Việt Nam', 'linhnguyentan24@gmail.com', '0343970915', '', 'test lần 3', NULL, '2024-03-01 13:29:23', '2024-04-15 13:29:23', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_menu`
--

CREATE TABLE `db_menu` (
  `id` int(11) NOT NULL COMMENT 'Mã Menu',
  `name` varchar(255) NOT NULL COMMENT 'Tên Menu',
  `link` varchar(255) NOT NULL COMMENT 'Liên kết',
  `type` varchar(50) NOT NULL COMMENT 'Kiểu Menu',
  `sort_order` int(11) NOT NULL DEFAULT 0 COMMENT 'Thứ tự',
  `position` varchar(255) NOT NULL COMMENT 'Vị trí',
  `level` int(10) UNSIGNED NOT NULL,
  `parent_id` int(11) NOT NULL COMMENT 'Mã cấp cha',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT 'Ngày Tạo',
  `created_by` tinyint(4) NOT NULL DEFAULT 1 COMMENT 'Người tạo',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT 'Ngày sửa',
  `updated_by` tinyint(4) NOT NULL DEFAULT 1 COMMENT 'Người sửa',
  `status` tinyint(4) NOT NULL DEFAULT 1 COMMENT 'Trạng thái'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `db_menu`
--

INSERT INTO `db_menu` (`id`, `name`, `link`, `type`, `sort_order`, `position`, `level`, `parent_id`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(1, 'Trang chủ', '/', 'custom', 0, 'mainmenu', 1, 0, '2022-11-22 05:36:05', 1, '2024-03-05 11:49:22', 1, 1),
(2, 'Liên hệ', 'lien-he', 'page', 2, 'mainmenu', 1, 0, '2022-11-22 06:13:46', 1, '0000-00-00 00:00:00', 1, 1),
(3, 'Đầm', 'danh-muc/dam', 'category', 9, 'mainmenu', 2, 14, '2022-11-22 06:14:09', 1, '0000-00-00 00:00:00', 1, 2),
(4, 'Chân váy', 'danh-muc/chan-vay', 'category', 8, 'mainmenu', 2, 14, '2022-11-22 06:14:09', 1, '0000-00-00 00:00:00', 1, 1),
(5, 'Quần dài nữ', 'danh-muc/quan-dai-nu', 'category', 7, 'mainmenu', 2, 14, '2022-11-22 06:14:09', 1, '0000-00-00 00:00:00', 1, 1),
(6, 'Quần short nữ', 'danh-muc/quan-short-nu', 'category', 6, 'mainmenu', 2, 14, '2022-11-22 06:14:09', 1, '0000-00-00 00:00:00', 1, 1),
(7, 'Áo kiểu', 'danh-muc/ao-kieu', 'category', 5, 'mainmenu', 2, 14, '2022-11-22 06:14:09', 1, '0000-00-00 00:00:00', 1, 2),
(8, 'Áo sơ mi nữ', 'danh-muc/ao-so-mi-nu', 'category', 4, 'mainmenu', 2, 14, '2022-11-22 06:14:09', 1, '0000-00-00 00:00:00', 1, 1),
(9, 'Áo thun nữ', 'danh-muc/ao-thun-nu', 'category', 3, 'mainmenu', 2, 14, '2022-11-22 06:14:09', 1, '0000-00-00 00:00:00', 1, 1),
(10, 'Quần dài nam', 'danh-muc/quan-dai-nam', 'category', 13, 'mainmenu', 2, 15, '2022-11-22 06:14:09', 1, '0000-00-00 00:00:00', 1, 1),
(11, 'Quần short nam', 'danh-muc/quan-short-nam', 'category', 12, 'mainmenu', 2, 15, '2022-11-22 06:14:09', 1, '0000-00-00 00:00:00', 1, 1),
(12, 'Áo sơ mi nam', 'danh-muc/ao-so-mi-nam', 'category', 11, 'mainmenu', 2, 15, '2022-11-22 06:14:09', 1, '0000-00-00 00:00:00', 1, 1),
(13, 'Áo thun nam', 'danh-muc/ao-thun-nam', 'category', 10, 'mainmenu', 2, 15, '2022-11-22 06:14:09', 1, '0000-00-00 00:00:00', 1, 1),
(14, 'Đồ nữ', '/', 'category', 4, 'mainmenu', 1, 0, '2022-11-22 06:14:09', 1, '0000-00-00 00:00:00', 1, 1),
(15, 'Đồ nam', '/', 'category', 3, 'mainmenu', 1, 0, '2022-11-22 06:14:09', 1, '0000-00-00 00:00:00', 1, 1),
(16, 'Giới thiệu', 'about/gioi-thieu', 'page', 1, 'footermenu', 1, 0, '2022-11-22 06:55:36', 1, '0000-00-00 00:00:00', 1, 1),
(17, 'Chính Sách Hoàn Tiền', 'about/chinh-sach-hoan-tien', 'page', 1, 'footermenu', 1, 0, '2022-11-22 06:55:36', 1, '0000-00-00 00:00:00', 1, 1),
(18, 'Chính sách bảo hành', 'about/chinh-sach-bao-hanh', 'page', 2, 'footermenu', 1, 0, '2022-11-22 06:55:36', 1, '0000-00-00 00:00:00', 1, 1),
(19, 'Chính sách đổi hàng', 'about/chinh-sach-doi-hang', 'page', 2, 'footermenu', 1, 0, '2022-11-22 06:55:36', 1, '0000-00-00 00:00:00', 1, 1),
(20, 'Quần dài nữ', 'danh-muc/quan-dai-nu', 'category', 2, 'mainmenu', 1, 0, '2023-07-31 23:16:31', 1, '0000-00-00 00:00:00', 1, 2),
(21, 'Quần short nữ', 'danh-muc/quan-short-nu', 'category', 1, 'mainmenu', 1, 0, '2023-07-31 23:16:31', 1, '0000-00-00 00:00:00', 1, 2),
(22, 'Áo kiểu', 'danh-muc/ao-kieu', 'category', 1, 'mainmenu', 1, 0, '2023-07-31 23:16:31', 1, '0000-00-00 00:00:00', 1, 2),
(23, 'Áo sơ mi nữ', 'danh-muc/ao-so-mi-nu', 'category', 1, 'mainmenu', 1, 0, '2023-07-31 23:16:31', 1, '0000-00-00 00:00:00', 1, 2),
(24, 'Áo thun nữ', 'danh-muc/ao-thun-nu', 'category', 1, 'mainmenu', 1, 0, '2023-07-31 23:16:31', 1, '0000-00-00 00:00:00', 1, 2),
(25, 'Quần short nữ', 'danh-muc/quan-short-nu', 'category', 1, 'mainmenu', 1, 0, '2023-08-17 05:53:49', 1, '0000-00-00 00:00:00', 1, 2),
(26, 'Áo kiểu', 'danh-muc/ao-kieu', 'category', 1, 'mainmenu', 1, 0, '2023-08-17 05:53:49', 1, '0000-00-00 00:00:00', 1, 2),
(27, 'Áo sơ mi nữ', 'danh-muc/ao-so-mi-nu', 'category', 1, 'mainmenu', 1, 0, '2023-08-17 05:53:49', 1, '0000-00-00 00:00:00', 1, 2),
(28, 'Áo thun nữ', 'danh-muc/ao-thun-nu', 'category', 1, 'mainmenu', 1, 0, '2023-08-17 05:53:49', 1, '0000-00-00 00:00:00', 1, 2),
(29, 'Tất cả sản phẩm', 'tat-ca-san-pham', 'category', 0, 'mainmenu', 1, 0, '2023-11-15 11:18:15', 1, '0000-00-00 00:00:00', 1, 1),
(30, 'Chính sách mua hàng', 'about/chinh-sach-mua-hang', 'page', 2, 'footermenu', 1, 0, '2023-11-15 11:39:21', 1, '0000-00-00 00:00:00', 1, 1),
(32, 'Danh mục sản phẩm', '/', 'custom', 0, 'mainmenu', 1, 0, '0000-00-00 00:00:00', 1, '0000-00-00 00:00:00', 1, 2),
(33, 'Đồ nữ', 'danh-muc/do-nu', 'category', 0, 'mainmenu', 2, 32, '0000-00-00 00:00:00', 1, '0000-00-00 00:00:00', 1, 1),
(34, 'Đồ nam', 'danh-muc/do-nam', '', 0, 'mainmenu', 2, 32, '0000-00-00 00:00:00', 1, '2024-04-13 20:11:37', 1, 1),
(35, 'Thương hiệu', '/', 'custom', 0, 'mainmenu', 1, 0, '0000-00-00 00:00:00', 1, '2024-04-14 05:18:59', 1, 1),
(36, 'Việt Nam', 'thuong-hieu/viet-nam', 'category', 0, 'mainmenu', 2, 35, '0000-00-00 00:00:00', 1, '0000-00-00 00:00:00', 1, 1),
(37, 'Hàn Quốc', 'thuong-hieu/han-quoc', 'category', 1, 'mainmenu', 2, 35, '0000-00-00 00:00:00', 1, '0000-00-00 00:00:00', 1, 1),
(38, 'Thái Lan', 'thuong-hieu/thai-lan', 'category', 2, 'mainmenu', 2, 35, '0000-00-00 00:00:00', 1, '2024-04-14 05:23:46', 1, 2),
(39, 'Nhật Bản', 'thuong-hieu/nhat-ban', 'category', 4, 'mainmenu', 2, 35, '0000-00-00 00:00:00', 1, '2024-04-14 05:24:42', 1, 2),
(40, 'Quảng Châu', 'thuong-hieu/quang-chau', 'category', 5, 'mainmenu', 2, 35, '0000-00-00 00:00:00', 1, '2024-04-14 05:25:49', 1, 2),
(41, 'Blogs', 'tat-ca-bai-viet', 'custom', 0, 'mainmenu', 1, 0, '2024-03-01 15:13:46', 1, '2024-04-15 15:13:46', 1, 1),
(42, 'Chủ đề', '/', 'custom', 0, 'mainmenu', 1, 0, '2024-03-01 16:00:45', 1, '2024-04-15 16:00:45', 1, 1),
(43, 'Bài viết Sale', 'chu-de/bai-viet-sale', 'category', 1, 'mainmenu', 2, 42, '2024-03-01 16:02:40', 1, '2024-04-15 16:02:40', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_order`
--

CREATE TABLE `db_order` (
  `id` int(10) UNSIGNED NOT NULL COMMENT 'Mã đơn hàng',
  `user_id` int(11) NOT NULL COMMENT 'Mã khách hàng',
  `deliveryaddress` varchar(255) NOT NULL COMMENT 'Địa chỉ người nhận',
  `deliveryname` varchar(100) NOT NULL COMMENT 'Tên người nhận',
  `deliveryphone` varchar(120) NOT NULL COMMENT 'Điện thoại người nhận',
  `deliveryemail` varchar(120) NOT NULL COMMENT 'Email ngươig nhận',
  `note` varchar(1000) NOT NULL COMMENT 'Code đơn hàng',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT 'Ngày tạo',
  `updated_at` timestamp NULL DEFAULT current_timestamp() COMMENT 'Ngày cập nhật',
  `updated_by` tinyint(3) UNSIGNED DEFAULT NULL COMMENT 'Người cập nhật',
  `status` tinyint(3) UNSIGNED NOT NULL COMMENT 'Trạng thái'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `db_order`
--

INSERT INTO `db_order` (`id`, `user_id`, `deliveryaddress`, `deliveryname`, `deliveryphone`, `deliveryemail`, `note`, `created_at`, `updated_at`, `updated_by`, `status`) VALUES
(7, 7, 'Bình Định', 'Nguyễn Tấn Lĩnh', '0343970915', 'linhnguyentan24@gmail.com', 'Khong chu y', '2023-11-15 03:44:16', '2023-11-15 03:44:16', NULL, 1),
(8, 7, 'Bình Định', 'Nguyễn Tấn Lĩnh', '0343970915', 'linhnguyentan24@gmail.com', 'Khong chu y', '2023-11-15 04:10:33', '2023-11-15 04:10:33', NULL, 1),
(9, 7, 'Bình Định', 'Nguyễn Tấn Lĩnh', '0343970915', 'linhnguyentan24@gmail.com', 'Khong chu y', '2023-11-15 06:37:53', '2023-11-15 06:37:53', NULL, 1),
(10, 7, 'Bình Định', 'Nguyễn Tấn Lĩnh', '0343970915', 'linhnguyentan24@gmail.com', 'Khong chu y', '2023-11-15 11:24:34', '2023-11-15 11:24:34', NULL, 1),
(15, 7, 'test lần 3', 'test lần 3', '003', 'mail@gmail.com', 'oki rồi nhỉ', '2024-03-02 07:27:10', '2024-04-16 07:27:10', NULL, 1),
(16, 7, 'binh dinh', 'nguyễn tấn lĩnh', '0123456789', 'linh@gmail.com', '', '2024-03-02 08:55:47', '2024-04-16 08:55:47', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_orderdetail`
--

CREATE TABLE `db_orderdetail` (
  `id` int(10) UNSIGNED NOT NULL COMMENT 'Mã CT Đơn hàng',
  `order_id` int(10) UNSIGNED NOT NULL COMMENT 'Mã đơn hàng',
  `product_id` int(10) UNSIGNED NOT NULL COMMENT 'Mã sản phẩm',
  `price` float(12,2) NOT NULL COMMENT 'Giá sản phẩm',
  `qty` int(10) UNSIGNED NOT NULL COMMENT 'Số lượng',
  `amount` float(12,2) NOT NULL COMMENT 'Thành tiền',
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `db_orderdetail`
--

INSERT INTO `db_orderdetail` (`id`, `order_id`, `product_id`, `price`, `qty`, `amount`, `updated_at`, `created_at`) VALUES
(7, 7, 15, 10000.00, 1, 10000.00, '2023-11-15 04:10:33', '2023-11-15 04:10:33'),
(8, 8, 16, 10000.00, 1, 10000.00, '2023-11-15 06:37:53', '2023-11-15 06:37:53'),
(9, 9, 15, 10000.00, 1, 10000.00, '2023-11-15 11:24:34', '2023-11-15 11:24:34'),
(10, 10, 34, 1500000.00, 1, 1500000.00, '2023-11-15 21:24:45', '2023-11-15 21:24:45'),
(18, 15, 35, 150000.00, 4, 600000.00, '2024-04-16 07:27:10', '2024-03-02 07:27:10'),
(19, 15, 33, 1250000.00, 2, 2500000.00, '2024-04-16 07:27:10', '2024-03-02 07:27:10'),
(20, 16, 35, 150000.00, 2, 300000.00, '2024-04-16 08:55:47', '2024-03-02 08:55:47');

-- --------------------------------------------------------

--
-- Table structure for table `db_post`
--

CREATE TABLE `db_post` (
  `id` int(10) UNSIGNED NOT NULL COMMENT 'Mã bài viết',
  `topic_id` int(10) UNSIGNED DEFAULT NULL COMMENT 'Mã chủ đề',
  `title` varchar(1000) NOT NULL COMMENT 'Tiêu đề bài viết',
  `slug` varchar(1000) NOT NULL COMMENT 'Slug tiêu đề',
  `detail` longtext NOT NULL COMMENT 'Chi tiết bài viết',
  `image` varchar(1000) NOT NULL COMMENT 'Hình ảnh',
  `type` varchar(10) NOT NULL DEFAULT 'page' COMMENT 'Kiểu bài viết',
  `description` varchar(255) NOT NULL COMMENT 'Từ khóa SEO',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT 'Ngày tạo',
  `created_by` tinyint(4) NOT NULL DEFAULT 1 COMMENT 'Người tạo',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT 'Ngày sửa',
  `updated_by` tinyint(4) NOT NULL DEFAULT 1 COMMENT 'Người sửa',
  `status` tinyint(4) NOT NULL DEFAULT 2 COMMENT 'Trạng thái'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `db_post`
--

INSERT INTO `db_post` (`id`, `topic_id`, `title`, `slug`, `detail`, `image`, `type`, `description`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(40, 4, 'Chính Sách bảo hành', 'chinh-sach-bao-hanh', '<h5>Khi mua sắm sản phẩm, bạn sẽ nhận được đặc quyền bảo hành trọn đời miễn phí!</h5>\r\n<h5>Tuy nhiên, trong chính sách này không bao gồm những trường hợp đặc biệt như sau:</h5>\r\n<span><br>- Cửa hàng chỉ bảo hành/sửa chữa đơn giản như cắt gấu, bóp nới sản phẩm. Không nhận sửa chữa các tình tiết phức tạp có thể làm thay đổi thiết kế chuẩn của sản phẩm hoặc các sản phẩm gặp vấn đề như bị phai màu, lỗi hỏng nặng trong quá trình sử dụng do lỗi từ phía cá nhân người dùng.</span><br>\r\n<span>- Đối với sản phẩm đồ da: Chỉ bảo hành dòng sản phẩm da thật, lưu ý thời hạn bảo hành trong vòng 06 tháng kể từ ngày mua trên hóa đơn.</span>\r\n<h5>Mọi thắc mắc liên quan đến chính sách bảo hành trọn đời. Vui lòng liên hệ: 0343970915</h5>', 'chinh-sach-hoan-tien.jpg', 'page', 'Chính Sách Hoàn Tiền', '2023-10-29 20:08:51', 1, '2023-11-15 09:17:02', 7, 1),
(44, 4, 'Chính sách mua hàng', 'chinh-sach-mua-hang', 'Mua sắm tại IVY moda thật dễ dàng. Quý khách chỉ cần làm theo các bước sau:\r\n<br>\r\nBước 1: Chọn dòng sản phẩm (Nam/ Nữ/ Sale) rồi chọn chủng loại sản phẩm (áo sơ mi, áo thun, đầm,..)\r\n<br>\r\nBước 2: Xem sản phẩm quý khách quan tâm rồi nhấp vào ảnh để phóng to và xem mọi chi tiết, kích cỡ hiện có, thành phần, mã tham chiếu và giá.\r\n<br>\r\nBước 3: Chọn mặt hàng và thêm mặt hàng vào giỏ. Sau đó, quý khách có thể chọn tiếp tục mua sắm hoặc xử lý đơn hàng.\r\n<br>\r\nBước 4: Nếu muốn xử lý đơn hàng, quý khách có thể thực hiện bằng cách đăng ký hoặc thanh toán với tư cách khách hàng mới.\r\n<br>\r\nBước 5: Chọn phương thức giao hàng.\r\n<br>\r\nBước 6: Chọn phương thức thanh toán.\r\n<br>\r\nBước 7: Xác nhận đơn hàng: Quý khách sẽ nhận được email xác nhận đơn hàng.\r\n<br>\r\nIVY moda sẽ gửi Thông tin xác nhận đặt hàng thành công qua Tin nhắn vào số điện thoại đặt hàng và Email qua địa chỉ email của quý khách.\r\n', 'huong-dan-mua-hang.jpg', 'page', '', '2023-11-15 05:57:35', 7, '2023-11-15 09:20:08', 7, 1),
(47, 4, 'Chính sách đổi hàng', 'chinh-sach-doi-hang', 'Thời gian đổi trả trong vòng 15 ngày kể từ ngày khách nhận được hàng.<br>\r\n- Hàng đổi phải còn nguyên nhãn mác, mã vạch, chưa qua sử dụng và có hóa đơn mua hàng nguyên vẹn kèm theo (bao gồm cả các sản phẩm chất liệu thun/len/thun len, jeans).\r\n<br>\r\n- Với các trường hợp đổi trả không có hóa đơn, Quý khách vui lòng quay lại showroom đã mua hàng để được hỗ trợ.\r\n<br>\r\n- Đơn hàng chỉ được đổi 01 lần theo đúng quy định.', '', 'page', '', '2023-11-15 09:23:21', 7, '2023-11-15 09:23:21', 1, 1),
(48, 4, 'Chính Sách Hoàn Tiền', 'chinh-sach-hoan-tien', 'Hoàn tiền 80% trong vòng 7 ngày nếu khách hàng không hài lòng\r\n', '', 'page', '', '2023-11-15 09:24:54', 7, '2023-11-15 09:25:22', 7, 1),
(49, 4, 'Giới thiệu', 'gioi-thieu', '\"GIÚP KHÁCH HÀNG TẠO DỰNG PHONG CÁCH BẰNG NHỮNG TUYÊN NGÔN THỜI TRANG\"<br>\r\nXuất phát điểm từ lĩnh vực thời trang công sở năm 2005, và vươn mình mạnh mẽ để đi đầu trong mảng công sở nữ cao cấp tại Việt Nam. Nhưng với ý chí luôn luôn không ngừng vận động để thay đổi, IVY moda nhanh chóng chiếm lấy thị phần thị trường thời trang nội địa và trở thành thương hiệu thời trang xu hướng hàng đầu Việt Nam phục vụ cho phái đẹp. Vào năm 2017. IVY moda khẳng định vị thế bằng việc là một trong những thương hiệu thời trang Việt hiếm hoi đủ tiềm lực tổ chức 2 Fashion Show hàng năm. Dự kiến vào năm 2025, thương hiệu IVY moda sẽ có 130 cửa hàng trên toàn quốc.<br>\r\nIVY moda còn thể hiện tinh thần, phong cách, lý tưởng sống và làm việc qua nhiều sự kiện đồng hành hoặc hợp tác với các nghệ sĩ tên tuổi lớn như: Sơn Tùng MTP, Hoa hậu Tiểu Vy, Rapper Đen Vâu, Ca sỹ Hoàng Thuỳ Linh... Thêm vào đó, năm 2022 còn là bước đột phá trên con đường khẳng định dấu ấn thời trang của IVY moda bằng cách ra mắt một thương hiệu thời trang nam hoàn toàn mới có tên là Metagent.<br>', '', 'page', '', '2023-11-15 09:37:40', 7, '2023-11-15 09:38:24', 7, 1),
(50, 5, 'Vui cùng  20/11', 'vui-cung--2011', 'Chào đoán 1 ngày tuyệt vời cùng với chúng tôi nào? Cùng săn những món quà hấp dẫn để tặng những người bạn yêu thương trong diệp 20/11 này nào', 'vui-cung-20-10.webp', 'post', '', '2023-11-15 10:33:48', 7, '2024-03-06 16:10:37', 1, 1),
(51, 5, 'Từng bừng sinh nhật', 'tung-bung-sinh-nhat', 'Cùng hàng ngàn quà tặng hấp dẫn với TanLinhShop. Cùng chào đón sinh nhật 5 tuổi của TanLinhShop với những deal hấp dẫn. Những món đồ siêu ưu đãi của chúng tôi. Hãy mua sắm nào', 'tung-bung-sinh-nhat.jpg', 'post', '', '2023-11-15 10:35:15', 7, '2024-03-06 16:10:40', 1, 1),
(52, 5, 'Siêu sale tháng 11', 'sieu-sale-thang-11', 'Hàng đồ giảm giá đang chờ đón bạn bất tận trong tháng 11 này trong shop của chúng tôi, hãy nhanh tay thêm những món đồ đẹp vào giỏ hàng ngay đi nào', 'sieu-sale-thang-11.jpg', 'post', '', '2023-11-15 10:36:16', 7, '2024-03-06 16:10:42', 1, 1),
(53, 5, 'Grand open', 'grand-open', 'Bạn còn ngần ngại gì hãy cùng chúng tôi săn sale nào !!! Với những bộ độ siêu đẹp của shop chúng tôi, chắn chắn bạn sẽ hài lòng', 'grand-open.jpg', 'post', '', '2023-11-15 10:37:15', 7, '2024-03-06 16:10:44', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_product`
--

CREATE TABLE `db_product` (
  `id` int(10) UNSIGNED NOT NULL COMMENT 'Mã sản phẩm',
  `category_id` int(10) UNSIGNED NOT NULL COMMENT 'Mã loại sản phẩm',
  `brand_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL COMMENT 'Tên sản phẩm',
  `slug` varchar(1000) NOT NULL COMMENT 'Slug tên sản phẩm',
  `image` varchar(255) NOT NULL COMMENT 'Hình ảnh',
  `detail` mediumtext NOT NULL COMMENT 'Chi tiết',
  `qty` smallint(5) UNSIGNED NOT NULL COMMENT 'Số lượng',
  `price` float(12,2) NOT NULL COMMENT 'Giá',
  `pricesale` float(12,3) NOT NULL COMMENT 'Giá khuyến mãi',
  `description` varchar(255) NOT NULL COMMENT 'Từ khóa SEO',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT 'Ngày tạo',
  `created_by` tinyint(3) UNSIGNED NOT NULL DEFAULT 1 COMMENT 'Người tạo',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT 'Ngày sửa',
  `updated_by` tinyint(3) UNSIGNED NOT NULL DEFAULT 1 COMMENT 'Người sửa',
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2 COMMENT 'Trạng thái'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `db_product`
--

INSERT INTO `db_product` (`id`, `category_id`, `brand_id`, `name`, `slug`, `image`, `detail`, `qty`, `price`, `pricesale`, `description`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(1, 3, 1, 'ÁO LEN NAM - TOTODAY - ÁO LEN SỌC LỚN MÀU', 'ao-len-nam-totoday-ao-len-soc-lon-mau', 'ao-len-nam-totoday-ao-len-soc-lon-mau.jpg', '<p>ÁO LEN NAM - TOTODAY - ÁO LEN SỌC LỚN MÀU</p>\r\n', 3, 378000.00, 378000.000, 'ÁO LEN NAM - TOTODAY - ÁO LEN SỌC LỚN MÀU', '2022-11-22 04:40:37', 1, '2023-11-14 05:47:53', 7, 1),
(2, 3, 2, 'ÁO LEN NAM - TOTODAY - ÁO LEN SỌC PHỐI MÀU', 'ao-len-nam-totoday-ao-len-soc-phoi-mau', 'ao-len-nam-totoday-ao-len-soc-phoi-mau.jpg', '<h1>ÁO LEN NAM - TOTODAY - ÁO LEN SỌC PHỐI MÀU</h1>\r\n', 1, 378000.00, 378000.000, 'ÁO LEN NAM - TOTODAY - ÁO LEN SỌC PHỐI MÀU', '2022-11-22 04:42:49', 1, '2023-11-15 11:23:42', 7, 1),
(3, 3, 2, 'ÁO LEN NAM - TOTODAY - ÁO LEN TRAFFIC', 'ao-len-nam-totoday-ao-len-traffic', 'ao-len-nam-totoday-ao-len-traffic.jpg', '<h1>ÁO LEN NAM - TOTODAY - ÁO LEN TRAFFIC</h1>\r\n', 1, 378000.00, 378000.000, 'ÁO LEN NAM - TOTODAY - ÁO LEN TRAFFIC', '2022-11-22 04:48:35', 1, '2023-11-15 11:23:50', 7, 1),
(4, 3, 1, 'ÁO LEN NAM - TOTODAY - ÁO LEN NHIỀU MÀU', 'ao-len-nam-totoday-ao-len-nhieu-mau', 'ao-len-nam-totoday-ao-len-nhieu-mau.jpg', '<h1>ÁO LEN NAM - TOTODAY - ÁO LEN NHIỀU MÀU</h1>\r\n', 1, 10000.00, 10000.000, 'ÁO LEN NAM - TOTODAY - ÁO LEN NHIỀU MÀU', '2022-11-22 04:49:40', 1, '2023-11-14 05:47:05', 7, 1),
(5, 4, 2, 'ÁO SƠ MI NAM - TOTODAY - THE BASIC', 'ao-so-mi-nam-totoday-the-basic', 'ao-so-mi-nam-totoday-the-basic.jpg', '<h1>ÁO SƠ MI NAM - TOTODAY - THE BASIC</h1>\r\n', 1, 1250000.00, 1250000.000, 'ÁO SƠ MI NAM - TOTODAY - THE BASIC', '2022-11-22 05:11:51', 1, '2023-11-15 11:24:02', 7, 1),
(6, 4, 1, 'ÁO SƠ MI NAM - TOTODAY - COOL SHIRT', 'ao-so-mi-nam-totoday-cool-shirt', 'ao-so-mi-nam-totoday-cool-shirt.jpg', '<h1>ÁO SƠ MI NAM - TOTODAY - THE BASIC</h1>\r\n', 1, 10000.00, 10000.000, 'ÁO SƠ MI NAM - TOTODAY - COOL SHIRT', '2022-11-22 05:11:51', 1, '2023-11-14 05:46:44', 7, 1),
(7, 4, 2, 'ÁO SƠ MI NAM - TOTODAY - SHIRT', 'ao-so-mi-nam-totoday-shirt', 'ao-so-mi-nam-totoday-simple-shirt.jpg', '<h1>ÁO SƠ MI NAM - TOTODAY - SIMPLE SHIRT</h1>\r\n', 1, 1250000.00, 1050000.000, 'ÁO SƠ MI NAM - TOTODAY - SHIRT', '2022-11-22 05:16:17', 1, '2023-11-15 21:26:49', 7, 1),
(8, 4, 1, 'ÁO SƠ MI NAM - TOTODAY - FORMAT', 'ao-so-mi-nam-totoday-format', 'ao-so-mi-nam-totoday-format.jpg', '<h1>ÁO SƠ MI NAM - TOTODAY - FORMAT</h1>\r\n', 1, 1350000.00, 1250000.000, 'ÁO SƠ MI NAM - TOTODAY - FORMAT', '2022-11-22 05:16:51', 1, '2023-11-15 11:22:29', 7, 1),
(9, 5, 1, 'SHORTS JEAN NAM - TOTODAY - 11203', 'shorts-jean-nam-totoday-11203', 'shorts-jean-nam-totoday-11203.jpg', '<h1>SHORTS JEAN NAM - TOTODAY - 11203</h1>\r\n', 1, 1300000.00, 1250000.000, 'SHORTS JEAN NAM - TOTODAY - 11203', '2022-11-22 05:17:53', 1, '2023-11-15 11:22:44', 7, 1),
(10, 5, 1, 'SHORTS JEAN NAM - TOTODAY - 11202', 'shorts-jean-nam-totoday-11202', 'shorts-jean-nam-totoday-11202.jpg', '<h1>SHORTS JEAN NAM - TOTODAY - 11202</h1>\r\n', 1, 10000.00, 10000.000, 'SHORTS JEAN NAM - TOTODAY - 11202', '2022-11-22 05:19:09', 1, '2023-11-14 05:44:34', 7, 1),
(11, 5, 1, 'SHORTS JEAN NAM - TOTODAY - 11201', 'shorts-jean-nam-totoday-11201', 'shorts-jean-nam-totoday-11201.jpg', '<h1>SHORTS JEAN NAM - TOTODAY - 11201</h1>\r\n', 1, 10000.00, 10000.000, 'SHORTS JEAN NAM - TOTODAY - 11201', '2022-11-22 05:19:43', 1, '2023-11-14 05:44:17', 7, 1),
(12, 5, 1, 'SHORTS THUN NAM  -  TOTODAY', 'shorts-thun-nam-totoday', 'shorts-thun-nam-totoday-freedom-totoday.jpg', '<h1>SHORTS THUN NAM - TOTODAY - FREEDOM TOTODAY</h1>\r\n', 1, 10000.00, 10000.000, 'SHORTS THUN NAM - TOTODAY -  TOTODAY', '2022-11-22 05:20:53', 1, '2023-11-15 11:25:22', 7, 1),
(13, 6, 1, 'QUẦN JEAN NAM - SLIMFIT - TOTODAY - 10206', 'quan-jean-nam-slimfit-totoday-10206', 'quan-jean-nam-slimfit-totoday-10206.jpg', '<h1>QUẦN JEAN NAM - SLIMFIT - TOTODAY - 10206</h1>\r\n', 1, 10000.00, 10000.000, 'QUẦN JEAN NAM - SLIMFIT - TOTODAY - 10206', '2022-11-22 05:21:58', 1, '2023-11-14 05:43:34', 7, 1),
(14, 6, 1, 'QUẦN JEAN NAM - SLIMFIT - TOTODAY - 10205', 'quan-jean-nam-slimfit-totoday-10205', 'quan-jean-nam-slimfit-totoday-10205.jpg', '<h1>QUẦN JEAN NAM - SLIMFIT - TOTODAY - 10205</h1>\r\n', 1, 10000.00, 10000.000, 'QUẦN JEAN NAM - SLIMFIT - TOTODAY - 10205', '2022-11-22 05:22:27', 1, '2023-11-14 05:43:13', 7, 1),
(15, 6, 1, 'QUẦN JEAN NAM - SLIMFIT - TOTODAY - 10204', 'quan-jean-nam-slimfit-totoday-10204', 'quan-jean-nam-slimfit-totoday-10204.jpg', '<h1>QUẦN JEAN NAM - SLIMFIT - TOTODAY - 10204</h1>\r\n', 1, 10000.00, 10000.000, 'QUẦN JEAN NAM - SLIMFIT - TOTODAY - 10204', '2022-11-22 05:22:56', 1, '2023-11-14 05:42:39', 7, 1),
(16, 6, 1, 'QUẦN JEAN NAM - SLIMFIT - TOTODAY - 10203', 'quan-jean-nam-slimfit-totoday-10203', 'quan-jean-nam-slimfit-totoday-10203.jpg', '<h1>QUẦN JEAN NAM - SLIMFIT - TOTODAY - 10203</h1>\r\n', 1, 10000.00, 10000.000, 'QUẦN JEAN NAM - SLIMFIT - TOTODAY - 10203', '2022-11-22 05:23:18', 1, '2023-11-14 05:42:07', 7, 1),
(17, 7, 2, 'ÁO THUN W2ATN09203FOSHT', 'ao-thun-w2atn09203fosht', 'ao-thun-w2atn09203fosht.jpg', '<h1>ÁO THUN W2ATN09203FOSHT</h1>\r\n', 1, 1450000.00, 1250000.000, 'ÁO THUN W2ATN09203FOSHT', '2022-11-22 05:24:58', 1, '2023-11-15 11:19:37', 7, 1),
(18, 7, 1, 'ÁO THUN W2ATN09201FOSHT', 'ao-thun-w2atn09201fosht', 'ao-thun-w2atn09201fosht.jpg', '<h1>ÁO THUN W2ATN09201FOSHT</h1>\r\n', 1, 10000.00, 10000.000, 'ÁO THUN W2ATN09201FOSHT', '2022-11-22 05:26:02', 1, '2023-11-14 05:41:33', 7, 1),
(19, 7, 1, 'ÁO THUN W2ATN08213BOSHT', 'ao-thun-w2atn08213bosht', 'ao-thun-w2atn08213bosht.jpg', '<h1>ÁO THUN W2ATN08213BOSHT</h1>\r\n', 1, 10000.00, 10000.000, 'ÁO THUN W2ATN08213BOSHT', '2022-11-22 05:26:25', 1, '2023-11-14 05:41:15', 7, 1),
(20, 7, 1, 'ÁO THUN W2ATN08210BOSBA', 'ao-thun-w2atn08210bosba', 'ao-thun-w2atn08210bosba.jpg', '<h1>ÁO THUN W2ATN08210BOSBA</h1>\r\n', 1, 10000.00, 10000.000, 'ÁO THUN W2ATN08210BOSBA', '2022-11-22 05:26:44', 1, '2023-11-14 05:41:00', 7, 1),
(21, 8, 1, 'ÁO SƠMI W2SMD05204BOSTR', 'ao-somi-w2smd05204bostr', 'ao-somi-w2smd05204bostr.jpg', '<h1>ÁO SƠMI W2SMD05204BOSTR</h1>\r\n', 1, 10000.00, 10000.000, 'ÁO SƠMI W2SMD05204BOSTR', '2022-11-22 05:29:53', 1, '2023-11-14 05:40:41', 7, 1),
(22, 8, 1, 'ÁO SƠMI W2SMN05201BOSTR', 'ao-somi-w2smn05201bostr', 'ao-somi-w2smn05201bostr.jpg', '<h1>ÁO SƠMI W2SMN05201BOSTR</h1>\r\n', 1, 10000.00, 10000.000, 'ÁO SƠMI W2SMN05201BOSTR', '2022-11-22 05:30:23', 1, '2023-11-14 05:40:12', 7, 1),
(23, 8, 2, 'ÁO SƠMI W2SMD05203BOSTR', 'ao-somi-w2smd05203bostr', 'ao-somi-w2smd05203bostr.jpg', '<h1>ÁO SƠMI W2SMD05203BOSTR</h1>\r\n', 1, 1250000.00, 1250000.000, 'ÁO SƠMI W2SMD05203BOSTR', '2022-11-22 05:30:45', 1, '2023-11-15 11:24:18', 7, 1),
(24, 8, 1, 'SET SƠMI W2SET05201FOSCR', 'set-somi-w2set05201foscr', 'set-somi-w2set05201foscr.jpg', '<h1>SET SƠMI W2SET05201FOSCR</h1>\r\n', 1, 10000.00, 10000.000, 'SET SƠMI W2SET05201FOSCR', '2022-11-22 05:31:09', 1, '2023-11-14 05:39:56', 7, 1),
(25, 10, 1, 'SHORTS JEAN NỮ WASH - TOTODAY - 10205', 'shorts-jean-nu-wash-totoday-10205', 'shorts-jean-nu-wash-totoday-10205.jpg', '<h1>SHORTS JEAN NỮ WASH - TOTODAY - 10205</h1>\r\n', 1, 10000.00, 10000.000, 'SHORTS JEAN NỮ WASH - TOTODAY - 10205', '2022-11-22 05:34:00', 1, '2023-11-14 05:39:18', 7, 1),
(26, 10, 1, 'SHORTS JEAN NỮ - TOTODAY - 10205', 'shorts-jean-nu-totoday-10205', 'shorts-jean-nu-totoday-10205.jpg', '<h1>SHORTS JEAN NỮ - TOTODAY - 10205</h1>\r\n', 1, 10000.00, 10000.000, 'SHORTS JEAN NỮ - TOTODAY - 10205', '2022-11-22 05:34:21', 1, '2023-11-14 05:38:51', 7, 1),
(27, 10, 1, 'SHORTS JEAN NỮ - TOTODAY - 10203', 'shorts-jean-nu-totoday-10203', 'shorts-jean-nu-totoday-10203.jpg', '<h1>SHORTS JEAN NỮ - TOTODAY - 10203</h1>\r\n', 1, 1450000.00, 1250000.000, 'SHORTS JEAN NỮ - TOTODAY - 10203', '2022-11-22 05:34:52', 1, '2023-11-15 11:20:39', 7, 1),
(28, 10, 1, 'SHORTS JEAN NỮ RÁCH - TOTODAY - 10202', 'shorts-jean-nu-rach-totoday-10202', 'shorts-jean-nu-rach-totoday-10202.jpg', '<h1>SHORTS JEAN NỮ RÁCH - TOTODAY - 10202</h1>\r\n', 1, 2250000.00, 1250000.000, 'SHORTS JEAN NỮ RÁCH - TOTODAY - 10202', '2022-11-22 05:35:13', 1, '2023-11-15 11:19:50', 7, 1),
(29, 11, 1, 'QUẦN JEAN W2QJN05203FBGTR', 'quan-jean-w2qjn05203fbgtr', 'quan-jean-w2qjn05203fbgtr.jpg', '<h1>QUẦN JEAN W2QJN05203FBGTR</h1>\r\n', 1, 10000.00, 10000.000, 'QUẦN JEAN W2QJN05203FBGTR', '2022-11-22 05:38:14', 1, '2023-11-14 05:37:10', 7, 1),
(30, 11, 1, 'QUẦN JEAN W2QJN05202FBGTR', 'quan-jean-w2qjn05202fbgtr', 'quan-jean-w2qjn05202fbgtr.jpg', '<h1>QUẦN JEAN W2QJN05202FBGTR</h1>\r\n', 1, 1300000.00, 1250000.000, 'QUẦN JEAN W2QJN05202FBGTR', '2022-11-22 05:38:39', 1, '2023-11-15 11:19:11', 7, 1),
(31, 11, 2, 'QUẦN JEAN W2QJN05201FBGTR', 'quan-jean-w2qjn05201fbgtr', 'quan-jean-w2qjn05201fbgtr.jpg', '<h1>QUẦN JEAN W2QJN05201FBGTR</h1>\r\n', 1, 1350000.00, 1250000.000, 'QUẦN JEAN W2QJN05201FBGTR', '2022-11-22 05:38:59', 1, '2023-11-15 11:18:47', 7, 1),
(32, 11, 2, 'QUẦN JEAN W2QJN04208FBGTR', 'quan-jean-w2qjn04208fbgtr', 'quan-jean-w2qjn04208fbgtr.jpg', '<h1>QUẦN JEAN W2QJN04208FBGTR</h1>\r\n', 1, 1250000.00, 1250000.000, 'QUẦN JEAN W2QJN04208FBGTR', '2022-11-22 05:39:47', 1, '2023-11-15 11:18:30', 7, 1),
(33, 12, 1, 'CHÂN VÁY NỮ - TOTODAY - 10201', 'chan-vay-nu-totoday-10201', 'chan-vay-nu-totoday-10201.jpg', '<h1>CHÂN VÁY NỮ - TOTODAY - 10201</h1>\r\n', 1, 1250000.00, 1250000.000, 'CHÂN VÁY NỮ - TOTODAY - 10201', '2022-11-22 05:41:15', 1, '2023-11-15 11:17:53', 7, 1),
(34, 12, 1, 'CHÂN VÁY W2CNV06203FOSXL', 'chan-vay-w2cnv06203fosxl', 'chan-vay-w2cnv06203fosxl.jpg', '<h1>CHÂN VÁY W2CNV06203FOSXL</h1>\r\n', 1, 200000.00, 1500000.000, 'CHÂN VÁY W2CNV06203FOSXL', '2022-11-22 05:41:36', 1, '2023-11-15 11:17:25', 7, 1),
(35, 12, 2, 'CHÂN VÁY W2CNV06202FOSXL', 'chan-vay-w2cnv06202fosxl', 'chan-vay-w2cnv06202fosxl.jpg', '<h1>CHÂN VÁY W2CNV06202FOSXL</h1>\r\n', 1, 250000.00, 150000.000, 'CHÂN VÁY W2CNV06202FOSXL', '2022-11-22 05:41:58', 1, '2023-11-15 11:16:54', 7, 1),
(36, 12, 2, 'CHÂN VÁY W2CNV06201FOSCR', 'chan-vay-w2cnv06201foscr', 'chan-vay-w2cnv06201foscr.jpg', '<h1>CHÂN VÁY W2CNV06201FOSCR</h1>\r\n', 1, 3480000.00, 2290000.000, 'CHÂN VÁY W2CNV06201FOSCR', '2022-11-22 05:42:21', 1, '2023-11-15 11:15:55', 7, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_topic`
--

CREATE TABLE `db_topic` (
  `id` int(10) UNSIGNED NOT NULL COMMENT 'Mã chủ đề',
  `name` varchar(255) NOT NULL COMMENT 'Tên chủ đề',
  `slug` varchar(255) NOT NULL COMMENT 'Slug tên chủ đề',
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Mã cấp cha',
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 1 COMMENT 'Sắp xếp',
  `metakey` varchar(255) NOT NULL COMMENT 'Từ khóa SEO',
  `metadesc` varchar(255) NOT NULL COMMENT 'Mô tả SEO',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT 'Ngày tạo',
  `created_by` tinyint(3) UNSIGNED NOT NULL DEFAULT 1 COMMENT 'Người tạo',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT 'Ngày sửa',
  `updated_by` tinyint(3) UNSIGNED NOT NULL DEFAULT 1 COMMENT 'Người sửa',
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2 COMMENT 'Trạng thái'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `db_topic`
--

INSERT INTO `db_topic` (`id`, `name`, `slug`, `parent_id`, `sort_order`, `metakey`, `metadesc`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(4, 'Các chính sách', 'cac-chinh-sach', 0, 1, '', '', '2023-10-30 10:47:31', 1, '2024-03-01 15:10:50', 1, 1),
(5, 'Bài viết Sale', 'bai-viet-sale', 0, 1, '', '', '2023-11-15 10:17:38', 7, '2024-03-01 15:11:31', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_user`
--

CREATE TABLE `db_user` (
  `id` int(10) UNSIGNED NOT NULL COMMENT 'Mã tài khoản',
  `name` varchar(100) NOT NULL COMMENT 'Họ và tên',
  `username` varchar(100) NOT NULL COMMENT 'Tên đăng nhâp',
  `password` varchar(64) NOT NULL COMMENT 'Mật khẩu',
  `email` varchar(100) NOT NULL COMMENT 'Email',
  `gender` tinyint(3) UNSIGNED NOT NULL COMMENT 'Giới tính',
  `phone` varchar(11) NOT NULL COMMENT 'Điện thoại',
  `image` varchar(100) NOT NULL COMMENT 'Hình',
  `roles` tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Quyền truy cập',
  `address` varchar(255) DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT 'Ngày tạo',
  `created_by` tinyint(3) UNSIGNED NOT NULL DEFAULT 1 COMMENT 'Người tạo',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT 'Ngày sửa',
  `updated_by` tinyint(3) UNSIGNED NOT NULL DEFAULT 1 COMMENT 'Người sửa',
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2 COMMENT 'Trạng thái'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `db_user`
--

INSERT INTO `db_user` (`id`, `name`, `username`, `password`, `email`, `gender`, `phone`, `image`, `roles`, `address`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(1, 'admin', 'admin', '123456', 'linh@gmail.com', 1, '098888', '', 1, 'Bình Dương', '2023-10-13 10:34:44', 1, '2024-03-05 11:00:43', 1, 1),
(7, 'Nguyễn Tấn Lĩnh', 'tanlinh', '123', 'linhnguyentan24@gmail.com', 1, '0343970915', '', 1, 'Bình Định', '2023-10-23 10:44:15', 1, '2024-03-26 05:08:35', 1, 1),
(12, 'admin2', 'admin2', '0987', 'linhnguyentan@gmail.com', 0, '0343970915', '', 0, '', '2024-03-26 05:29:24', 0, '2024-03-26 05:29:24', 0, 1),
(13, 'khachhang', 'khachhang', '56789', 'linhnguyentan@gmail.com', 1, '0343970915', '', 0, '', '2024-03-26 05:29:24', 0, '2024-03-04 10:26:05', 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `db_banner`
--
ALTER TABLE `db_banner`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `db_brand`
--
ALTER TABLE `db_brand`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `db_category`
--
ALTER TABLE `db_category`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `db_contact`
--
ALTER TABLE `db_contact`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `db_menu`
--
ALTER TABLE `db_menu`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `db_order`
--
ALTER TABLE `db_order`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `db_orderdetail`
--
ALTER TABLE `db_orderdetail`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `db_post`
--
ALTER TABLE `db_post`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `db_product`
--
ALTER TABLE `db_product`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `db_topic`
--
ALTER TABLE `db_topic`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `db_user`
--
ALTER TABLE `db_user`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `db_banner`
--
ALTER TABLE `db_banner`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Mã Slider', AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `db_brand`
--
ALTER TABLE `db_brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Mã Loại', AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `db_category`
--
ALTER TABLE `db_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Mã Loại', AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `db_contact`
--
ALTER TABLE `db_contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Mã liên hệ', AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `db_menu`
--
ALTER TABLE `db_menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Mã Menu', AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `db_order`
--
ALTER TABLE `db_order`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Mã đơn hàng', AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `db_orderdetail`
--
ALTER TABLE `db_orderdetail`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Mã CT Đơn hàng', AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `db_post`
--
ALTER TABLE `db_post`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Mã bài viết', AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `db_product`
--
ALTER TABLE `db_product`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Mã sản phẩm', AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `db_topic`
--
ALTER TABLE `db_topic`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Mã chủ đề', AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `db_user`
--
ALTER TABLE `db_user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Mã tài khoản', AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
