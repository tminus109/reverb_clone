CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email VARCHAR(80) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    type VARCHAR(15) NOT NULL DEFAULT "user",
    status ENUM("pending", "active", "closed") NOT NULL DEFAULT "pending",
    confirmationCode VARCHAR(255),
    PRIMARY KEY (id)
);
