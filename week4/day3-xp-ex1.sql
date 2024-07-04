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

-- ex2

-- UPDATE film
-- SET language_id = 2
-- WHERE film_id IN (1, 2, 3);  
-- DROP TABLE IF EXISTS customer_review;
-- SELECT COUNT(*)
-- FROM rental
-- WHERE return_date IS NULL;
-- SELECT f.title, f.rental_rate
-- FROM rental r
-- JOIN inventory i ON r.inventory_id = i.inventory_id
-- JOIN film f ON i.film_id = f.film_id
-- WHERE r.return_date IS NULL
-- ORDER BY f.rental_rate DESC
-- LIMIT 30;

-- SELECT f.title
-- FROM film f
-- JOIN film_actor fa ON f.film_id = fa.film_id
-- JOIN actor a ON fa.actor_id = a.actor_id
-- WHERE f.description LIKE '%sumo wrestler%'
-- AND a.first_name = 'Penelope'
-- AND a.last_name = 'Monroe';
-- SELECT title
-- FROM film
-- WHERE length < 60
-- AND rating = 'R'
-- AND description LIKE '%documentary%';
-- SELECT f.title
-- FROM rental r
-- JOIN payment p ON r.rental_id = p.rental_id
-- JOIN customer c ON r.customer_id = c.customer_id
-- JOIN inventory i ON r.inventory_id = i.inventory_id
-- JOIN film f ON i.film_id = f.film_id
-- WHERE c.first_name = 'Matthew'
-- AND c.last_name = 'Mahan'
-- AND p.amount > 4.00
-- AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';
-- SELECT f.title
-- FROM rental r
-- JOIN inventory i ON r.inventory_id = i.inventory_id
-- JOIN film f ON i.film_id = f.film_id
-- JOIN customer c ON r.customer_id = c.customer_id
-- WHERE c.first_name = 'Matthew'
-- AND c.last_name = 'Mahan'
-- AND (f.title LIKE '%boat%' OR f.description LIKE '%boat%')
-- ORDER BY f.replacement_cost DESC
-- LIMIT 1;





