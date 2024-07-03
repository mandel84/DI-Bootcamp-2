-- SELECT * FROM language;
-- SELECT f.title, f.description, l.name as language_name
-- FROM film f
-- JOIN language l ON f.language_id = l.language_id;
-- SELECT f.title, f.description, l.name as language_name
-- FROM language l
-- LEFT JOIN film f ON l.language_id = f.language_id;
-- CREATE TABLE new_film (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL
-- );

-- INSERT INTO new_film (name) VALUES ('Judgment Day'), ('Breaveheart'), ('Mission Impossible');
-- CREATE TABLE customer_review (
--     review_id SERIAL PRIMARY KEY,
--     film_id INT NOT NULL,
--     language_id INT NOT NULL,
--     title VARCHAR(255) NOT NULL,
--     score INT CHECK (score BETWEEN 1 AND 10),
--     review_text TEXT,
--     last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (film_id) REFERENCES new_film (id) ON DELETE CASCADE,
--     FOREIGN KEY (language_id) REFERENCES language (language_id)
-- )

-- INSERT INTO customer_review (film_id, language_id, title, score, review_text) VALUES
-- (1, 1, 'Great Movie', 8, 'I really enjoyed this movie. It was well done!'),
-- -- (2, 2, 'Not Bad', 6, 'The movie was okay, not bad but not great.')
-- DELETE FROM new_film WHERE id = 1;
-- SELECT * FROM customer_review;





