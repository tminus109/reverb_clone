CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email VARCHAR(80) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    type VARCHAR(15) NOT NULL DEFAULT "Customer",
    status ENUM("Pending", "Active", "Closed") NOT NULL DEFAULT "Pending",
    confirmationCode VARCHAR(255),
    PRIMARY KEY (id)
);
