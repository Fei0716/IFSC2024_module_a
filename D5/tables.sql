CREATE TABLE `users`
(
    `id`             int(11) PRIMARY KEY AUTO_INCREMENT,
    `username`       varchar(100) NOT NULL,
    `password`       varchar(255) NOT NULL,
    `login_attempts` INT          NOT NULL,
    `session_token`  varchar(255)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `login_attempts`, `session_token`)
VALUES (1, 'user1', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 0, null);
# VALUES (1, 'jsmith', 'password', 0, null),
#        (2, 'jenniferp', '123456', 0, null),
#        (3, 'davidc', '111111', 0, null);
