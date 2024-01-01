-- -- CREATE DATABASE pilpal_development;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS supplements CASCADE;
DROP TABLE IF EXISTS user_supplements CASCADE;
DROP TABLE IF EXISTS supplement_usage CASCADE;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- CREATE TABLE supplements (
--     id serial PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     description VARCHAR(512) NOT NULL,
--     manufacturer VARCHAR(255) NOT NULL,
--     cost NUMERIC(10, 2),
--     quantity INTEGER,
--     type VARCHAR(255) NOT NULL,
--     images JSONB,
--     dosageType VARCHAR(255),
--     startDate TIMESTAMPTZ,
--     endDate TIMESTAMPTZ,
--     purchasedFrom VARCHAR(255),
--     price NUMERIC(10, 2);
--     created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
--     deleted_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
-- );

CREATE TABLE supplements (
    id serial PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(512) NOT NULL,
    manufacturer VARCHAR(255) NOT NULL,
    images JSONB,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE supplement_lineItem (
    id serial PRIMARY KEY,
    supplementId INT NOT NULL,
    quantity INTEGER,
    type VARCHAR(255) NOT NULL,
    supplementType VARCHAR(255),
    startDate TIMESTAMPTZ,
    endDate TIMESTAMPTZ,
    purchasedFrom VARCHAR(255),
    price NUMERIC(10, 2),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (supplementId) REFERENCES supplements(id)    
);


CREATE TABLE user_supplements (
  id serial PRIMARY KEY,
  userId INT NOT NULL,
  supplementId INT NOT NULL,
  dosage_per_intake INTEGER,
  time_taken TIMESTAMPTZ,
  effectiveness VARCHAR(255),
  additionalNotes TEXT,
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (supplementId) REFERENCES supplements(id)
);

CREATE TABLE supplement_usage (
  id serial PRIMARY KEY,
  userSupplementId INT NOT NULL,
  time_to_be_taken TIMESTAMPTZ,
  stocklevel INTEGER,
  updated_at TIMESTAMPTZ,
  refillLevel INTEGER,
  intakeFrequency VARCHAR(255),
  FOREIGN KEY (userSupplementId) REFERENCES user_supplements(id)
);
