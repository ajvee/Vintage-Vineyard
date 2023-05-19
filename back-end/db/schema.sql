DROP DATABASE IF EXISTS wine_cellar WITH (FORCE);

CREATE DATABASE wine_cellar;

\c wine_cellar;

CREATE TABLE wines (
    id SERIAL PRIMARY KEY,
    wine_name VARCHAR,
    img VARCHAR,
    region TEXT,
    grape TEXT,
    vintage INTEGER,
    price VARCHAR,
    rating INTEGER,
    notes VARCHAR
);
