CREATE TABLE IF NOT EXISTS shops (
    userId INT NOT NULL UNIQUE,
    shopName VARCHAR(50) NOT NULL,
    country VARCHAR(3),
    currency VARCHAR(3),
    PRIMARY KEY (userId),
    FOREIGN KEY (userId) REFERENCES users(id)
);
