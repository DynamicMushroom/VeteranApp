-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 09, 2023 at 04:31 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vetdbtestnode`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `post_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `content` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sender_id` int DEFAULT NULL,
  `receiver_id` int DEFAULT NULL,
  `content` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

DROP TABLE IF EXISTS `profiles`;
CREATE TABLE IF NOT EXISTS `profiles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `date_of_birth` date DEFAULT NULL,
  `branch_of_service` varchar(255) DEFAULT NULL,
  `years_of_service` int DEFAULT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  `bio` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(199) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `resources`
--

DROP TABLE IF EXISTS `resources`;
CREATE TABLE IF NOT EXISTS `resources` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `description` text,
  `category` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
CREATE TABLE IF NOT EXISTS `sessions` (
  `sid` varchar(199) NOT NULL,
  `user_id` int NOT NULL,
  `expired` datetime NOT NULL,
  `sess` text NOT NULL,
  PRIMARY KEY (`sid`),
  KEY `sessions_ibfk_1` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`sid`, `user_id`, `expired`, `sess`) VALUES
('1i_EXH7RH98CgY3tyCnC245X6OzyNuwm', 24, '2023-10-26 14:17:23', '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-10-26T14:17:23.430Z\",\"secure\":true,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"None\"},\"passport\":{\"user\":24}}'),
('59AVtUxza3P87E89R0k6LHVMGIz553O0', 28, '2023-10-26 01:34:43', '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-10-26T01:34:43.331Z\",\"secure\":true,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"None\"},\"passport\":{\"user\":28}}'),
('I3sYwsIoC8A2w3az0m8LrWj7wI1gXgk7', 28, '2023-10-26 01:32:33', '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-10-26T01:32:33.739Z\",\"secure\":true,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"None\"},\"passport\":{\"user\":28}}'),
('q1kEYkkVGSHXyoCcDSHzk-z89mOf3OMF', 24, '2023-10-26 01:29:20', '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-10-26T01:29:20.251Z\",\"secure\":true,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"None\"},\"passport\":{\"user\":24}}'),
('rS5sxEFotgZvuBpbercXeQkhZY7n-QfJ', 28, '2023-10-26 01:37:09', '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-10-26T01:37:09.805Z\",\"secure\":true,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"None\"},\"passport\":{\"user\":28}}'),
('srHfmtTUR78BylFNzHVYvoOIgHNuQstu', 24, '2023-10-26 01:38:47', '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-10-26T01:38:47.755Z\",\"secure\":true,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"None\"},\"passport\":{\"user\":24}}'),
('UgkMyplTWQFDKbSc7FjfKlbG12wLjl41', 24, '2023-10-26 14:14:46', '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-10-26T14:14:46.620Z\",\"secure\":true,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"None\"},\"passport\":{\"user\":24}}'),
('VL6HPTFSvxKtnZLEKjJscva5iaM90iW9', 28, '2023-10-26 01:30:47', '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-10-26T01:30:47.054Z\",\"secure\":true,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"None\"},\"passport\":{\"user\":28}}');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(191) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `role` enum('admin','user','moderator') DEFAULT 'user',
  `status` enum('active','inactive','banned') DEFAULT 'active',
  `reset_token` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'NOT NULL',
  `reset_token_expiry` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `created_at`, `updated_at`, `role`, `status`, `reset_token`, `reset_token_expiry`) VALUES
(24, 'wtr1425@students.pensacolastate.edu', '$2b$10$3JhpDQdQL99Cwnp6KdBjlOu04s.gP7hABcC99oQxCpBO1M.m2Ti5m', '2023-10-13 17:28:42', '2023-10-13 17:28:42', 'user', 'active', NULL, NULL),
(25, 'JohnSmith@students.uwf.edu', '$2b$10$v92mn6D7cMU3EQzOldu1QutfldUisJBvjIr9Tkp3SbfSt9vnORrim', '2023-10-13 17:38:02', '2023-10-13 17:38:02', 'user', 'active', NULL, NULL),
(26, 'wtr1025@students.pensacolastate.edu', '$2b$10$CBO/0lDsNd/1Th1M1PmfJ.BicNmlaSw5heqnhL8Q.u4NUadi4J/mK', '2023-10-17 19:53:00', '2023-10-17 19:53:00', 'user', 'active', NULL, NULL),
(27, 'rtr1042@students.pensacolastate.edu', '$2b$10$At/hqf8nCq0odTM5IyYlZOys.FT6.Ykf1goFsJLeTfrkjfbsRZAqW', '2023-10-17 20:58:18', '2023-10-17 20:58:18', 'user', 'active', NULL, NULL),
(28, 'gt4@students.pensacolastate.edu', '$2b$10$.foIG9AcrypJAcOlvNfKdOOjmIOWUIpeNXyp.2ZCGky5jJMQx3w5W', '2023-10-23 17:36:57', '2023-10-23 17:36:57', 'user', 'active', NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
