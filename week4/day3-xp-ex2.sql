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






