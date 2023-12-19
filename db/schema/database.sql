CREATE DATABASE pilpal;

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
    id serial PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ
);

DROP TABLE IF EXISTS supplements CASCADE;
CREATE TABLE supplements (
    id serial PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    manufacturer VARCHAR(255) NOT NULL,
    cost NUMERIC(10, 2),
    quantity INTEGER,
    images JSONB,
    created_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ,
    deleted_at TIMESTAMPTZ
);

DROP TABLE IF EXISTS user_supplements CASCADE;
CREATE TABLE user_supplements (
  id serial PRIMARY KEY,
  userId INT NOT NULL,
  supplementId INT NOT NULL,
  number_of_pills_taken INTEGER,
  time_taken TIMESTAMPTZ,
  effectiveness VARCHAR(255),
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (supplementId) REFERENCES supplements(id)
);

DROP TABLE IF EXISTS supplement_usage CASCADE;
CREATE TABLE supplement_usage (
  id serial PRIMARY KEY,
  userSupplementId INT NOT NULL,
  time_to_be_taken TIMESTAMPTZ,
  stocklevel INTEGER,
  updated_at TIMESTAMPTZ,
  FOREIGN KEY (userSupplementId) REFERENCES user_supplements(id)
);

