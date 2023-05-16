DROP DATABASE IF EXISTS wine_cellar WITH (FORCE);

CREATE DATABASE wine_cellar;

\c wine_cellar;

CREATE TABLE wines (
    id SERIAL PRIMARY KEY,
    wine_name TEXT,
    img VARCHAR,
    region TEXT,
    grape_variety TEXT,
    vintage INTEGER,
    price DECIMAL,
    rating INTEGER
);
