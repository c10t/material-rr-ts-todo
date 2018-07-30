GRANT ALL ON *.* TO 'root'@'%' IDENTIFIED BY 'password' WITH GRANT OPTION;

DROP TABLE IF EXISTS `todos`;
CREATE TABLE `todos` (
  `todo_id` int(10) unsigned NOT NULL,
  `username` varchar(40) NOT NULL, 
  `todo` varchar(255) NOT NULL,
  `is_completed` boolean,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`todo_id`, `username`)
)

INSERT INTO `todos` VALUES
(1, 'Ken', 'sleep', '2018-07-31 06:00:00','2018-07-31 06:00:00'),
(2, 'Ken', 'eat breakfast', '2018-07-31 06:00:00','2018-07-31 06:00:00'),
(3, 'Ken', 'awesome game', '2018-07-31 06:00:00','2018-07-31 06:00:00'),
(4, 'Ken', 'boring meeting', '2018-07-31 06:00:00','2018-07-31 06:00:00'),
(1, 'Thompson', 'check tickets', '2018-07-31 06:00:00','2018-07-31 06:00:00');
